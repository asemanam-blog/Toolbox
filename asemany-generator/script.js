  new ClipboardJS('.copymim');

  let idNum = 2;
  const poster = document.getElementById('AseGen');
// AseDelPost func {{{
function AseDelPost(postName) {
  document.getElementById(postName).remove();
}
//}}}
// AseSummary func {{{
function AseSummary(postName, btn, btnIcon, fdiv, ptitle) {
  let allChilds = document.getElementById(postName);
  let btnSum = document.getElementById(btn);
  let ibtnSum = document.getElementById(btnIcon);
  let fakeDiv = document.getElementById(fdiv);
  let postTitle = document.getElementById(ptitle).value;
  let ApexIn = `<div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; margin-bottom: 2em; background-color: rgb(250, 250, 250); display: block;"> <h4 class="text-primary">${postTitle}</h4> </div>`;

  if(allChilds.style.display === "none") {
    allChilds.style.display = "block";
    btnSum.classList.remove('btn-primary');
    btnSum.classList.add('btn-light');
    ibtnSum.classList.remove('icon-arrow-down');
    ibtnSum.classList.add('icon-arrow-up');
    fakeDiv.classList.add('d-none');
  } else {
    allChilds.style.display = "none";
    btnSum.classList.remove('btn-light');
    btnSum.classList.add('btn-primary');
    ibtnSum.classList.remove('icon-arrow-up');
    ibtnSum.classList.add('icon-arrow-down');
    fakeDiv.classList.remove('d-none');
    fakeDiv.innerHTML = ApexIn;
  }
}
//}}}
// AseSummary func {{{
  function addAseBox() {
    let ider = 'post-' + idNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "2em";
    elementer.innerHTML =  `<div class="column col-1">
      <!--delete box button--><!--{{{-->
      <button id="delAbox-${idNum}" class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="AseDelPost('post-${idNum}')">
        <i class="icon icon-minus"></i>
      </button>
      <!--delete box button--><!--}}}-->
      <!--summary box button--><!--{{{-->
      <button id="summaryBox-${idNum}" class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em; margin-top: 1em;" onclick="AseSummary('postBox-${idNum}', 'summaryBox-${idNum}', 'abtSum-${idNum}', 'fakeDiv-${idNum}', 'titlePost-${idNum}')">
        <i id="abtSum-${idNum}" class="icon icon-arrow-up"></i>
      </button>
      <!--summary box button--><!--}}}-->
    </div>
    <div id="postBox-${idNum}" class="column col-11" style="border: 1px solid #6b69dd;border-radius: 1em;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;padding: 1em;background-color: #fafafa; margin-bottom: 2em;">
      <!--background and border color--><!--{{{-->
      <div class="columns" style="margin-top: 2em;">
        <div class="column col-9 col-sm-12">
          <label for="bgPost-${idNum}">
            نشانی تصویر پس‌زمینه:
          </label>
          <input id="bgPost-${idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="http://s13.picofile.com/file/8399676392/ghami.jpg">
        </div>
        <div class="column col-3 col-sm-6">
          <label for="bgBorder-${idNum}">
            رنگ نوار پس‌زمینه
          </label>
          <input id="bgBorder-${idNum}" type="color" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" value="#fdc94a">
        </div>
      </div>
      <!--background and border color--><!--}}}-->
      <!--color of inner box & text & border--><!--{{{-->
      <div class="columns">
        <div class="column col-4 col-sm-6">
          <label for="boxBgColor-${idNum}">
            رنگ پس‌زمینه جعبه:
          </label>
          <input id="boxBgColor-${idNum}" type="color" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" value="#032032">
        </div>
        <div class="column col-4 col-sm-6">
          <label for="boxTextColor-${idNum}">
            رنگ متن جعبه:
          </label>
          <input id="boxTextColor-${idNum}" type="color" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" value="#ffffff">
        </div>
        <div class="column col-4 col-sm-6">
          <label for="boxBorder-${idNum}">
            رنگ نوار جعبه:
          </label>
          <input id="boxBorder-${idNum}" type="color" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" value="#fdc94a">
        </div>
      </div>
      <!--color of inner box & text & border--><!--}}}-->
      <!--avatar and border color--><!--{{{-->
      <div class="columns" style="margin-top: 2em;">
        <div class="column col-9 col-sm-12">
          <label for="avPost-${idNum}">
            نشانی آواتار نویسنده:
          </label>
          <input id="avPost-${idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="https://s12.picofile.com/file/8399676318/ghami.jpeg">
        </div>
        <div class="column col-3 col-sm-6">
          <label for="avBorder-${idNum}">
            رنگ نوار آواتار:
          </label>
          <input id="avBorder-${idNum}" type="color" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" value="#ffffff">
        </div>
      </div>
      <!--avatar and border color--><!--}}}-->
      <!--title of post and link of post--><!--{{{-->
      <div class="columns">
        <div class="column col-6 col-sm-12">
          <label for="titlePost-${idNum}">
            عنوان پست:
          </label>
          <input id="titlePost-${idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="نامه‌ای به تو ">
        </div>
        <div class="column col-6 col-sm-12">
          <label for="linkPost-${idNum}">
            لینک پست:
          </label>
          <input id="linkPost-${idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="http://ghami.blog.ir/post/142">
        </div>
      </div>
      <!--title of post and link of post--><!--}}}-->
      <!--first and second line of post--><!--{{{-->
      <div class="columns">
        <div class="column col-6 col-sm-12">
          <label for="fline-${idNum}">
            خط اول پست:
          </label>
          <textarea id="fline-${idNum}" spellcheck="false" class="w-100" name="gc" cols="15" rows="3" style="direction: rtl;margin-bottom: 1em; margin-top: .5em;" placeholder="دیگر ناتوانم از دوست داشتن. "></textarea>
        </div>
        <div class="column col-6 col-sm-12">
          <label for="sline-${idNum}">
            خط دوم پست:
          </label>
          <textarea id="sline-${idNum}" spellcheck="false" class="w-100" name="gc" cols="15" rows="3" style="direction: rtl;margin-bottom: 1em; margin-top: .5em;" placeholder="به خاطرات و خطورات ذهن لکنت‌دارم که رجوع می‌کنم، تو آخرین بودی."></textarea>
        </div>
      </div>
      <!--first and second line of post--><!--}}}-->
      <!--color of review background and text--><!--{{{-->
      <div class="columns">
        <div class="column col-6">
          <label for="bgReviewColor-${idNum}">
            رنگ پس‌زمینه معرفی:
          </label>
          <input id="bgReviewColor-${idNum}" type="color" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" value="#ffffff">
        </div>
        <div class="column col-6">
          <label for="textReviewColor-${idNum}">
            رنگ متن بررسی:
          </label>
          <input id="textReviewColor-${idNum}" type="color" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" value="#000000">
        </div>
      </div>
      <!--color of review background and text--><!--}}}-->
      <!--review of the post--><!--{{{-->
      <label for="reviewPost-${idNum}">
        بررسی و معرفی پست:
      </label>
      <textarea id="reviewPost-${idNum}" spellcheck="false" class="w-100" name="gc" cols="20" rows="4" style="direction: rtl;margin-bottom: 1em; margin-top: .5em;" placeholder="وقتی این پست رو می‌خوندم احساس کردم که انگار روی آب شناور شدم. چرا که محتوا و ادبیات..."></textarea>
      <!--review of the post--><!--}}}-->
    </div>
    <div id="fakeDiv-${idNum}" class="d-none column col-11"></div>`;
    poster.appendChild(elementer);

    idNum++;
  }
