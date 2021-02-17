  new ClipboardJS('.copymim');

  let gooidNum = 2;
  let magidNum = 2;
  let bayanidNum = 2;
  let tagidNum = 2;
  let chipidNum = 2;
  let cardidNum = 2;
  let ayidNum = 2;
  let gal2idNum = 2;
  let gal1idNum = 2;
  const ahmadi = `<p>&nbsp;</p>\n`;
  const gooPoster = document.getElementById('gooGen');
  const magPoster = document.getElementById('magGen');
  const bayanPoster = document.getElementById('bayanGen');
  const tagPoster = document.getElementById('tagGen');
  const chipPoster = document.getElementById('chipGen');
  const cardPoster = document.getElementById('cardGen');
  const ayPoster = document.getElementById('ayGen');
  const gal2Poster = document.getElementById('gal2Gen');
  const gal1Poster = document.getElementById('gal1Gen');
  // tab functionality{{{

  //all tabs captureing{{{
  const tabGoo = document.getElementById('tabGooderei');
  const tabMag = document.getElementById('tabMagazinei');
  const tabBay = document.getElementById('tabBayanei');
  const tabTag = document.getElementById('tabTagei');
  const tabChi = document.getElementById('tabChipei');
  const tabGa1 = document.getElementById('tabGallie1');
  const tabGa2 = document.getElementById('tabGallie2');
  const tabCar = document.getElementById('tabCardie');
  const tabAse = document.getElementById('tabAsemanei');
  //}}}

  // all tab content capturing{{{
  const Gootab = document.getElementById('gooderei');
  const Magtab = document.getElementById('magazinei');
  const Baytab = document.getElementById('bayanei');
  const Tagtab = document.getElementById('tagei');
  const Chitab = document.getElementById('chipei');
  const Ga1tab = document.getElementById('gallie1');
  const Ga2tab = document.getElementById('gallie2');
  const Cartab = document.getElementById('cardie');
  const Asetab = document.getElementById('asemanei');
  const Fonter = document.getElementById('fontChooser');
  //}}}

  tabGoo.addEventListener('click', () => {
    tabGoo.classList.add('active');
    Gootab.classList.remove('d-none');
    Magtab.classList.add('d-none');
    Baytab.classList.add('d-none');
    Tagtab.classList.add('d-none');
    Chitab.classList.add('d-none');
    Ga1tab.classList.add('d-none');
    Ga2tab.classList.add('d-none');
    Cartab.classList.add('d-none');
    Asetab.classList.add('d-none');

    tabMag.classList.remove('active');
    tabBay.classList.remove('active');
    tabTag.classList.remove('active');
    tabChi.classList.remove('active');
    tabGa1.classList.remove('active');
    tabGa2.classList.remove('active');
    tabCar.classList.remove('active');
    tabAse.classList.remove('active');
    Fonter.classList.remove('d-none');
    
  })

  tabMag.addEventListener('click', () => {
    Gootab.classList.add('d-none');
    tabMag.classList.add('active');
    Magtab.classList.remove('d-none');
    Baytab.classList.add('d-none');
    Tagtab.classList.add('d-none');
    Chitab.classList.add('d-none');
    Ga1tab.classList.add('d-none');
    Ga2tab.classList.add('d-none');
    Cartab.classList.add('d-none');
    Asetab.classList.add('d-none');

    tabGoo.classList.remove('active');
    tabBay.classList.remove('active');
    tabTag.classList.remove('active');
    tabChi.classList.remove('active');
    tabGa1.classList.remove('active');
    tabGa2.classList.remove('active');
    tabCar.classList.remove('active');
    tabAse.classList.remove('active');
    Fonter.classList.remove('d-none');
    
  })

  tabBay.addEventListener('click', () => {
    Gootab.classList.add('d-none');
    Magtab.classList.add('d-none');
    Baytab.classList.remove('d-none');
    tabBay.classList.add('active');
    Tagtab.classList.add('d-none');
    Chitab.classList.add('d-none');
    Ga1tab.classList.add('d-none');
    Ga2tab.classList.add('d-none');
    Cartab.classList.add('d-none');
    Asetab.classList.add('d-none');

    tabGoo.classList.remove('active');
    tabMag.classList.remove('active');
    tabTag.classList.remove('active');
    tabChi.classList.remove('active');
    tabGa1.classList.remove('active');
    tabGa2.classList.remove('active');
    tabCar.classList.remove('active');
    tabAse.classList.remove('active');
    Fonter.classList.remove('d-none');
    
  })

  tabTag.addEventListener('click', () => {
    Gootab.classList.add('d-none');
    Magtab.classList.add('d-none');
    Baytab.classList.add('d-none');
    Tagtab.classList.remove('d-none');
    tabTag.classList.add('active');
    Chitab.classList.add('d-none');
    Ga1tab.classList.add('d-none');
    Ga2tab.classList.add('d-none');
    Cartab.classList.add('d-none');
    Asetab.classList.add('d-none');

    tabGoo.classList.remove('active');
    tabMag.classList.remove('active');
    tabBay.classList.remove('active');
    tabChi.classList.remove('active');
    tabGa1.classList.remove('active');
    tabGa2.classList.remove('active');
    tabCar.classList.remove('active');
    tabAse.classList.remove('active');
    Fonter.classList.remove('d-none');
    
  })

  tabChi.addEventListener('click', () => {
    Gootab.classList.add('d-none');
    Magtab.classList.add('d-none');
    Baytab.classList.add('d-none');
    Tagtab.classList.add('d-none');
    Chitab.classList.remove('d-none');
    tabChi.classList.add('active');
    Ga1tab.classList.add('d-none');
    Ga2tab.classList.add('d-none');
    Cartab.classList.add('d-none');
    Asetab.classList.add('d-none');

    tabGoo.classList.remove('active');
    tabMag.classList.remove('active');
    tabBay.classList.remove('active');
    tabTag.classList.remove('active');
    tabGa1.classList.remove('active');
    tabGa2.classList.remove('active');
    tabCar.classList.remove('active');
    tabAse.classList.remove('active');
    Fonter.classList.remove('d-none');
    
  })

  tabGa1.addEventListener('click', () => {
    Gootab.classList.add('d-none');
    Magtab.classList.add('d-none');
    Baytab.classList.add('d-none');
    Tagtab.classList.add('d-none');
    Chitab.classList.add('d-none');
    Ga1tab.classList.remove('d-none');
    tabGa1.classList.add('active');
    Ga2tab.classList.add('d-none');
    Cartab.classList.add('d-none');
    Asetab.classList.add('d-none');
    Fonter.classList.add('d-none');

    tabGoo.classList.remove('active');
    tabMag.classList.remove('active');
    tabBay.classList.remove('active');
    tabTag.classList.remove('active');
    tabChi.classList.remove('active');
    tabGa2.classList.remove('active');
    tabCar.classList.remove('active');
    tabAse.classList.remove('active');
    
  })

  tabGa2.addEventListener('click', () => {
    Gootab.classList.add('d-none');
    Magtab.classList.add('d-none');
    Baytab.classList.add('d-none');
    Tagtab.classList.add('d-none');
    Chitab.classList.add('d-none');
    Ga1tab.classList.add('d-none');
    Ga2tab.classList.remove('d-none');
    tabGa2.classList.add('active');
    Cartab.classList.add('d-none');
    Asetab.classList.add('d-none');
    Fonter.classList.add('d-none');

    tabGoo.classList.remove('active');
    tabMag.classList.remove('active');
    tabBay.classList.remove('active');
    tabTag.classList.remove('active');
    tabChi.classList.remove('active');
    tabGa1.classList.remove('active');
    tabCar.classList.remove('active');
    tabAse.classList.remove('active');
    
  })

  tabCar.addEventListener('click', () => {
    Gootab.classList.add('d-none');
    Magtab.classList.add('d-none');
    Baytab.classList.add('d-none');
    Tagtab.classList.add('d-none');
    Chitab.classList.add('d-none');
    Ga1tab.classList.add('d-none');
    Ga2tab.classList.add('d-none');
    Cartab.classList.remove('d-none');
    tabCar.classList.add('active');
    Asetab.classList.add('d-none');

    tabGoo.classList.remove('active');
    tabMag.classList.remove('active');
    tabBay.classList.remove('active');
    tabTag.classList.remove('active');
    tabChi.classList.remove('active');
    tabGa1.classList.remove('active');
    tabGa2.classList.remove('active');
    tabAse.classList.remove('active');
    Fonter.classList.remove('d-none');
    
  })

  tabAse.addEventListener('click', () => {
    Gootab.classList.add('d-none');
    Magtab.classList.add('d-none');
    Baytab.classList.add('d-none');
    Tagtab.classList.add('d-none');
    Chitab.classList.add('d-none');
    Ga1tab.classList.add('d-none');
    Ga2tab.classList.add('d-none');
    Cartab.classList.add('d-none');
    Asetab.classList.remove('d-none');
    tabAse.classList.add('active');

    tabGoo.classList.remove('active');
    tabMag.classList.remove('active');
    tabBay.classList.remove('active');
    tabTag.classList.remove('active');
    tabChi.classList.remove('active');
    tabGa1.classList.remove('active');
    tabGa2.classList.remove('active');
    tabCar.classList.remove('active');
    Fonter.classList.remove('d-none');
    
  })

  const tabHulu = document.querySelectorAll('li.tab-item>a');
  for (let j = 0; j < tabHulu.length; j++) {
    tabHulu[j].addEventListener("click", function(event){
      event.preventDefault()
    });
  }
  //}}}
