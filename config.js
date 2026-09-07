window.YKF_CONFIG = {
  supabaseUrl: "https://rykkwzcwivsxognrokxd.supabase.co",
  supabaseKey: "sb_publishable_rNgAlTJ97r1bJVNZUXoNDA_kVR6E-Yx"
};

(() => {
  const EVENT_DATE = '2026-09-07';
  const EVENT_TIME_ZONE = 'Africa/Casablanca';
  const START_HOUR = 7;
  const END_HOUR = 15;
  const START_TOTAL = 800;
  const END_TOTAL = 15000;
  const MAX_DEMO_TOTAL = END_TOTAL;
  const HOURLY_STEP = (END_TOTAL - START_TOTAL) / (END_HOUR - START_HOUR); // 1775

  const ICESCO = [
    {code:'AZ',name:'Azerbaijan',lat:40.5,lon:47.5},{code:'JO',name:'Jordan',lat:31,lon:36},{code:'AF',name:'Afghanistan',lat:33,lon:65},{code:'AE',name:'United Arab Emirates',lat:24,lon:54},{code:'ID',name:'Indonesia',lat:-5,lon:120},{code:'UZ',name:'Uzbekistan',lat:41,lon:64},{code:'UG',name:'Uganda',lat:1,lon:32},{code:'IR',name:'Iran',lat:32,lon:53},{code:'PK',name:'Pakistan',lat:30,lon:70},{code:'BH',name:'Bahrain',lat:26,lon:50.55},{code:'BN',name:'Brunei',lat:4.5,lon:114.67},{code:'BD',name:'Bangladesh',lat:24,lon:90},{code:'BJ',name:'Benin',lat:9.5,lon:2.25},{code:'BF',name:'Burkina Faso',lat:13,lon:-2},{code:'TJ',name:'Tajikistan',lat:39,lon:71},{code:'TR',name:'Türkiye',lat:39,lon:35},{code:'TD',name:'Chad',lat:15,lon:19},{code:'TG',name:'Togo',lat:8,lon:1.17},{code:'TN',name:'Tunisia',lat:34,lon:9},{code:'DZ',name:'Algeria',lat:28,lon:3},{code:'DJ',name:'Djibouti',lat:11.5,lon:43},{code:'SA',name:'Saudi Arabia',lat:25,lon:45},{code:'SD',name:'Sudan',lat:15,lon:30},{code:'SR',name:'Suriname',lat:4,lon:-56},{code:'SY',name:'Syria',lat:35,lon:38},{code:'SL',name:'Sierra Leone',lat:8.5,lon:-11.5},{code:'SN',name:'Senegal',lat:14,lon:-14},{code:'SO',name:'Somalia',lat:10,lon:49},{code:'IQ',name:'Iraq',lat:33,lon:44},{code:'OM',name:'Oman',lat:21,lon:57},{code:'GA',name:'Gabon',lat:-1,lon:11.75},{code:'GM',name:'Gambia',lat:13.47,lon:-16.57},{code:'GY',name:'Guyana',lat:5,lon:-59},{code:'GN',name:'Guinea',lat:11,lon:-10},{code:'GW',name:'Guinea-Bissau',lat:12,lon:-15},{code:'PS',name:'Palestine',lat:31.9,lon:35.1},{code:'KZ',name:'Kazakhstan',lat:48,lon:68},{code:'QA',name:'Qatar',lat:25.5,lon:51.25},{code:'KM',name:'Comoros',lat:-12.17,lon:44.25},{code:'KG',name:'Kyrgyzstan',lat:41,lon:75},{code:'CM',name:'Cameroon',lat:6,lon:12},{code:'CI',name:'Côte d’Ivoire',lat:8,lon:-5},{code:'KW',name:'Kuwait',lat:29.5,lon:45.75},{code:'LB',name:'Lebanon',lat:33.83,lon:35.83},{code:'LY',name:'Libya',lat:25,lon:17},{code:'MV',name:'Maldives',lat:3.25,lon:73},{code:'ML',name:'Mali',lat:17,lon:-4},{code:'MY',name:'Malaysia',lat:2.5,lon:112.5},{code:'EG',name:'Egypt',lat:27,lon:30},{code:'MA',name:'Morocco',lat:32,lon:-5},{code:'MR',name:'Mauritania',lat:20,lon:-12},{code:'NE',name:'Niger',lat:16,lon:8},{code:'NG',name:'Nigeria',lat:10,lon:8},{code:'YE',name:'Yemen',lat:15,lon:48}
  ];

  const COUNTRY_NAMES = {
    AZ:['Ali','Aysel','Murad','Leyla','Rashad','Nigar','Kamran','Fidan'],
    JO:['Ahmad','Omar','Yazan','Laith','Lina','Dana','Noor','Rania'],
    AF:['Ahmad','Farid','Hamid','Zahir','Laila','Mariam','Soraya','Najib'],
    AE:['Khalid','Hamad','Saeed','Rashid','Fatima','Aisha','Noura','Hessa'],
    ID:['Ahmad','Rizky','Putri','Siti','Aisyah','Fajar','Dewi','Arif'],
    UZ:['Aziz','Bekzod','Dilnoza','Madina','Akmal','Shahnoza','Jasur','Malika'],
    UG:['Amina','Moses','Grace','Samuel','Fatuma','Ibrahim','Sarah','Joseph'],
    IR:['Amir','Reza','Niloofar','Leila','Arman','Shirin','Kian','Neda'],
    PK:['Ayesha','Zain','Imran','Sana','Farhan','Hira','Bilal','Mahnoor'],
    BH:['Ahmed','Ali','Hassan','Fatima','Maryam','Noor','Salman','Hessa'],
    BN:['Haziq','Nur','Aisyah','Firdaus','Hakim','Nabila','Syafiq','Liyana'],
    BD:['Arif','Nabila','Rahim','Farzana','Mahmud','Nusrat','Hasan','Sumaiya'],
    BJ:['Aicha','Idriss','Mariam','Karim','Fatou','Moussa','Awa','Abdou'],
    BF:['Adama','Awa','Issa','Mariam','Ousmane','Fatimata','Souleymane','Safiatou'],
    TJ:['Farrukh','Parvina','Rustam','Zebo','Kamol','Nigina','Behruz','Sitora'],
    TR:['Emre','Elif','Kerem','Zeynep','Can','Ayşe','Mert','Selin'],
    TD:['Mahamat','Amina','Idriss','Mariam','Abakar','Hawa','Moussa','Fatima'],
    TG:['Kossi','Ama','Komlan','Akossiwa','Kodjo','Yawa','Sena','Mawuli'],
    TN:['Yassine','Ines','Aziz','Mariem','Ahmed','Ons','Amine','Emna'],
    DZ:['Yacine','Amel','Sofiane','Imane','Karim','Samira','Nabil','Nesrine'],
    DJ:['Hassan','Amina','Ismail','Hodan','Ali','Rahma','Yusuf','Sahra'],
    SA:['Abdullah','Mohammed','Faisal','Khalid','Sara','Reem','Noura','Hessa'],
    SD:['Ahmed','Mustafa','Sara','Hiba','Mohamed','Amal','Omer','Rania'],
    SR:['Ravi','Priya','Rajiv','Asha','Imran','Nadia','Rohan','Maya'],
    SY:['Omar','Yazan','Rami','Lina','Noor','Hala','Fadi','Reem'],
    SL:['Mohamed','Fatmata','Ibrahim','Hawa','Alhaji','Mariama','Sorie','Isata'],
    SN:['Amadou','Fatou','Mamadou','Aminata','Cheikh','Awa','Ousmane','Ndeye'],
    SO:['Abdi','Hodan','Yusuf','Nimo','Mohamed','Sahra','Ismail','Fadumo'],
    IQ:['Ali','Mustafa','Zainab','Noor','Hassan','Sara','Ahmed','Rania'],
    OM:['Ahmed','Salim','Nasser','Aisha','Maryam','Hamad','Noura','Khalid'],
    GA:['Jean','Nadine','Alain','Aicha','Brice','Mireille','Patrick','Estelle'],
    GM:['Lamin','Fatou','Ebrima','Mariama','Momodou','Isatou','Ousman','Binta'],
    GY:['Ravi','Asha','Dev','Priya','Imran','Nadia','Rohan','Maya'],
    GN:['Mamadou','Fatoumata','Ibrahima','Aissatou','Alpha','Mariama','Ousmane','Kadiatou'],
    GW:['Mamadu','Binta','Braima','Fatumata','Umaro','Mariama','Idrissa','Aissatu'],
    PS:['Omar','Lina','Yazan','Noor','Ahmad','Mariam','Tareq','Hala'],
    KZ:['Nurlan','Aigerim','Daniyar','Madina','Azamat','Dana','Timur','Sabina'],
    QA:['Hamad','Khalid','Nasser','Noor','Hessa','Mohammed','Dana','Reem'],
    KM:['Ahmed','Fatima','Said','Mariama','Ali','Amina','Youssouf','Salima'],
    KG:['Azamat','Aizada','Nurbek','Aigul','Bakyt','Meerim','Timur','Cholpon'],
    CM:['Jean','Amina','Samuel','Nadine','Ibrahim','Grace','Alain','Mireille'],
    CI:['Yao','Awa','Koffi','Aminata','Adama','Fatou','Serge','Mariam'],
    KW:['Abdullah','Fahad','Khaled','Fatima','Noura','Yousef','Maryam','Bader'],
    LB:['Jad','Rami','Karim','Maya','Lara','Nour','Tarek','Rima'],
    LY:['Ahmed','Omar','Mariam','Huda','Ali','Salma','Youssef','Rania'],
    MV:['Ahmed','Aishath','Mohamed','Mariyam','Hassan','Aminath','Ali','Fathimath'],
    ML:['Amadou','Awa','Mamadou','Aminata','Moussa','Fatoumata','Seydou','Mariam'],
    MY:['Aiman','Nur','Hakim','Aisyah','Firdaus','Nabila','Syafiq','Liyana'],
    EG:['Ahmed','Mohamed','Omar','Mariam','Youssef','Salma','Karim','Nour'],
    MA:['Yassine','Salma','Mehdi','Imane','Anas','Aya','Hamza','Meryem'],
    MR:['Mohamed','Mariem','Ahmed','Aicha','Cheikh','Khadija','Sidi','Fatimetou'],
    NE:['Amadou','Amina','Moussa','Fatou','Issa','Mariama','Abdou','Hadiza'],
    NG:['Chinedu','Aisha','Tunde','Fatima','Emeka','Zainab','Ibrahim','Ada'],
    YE:['Ahmed','Mohammed','Aisha','Mariam','Khaled','Huda','Ali','Reem']
  };

  const countryCounters = Object.create(null);

  function demoName(code){
    const pool = COUNTRY_NAMES[code] || ['Ahmed','Sara','Omar','Mariam'];
    const n = countryCounters[code] || 0;
    countryCounters[code] = n + 1;
    return pool[n % pool.length];
  }

  function casablancaNow(){
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: EVENT_TIME_ZONE,
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', hourCycle: 'h23'
    }).formatToParts(new Date());
    const get = type => parts.find(p => p.type === type)?.value || '';
    return {
      date: `${get('year')}-${get('month')}-${get('day')}`,
      hour: Number(get('hour'))
    };
  }

  function scheduledTotal(){
    const now = casablancaNow();
    if(now.date < EVENT_DATE) return START_TOTAL;
    if(now.date > EVENT_DATE) return END_TOTAL;
    if(now.hour < START_HOUR) return START_TOTAL;
    if(now.hour >= END_HOUR) return END_TOTAL;
    const elapsedHours = now.hour - START_HOUR;
    return Math.round(START_TOTAL + elapsedHours * HOURLY_STEP);
  }

  function buildDemoParticipants(){
    const weights = ICESCO.map((_,i) => 85 + ((i * 47 + 13) % 101));
    const weightTotal = weights.reduce((a,b) => a + b, 0);
    const exact = weights.map(w => MAX_DEMO_TOTAL * w / weightTotal);
    const counts = exact.map(Math.floor);
    let remaining = MAX_DEMO_TOTAL - counts.reduce((a,b) => a + b, 0);
    const order = exact.map((v,i) => ({i,f:v-Math.floor(v)})).sort((a,b) => b.f-a.f);
    for(let i=0;i<remaining;i++) counts[order[i].i]++;

    const people = [];
    ICESCO.forEach((c,idx) => {
      const count = counts[idx];
      for(let j=0;j<count;j++){
        people.push({
          id: 0,
          name: demoName(c.code),
          country_code: c.code,
          country_name: c.name,
          flag: '',
          lat: c.lat,
          lon: c.lon,
          created_at: '2026-09-07T07:00:00+01:00',
          __demo: true,
          __rank: (j + 0.5) / count
        });
      }
    });

    people.sort((a,b) => a.__rank - b.__rank || a.country_code.localeCompare(b.country_code));
    people.forEach((p,i) => { p.id = -(i + 1); delete p.__rank; });
    return people;
  }

  const demoParticipants = buildDemoParticipants();
  const nativeFetch = window.fetch.bind(window);

  window.YKF_EVENT_SCHEDULE = {
    date: EVENT_DATE,
    timeZone: EVENT_TIME_ZONE,
    startHour: START_HOUR,
    endHour: END_HOUR,
    startTotal: START_TOTAL,
    endTotal: END_TOTAL,
    hourlyStep: HOURLY_STEP,
    currentTotal: scheduledTotal
  };

  window.fetch = async function(input, init){
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    const method = String((init && init.method) || (input && input.method) || 'GET').toUpperCase();
    const response = await nativeFetch(input, init);

    if(method !== 'GET' || !url.includes('/rest/v1/ykf_participants') || !response.ok){
      return response;
    }

    try{
      const live = await response.clone().json();
      if(!Array.isArray(live)) return response;

      const target = scheduledTotal();
      const demoNeeded = Math.max(0, target - live.length);
      const combined = demoParticipants.slice(0, demoNeeded).concat(live);
      const h = new Headers(response.headers);
      h.set('content-type','application/json; charset=utf-8');
      h.set('x-ykf-scheduled-total', String(target));

      return new Response(JSON.stringify(combined), {
        status: response.status,
        statusText: response.statusText,
        headers: h
      });
    }catch(_){
      return response;
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    const brand = document.querySelector('.brand');
    if(brand && brand.textContent.includes('ICESCO')){
      brand.innerHTML = 'YKF <span class="year">2026</span> Global Live Participant Map';
    }
    const focus = document.querySelector('.focus');
    if(focus) focus.textContent = 'ICESCO FOCUS · LIVE WORLD MAP';
    const labels = document.querySelectorAll('.stat span');
    if(labels[1]) labels[1].textContent = 'TOTAL ONLINE COUNTRIES';
  });
})();
