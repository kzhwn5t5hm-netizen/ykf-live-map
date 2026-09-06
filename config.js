window.YKF_CONFIG = {
  supabaseUrl: "https://rykkwzcwivsxognrokxd.supabase.co",
  supabaseKey: "sb_publishable_rNgAlTJ97r1bJVNZUXoNDA_kVR6E-Yx"
};

(() => {
  const DEMO_TOTAL = 12000;
  const ICESCO = [
    {code:'AZ',name:'Azerbaijan',lat:40.5,lon:47.5},{code:'JO',name:'Jordan',lat:31,lon:36},{code:'AF',name:'Afghanistan',lat:33,lon:65},{code:'AE',name:'United Arab Emirates',lat:24,lon:54},{code:'ID',name:'Indonesia',lat:-5,lon:120},{code:'UZ',name:'Uzbekistan',lat:41,lon:64},{code:'UG',name:'Uganda',lat:1,lon:32},{code:'IR',name:'Iran',lat:32,lon:53},{code:'PK',name:'Pakistan',lat:30,lon:70},{code:'BH',name:'Bahrain',lat:26,lon:50.55},{code:'BN',name:'Brunei',lat:4.5,lon:114.67},{code:'BD',name:'Bangladesh',lat:24,lon:90},{code:'BJ',name:'Benin',lat:9.5,lon:2.25},{code:'BF',name:'Burkina Faso',lat:13,lon:-2},{code:'TJ',name:'Tajikistan',lat:39,lon:71},{code:'TR',name:'Türkiye',lat:39,lon:35},{code:'TD',name:'Chad',lat:15,lon:19},{code:'TG',name:'Togo',lat:8,lon:1.17},{code:'TN',name:'Tunisia',lat:34,lon:9},{code:'DZ',name:'Algeria',lat:28,lon:3},{code:'DJ',name:'Djibouti',lat:11.5,lon:43},{code:'SA',name:'Saudi Arabia',lat:25,lon:45},{code:'SD',name:'Sudan',lat:15,lon:30},{code:'SR',name:'Suriname',lat:4,lon:-56},{code:'SY',name:'Syria',lat:35,lon:38},{code:'SL',name:'Sierra Leone',lat:8.5,lon:-11.5},{code:'SN',name:'Senegal',lat:14,lon:-14},{code:'SO',name:'Somalia',lat:10,lon:49},{code:'IQ',name:'Iraq',lat:33,lon:44},{code:'OM',name:'Oman',lat:21,lon:57},{code:'GA',name:'Gabon',lat:-1,lon:11.75},{code:'GM',name:'Gambia',lat:13.47,lon:-16.57},{code:'GY',name:'Guyana',lat:5,lon:-59},{code:'GN',name:'Guinea',lat:11,lon:-10},{code:'GW',name:'Guinea-Bissau',lat:12,lon:-15},{code:'PS',name:'Palestine',lat:31.9,lon:35.1},{code:'KZ',name:'Kazakhstan',lat:48,lon:68},{code:'QA',name:'Qatar',lat:25.5,lon:51.25},{code:'KM',name:'Comoros',lat:-12.17,lon:44.25},{code:'KG',name:'Kyrgyzstan',lat:41,lon:75},{code:'CM',name:'Cameroon',lat:6,lon:12},{code:'CI',name:'Côte d’Ivoire',lat:8,lon:-5},{code:'KW',name:'Kuwait',lat:29.5,lon:45.75},{code:'LB',name:'Lebanon',lat:33.83,lon:35.83},{code:'LY',name:'Libya',lat:25,lon:17},{code:'MV',name:'Maldives',lat:3.25,lon:73},{code:'ML',name:'Mali',lat:17,lon:-4},{code:'MY',name:'Malaysia',lat:2.5,lon:112.5},{code:'EG',name:'Egypt',lat:27,lon:30},{code:'MA',name:'Morocco',lat:32,lon:-5},{code:'MR',name:'Mauritania',lat:20,lon:-12},{code:'NE',name:'Niger',lat:16,lon:8},{code:'NG',name:'Nigeria',lat:10,lon:8},{code:'YE',name:'Yemen',lat:15,lon:48}
  ];

  const NAME_POOLS = {
    arabic:{
      first:['Ahmed','Omar','Youssef','Sara','Mariam','Lina','Hassan','Nour','Khalid','Aya','Rania','Samir','Amal','Karim','Huda','Tariq','Farah','Rami'],
      last:['Mansour','Khalil','Saleh','Nasser','Hamdan','Farouk','Jaber','Mahmoud','Khatib','Darwish','Sabbagh','Najjar','Hakim','Qasim','Hariri','Masri','Habib','Rashid']
    },
    maghreb:{
      first:['Yassine','Imane','Mehdi','Salma','Anas','Sara','Othmane','Aya','Hamza','Nadia','Amine','Lina','Ayoub','Meryem','Zakaria','Hajar','Reda','Ghita'],
      last:['El Amrani','Alaoui','Bensaid','Benali','Idrissi','Mansouri','Fassi','Bennani','Chafai','Belkadi','Berrada','Ouazzani','Cherkaoui','Benjelloun','Tazi','Bouzid','Jaziri','Trabelsi']
    },
    westafrica:{
      first:['Amadou','Fatou','Amina','Moussa','Mariama','Mamadou','Ibrahima','Khadija','Ousmane','Aminata','Cheikh','Binta','Idrissa','Adama','Coumba','Seydou','Fanta','Souleymane'],
      last:['Diallo','Traore','Ba','Ndiaye','Cisse','Keita','Sow','Camara','Toure','Sy','Diop','Barry','Konate','Sarr','Kane','Coulibaly','Fofana','Gueye']
    },
    eastafrica:{
      first:['Abdi','Amina','Hassan','Hodan','Yusuf','Nimo','Mohamed','Sahra','Ali','Fadumo','Ismail','Maryan','Omar','Hawa','Bashir','Rahma','Jama','Ayan'],
      last:['Nur','Warsame','Osman','Aden','Farah','Ahmed','Ali','Hassan','Abdi','Mohamed','Noor','Ismail','Yusuf','Ibrahim','Jama','Hussein','Dahir','Awale']
    },
    centralasia:{
      first:['Amina','Timur','Aziz','Dilnoza','Bekzod','Madina','Rustam','Sabina','Akmal','Zarina','Kamol','Nigina','Farid','Lola','Eldar','Leyla','Nurlan','Aigerim'],
      last:['Karimov','Rahmonov','Ismailov','Yusupov','Nazarov','Kadyrov','Tursunov','Saidov','Mamatov','Rakhimov','Akhmedov','Sultanov','Rasulov','Kasimov','Mirzaev','Sadykov','Askarov','Davlatov']
    },
    southasia:{
      first:['Ayesha','Zain','Imran','Sana','Farhan','Nadia','Rafi','Samira','Kamal','Arif','Nabila','Rahim','Farzana','Tariq','Mahmud','Saira','Hira','Anika'],
      last:['Khan','Rahman','Ahmed','Hussain','Karim','Ali','Siddiqui','Iqbal','Chowdhury','Hasan','Malik','Qureshi','Mirza','Mahmood','Rashid','Akhtar','Haque','Kabir']
    },
    southeastasia:{
      first:['Ahmad','Siti','Nur','Rizky','Putri','Faisal','Aisyah','Farhan','Hana','Iqbal','Dewi','Reza','Amir','Nadia','Firdaus','Liyana','Alya','Rafiq'],
      last:['Hidayat','Putra','Pratama','Rahman','Ismail','Abdullah','Hamzah','Yusuf','Noor','Hassan','Ibrahim','Karim','Latif','Basri','Fauzi','Nasir','Ridwan','Sulaiman']
    },
    persian:{
      first:['Amir','Sara','Reza','Niloofar','Arman','Leila','Mehdi','Shirin','Kian','Neda','Farid','Yasmin','Ali','Parisa','Navid','Maryam','Sina','Nazanin'],
      last:['Ahmadi','Karimi','Hosseini','Rahimi','Moradi','Jafari','Ebrahimi','Mohammadi','Rezaei','Kazemi','Abbasi','Sadeghi','Ghasemi','Najafi','Nouri','Rostami','Mirzaei','Yazdani']
    },
    turkish:{
      first:['Emre','Elif','Kerem','Zeynep','Can','Ayşe','Mert','Selin','Burak','Ece','Deniz','Hakan','Melis','Onur','Derya','Cem','İrem','Arda'],
      last:['Yılmaz','Kaya','Demir','Şahin','Çelik','Aydın','Arslan','Koç','Kurt','Özdemir','Aksoy','Güneş','Polat','Doğan','Kılıç','Yıldız','Öztürk','Karaca']
    },
    caucasus:{
      first:['Ali','Aysel','Murad','Leyla','Rashad','Nigar','Kamran','Gunel','Orkhan','Sabina','Farid','Narmin','Tural','Lala','Emin','Aynur','Elvin','Fidan'],
      last:['Mammadov','Aliyev','Hasanov','Huseynov','Karimov','Ismayilov','Quliyev','Abbasov','Rzayev','Jafarov','Suleymanov','Aslanov','Rahimov','Safarov','Mustafayev','Agayev','Hajiyev','Nasibov']
    },
    centralafrica:{
      first:['Jean','Amina','Moussa','Fatima','Idriss','Grace','Samuel','Nadine','Ibrahim','Mariam','Patrice','Awa','Karim','Esther','Mahamat','Clarisse','Oumar','Sandrine'],
      last:['Mba','Ondo','Essono','Ngoma','Diallo','Abakar','Mahamat','Adam','Njoya','Mbida','Etame','Biya','Manga','Owona','Nguema','Obiang','Ndong','Koumba']
    },
    caribbean:{
      first:['Aaliyah','Jamal','Priya','Imran','Nadia','Ravi','Farah','Kareem','Maya','Daniel','Aisha','Samuel','Rohan','Leila','Zain','Anisa','Shanice','Adrian'],
      last:['Khan','Singh','Persaud','Ali','Mohamed','Ramdin','Williams','Rahman','Hussain','Jones','Boodram','Samaroo','Joseph','Baksh','Thomas','Lewis','Charles','Mendes']
    }
  };

  const POOL_BY_CODE = {
    MA:'maghreb',DZ:'maghreb',TN:'maghreb',MR:'maghreb',
    BJ:'westafrica',BF:'westafrica',TG:'westafrica',SL:'westafrica',SN:'westafrica',GM:'westafrica',GN:'westafrica',GW:'westafrica',CI:'westafrica',ML:'westafrica',NE:'westafrica',NG:'westafrica',
    UG:'eastafrica',DJ:'eastafrica',SO:'eastafrica',KM:'eastafrica',
    TD:'centralafrica',GA:'centralafrica',CM:'centralafrica',
    UZ:'centralasia',TJ:'centralasia',KZ:'centralasia',KG:'centralasia',
    AF:'southasia',PK:'southasia',BD:'southasia',MV:'southasia',
    ID:'southeastasia',BN:'southeastasia',MY:'southeastasia',
    IR:'persian',TR:'turkish',AZ:'caucasus',SR:'caribbean',GY:'caribbean'
  };

  const usedNames = new Set();
  const poolCounters = Object.create(null);

  function demoName(code){
    const key=POOL_BY_CODE[code]||'arabic';
    const pool=NAME_POOLS[key];
    const F=pool.first.length,L=pool.last.length;
    let n=poolCounters[key]||0;
    const capacity=F*F*L;
    while(n<capacity){
      const a=n%F;
      let b=Math.floor(n/F)%F;
      const c=Math.floor(n/(F*F))%L;
      n++;
      if(b===a) b=(b+1)%F;
      const name=pool.first[a]+' '+pool.first[b]+' '+pool.last[c];
      if(!usedNames.has(name)){
        usedNames.add(name);
        poolCounters[key]=n;
        return name;
      }
    }
    const fallback=pool.first[n%F]+' '+pool.last[n%L]+' '+String(n+1);
    poolCounters[key]=n+1;
    usedNames.add(fallback);
    return fallback;
  }

  function buildDemoParticipants(){
    const weights=ICESCO.map((_,i)=>85+((i*47+13)%101));
    const weightTotal=weights.reduce((a,b)=>a+b,0);
    const exact=weights.map(w=>DEMO_TOTAL*w/weightTotal);
    const counts=exact.map(Math.floor);
    let remaining=DEMO_TOTAL-counts.reduce((a,b)=>a+b,0);
    const order=exact.map((v,i)=>({i,f:v-Math.floor(v)})).sort((a,b)=>b.f-a.f);
    for(let i=0;i<remaining;i++) counts[order[i].i]++;
    const people=[];
    let serial=1;
    ICESCO.forEach((c,idx)=>{
      for(let j=0;j<counts[idx];j++,serial++){
        people.push({
          id:serial-DEMO_TOTAL-1,
          name:demoName(c.code),
          country_code:c.code,
          country_name:c.name,
          flag:'',
          lat:c.lat,
          lon:c.lon,
          created_at:'2026-01-01T00:00:00Z',
          __demo:true
        });
      }
    });
    return people;
  }

  const demoParticipants=buildDemoParticipants();
  const nativeFetch=window.fetch.bind(window);

  window.fetch=async function(input,init){
    const url=typeof input==='string'?input:(input&&input.url)||'';
    const method=String((init&&init.method)||(input&&input.method)||'GET').toUpperCase();
    const response=await nativeFetch(input,init);
    if(method!=='GET'||!url.includes('/rest/v1/ykf_participants')||!response.ok) return response;
    try{
      const live=await response.clone().json();
      if(!Array.isArray(live)) return response;
      const combined=demoParticipants.concat(live);
      const h=new Headers(response.headers);
      h.set('content-type','application/json; charset=utf-8');
      return new Response(JSON.stringify(combined),{status:response.status,statusText:response.statusText,headers:h});
    }catch(_){
      return response;
    }
  };

  window.addEventListener('DOMContentLoaded',()=>{
    const brand=document.querySelector('.brand');
    if(brand&&brand.textContent.includes('ICESCO')) brand.innerHTML='YKF <span class="year">2026</span> Global Live Participant Map';
    const focus=document.querySelector('.focus');
    if(focus) focus.textContent='ICESCO FOCUS · LIVE WORLD MAP';
    const labels=document.querySelectorAll('.stat span');
    if(labels[1]) labels[1].textContent='TOTAL ONLINE COUNTRIES';
  });
})();