// gooDelLink func {{{
function gooDelLink(postName) {
  document.getElementById(postName).remove();
}
//}}}
// magDelLink func {{{
function magDelLink(postName) {
  document.getElementById(postName).remove();
}
//}}}
// bayanDelLink func {{{
function bayanDelLink(postName) {
  document.getElementById(postName).remove();
}
//}}}
// tagDelLink func {{{
function tagDelLink(postName) {
  document.getElementById(postName).remove();
}
//}}}
// chipDelLink func {{{
function chipDelLink(postName) {
  document.getElementById(postName).remove();
}
//}}}
// cardDelLink func {{{
function cardDelLink(postName) {
  document.getElementById(postName).remove();
}
//}}}
// ayDelLink func {{{
function ayDelLink(postName) {
  document.getElementById(postName).remove();
}
//}}}
// gal2DelLink func {{{
function gal2DelLink(postName) {
  document.getElementById(postName).remove();
}
//}}}
// addGooBox func {{{
  function addGooBox() {
    let ider = 'gooLink-' + gooidNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-1">
        <button id="delGooLink-${gooidNum}" class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="gooDelLink('gooLink-${gooidNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>
      <div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="gooTitleText-${gooidNum}" style="margin-top: 1em;">
              متن عنوان:
            </label>
            <input id="gooTitleText-${gooidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="پشتیبان‌گیری از وبلاگ‌های میهن بلاگ">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="gooSubText-${gooidNum}" style="margin-top: 1em;">
              متن مقصد:
            </label>
            <input id="gooSubText-${gooidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="وبلاگ آسمان">
          </div>
          <div class="column col-12">
            <label for="gooAddress-${gooidNum}" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="gooAddress-${gooidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/1399/09/20/mihanblog-backup-generator">
          </div>
        </div>
      </div>`;
    gooPoster.appendChild(elementer);

    gooidNum++;
  }
//}}}
// addMagBox func {{{
  function addMagBox() {
    let ider = 'magLink-' + magidNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-1">
        <button id="delGooLink-${magidNum}" class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="magDelLink('magLink-${magidNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>
      <div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="magTitleText-${magidNum}" style="margin-top: 1em;">
              متن عنوان:
            </label>
            <input id="magTitleText-${magidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="پشتیبان‌گیری از وبلاگ‌های میهن بلاگ">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="magSubText-${magidNum}" style="margin-top: 1em;">
              متن مقصد:
            </label>
            <input id="magSubText-${magidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="وبلاگ آسمان">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="magImage-${magidNum}" style="margin-top: 1em;">
              آدرس تصویر:
            </label>
            <input id="magImage-${magidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://bayanbox.ir/view/451960159/image.jpg">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="magAddress-${magidNum}" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="magAddress-${magidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/mihanblog-backup-generator">
          </div>
        </div>
      </div>`;
    magPoster.appendChild(elementer);

    magidNum++;
  }
//}}}
// addBayanBox func {{{
  function addBayanBox() {
    let ider = 'bayanLink-' + bayanidNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-1">
        <button class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="bayanDelLink('bayanLink-${bayanidNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>
      <div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="bayanTitleText-${bayanidNum}" style="margin-top: 1em;">
              متن عنوان:
            </label>
            <input id="bayanTitleText-${bayanidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="پشتیبان‌گیری از میهن‌بلاگ">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="bayanSubText-${bayanidNum}" style="margin-top: 1em;">
              متن مقصد:
            </label>
            <input id="bayanSubText-${bayanidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="وبلاگ آسمانم">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="bayanAvatar-${bayanidNum}" style="margin-top: 1em;">
              آدرس آواتار:
            </label>
            <input id="bayanAvatar-${bayanidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://bayanbox.ir/view/451960159/ibayane.jpg">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="bayanAddress-${bayanidNum}" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="bayanAddress-${bayanidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/mihanblog-backup-generator">
          </div>
        </div>
      </div>\n`;
    bayanPoster.appendChild(elementer);

    bayanidNum++;
  }
//}}}
// addTagBox func {{{
  function addTagBox() {
    let ider = 'tagLink-' + tagidNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-1">
        <button class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="tagDelLink('tagLink-${tagidNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>
      <div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="tagTitleText-${tagidNum}" style="margin-top: 1em;">
              متن عنوان:
            </label>
            <input id="tagTitleText-${tagidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder=" پشتیبان گیری از وبلاگ‌های میهن بلاگ">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="tagAddress-${tagidNum}" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="tagAddress-${tagidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/1399/09/20/mihanblog-backup-generator">
          </div>
        </div>
      </div>\n`;
    tagPoster.appendChild(elementer);

    tagidNum++;
  }
