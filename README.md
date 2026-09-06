# YKF Live Map

YKF 2026 — Where Are You Joining From?

This repository is prepared for free online deployment on Render.

## Deploy on Render

1. Create a **Web Service** from this repository.
2. Render can use the included `render.yaml` configuration.
3. Start command: `python server.py`
4. Choose the **Free** instance type.

Once deployed, open the Render URL on the big screen. The QR code automatically points attendees to the public `/join.html` page.

The participant list is stored in `data/participants.json`; on Render's free ephemeral filesystem it may reset after a restart or redeploy.