//}}}
  //Generator logic{{{
    function AseGenerator() {
      //loop through all input boxes{{{
        let patterson = `<style>
@font-face {
      font-family: 'vazir';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'vazir';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: vazir
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'vazir';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'vazir';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'vazir';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }
        </style><p>&nbsp;</p>\n`;
      let i;
      for(i = 1; i <= idNum; i++){
        let box = document.getElementById('postBox-' + i);
        if(box){
        //capture all the input fields{{{
          let bgPost = document.getElementById('bgPost-' + i).value;
          let bgBorder = document.getElementById('bgBorder-' + i).value;
          let boxBgColor = document.getElementById('boxBgColor-' + i).value;
          let boxTextColor = document.getElementById('boxTextColor-' + i).value;
          let boxBorder = document.getElementById('boxBorder-' + i).value;
          let avPost = document.getElementById('avPost-' + i).value;
          let avBorder = document.getElementById('avBorder-' + i).value;
          let titlePost = document.getElementById('titlePost-' + i).value;
          let linkPost = document.getElementById('linkPost-' + i).value;
          let fline = document.getElementById('fline-' + i).value;
          let sline = document.getElementById('sline-' + i).value;
          let bgReviewColor = document.getElementById('bgReviewColor-' + i).value;
          let textReviewColor = document.getElementById('textReviewColor-' + i).value;
          let reviewPost = document.getElementById('reviewPost-' + i).value;
        //capture all the input fields}}}
        //inserter{{{
          let coder = `<div id="post-${i}"
  style="font-family: vazir, serif; font-size: 16px; background: url('${bgPost}'); background-position: center center; background-repeat: no-repeat; background-size: cover; background-color: #012032; padding-top: 13em; border-radius: 2em; border: 2px solid ${bgBorder}; margin-top: 1em; margin-bottom: 2em; ">
  <div style=" padding: 15px 10px; box-sizing: border-box; background-color: ${boxBgColor}; border: 5px solid ${boxBorder}; width: 90%; margin: 1em auto; border-radius: 2em; color: ${boxTextColor};" >
    <h4 style="margin-right: 0.5em; margin-bottom: 1.5em; font-family: vazir, serif; font-weight: bold; font-size: 1.2rem;">
      <a target="_blank" href="${linkPost}" ><img style="max-width: 75px !important; margin-right: 10px; float: left; box-sizing: content-box; border: 5px solid ${avBorder}; " src="${avPost}" />
      </a>
      <a target="_blank" href=""><span style="color: ${boxTextColor}"> </span></a><a target="_blank" href="${linkPost}" ><span style="color: ${boxTextColor}">
          ${titlePost}
        </span></a>
    </h4>
    <p>
      <a target="_blank" href="${linkPost}" class="tooltip" ><span style="color: ${boxTextColor}">
        ${fline}
        </span></a>
    </p>
    <p>
      <a target="_blank" href="${linkPost}" class="tooltip" ><span style="color: ${boxTextColor}">
        ${sline}
        </span></a>
    </p>
    <div class="asemany-box" style=" position: relative; display: block; min-height: 30px; border-radius: 1em; background-color: ${bgReviewColor}; padding: 5px; box-sizing: border-box; text-align: center; padding-top: 10px; margin-top: 30px; ">
      <p style="margin: 1em">
        <a target="_blank" href="${linkPost}" class="tooltip" ><span style="color: ${textReviewColor}">
          ${reviewPost}
          </span></a>
      </p>
    </div>
  </div>
</div> \n`;
        //inserter}}}
          patterson += coder;
        }

       }
      //loop through all input boxes}}}
      patterson += `<p>&nbsp;</p>`;
    document.getElementById('generatedCode').textContent = patterson.trim();
    document.getElementById('preview').innerHTML = patterson;
    }
  //Generator logic}}}