//}}}
// addChipBox func {{{
  function addChipBox() {
    let ider = 'chipLink-' + chipidNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-1">
        <button class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="chipDelLink('chipLink-${chipidNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>
      <div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="chipTitleText-${chipidNum}" style="margin-top: 1em;">
              متن عنوان:
            </label>
            <input id="chipTitleText-${chipidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder=" پشتیبان گیری از وبلاگ‌های میهن بلاگ">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="chipAddress-${chipidNum}" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="chipAddress-${chipidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/1399/09/20/mihanblog-backup-generator">
          </div>
        </div>
      </div>\n`;
    chipPoster.appendChild(elementer);

    chipidNum++;
  }
//}}}
// addCardBox func {{{
  function addCardBox() {
    let ider = 'cardLink-' + cardidNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-1">
        <button class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="cardDelLink('cardLink-${cardidNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>
      <div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="cardTitleText-${cardidNum}" style="margin-top: 1em;">
              متن عنوان:
            </label>
            <input id="cardTitleText-${cardidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="پشتیبان‌گیری از میهن‌بلاگ">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="cardSubText-${cardidNum}" style="margin-top: 1em;">
              متن مقصد:
            </label>
            <input id="cardSubText-${cardidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="وبلاگ آسمانم">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="cardImage-${cardidNum}" style="margin-top: 1em;">
              آدرس تصویر:
            </label>
            <input id="cardImage-${cardidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://cardbox.ir/view/451960159/icarde.jpg">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="cardAddress-1" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="cardAddress-${cardidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/mihanblog-backup-generator">
          </div>
        </div>
      </div>\n`;
    cardPoster.appendChild(elementer);

    cardidNum++;
  }
//}}}
// addAyBox func {{{
  function addAyBox() {
    let ider = 'ayLink-' + ayidNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-1">
        <button class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="ayDelLink('ayLink-${ayidNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>
      <div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="ayTitleText-${ayidNum}" style="margin-top: 1em;">
              متن عنوان:
            </label>
            <input id="ayTitleText-${ayidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="پشتیبان‌گیری از میهن‌بلاگ">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="aySubText-${ayidNum}" style="margin-top: 1em;">
              متن مقصد:
            </label>
            <input id="aySubText-${ayidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="وبلاگ آسمانم">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="ayImage-${ayidNum}" style="margin-top: 1em;">
              آدرس آواتار:
            </label>
            <input id="ayImage-${ayidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://aybox.ir/view/451960159/iaye.jpg">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="ayAddress-${ayidNum}" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="ayAddress-${ayidNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/mihanblog-backup-generator">
          </div>
        </div>
      </div>\n`;
    ayPoster.appendChild(elementer);

    ayidNum++;
  }
//}}}
// addGal2Box func {{{
  function addGal2Box() {
    let ider = 'gal2Link-' + gal2idNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-1">
        <button class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;bottom: 1em;" onclick="gal2DelLink('gal2Link-${gal2idNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>
      <div class="column col-11" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="gal2Avatar-${gal2idNum}" style="margin-top: 1em;">
              آدرس تصویر:
            </label>
            <input id="gal2Avatar-${gal2idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://gal2box.ir/view/451960159/igal2e.jpg">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="gal2Address-${gal2idNum}" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="gal2Address-${gal2idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/mihanblog-backup-generator">
          </div>
        </div>
      </div>\n`;
    gal2Poster.appendChild(elementer);

    gal2idNum++;
  }
//}}}
// addGal1Box func {{{
  function addGal1Box() {
    let ider = 'gal1Link-' + gal1idNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "1em";
    elementer.innerHTML = `<div class="column col-12" style="border: 1px solid rgb(107, 105, 221); border-radius: 1em; box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 2px 5px 0px !important; padding: 1em; background-color: rgb(250, 250, 250); margin-bottom: 2em;">
        <div class="columns">
          <div class="column col-6 col-sm-12">
            <label for="gal1Image-${gal1idNum}" style="margin-top: 1em;">
              آدرس تصویر:
            </label>
            <input id="gal1Image-${gal1idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://gal1box.ir/view/451960159/igal1e.jpg">
          </div>
          <div class="column col-6 col-sm-12">
            <label for="gal1Address-${gal1idNum}" style="margin-top: 1em;">
              آدرس مقصد:
            </label>
            <input id="gal1Address-${gal1idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em; text-align: left;" placeholder="http://asemanam.blog.ir/mihanblog-backup-generator">
          </div>
        </div>
      </div>\n`;
    gal1Poster.appendChild(elementer);

    gal1idNum++;
  }
//}}}
// gooderGenerator func{{{
function gooderGenerator() {
  let gcode;
  let coder;
  let patterson = " ";
  let gooSpace = document.getElementById('gooSpace').checked;
  const ender = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  patterson = `<!------ ابزار لینکدونی ------>
    <style> \n`;
  // capture static inputs{{{
    // font part{{{
      let cal_font_choice;
      let cal_font_choice_all = document.getElementsByName('fn');
      for(i = 0; i < cal_font_choice_all.length; i++) {
        if(cal_font_choice_all[i].checked)
          cal_font_choice = cal_font_choice_all[i].value;
      }

// fonts{{{
    let codeSahel = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('//bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('//bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('//bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('//bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: linkfont
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('//bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('//bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('//bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('//bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('//bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('//bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('//bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
      font-weight: 300;
    }\n\n`;
//}}}
switch(cal_font_choice) {
//{{{
          case 'sahel':
            gcode = codeSahel;
            break;
          case 'estedad':
            gcode = codeEstedad;
            break;
          case 'gandom':
            gcode = codeGandom;
            break;
          case 'vazir':
            gcode = codeVazir;
            break;
          case 'tanha':
            gcode = codeTanha;
            break;
          case 'samim':
            gcode = codeSamim;
            break;
          case 'shabnam':
            gcode = codeShabnam;
//}}}
        }
      patterson += gcode;
    //}}}
// color part{{{
  let gooBgColor = document.getElementById('gooBgColor').value;
  let gooTitleColor = document.getElementById('gooTitleColor').value;
  let gooSubColor = document.getElementById('gooSubColor').value;
  let gooFontSize = document.getElementById('gooFontSize').value;
  patterson += `.Agooder {
  border-top: 1px solid #ccc;
  font-family: 'linkfont', sans-serif;
  margin-top: 1em;
  margin-bottom: 1em;
}

a.Lgooder {
  text-decoration: none;
}

.gooder {
  border-bottom: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  display: table;
  padding: 4px 2px;
  font-size: ${gooFontSize};
  background-color: ${gooBgColor};
}

.gooder:hover {
  opacity: .6;
}

.gStar {
  display: table-cell;
  width: 5%;
  padding-left: 4px;
  vertical-align: middle;
}

.gTitle {
  display: table-cell;
  width: 75%;
  text-align: right;
  color: ${gooTitleColor} !important;
}

.gTitle a {
  color: ${gooTitleColor} !important;
}

.gSitename {
  display: table-cell;
  width: 20%;
  text-align: center;
  color: ${gooSubColor} !important;
  vertical-align: middle;
}

.gSitename a {
  color: ${gooSubColor} !important;
}
</style>
<div class="Agooder">\n`;
//}}}
  //}}}
  // capture dynamic inputs{{{
    for(let j = 1; j <= gooidNum; j++){
      let box = document.getElementById('gooLink-' + j);
      if(box){
        //capture all the input fields{{{
          let gooTitleText = document.getElementById('gooTitleText-' + j).value;
          let gooSubText = document.getElementById('gooSubText-' + j).value;
          let gooAddress = document.getElementById('gooAddress-' + j).value; 
        //}}}
     coder = `<a target="_blank" class="Lgooder" href="${gooAddress}">
    <div class="gooder">
    <div class="gStar">
<img src="https://bayanbox.ir/download/448963994170078076/star.svg"/>
    </div>
      <div class="gTitle">
${gooTitleText}
      </div>
      <div class="gSitename">
${gooSubText}
      </div>
    </div>
  </a>\n`;

  patterson += coder;
      }
    }
  patterson +=`</div>\n`;
  patterson += ender; 
  //}}}
  if(gooSpace)
      patterson = ahmadi + patterson + ahmadi;

  document.getElementById('generatedCode').textContent = patterson.trim();
  document.getElementById('preview').innerHTML = patterson;
}
//}}}
// magazineGenerator func{{{
function magazineGenerator() {
  let magGcode;
  let magCoder;
  let magPatterson = " ";
  let magSpace = document.getElementById('magSpace').checked;
  const magEnder = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  magPatterson = `<!------ ابزار لینکدونی ------>
    <style> \n`;
  // capture static inputs{{{
    // font part{{{
      let cal_font_choice;
      let cal_font_choice_all = document.getElementsByName('fn');
      for(i = 0; i < cal_font_choice_all.length; i++) {
        if(cal_font_choice_all[i].checked)
          cal_font_choice = cal_font_choice_all[i].value;
      }

// fonts{{{
    let codeSahel = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('//bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('//bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('//bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('//bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: linkfont
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('//bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('//bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('//bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('//bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('//bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('//bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('//bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
      font-weight: 300;
    }\n\n`;
//}}}
switch(cal_font_choice) {
//{{{
          case 'sahel':
            magGcode = codeSahel;
            break;
          case 'estedad':
            magGcode = codeEstedad;
            break;
          case 'gandom':
            magGcode = codeGandom;
            break;
          case 'vazir':
            magGcode = codeVazir;
            break;
          case 'tanha':
            magGcode = codeTanha;
            break;
          case 'samim':
            magGcode = codeSamim;
            break;
          case 'shabnam':
            magGcode = codeShabnam;
//}}}
        }
      magPatterson += magGcode;
    //}}}
// color part{{{
  let magBgColor = document.getElementById('magBgColor').value;
  let magTitleColor = document.getElementById('magTitleColor').value;
  let magSubColor = document.getElementById('magSubColor').value;
  let magFontSize = document.getElementById('magFontSize').value;
  magPatterson += `.Amagazine {
  max-width: 100%;
  border-top: 1px solid #ccc;
  font-size: ${magFontSize};
  font-family: 'linkfont', sans-serif;
  margin-top: 1em;
  margin-bottom: 1em;
}

a.Lgooder {
  text-decoration: none;
}

.Lmag {
  border-bottom: 1px solid #ccc;
  display: table;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${magBgColor};
}

.Lmag:hover {
  opacity: .6;
}

.Ldescribe {
  display: table-cell;
  width: 80%;
  position: relative;
}

.LmagTitle {
  display: block;
  color: ${magTitleColor} !important;
  text-align: right;
}

.magStar {
  display: inline;
}

.LmagTitle a {
  color: ${magTitleColor} !important;
}

.LmagSitename {
    color: ${magSubColor} !important;
    display: block;
    position: absolute;
    bottom: 0;
    left: 15px;
}

.LmagSitename a {
  color: ${magSubColor} !important;
}

.Lavatar {
  display: table-cell;
  width: 20%;
  text-align: center;
}

.Lavatar img {
    max-width: 100%;
}

</style>
<div class="Amagazine">\n`;
//}}}
  //}}}
  // capture dynamic inputs{{{
    for(let j = 1; j <= magidNum; j++){
      let box = document.getElementById('magLink-' + j);
      if(box){
        //capture all the input fields{{{
          let magTitleText = document.getElementById('magTitleText-' + j).value;
          let magSubText = document.getElementById('magSubText-' + j).value;
          let magImage = document.getElementById('magImage-' + j).value; 
          let magAddress = document.getElementById('magAddress-' + j).value; 
        //}}}
     magCoder = `<a target="_blank" class="Lgooder" href="${magAddress}">
    <div class="Lmag">
      <div class="Ldescribe">
        <div class="LmagTitle">
          <div class="magStar">
            <img src="https://bayanbox.ir/download/448963994170078076/star.svg"/>
          </div>
          ${magTitleText}
        </div>
        <div class="LmagSitename">
          ${magSubText}
        </div>
      </div>
      <div class="Lavatar" style="background-image: url('${magImage}'); width: 100%; height: 120px;background-size: cover;border-radius: .5em; background-position: center;"> </div>
    </div>
  </a>\n`;

  magPatterson += magCoder;
      }
    }
  magPatterson +=`</div>\n`;
  magPatterson += magEnder; 
  //}}}
  if(magSpace)
      magPatterson = ahmadi + magPatterson + ahmadi;

  document.getElementById('generatedCode').textContent = magPatterson.trim();
  document.getElementById('preview').innerHTML = magPatterson;
}
//}}}
// bayanGenerator func{{{
function bayanGenerator() {
  let bayanGcode;
  let bayanCoder;
  let bayanPatterson = " ";
  let bayanSpace = document.getElementById('bayanSpace').checked;
  const bayanEnder = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  bayanPatterson = `<!------ ابزار لینکدونی ------>
    <style>\n`;
  // capture static inputs{{{
    // font part{{{
      let cal_font_choice;
      let cal_font_choice_all = document.getElementsByName('fn');
      for(i = 0; i < cal_font_choice_all.length; i++) {
        if(cal_font_choice_all[i].checked)
          cal_font_choice = cal_font_choice_all[i].value;
      }

// fonts{{{
    let codeSahel = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('//bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('//bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('//bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('//bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: linkfont
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('//bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('//bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('//bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('//bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('//bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('//bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('//bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
      font-weight: 300;
    }\n\n`;
//}}}
switch(cal_font_choice) {
//{{{
          case 'sahel':
            bayanGcode = codeSahel;
            break;
          case 'estedad':
            bayanGcode = codeEstedad;
            break;
          case 'gandom':
            bayanGcode = codeGandom;
            break;
          case 'vazir':
            bayanGcode = codeVazir;
            break;
          case 'tanha':
            bayanGcode = codeTanha;
            break;
          case 'samim':
            bayanGcode = codeSamim;
            break;
          case 'shabnam':
            bayanGcode = codeShabnam;
//}}}
        }
      bayanPatterson += bayanGcode;
    //}}}
// color part{{{
  let bayanBgColor = document.getElementById('bayanBgColor').value;
  let bayanTitleColor = document.getElementById('bayanTitleColor').value;
  let bayanSubColor = document.getElementById('bayanSubColor').value;
  let bayanFontSize = document.getElementById('bayanFontSize').value;
  bayanPatterson += `.Abayan {
  max-width: 100%;
  font-size: ${bayanFontSize};
  font-family: 'linkfont', sans-serif;
  box-sizing: border-box;
  margin-top: 1em;
  margin-bottom: 1em;
}

a.Lgooder {
  text-decoration: none;
}

.bLinker {
  margin: 15px 6px;
  padding: 4px;
  position: relative;
  display: table;
  background-color: ${bayanBgColor} !important;
  padding-left: 15px;
}

.bLinker:hover {
  opacity: .6;
}

.bTitle {
  border-bottom: 1px dotted #808080;
  padding: 8px 4px 7px;
  color: ${bayanTitleColor} !important;
}

.bTitle a {
  color: ${bayanTitleColor} !important;
}

.bStar {
  display: inline;
}

.bAvatar {
  display: table-cell;
  width: 70px;
  vertical-align: middle;
}

.bAvatar2 {
  padding: 3px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.bAvatar img {
  width: 64px;
  height: 64px;
  border-radius: 3px;
  padding: 0 !important;
}

.bDescribe {
  margin-right: 75px;
  display: table-cell;
  position: relative;
  right: 5px;
}

.bSitename {
    color: ${bayanSubColor} !important;
    display: block;
    padding: 5px 7px;
}

.bSitename a{
    color: ${bayanSubColor} !important;
}

@media screen and (max-width: 450px) {
  .bLinker {
    padding-left: 5px;
  }
}
</style>
<div class="Abayan">
  `;
//}}}
  //}}}
  // capture dynamic inputs{{{
    for(let j = 1; j <= bayanidNum; j++){
      let box = document.getElementById('bayanLink-' + j);
      if(box){
        //capture all the input fields{{{
          let bayanTitleText = document.getElementById('bayanTitleText-' + j).value;
          let bayanSubText = document.getElementById('bayanSubText-' + j).value;
          let bayanAvatar = document.getElementById('bayanAvatar-' + j).value; 
          let bayanAddress = document.getElementById('bayanAddress-' + j).value; 
        //}}}
     bayanCoder = `<a target="_blank" class="Lgooder" href="${bayanAddress}">
    <div class="bLinker">
      <div class="bAvatar">
        <div class="bAvatar2">
          <img src="${bayanAvatar}" alt="blogger">
        </div>
      </div>
      <div class="bDescribe">
        <div class="bTitle">
          <div class="bStar">
            <img src="https://bayanbox.ir/download/448963994170078076/star.svg"/>
            ${bayanTitleText}
          </div>
        </div>
        <div class="bSitename">
          ${bayanSubText}
        </div>
      </div>
    </div>
  </a>\n`;

  bayanPatterson += bayanCoder;
      }
    }
  bayanPatterson +=`</div>\n`;
  bayanPatterson += bayanEnder; 
  //}}}
  if(bayanSpace)
      bayanPatterson = ahmadi + bayanPatterson + ahmadi;

  document.getElementById('generatedCode').textContent = bayanPatterson.trim();
  document.getElementById('preview').innerHTML = bayanPatterson;
}
//}}}
// tagGenerator func{{{
function tagGenerator() {
  let tagGcode;
  let tagCoder;
  let tagPaterson = " ";
  let tagSpace = document.getElementById('tagSpace').checked;
  const ender = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  tagPaterson = `<!------ ابزار لینکدونی ------>
    <style> \n`;
  // capture static inputs{{{
    // font part{{{
      let cal_font_choice;
      let cal_font_choice_all = document.getElementsByName('fn');
      for(i = 0; i < cal_font_choice_all.length; i++) {
        if(cal_font_choice_all[i].checked)
          cal_font_choice = cal_font_choice_all[i].value;
      }

// fonts{{{
    let codeSahel = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('//bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('//bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('//bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('//bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: linkfont
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('//bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('//bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('//bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('//bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('//bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('//bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('//bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
      font-weight: 300;
    }\n\n`;
//}}}
switch(cal_font_choice) {
//{{{
          case 'sahel':
            tagGcode = codeSahel;
            break;
          case 'estedad':
            tagGcode = codeEstedad;
            break;
          case 'gandom':
            tagGcode = codeGandom;
            break;
          case 'vazir':
            tagGcode = codeVazir;
            break;
          case 'tanha':
            tagGcode = codeTanha;
            break;
          case 'samim':
            tagGcode = codeSamim;
            break;
          case 'shabnam':
            tagGcode = codeShabnam;
//}}}
        }
      tagPaterson += tagGcode;
    //}}}
// color part{{{
  let tagBgColor = document.getElementById('tagBgColor').value;
  let tagTitleColor = document.getElementById('tagTitleColor').value;
  let tagFontSize = document.getElementById('tagFontSize').value;
  tagPaterson += `.Atag {
  display: block;
  max-width: 100%;
  font-size: ${tagFontSize};
  font-family: 'linkfont', sans-serif;
  text-align: right;
  box-sizing: border-box;
  margin-top: 1em;
  margin-bottom: 1em;
}

.asemanTag {
  background: ${tagBgColor} !important;
  border-radius: .1rem;
  color: ${tagTitleColor} !important;
  display: inline-block;
  line-height: 1.25;
  padding: 5px 6px;
  margin-left: 2px;
  margin-bottom: 5px;
}

a.asemanTag {
  text-decoration: none;
}

</style>
<div class="Atag">\n`;
//}}}
  //}}}
  // capture dynamic inputs{{{
    for(let j = 1; j <= tagidNum; j++){
      let box = document.getElementById('tagLink-' + j);
      if(box){
        //capture all the input fields{{{
          let tagTitleText = document.getElementById('tagTitleText-' + j).value;
          let tagAddress = document.getElementById('tagAddress-' + j).value; 
        //}}}
     tagCoder = `<a target="_blank" href="${tagAddress}" class="asemanTag">
       ${tagTitleText}
  </a>\n`;

  tagPaterson += tagCoder;
      }
    }
  tagPaterson +=`</div>\n`;
  tagPaterson += ender; 
  //}}}
  if(tagSpace)
      tagPaterson = ahmadi + tagPaterson + ahmadi;

  document.getElementById('generatedCode').textContent = tagPaterson.trim();
  document.getElementById('preview').innerHTML = tagPaterson;
}
//}}}
// chipGenerator func{{{
function chipGenerator() {
  let chipGcode;
  let chipCoder;
  let chipPaterson = " ";
  let chipSpace = document.getElementById('chipSpace').checked;
  const ender = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  chipPaterson = `<!------ ابزار لینکدونی ------>
    <style> \n`;
  // capture static inputs{{{
    // font part{{{
      let cal_font_choice;
      let cal_font_choice_all = document.getElementsByName('fn');
      for(i = 0; i < cal_font_choice_all.length; i++) {
        if(cal_font_choice_all[i].checked)
          cal_font_choice = cal_font_choice_all[i].value;
      }

// fonts{{{
    let codeSahel = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('//bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('//bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('//bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('//bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: linkfont
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('//bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('//bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('//bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('//bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('//bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('//bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('//bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
      font-weight: 300;
    }\n\n`;
//}}}
switch(cal_font_choice) {
//{{{
          case 'sahel':
            chipGcode = codeSahel;
            break;
          case 'estedad':
            chipGcode = codeEstedad;
            break;
          case 'gandom':
            chipGcode = codeGandom;
            break;
          case 'vazir':
            chipGcode = codeVazir;
            break;
          case 'tanha':
            chipGcode = codeTanha;
            break;
          case 'samim':
            chipGcode = codeSamim;
            break;
          case 'shabnam':
            chipGcode = codeShabnam;
//}}}
        }
      chipPaterson += chipGcode;
    //}}}
// color part{{{
  let chipBgColor = document.getElementById('chipBgColor').value;
  let chipTitleColor = document.getElementById('chipTitleColor').value;
  let chipFontSize = document.getElementById('chipFontSize').value;
  chipPaterson += `.Achip {
  display: block;
  max-width: 100%;
  font-size: ${chipFontSize};
  font-family: 'linkfont', sans-serif;
  text-align: right;
  box-sizing: border-box;
  margin-top: 1em;
  margin-bottom: 1em;
}

.asemanChip {
  align-items: center;
  background: ${chipBgColor} !important;
  border-radius: 5rem;
  display: inline-flex;
  display: -ms-inline-flexbox;
  -ms-flex-align: center;
  line-height: 20px;
  margin: .1rem;
  max-width: 320px;
  overflow: hidden;
  padding: 6px 6px;
  text-decoration: none;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
  color: ${chipTitleColor} !important;
  margin-bottom: 5px;
  padding-left: 10px;
}

a.asemanChip {
  text-decoration: none;
}

.bStar {
  display: inline;
}
</style>
<div class="Achip">\n`;
//}}}
  //}}}
  // capture dynamic inputs{{{
    for(let j = 1; j <= chipidNum; j++){
      let box = document.getElementById('chipLink-' + j);
      if(box){
        //capture all the input fields{{{
          let chipTitleText = document.getElementById('chipTitleText-' + j).value;
          let chipAddress = document.getElementById('chipAddress-' + j).value; 
        //}}}
     chipCoder = `<a href="${chipAddress}" target="_blank" class="asemanChip">
  <div class="bStar">
    <img src="https://bayanbox.ir/download/448963994170078076/star.svg"/>
  </div>
  ${chipTitleText}
 </a>\n`;

  chipPaterson += chipCoder;
      }
    }
  chipPaterson +=`</div>\n`;
  chipPaterson += ender; 
  //}}}
  if(chipSpace)
      chipPaterson = ahmadi + chipPaterson + ahmadi;

  document.getElementById('generatedCode').textContent = chipPaterson.trim();
  document.getElementById('preview').innerHTML = chipPaterson;
}
//}}}
// cardGenerator func{{{
function cardGenerator() {
  let cardGcode;
  let cardCoder;
  let cardPaterson = " ";
  let cardSpace = document.getElementById('cardSpace').checked;
  const ender = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  cardPaterson = `<!------ ابزار لینکدونی ------>
    <style> \n`;
  // capture static inputs{{{
    // font part{{{
      let cal_font_choice;
      let cal_font_choice_all = document.getElementsByName('fn');
      for(i = 0; i < cal_font_choice_all.length; i++) {
        if(cal_font_choice_all[i].checked)
          cal_font_choice = cal_font_choice_all[i].value;
      }

// fonts{{{
    let codeSahel = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('//bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('//bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('//bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('//bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: linkfont
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('//bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('//bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('//bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('//bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('//bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('//bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('//bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
      font-weight: 300;
    }\n\n`;
//}}}
switch(cal_font_choice) {
//{{{
          case 'sahel':
            cardGcode = codeSahel;
            break;
          case 'estedad':
            cardGcode = codeEstedad;
            break;
          case 'gandom':
            cardGcode = codeGandom;
            break;
          case 'vazir':
            cardGcode = codeVazir;
            break;
          case 'tanha':
            cardGcode = codeTanha;
            break;
          case 'samim':
            cardGcode = codeSamim;
            break;
          case 'shabnam':
            cardGcode = codeShabnam;
//}}}
        }
      cardPaterson += cardGcode;
    //}}}
// color part{{{
    let col_card_choice;
    let col_card_choice_width;
    let col_card_choice_width2;
    let col_card_choice_all = document.getElementsByName('colCard');
    for(i = 0; i < col_card_choice_all.length; i++) {
      if(col_card_choice_all[i].checked)
        col_card_choice = col_card_choice_all[i].value;
    }

   switch(col_card_choice) {
     case 'one':
      col_card_choice_width = '100%';
      col_card_choice_width2 = '100%';
      break;
     case 'two':
      col_card_choice_width = '46%';
      col_card_choice_width2 = '46%';
      break;
     case 'three':
      col_card_choice_width = '31%';
      col_card_choice_width2 = '46%';
   }

  let cardBgColor = document.getElementById('cardBgColor').value;
  let cardTitleColor = document.getElementById('cardTitleColor').value;
  let cardSubColor = document.getElementById('cardSubColor').value;
  let cardFontSize = document.getElementById('cardFontSize').value;
  cardPaterson += `.asemanCard {
  max-width: 100%;
  font-size: ${cardFontSize};
  font-family: 'linkfont', sans-serif;
  text-align: right;
  box-sizing: border-box;
}

.asemanCardItem {
  width: ${col_card_choice_width};
  height: 300px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.5);
  border-radius: 3px;
  display:  inline-block;
  margin-left: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  background-color: ${cardBgColor} !important;
}

.asemanCardItem:hover {
  opacity: .6;
}

.cardAvatar {
  width: 100%;
  height: 140px;
  background-size: cover;
}

a.Lgooder {
  text-decoration: none;
}

.bStar {
  display: inline;
}

.cardTitle {
  display: block;
  color: ${cardTitleColor} !important;
  text-align: right;
  padding: 3px;
  padding-top: 5px;
}

.cardTitle a {
  color: ${cardTitleColor} !important;
}

.cardSitename {
    color: ${cardSubColor} !important;
    display: block;
    position: absolute;
    bottom: 3px;
    left: 10px;
}

.cardSitename a {
  color: ${cardSubColor} !important;
}

@media screen and (max-width: 800px) {
  .asemanCardItem {
    margin-left: 10px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 600px) {
  .asemanCardItem {
    width: ${col_card_choice_width2};
  }
}

@media screen and (max-width: 400px) {
  .asemanCardItem {
    width: 100%;
  }
}

</style>
<div class="asemanCard">\n`;
//}}}
  //}}}
  // capture dynamic inputs{{{

    for(let j = 1; j <= cardidNum; j++){
      let box = document.getElementById('cardLink-' + j);
      if(box){
        //capture all the input fields{{{
          let cardTitleText = document.getElementById('cardTitleText-' + j).value;
          let cardSubText = document.getElementById('cardSubText-' + j).value;
          let cardImage = document.getElementById('cardImage-' + j).value; 
          let cardAddress = document.getElementById('cardAddress-' + j).value; 
        //}}}
     cardCoder = `<a href="${cardAddress}" target="_blank">
    <div class="asemanCardItem">
      <div class="cardAvatar" style="background-image: url('${cardImage}');">
      </div>
      <div class="cardTitle">
      <div class="bStar">
        <img src="https://bayanbox.ir/download/448963994170078076/star.svg"/>
      </div>
      ${cardTitleText}
      </div>
      <div class="cardSitename">
        ${cardSubText}
      </div>
    </div>
  </a>\n`;

  cardPaterson += cardCoder;
      }
    }
  cardPaterson +=`</div>\n`;
  cardPaterson += ender; 
  //}}}
  if(cardSpace)
      cardPaterson = ahmadi + cardPaterson + ahmadi;

  document.getElementById('generatedCode').textContent = cardPaterson.trim();
  document.getElementById('preview').innerHTML = cardPaterson;
}
//}}}
// ayGenerator func{{{
function ayGenerator() {
  let ayGcode;
  let ayCoder;
  let ayPaterson = " ";
  let aySpace = document.getElementById('aySpace').checked;
  const ender = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  ayPaterson = `<!------ ابزار لینکدونی ------>
    <style> \n`;
  // capture static inputs{{{
    // font part{{{
      let cal_font_choice;
      let cal_font_choice_all = document.getElementsByName('fn');
      for(i = 0; i < cal_font_choice_all.length; i++) {
        if(cal_font_choice_all[i].checked)
          cal_font_choice = cal_font_choice_all[i].value;
      }

// fonts{{{
    let codeSahel = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('//bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('//bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('//bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('//bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: linkfont
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('//bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('//bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('//bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('//bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('//bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('//bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'linkfont';
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('//bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
      font-weight: 300;
    }\n\n`;
//}}}
switch(cal_font_choice) {
//{{{
          case 'sahel':
            ayGcode = codeSahel;
            break;
          case 'estedad':
            ayGcode = codeEstedad;
            break;
          case 'gandom':
            ayGcode = codeGandom;
            break;
          case 'vazir':
            ayGcode = codeVazir;
            break;
          case 'tanha':
            ayGcode = codeTanha;
            break;
          case 'samim':
            ayGcode = codeSamim;
            break;
          case 'shabnam':
            ayGcode = codeShabnam;
//}}}
        }
      ayPaterson += ayGcode;
    //}}}
// color part{{{
    let col_ay_choice;
    let col_ay_choice_width;
    let col_ay_choice_all = document.getElementsByName('colAy');
    for(i = 0; i < col_ay_choice_all.length; i++) {
      if(col_ay_choice_all[i].checked)
        col_ay_choice = col_ay_choice_all[i].value;
    }

   switch(col_ay_choice) {
     case 'one':
      col_ay_choice_width = '100%';
      break;
     case 'two':
      col_ay_choice_width = '46%';
   }

  let ayBgColor = document.getElementById('ayBgColor').value;
  let ayTitleColor = document.getElementById('ayTitleColor').value;
  let aySubColor = document.getElementById('aySubColor').value;
  let ayFontSize = document.getElementById('ayFontSize').value;
  ayPaterson += `.ayToolCard {
  max-width: 100%;
  font-size: ${ayFontSize};
  font-family: 'linkfont', sans-serif;
  text-align: right;
  box-sizing: border-box;
}

.ayToolCardItem {
  width: ${col_ay_choice_width};
  height: 150px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 1px 3px rgba(0,0,0,0.5);
  border-radius: 15px;
  display:  inline-block;
  margin-left: 10px;
  margin-bottom: 10px;
  background-color: ${ayBgColor};
  border: 3px solid #fdc94a;
  background-image: url('https://s16.picofile.com/file/8420022192/rootLeaf.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  box-sizing: border-box;
}

.ayToolTitle {
  color: ${ayTitleColor} !important;
  margin-right: 7px;
  margin-top: 10px;;
  font-size: 19px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, .4);
  padding: 2px 4px;
  padding-bottom: 4px;
  border-radius: 10px;
  margin-left: 10px;
}

.ayToolTitle a{
  color: ${ayTitleColor} !important;
  text-decoration: none;
}

.ayToolSitename {
  color: ${aySubColor} !important;
  display: block;
  position: absolute;
  bottom: 5px;
  left: 10px;
}

.ayToolSitename a {
  color: ${aySubColor} !important;
  text-decoration: none;
}

.ayToolAvatar img{
  max-width: 75px !important;
  margin-right: 10px;
  float: left;
  box-sizing: content-box; 
  border: 3px solid #ffffff;
  border-radius: 15px;
  margin-left: 5px;
  margin-top: 5px;
  height: 64px;
}

.ayToolAvatar {
  position: relative;
}

div.ayToolAvatar::after {
  content: "";
  width: 48px;
  height: 48px;
  background-image: url('https://bayanbox.ir/download/5991207983886471775/bxs-bookmark-star.svg');
  position: absolute;
  left: 18px;
  top: 65px;
}

@media screen and (max-width: 550px) {
  .ayToolCardItem {
    width: 100%;
  }
}

</style>
<div class="ayToolCard">\n`;
//}}}
  //}}}
  // capture dynamic inputs{{{

    for(let j = 1; j <= ayidNum; j++){
      let box = document.getElementById('ayLink-' + j);
      if(box){
        //capture all the input fields{{{
          let ayTitleText = document.getElementById('ayTitleText-' + j).value;
          let aySubText = document.getElementById('aySubText-' + j).value;
          let ayImage = document.getElementById('ayImage-' + j).value; 
          let ayAddress = document.getElementById('ayAddress-' + j).value; 
        //}}}
     ayCoder = `<a href="${ayAddress}" target="_blank">
    <div class="ayToolCardItem">
      <div class="ayToolAvatar">
        <img src="${ayImage}">
      </div>
      <div class="ayToolTitle">
        ${ayTitleText}
      </div>
      <div class="ayToolSitename">
        ${aySubText}
      </div>
    </div>
  </a>\n`;

  ayPaterson += ayCoder;
      }
    }
  ayPaterson +=`</div>\n`;
  ayPaterson += ender; 
  //}}}
  if(aySpace)
      ayPaterson = ahmadi + ayPaterson + ahmadi;

  document.getElementById('generatedCode').textContent = ayPaterson.trim();
  document.getElementById('preview').innerHTML = ayPaterson;
}
//}}}
// gal2Generator func{{{
function gal2Generator() {
  let gal2Gcode;
  let gal2Coder;
  let gal2Patterson = " ";
  let gal2Space = document.getElementById('gal2Space').checked;
  const gal2Ender = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  gal2Patterson = `<!------ ابزار لینکدونی ------>
    <style>\n`;
  // capture static inputs{{{
// color part{{{
  gal2Patterson += `.asemanUl {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 1em;
}

.asemanLi {
  height: 40vh;
  flex-grow: 1;
}

.asemanLi:last-child {
  flex-grow: 10;
}

.asemanLi a img {
  max-height: 100%;
  min-width: 100%;
  object-fit: cover;
  vertical-align: bottom;
  border-radius: 0;
  box-sizing: border-box;
  padding: 2px;
}

.asemanLi a img:hover {
  opacity: .6;
}

@media (max-aspect-ratio: 1/1) {
  .asemanLi {
    height: 30vh;
  }
}

@media (max-height: 300px) {
  .asemanLi {
    height: 80vh;
  }
}

@media (max-aspect-ratio: 1/1) and (max-width: 300px) {
  .asemanUl {
    flex-direction: row;
  }

  .asemanLi {
    height: auto;
    width: 100%;
  }
  .asemanLi a img {
    width: 100%;
    max-height: 75vh;
    min-width: 0;
  }
}
</style>
<div class="asemanUl">\n`;
//}}}
  //}}}
  // capture dynamic inputs{{{
    for(let j = 1; j <= gal2idNum; j++){
      let box = document.getElementById('gal2Link-' + j);
      if(box){
        //capture all the input fields{{{
          let gal2Avatar = document.getElementById('gal2Avatar-' + j).value; 
          let gal2Address = document.getElementById('gal2Address-' + j).value; 
        //}}}
     gal2Coder = `<div class="asemanLi">
     <a href="${gal2Address}" target="_blank">
      <img src="${gal2Avatar}">
    </a>
  </div>\n`;

  gal2Patterson += gal2Coder;
      }
    }
  gal2Patterson +=`</div>\n`;
  gal2Patterson += gal2Ender; 
  //}}}
  if(gal2Space)
      gal2Patterson = ahmadi + gal2Patterson + ahmadi;

  document.getElementById('generatedCode').textContent = gal2Patterson.trim();
  document.getElementById('preview').innerHTML = gal2Patterson;
}
//}}}
// gal1Generator func{{{
function gal1Generator() {
  let gal1Gcode;
  let gal1Coder;
  let gal1Paterson = " ";
  let gal1Space = document.getElementById('gal1Space').checked;
  const ender = `</div>
</div>
<!------ ابزار لینکدونی ------> \n`;
  gal1Paterson = `<!------ ابزار لینکدونی ------>
    <style> \n`;
  // capture static inputs{{{
// color part{{{
    let col_gal1_choice;
    let col_gal1_choice_width;
    let col_gal1_choice_all = document.getElementsByName('colGal1');
    for(i = 0; i < col_gal1_choice_all.length; i++) {
      if(col_gal1_choice_all[i].checked)
        col_gal1_choice = col_gal1_choice_all[i].value;
    }

   switch(col_gal1_choice) {
     case 'one':
      col_gal1_choice_width = '50%';
      break;
     case 'two':
      col_gal1_choice_width = '25%';
   }

   gal1Paterson += `.asemanRow {
  display: -ms-flexbox; 
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 1em;
  margin-bottom: 1em;
}

.asemanColumn {
  -ms-flex: ${col_gal1_choice_width};
  flex: ${col_gal1_choice_width};
  max-width: ${col_gal1_choice_width};
}

.asemanColumn img {
  vertical-align: middle;
  width: 100%;
  border-radius: 0 !important;
  box-sizing: border-box;
  padding: 2px;
}

.asemanColumn img:hover {
  opacity: .6;
}

@media screen and (max-width: 450px) {
  .asemanColumn {
    -ms-flex: 50%;
    flex: 50%;
    max-width: 50%;
  }
}

@media screen and (max-width: 200px) {
  .asemanColumn {
    -ms-flex: 100%;
    flex: 100%;
    max-width: 100%;
  }
}
</style>
<div class="asemanRow">\n`;
//}}}
  //}}}
  // capture dynamic inputs{{{
  let gal1s1c1Paterson = " ";
  let gal1s1c2Paterson = " ";

  let gal1s2c1Paterson = " ";
  let gal1s2c2Paterson = " ";
  let gal1s2c3Paterson = " ";
  let gal1s2c4Paterson = " ";
  
  if(col_gal1_choice === "one"){
    // Two columns{{{
    for(let j = 1; j <= gal1idNum; j += 2){
      let box = document.getElementById('gal1Link-' + j);
      if(box){
        //capture all the input fields{{{
          let gal1Image = document.getElementById('gal1Image-' + j).value; 
          let gal1Address = document.getElementById('gal1Address-' + j).value; 
        //}}}
     gal1Coder = `<a target="_blank"  href="${gal1Address}">
     <img src="${gal1Image}" >
    </a>\n`;

    gal1s1c1Paterson += gal1Coder;
      }
    }

    gal1s1c1Paterson = `<div class="asemanColumn">\n` + gal1s1c1Paterson + `</div>\n`;

    for(let j = 2; j <= gal1idNum; j += 2){
      let box = document.getElementById('gal1Link-' + j);
      if(box){
        //capture all the input fields{{{
          let gal1Image = document.getElementById('gal1Image-' + j).value; 
          let gal1Address = document.getElementById('gal1Address-' + j).value; 
        //}}}
     gal1Coder = `<a target="_blank"  href="${gal1Address}">
     <img src="${gal1Image}" >
    </a>\n`;

    gal1s1c2Paterson += gal1Coder;
      }
    }

    gal1s1c2Paterson = `<div class="asemanColumn">\n` + gal1s1c2Paterson + `</div>\n`;

    gal1Paterson += gal1s1c1Paterson + gal1s1c2Paterson;
    //}}}
  } else {
    // Four columns{{{
    for(let j = 1; j <= gal1idNum; j += 4){
      let box = document.getElementById('gal1Link-' + j);
      if(box){
        //capture all the input fields{{{
          let gal1Image = document.getElementById('gal1Image-' + j).value; 
          let gal1Address = document.getElementById('gal1Address-' + j).value; 
        //}}}
     gal1Coder = `<a target="_blank"  href="${gal1Address}">
     <img src="${gal1Image}" >
    </a>\n`;

    gal1s2c1Paterson += gal1Coder;
      }
    }

    gal1s2c1Paterson = `<div class="asemanColumn">\n` + gal1s2c1Paterson + `</div>\n`;

    for(let j = 2; j <= gal1idNum; j += 4){
      let box = document.getElementById('gal1Link-' + j);
      if(box){
        //capture all the input fields{{{
          let gal1Image = document.getElementById('gal1Image-' + j).value; 
          let gal1Address = document.getElementById('gal1Address-' + j).value; 
        //}}}
     gal1Coder = `<a target="_blank"  href="${gal1Address}">
     <img src="${gal1Image}" >
    </a>\n`;

    gal1s2c2Paterson += gal1Coder;
      }
    }

    gal1s2c2Paterson = `<div class="asemanColumn">\n` + gal1s2c2Paterson + `</div>\n`;

    for(let j = 3; j <= gal1idNum; j += 4){
      let box = document.getElementById('gal1Link-' + j);
      if(box){
        //capture all the input fields{{{
          let gal1Image = document.getElementById('gal1Image-' + j).value; 
          let gal1Address = document.getElementById('gal1Address-' + j).value; 
        //}}}
     gal1Coder = `<a target="_blank"  href="${gal1Address}">
     <img src="${gal1Image}" >
    </a>\n`;

    gal1s2c3Paterson += gal1Coder;
      }
    }

    gal1s2c3Paterson = `<div class="asemanColumn">\n` + gal1s2c3Paterson + `</div>\n`;

    for(let j = 4; j <= gal1idNum; j += 4){
      let box = document.getElementById('gal1Link-' + j);
      if(box){
        //capture all the input fields{{{
          let gal1Image = document.getElementById('gal1Image-' + j).value; 
          let gal1Address = document.getElementById('gal1Address-' + j).value; 
        //}}}
     gal1Coder = `<a target="_blank"  href="${gal1Address}">
     <img src="${gal1Image}" >
    </a>\n`;

    gal1s2c4Paterson += gal1Coder;
      }
    }

    gal1s2c4Paterson = `<div class="asemanColumn">\n` + gal1s2c4Paterson + `</div>\n`;

    gal1Paterson += gal1s2c1Paterson + gal1s2c2Paterson + gal1s2c3Paterson + gal1s2c4Paterson; 
    //}}}
  }

  gal1Paterson +=`</div>\n`;
  gal1Paterson += ender; 
  //}}}
  if(gal1Space)
      gal1Paterson = ahmadi + gal1Paterson + ahmadi;

  document.getElementById('generatedCode').textContent = gal1Paterson.trim();
  document.getElementById('preview').innerHTML = gal1Paterson;
}
//}}}
