//クリックイベント
const btn = document.getElementById('btn');
btn.addEventListener('click',function(){
  var flag = false;

  for(var i = 0; i < document.forms[0].length; i++) {
    if(document.forms[0][i].checked) {
      flag = true;
      // console.log(document.forms[0][i].value);
      var checkRegionId = document.forms[0][i].id;
      var checkRegionName = document.forms[0][i].name;
      var checkReginValue = document.forms[0][i].value;
      async function callApi() {
        const res = await fetch("https://weather.tsukumijima.net/api/forecast" + '/' + checkRegionName + '/' + checkRegionId);
        const weather = await res.json();
        document.getElementById('today').innerHTML = weather.forecasts[0].telop;
        document.getElementById('tiikimei').innerHTML = "の" + checkReginValue; 
      };

      callApi();

      
    }
  }

});

