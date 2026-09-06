import json, os, threading, time
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(os.environ.get("PORT", "8765"))
PUBLIC_URL = (os.environ.get("PUBLIC_URL") or os.environ.get("RENDER_EXTERNAL_URL") or "").rstrip("/")
DATA_DIR = os.path.join(ROOT, "data")
DATA_FILE = os.path.join(DATA_DIR, "participants.json")
os.makedirs(DATA_DIR, exist_ok=True)
if not os.path.exists(DATA_FILE):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        f.write("[]")

LOCK = threading.Lock()

def load_people():
    try:
        with open(DATA_FILE, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return []

def save_people(people):
    tmp = DATA_FILE + ".tmp"
    with open(tmp, "w", encoding="utf-8") as f:
        json.dump(people, f, ensure_ascii=False, indent=2)
    os.replace(tmp, DATA_FILE)

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):
        pass

    def no_cache(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")

    def send_json(self, obj, status=200):
        raw = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.no_cache()
        self.end_headers()
        self.wfile.write(raw)

    def base_url(self):
        if PUBLIC_URL:
            return PUBLIC_URL
        proto = self.headers.get("X-Forwarded-Proto", "http")
        host = self.headers.get("Host", f"127.0.0.1:{PORT}")
        return f"{proto}://{host}"

    def do_GET(self):
        path = urlparse(self.path).path
        if path == "/api/ping":
            self.send_json({"ok": True, "time": time.time()})
            return
        if path == "/api/config":
            self.send_json({"joinUrl": self.base_url() + "/join.html"})
            return
        if path == "/api/state":
            with LOCK:
                people = load_people()
            self.send_json({
                "participants": people,
                "count": len(people),
                "countries": len({p.get("countryCode") for p in people if p.get("countryCode")})
            })
            return
        super().do_GET()

    def do_POST(self):
        path = urlparse(self.path).path
        if path != "/api/join":
            self.send_json({"error": "Not found"}, 404)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            data = json.loads(self.rfile.read(length) or b"{}")
        except Exception:
            self.send_json({"error": "Invalid request"}, 400)
            return

        name = " ".join(str(data.get("name", "")).strip().split())[:40]
        code = str(data.get("countryCode", "")).strip().upper()[:2]
        country = " ".join(str(data.get("country", "")).strip().split())[:80]
        flag = str(data.get("flag", "")).strip()[:8]
        try:
            lat = float(data.get("lat"))
            lon = float(data.get("lon"))
        except Exception:
            self.send_json({"error": "Please select a country."}, 400)
            return

        if len(name) < 2:
            self.send_json({"error": "Please enter your name."}, 400)
            return
        if len(code) != 2 or not country or not (-90 <= lat <= 90) or not (-180 <= lon <= 180):
            self.send_json({"error": "Please select a country."}, 400)
            return

        with LOCK:
            people = load_people()
            pid = max([p.get("id", 0) for p in people], default=0) + 1
            person = {
                "id": pid,
                "name": name,
                "countryCode": code,
                "country": country,
                "flag": flag or "🌍",
                "lat": lat,
                "lon": lon,
                "joinedAt": int(time.time() * 1000)
            }
            people.append(person)
            save_people(people)

        self.send_json({"ok": True, "participant": person})

if __name__ == "__main__":
    print(f"YKF live map running on port {PORT}")
    ThreadingHTTPServer(("0.0.0.0", PORT), Handler).serve_forever()
