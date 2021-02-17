  new ClipboardJS('.copymim');
// hideout code{{{
function hideToggle() {
  let at =  document.getElementById('advanceOptions');
  let abtn = document.getElementById('atbtn');
  let aibtn = document.getElementById('atbtnicon');
  if (at.style.display === "none") {
    at.style.display = "block";
    abtn.classList.remove('btn-primary');
    aibtn.classList.remove('icon-arrow-left');
    aibtn.classList.add('icon-arrow-down')
  } else {
    at.style.display = "none";
    abtn.classList.add('btn-primary');
    aibtn.classList.remove('icon-arrow-down');
    aibtn.classList.add('icon-arrow-left');
  }
}
//}}}
// Main logic {{{

  // Generator function {{{
  function schGenerator() {

    // Take all elements {{{
   let mimShanbe = document.getElementById('schGenShan').value;
   let mim1shanbe = document.getElementById('schGenYekShan').value;
   let mim2shanbe = document.getElementById('schGenDoShan').value;
   let mim3shanbe = document.getElementById('schGenSeShan').value;
   let mim4shanbe = document.getElementById('schGenChaharShan').value;
   let mim5shanbe = document.getElementById('schGenPanjShan').value;
   let mimjome = document.getElementById('schGenJome').value;

   let ismimSidebar = document.getElementsByName('schAdType')[0].checked;
   let ismimPost = document.getElementsByName('schAdType')[1].checked;
   let ismimjs = document.getElementsByName('schAdjs')[0].checked;

   let mimTitleText = document.getElementById('schAdTitle').value;
   let mimWrapBg = document.getElementById('schAdWrap').value;

   let mimTitleBgColor = document.getElementById('schAdTitleBgColor').value;
   let mimTitleTextColor = document.getElementById('schAdTitleTextColor').value;
   let mimTitleTexture = document.getElementById('schAdTitleTexture').value;

   let mimDaysBgColor = document.getElementById('schAdDaysBgColor').value;
   let mimDaysTextColor = document.getElementById('schAdDaysTextColor').value;
   let mimDaysTexture = document.getElementById('schAdDaysTexture').value;

   let mimTodayBgColor = document.getElementById('schAdTodayBgColor').value;
   let mimTodayTextColor = document.getElementById('schAdTodayTextColor').value;
   let mimTodayTexture = document.getElementById('schAdTodayTexture').value;

   let mimDateBgColor = document.getElementById('schAdDateBgColor').value;
   let mimDateTextColor = document.getElementById('schAdDateTextColor').value;
   let mimDateTexture = document.getElementById('schAdDateTexture').value;

   var patterMain = "";
    // }}}

    if(ismimSidebar) {
      if(ismimjs) {
        // code pattern {{{
patterMain = `<!--{{{ styles--><style> 
  /*styles specific and independent here*/
/*{{{ Fonts*/
@font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }
    /*}}}*/
.scheduler-wrap {
  width: 100%;
  border-radius: 5px;
  background-image: url("${mimWrapBg}");
  padding: 1em;
  font-family: schFont, sans-serif;
  box-sizing: border-box;
}
.schTitle {
  width: 100%;
  background-color: ${mimTitleBgColor};
  color: ${mimTitleTextColor};
  border-radius: .5em;
  border-top-right-radius: 1em;
  border-top-left-radius: 1em;
  background-image: url("${mimTitleTexture}");
}

.schTitle h2{
  text-align: center;
  font-family: schFont, sans-serif !important;
  font-weight: bold;
  padding: .5em;
  font-size: 1.3em;
}

.schDays {
  width: 100%;
  border: 2px solid #a5b1c2;
  border-radius: 2em;
  overflow: hidden;
  margin-bottom: .5em;
  display: table;
  background-color: white;
}

.schDayName {
  padding: .7em;
  font-weight: bolder;
  padding-right: 1em;
  background-color: ${mimDaysBgColor};
  width: 30%;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  color: ${mimDaysTextColor};
  background-image: url('${mimDaysTexture}');
}

.schDayPlan {
  width: 80%;
  padding: .5em;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding-left: 1.7em;
  padding-bottom: .7em;
}

.schToday {
    width: 50%;
    display: table;
    background-color: ${mimTodayBgColor};
    color: ${mimTodayTextColor};
    border-radius: 2em;
    margin: .5em auto;
    margin-top: 1.5em;
    border-top-right-radius: .5em;
    border-top-left-radius: .5em;
    background-image: url("${mimTodayTexture}");
}

#schTodayStart {
    display: table-cell;
    padding: .5em;
    vertical-align: middle;
    width: 50%;
    text-align: center;
}

#schTodayDay {
    display: table-cell;
    vertical-align: middle;
    font-weight: bold;
}

.schDate {
    width: 50%;
    display: table;
    background-color: ${mimDateBgColor};
    border-radius: 2em;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    margin-top: 1.5em;
    margin: 0 auto;
    border-bottom-right-radius: .5em;
    border-bottom-left-radius: .5em;
    padding: .5em;
    vertical-align: middle;
    text-align: center;
    margin-top: 0;
    background-image: url("${mimDateTexture}");
    color: ${mimDateTextColor};
}

@keyframes opacity {
  20% {
    opacity: 0.3; }
  50% {
    opacity: 0.6; }
  80% {
    opacity: 0.94; }
  }

.selected {
  text-decoration: none !important;
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12) !important;  
  animation-name: opacity;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

</style> <!--}}}-->

<div class="scheduler-wrap">
  <div class="schTitle">
    <h2>
      ${mimTitleText}
    </h2>
  </div>
  <div name="shan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      شنبه
    </div>
    <div class="schDayPlan">
      ${mimShanbe}
    </div>
  </div> <!--}}}-->
  <div name="yekshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      یک شنبه
    </div>
    <div class="schDayPlan">
      ${mim1shanbe}
    </div>
  </div> <!--}}}-->
  <div name="doshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      دو شنبه
    </div>
    <div class="schDayPlan">
      ${mim2shanbe}
    </div>
  </div> <!--}}}-->
  <div name="seshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      سه شنبه
    </div>
    <div class="schDayPlan">
      ${mim3shanbe}
    </div>
  </div> <!--}}}-->
  <div name="chaharshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      چهار شنبه
    </div>
    <div class="schDayPlan">
      ${mim4shanbe}
    </div>
  </div> <!--}}}-->
  <div name="panjshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      پنج شنبه
    </div>
    <div class="schDayPlan">
      ${mim5shanbe}
    </div>
  </div> <!--}}}-->
  <div name="jome" class="schDays"> <!--{{{-->
    <div class="schDayName">
      جمعه
    </div>
    <div class="schDayPlan">
      ${mimjome}
    </div>
  </div> <!--}}}-->
  <div class="schToday">
    <div id="schTodayStart">
      امروز:
    </div>
    <div id="schTodayDay">
      (*now format="%A"*)
    </div>
  </div>
  <div class="schDate">
      (*now format="%e %B %Y"*)
  </div>
  <div id="mimrHidden" style="display: none;">(*now format="%w"*)</div>
</div>
\<script\>
  let mimrToday = document.getElementById('mimrHidden').textContent;
  switch (mimrToday) {
    case "۰":
      document.getElementsByName('shan')[0].getElementsByClassName('schDayName')[0].classList.add('selected');
      document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByName('shan')[1].getElementsByClassName('schDayName')[0].classList.add('selected');
      });
      break;
    case "۱":
      document.getElementsByName('yekshan')[0].getElementsByClassName('schDayName')[0].classList.add('selected');
      document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByName('yekshan')[1].getElementsByClassName('schDayName')[0].classList.add('selected');
      });
      break;
    case "۲":
      document.getElementsByName('doshan')[0].getElementsByClassName('schDayName')[0].classList.add('selected');
      document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByName('doshan')[1].getElementsByClassName('schDayName')[0].classList.add('selected');
      });
      break;
    case "۳":
      document.getElementsByName('seshan')[0].getElementsByClassName('schDayName')[0].classList.add('selected');
      document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByName('seshan')[1].getElementsByClassName('schDayName')[0].classList.add('selected');
      });
      break;
    case "۴":
      document.getElementsByName('chaharshan')[0].getElementsByClassName('schDayName')[0].classList.add('selected');
      document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByName('chaharshan')[1].getElementsByClassName('schDayName')[0].classList.add('selected');
      });
      break;
    case "۵":
      document.getElementsByName('panjshan')[0].getElementsByClassName('schDayName')[0].classList.add('selected');
      document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByName('panjshan')[1].getElementsByClassName('schDayName')[0].classList.add('selected');
      });
      break;
    case "۶":
      document.getElementsByName('jome')[0].getElementsByClassName('schDayName')[0].classList.add('selected');
      document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByName('jome')[1].getElementsByClassName('schDayName')[0].classList.add('selected');
      });
  }
\<\/script\> `;

        // }}}
      } else {
        // code pattern {{{
patterMain = `<!--{{{ styles--><style> 
  /*styles specific and independent here*/
/*{{{ Fonts*/
@font-face {
      font-family: 'schFont';
      src: url('https://bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('https://bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('https://bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('https://bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'schFont';
      src: url('https://bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('https://bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('https://bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('https://bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'schFont';
      src: url('https://bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('https://bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('https://bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('https://bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'schFont';
      src: url('https://bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('https://bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('https://bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('https://bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'schFont';
      src: url('https://bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('https://bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('https://bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('https://bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }
    /*}}}*/
.scheduler-wrap {
  width: 100%;
  border-radius: 5px;
  background-image: url("${mimWrapBg}");
  padding: 1em;
  font-family: schFont, sans-serif;
  box-sizing: border-box;
}
.schTitle {
  width: 100%;
  background-color: ${mimTitleBgColor};
  color: ${mimTitleTextColor};
  border-radius: .5em;
  border-top-right-radius: 1em;
  border-top-left-radius: 1em;
  background-image: url("${mimTitleTexture}");
}

.schTitle h2{
  text-align: center;
  font-family: schFont, sans-serif !important;
  font-weight: bold;
  padding: .5em;
  font-size: 1.3em;
}

.schDays {
  width: 100%;
  border: 2px solid #a5b1c2;
  border-radius: 2em;
  overflow: hidden;
  margin-bottom: .5em;
  display: table;
  background-color: white;
}

.schDayName {
  padding: .7em;
  font-weight: bolder;
  padding-right: 1em;
  background-color: ${mimDaysBgColor};
  width: 30%;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  color: ${mimDaysTextColor};
  background-image: url('${mimDaysTexture}');
}

.schDayPlan {
  width: 80%;
  padding: .5em;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding-left: 1.7em;
  padding-bottom: .7em;
}

.schToday {
    width: 50%;
    display: table;
    background-color: ${mimTodayBgColor};
    color: ${mimTodayTextColor};
    border-radius: 2em;
    margin: .5em auto;
    margin-top: 1.5em;
    border-top-right-radius: .5em;
    border-top-left-radius: .5em;
    background-image: url("${mimTodayTexture}");
}

#schTodayStart {
    display: table-cell;
    padding: .5em;
    vertical-align: middle;
    width: 50%;
    text-align: center;
}

#schTodayDay {
    display: table-cell;
    vertical-align: middle;
    font-weight: bold;
}

.schDate {
    width: 50%;
    display: table;
    background-color: ${mimDateBgColor};
    border-radius: 2em;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    margin-top: 1.5em;
    margin: 0 auto;
    border-bottom-right-radius: .5em;
    border-bottom-left-radius: .5em;
    padding: .5em;
    vertical-align: middle;
    text-align: center;
    margin-top: 0;
    background-image: url("${mimDateTexture}");
    color: ${mimDateTextColor};
}

</style> <!--}}}-->

<div class="scheduler-wrap">
  <div class="schTitle">
    <h2>
      ${mimTitleText}
    </h2>
  </div>
  <div name="shan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      شنبه
    </div>
    <div class="schDayPlan">
      ${mimShanbe}
    </div>
  </div> <!--}}}-->
  <div name="yekshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      یک شنبه
    </div>
    <div class="schDayPlan">
      ${mim1shanbe}
    </div>
  </div> <!--}}}-->
  <div name="doshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      دو شنبه
    </div>
    <div class="schDayPlan">
      ${mim2shanbe}
    </div>
  </div> <!--}}}-->
  <div name="seshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      سه شنبه
    </div>
    <div class="schDayPlan">
      ${mim3shanbe}
    </div>
  </div> <!--}}}-->
  <div name="chaharshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      چهار شنبه
    </div>
    <div class="schDayPlan">
      ${mim4shanbe}
    </div>
  </div> <!--}}}-->
  <div name="panjshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      پنج شنبه
    </div>
    <div class="schDayPlan">
      ${mim5shanbe}
    </div>
  </div> <!--}}}-->
  <div name="jome" class="schDays"> <!--{{{-->
    <div class="schDayName">
      جمعه
    </div>
    <div class="schDayPlan">
      ${mimjome}
    </div>
  </div> <!--}}}-->
  <div class="schToday">
    <div id="schTodayStart">
      امروز:
    </div>
    <div id="schTodayDay">
      (*now format="%A"*)
    </div>
  </div>
  <div class="schDate">
      (*now format="%e %B %Y"*)
  </div>
</div>`;

        // }}}
      }
    document.getElementById('generatedCode').textContent = patterMain.trim();
    document.getElementById('vtPreview').innerHTML = patterMain;
    } else {
        // code pattern {{{
patterMain = `<!--{{{ styles--><style> 
  /*styles specific and independent here*/
/*{{{ Fonts*/
@font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'schFont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }
    /*}}}*/
.scheduler-wrap {
  width: 100%;
  border-radius: 5px;
  background-image: url("${mimWrapBg}");
  font-family: schFont, sans-serif;
  box-sizing: border-box;
}
.schTitle {
  width: 100%;
  background-color: ${mimTitleBgColor};
  color: ${mimTitleTextColor};
  border-radius: .5em;
  border-top-right-radius: 1em;
  border-top-left-radius: 1em;
  background-image: url("${mimTitleTexture}");
}

.schTitle h2{
  text-align: center;
  font-family: schFont, sans-serif !important;
  font-weight: bold;
  padding: .5em;
  font-size: 1.3em;
}

.schDays {
  width: 100%;
  border: 2px solid #a5b1c2;
  border-radius: 2em;
  overflow: hidden;
  margin-bottom: .5em;
  display: table;
  background-color: white;
}

.schDayName {
  padding: .7em;
  font-weight: bolder;
  padding-right: 1em;
  background-color: ${mimDaysBgColor};
  width: 30%;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  color: ${mimDaysTextColor};
  background-image: url('${mimDaysTexture}');
}

.schDayPlan {
  width: 80%;
  padding: .5em;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding-left: 1.7em;
  padding-bottom: .7em;
}

.schToday {
    width: 50%;
    display: table;
    background-color: ${mimTodayBgColor};
    color: ${mimTodayTextColor};
    border-radius: 2em;
    margin: .5em auto;
    margin-top: 1.5em;
    border-top-right-radius: .5em;
    border-top-left-radius: .5em;
    background-image: url("${mimTodayTexture}");
}

#schTodayStart {
    display: table-cell;
    padding: .5em;
    vertical-align: middle;
    width: 50%;
    text-align: center;
}

#schTodayDay {
    display: table-cell;
    vertical-align: middle;
    font-weight: bold;
}

.schDate {
    width: 50%;
    display: table;
    background-color: ${mimDateBgColor};
    border-radius: 2em;
    border-top-left-radius: 2em;
    border-top-right-radius: 2em;
    margin-top: 1.5em;
    margin: 0 auto;
    border-bottom-right-radius: .5em;
    border-bottom-left-radius: .5em;
    padding: .5em;
    vertical-align: middle;
    text-align: center;
    margin-top: 0;
    background-image: url("${mimDateTexture}");
    color: ${mimDateTextColor};
}

</style> <!--}}}-->

<div class="scheduler-wrap">
  <div class="schTitle">
    <h2>
      ${mimTitleText}
    </h2>
  </div>
  <div name="shan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      شنبه
    </div>
    <div class="schDayPlan">
      ${mimShanbe}
    </div>
  </div> <!--}}}-->
  <div name="yekshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      یک شنبه
    </div>
    <div class="schDayPlan">
      ${mim1shanbe}
    </div>
  </div> <!--}}}-->
  <div name="doshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      دو شنبه
    </div>
    <div class="schDayPlan">
      ${mim2shanbe}
    </div>
  </div> <!--}}}-->
  <div name="seshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      سه شنبه
    </div>
    <div class="schDayPlan">
      ${mim3shanbe}
    </div>
  </div> <!--}}}-->
  <div name="chaharshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      چهار شنبه
    </div>
    <div class="schDayPlan">
      ${mim4shanbe}
    </div>
  </div> <!--}}}-->
  <div name="panjshan" class="schDays"> <!--{{{-->
    <div class="schDayName">
      پنج شنبه
    </div>
    <div class="schDayPlan">
      ${mim5shanbe}
    </div>
  </div> <!--}}}-->
  <div name="jome" class="schDays"> <!--{{{-->
    <div class="schDayName">
      جمعه
    </div>
    <div class="schDayPlan">
      ${mimjome}
    </div>
  </div> <!--}}}-->
</div>`;

        // }}}
    document.getElementById('generatedCode').textContent = patterMain.trim();
    document.getElementById('vtPreview').innerHTML = patterMain;
    }
  /// }}}

// }}}
}
