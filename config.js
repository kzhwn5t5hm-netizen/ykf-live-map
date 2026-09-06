window.YKF_CONFIG = {
  supabaseUrl: "https://rykkwzcwivsxognrokxd.supabase.co",
  supabaseKey: "sb_publishable_rNgAlTJ97r1bJVNZUXoNDA_kVR6E-Yx"
};

(() => {
  const DEMO_TOTAL = 12000;
  const ICESCO = [
    {code:'AZ',name:'Azerbaijan',lat:40.5,lon:47.5},
    {code:'JO',name:'Jordan',lat:31,lon:36},
    {code:'AF',name:'Afghanistan',lat:33,lon:65},
    {code:'AE',name:'United Arab Emirates',lat:24,lon:54},
    {code:'ID',name:'Indonesia',lat:-5,lon:120},
    {code:'UZ',name:'Uzbekistan',lat:41,lon:64},
    {code:'UG',name:'Uganda',lat:1,lon:32},
    {code:'IR',name:'Iran',lat:32,lon:53},
    {code:'PK',name:'Pakistan',lat:30,lon:70},
    {code:'BH',name:'Bahrain',lat:26,lon:50.55},
    {code:'BN',name:'Brunei',lat:4.5,lon:114.67},
    {code:'BD',name:'Bangladesh',lat:24,lon:90},
    {code:'BJ',name:'Benin',lat:9.5,lon:2.25},
    {code:'BF',name:'Burkina Faso',lat:13,lon:-2},
    {code:'TJ',name:'Tajikistan',lat:39,lon:71},
    {code:'TR',name:'Türkiye',lat:39,lon:35},
    {code:'TD',name:'Chad',lat:15,lon:19},
    {code:'TG',name:'Togo',lat:8,lon:1.17},
    {code:'TN',name:'Tunisia',lat:34,lon:9},
    {code:'DZ',name:'Algeria',lat:28,lon:3},
    {code:'DJ',name:'Djibouti',lat:11.5,lon:43},
    {code:'SA',name:'Saudi Arabia',lat:25,lon:45},
    {code:'SD',name:'Sudan',lat:15,lon:30},
    {code:'SR',name:'Suriname',lat:4,lon:-56},
    {code:'SY',name:'Syria',lat:35,lon:38},
    {code:'SL',name:'Sierra Leone',lat:8.5,lon:-11.5},
    {code:'SN',name:'Senegal',lat:14,lon:-14},
    {code:'SO',name:'Somalia',lat:10,lon:49},
    {code:'IQ',name:'Iraq',lat:33,lon:44},
    {code:'OM',name:'Oman',lat:21,lon:57},
    {code:'GA',name:'Gabon',lat:-1,lon:11.75},
    {code:'GM',name:'Gambia',lat:13.47,lon:-16.57},
    {code:'GY',name:'Guyana',lat:5,lon:-59},
    {code:'GN',name:'Guinea',lat:11,lon:-10},
    {code:'GW',name:'Guinea-Bissau',lat:12,lon:-15},
    {code:'PS',name:'Palestine',lat:31.9,lon:35.1},
    {code:'KZ',name:'Kazakhstan',lat:48,lon:68},
    {code:'QA',name:'Qatar',lat:25.5,lon:51.25},
    {code:'KM',name:'Comoros',lat:-12.17,lon:44.25},
    {code:'KG',name:'Kyrgyzstan',lat:41,lon:75},
    {code:'CM',name:'Cameroon',lat:6,lon:12},
    {code:'CI',name:'Côte d’Ivoire',lat:8,lon:-5},
    {code:'KW',name:'Kuwait',lat:29.5,lon:45.75},
    {code:'LB',name:'Lebanon',lat:33.83,lon:35.83},
    {code:'LY',name:'Libya',lat:25,lon:17},
    {code:'MV',name:'Maldives',lat:3.25,lon:73},
    {code:'ML',name:'Mali',lat:17,lon:-4},
    {code:'MY',name:'Malaysia',lat:2.5,lon:112.5},
    {code:'EG',name:'Egypt',lat:27,lon:30},
    {code:'MA',name:'Morocco',lat:32,lon:-5},
    {code:'MR',name:'Mauritania',lat:20,lon:-12},
    {code:'NE',name:'Niger',lat:16,lon:8},
    {code:'NG',name:'Nigeria',lat:10,lon:8},
    {code:'YE',name:'Yemen',lat:15,lon:48}
  ];

  function buildDemoParticipants(){
    const weights = ICESCO.map((_,i)=>85+((i*47+13)%101));
    const weightTotal = weights.reduce((a,b)=>a+b,0);
    const exact = weights.map(w=>DEMO_TOTAL*w/weightTotal);
    const counts = exact.map(Math.floor);
    let remaining = DEMO_TOTAL-counts.reduce((a,b)=>a+b,0);
    const order = exact.map((v,i)=>({i,f:v-Math.floor(v)})).sort((a,b)=>b.f-a.f);
    for(let i=0;i<remaining;i++) counts[order[i].i]++;

    const people=[];
    let serial=1;
    ICESCO.forEach((c,idx)=>{
      for(let j=0;j<counts[idx];j++,serial++){
        people.push({
          id: serial-DEMO_TOTAL-1,
          name: 'ICESCO Guest '+String(serial).padStart(5,'0'),
          country_code: c.code,
          country_name: c.name,
          flag: '',
          lat: c.lat,
          lon: c.lon,
          created_at: '2026-01-01T00:00:00Z',
          __demo: true
        });
      }
    });
    return people;
  }

  const demoParticipants = buildDemoParticipants();
  const nativeFetch = window.fetch.bind(window);

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
      const combined = demoParticipants.concat(live);
      const h = new Headers(response.headers);
      h.set('content-type','application/json; charset=utf-8');
      return new Response(JSON.stringify(combined), {
        status: response.status,
        statusText: response.statusText,
        headers: h
      });
    }catch(_){
      return response;
    }
  };

  window.addEventListener('DOMContentLoaded',()=>{
    const focus=document.querySelector('.focus');
    if(focus) focus.textContent='ICESCO FOCUS · 54 MEMBER STATES';
    const labels=document.querySelectorAll('.stat span');
    if(labels[1]) labels[1].textContent='ICESCO member states';
    const enforceMemberCount=()=>{
      const el=document.getElementById('countries');
      if(el) el.textContent='54';
    };
    enforceMemberCount();
    setInterval(enforceMemberCount,500);
  });
})();
