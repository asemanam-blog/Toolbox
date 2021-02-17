  new ClipboardJS('.copymim');
  let idNum = 2;
  const poster = document.getElementById('monaGen');
// function code{{{

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
  // calDelMona function{{{

  function calDelMona(postName) {
    document.getElementById(postName).remove();
  }
  //}}}
  // addMonaBox function{{{
  function addMonaBox() {
    let ider = 'mona-' + idNum;
    let elementer = document.createElement('div');
    elementer.setAttribute('id', ider);
    elementer.classList.add('columns');
    elementer.style.width = "100%";
    elementer.style.marginBottom = "2em";
    elementer.style.marginTop = "1em";
    elementer.innerHTML =  `<div class="column col-1" style="padding: 0;">
      
      <button class="btn btn-light" style="width: 35px;height: 35px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16),0 2px 5px 0 rgba(0,0,0,0.12) !important;position: relative;top: 1.9em;" onclick="calDelMona('mona-${idNum}')">
          <i class="icon icon-minus"></i>
        </button>
      </div>

      <div class="column col-2">
      <label for="calAddNumer-${idNum}">
          روز:
        </label>
      <input name="calMonaNums" id="calAddNumber-${idNum}" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" type="number" placeholder="00" value="1">
      </div>
      <div class="column col-9">
      <label for="calAddDescription-${idNum}">
                مناسبت:
              </label>
      <input name="calMonaDescs" id="calAddDescription-${idNum}" type="text" class="form-input d-block" style="margin-bottom: 1em; margin-top: .5em;" placeholder="تولد دوست عزیز من">
      </div>`;
      poster.appendChild(elementer);
      idNum++;
  }
  //}}}
  //Generator logic{{{
    // dey 1399{{{

    const dey1399monthName = 'دی';
    const dey1399allNum = 30;
    const dey1399startDay = 3;
    const dey1399holidays = [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false,];

    const dey1399nums = ['۱', '۵', '۵', '۵', '۸', '۱۲', '۱۵', '۲۰', '۲۳', '۲۸',];
    const dey1399mona = [ ' روز میلاد خورشید؛ جشن خرم روز، نخستین جشن دیگان', ' سالروز زمین لرزه ی بم در سال 1382', ' جشن کریسمس [ 25 December ]', 'سالروز شهادت آشو زرتشت، اَبَراِنسان بزرگ تاریخ', ' دی به آذر روز، دومین جشن دیگان', 'جشن آغاز سال نو میلادی [ 1 January ]', 'دی به مهر روز، سومین جشن دیگان', 'سالروز قتل امیرکبیر به دستور ناصرالدین شاه قاجار', 'دی به دین روز، چهارمین جشن دیگان', '«تعطیل» شهادت حضرت فاطمه زهرا سلام الله علیها [ ٣ جمادي الثانيه ]', ];
    const dey1399holy = [ false, false, false, false, false, false, false, false, false, true,];
    //}}}
    // bahman{{{

    const bahman1399monthName = 'بهمن';
    const bahman1399allNum = 30;
    const bahman1399startDay = 5;
    const bahman1399holidays = [ false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, ];

    const bahman1399nums = [ '۱', '۲', '۵', '۱۰', '۱۲', '۱۵', '۱۵', '۱۹', '۲۲', '۲۳', '۲۴', '۲۵', '۲۶', '۲۷', '۲۹', ];
    const bahman1399mona = [ 'زادروز فردوسی', 'بهمن روز، جشن بهمنگان', 'جشن نوسره', 'جشن سده', ' بازگشت امام خمینی (ره) به ایران', 'جشن میانه زمستان', 'ولادت حضرت فاطمه زهرا سلام الله علیها و روز مادر [ ٢٠ جمادي الثانيه ]', ' روز نیروی هوایی', 'پیروزی انقلاب اسلامی', 'حمله به سفارت روسیه و قتل گریبایدوف سفیر روسیه تزاری در ایران [ 11 February ]', 'زادروز چارلز داروین بنیانگذار نظریه‌ی فرگشت از طریق انتخاب طبیعی [ 12 February ]', ' ولادت امام محمد باقر علیه السلام [ ١ رجب ]', ' روز ولنتاین [ 14 February ]', 'شهادت امام علی النقی الهادی علیه السلام [ ٣ رجب ]', 'جشن سپندارمذگان و روز عشق', ];
    const bahman1399holy = [ false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, ];
    //}}}
    // esfand{{{

    const esfand1399monthName = 'اسفند';
    const esfand1399allNum = 30;
    const esfand1399startDay = 7;
    const esfand1399holidays = [ false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, true, ];

    const esfand1399nums = [ '۳', '۴', '۵', '۵', '۷', '۷', '۷', '۹', '۱۵', '۱۸', '۱۹', '۲۱', '۲۵', '۲۷', '۲۸', '۲۹', '۲۹', '۳۰', '۳۰', ];
    const esfand1399mona = [ 'روز جهانی زبان مادری [ 21 February ]', ' ولادت امام محمد تقی علیه السلام [ ١٠ رجب ]', 'روز بزرگداشت زمین و بانوان', 'روز بزرگداشت خواجه نصیر الدین طوسی و روز مهندس', 'اسفند ولادت امام علی علیه السلام و روز پدر [ ١٣ رجب ]', 'سالروز استقلال کانون وکلای دادگستری و روز وکیل مدافع', 'سالروز درگذشت علی اکبر دهخدا', ' وفات حضرت زینب سلام الله علیها [ ١٥ رجب ]', ' روز درختکاری', ' روزجهانی زنان [ 8 March ]', ' شهادت امام موسی کاظم علیه السلام [ ٢٥ رجب ]', 'مبعث رسول اکرم [ ٢٧ رجب ]', 'پایان سرایش شاهنامه', ' ولادت سالار شهیدان، امام حسین علیه السلام و روز پاسدار [ ٣ شعبان ]', ' ولادت ابوالفضل العباس علیه السلام و روز جانباز [ ٤ شعبان ]', 'روز ملی شدن صنعت نفت ایران', ' ولادت امام زین العابدین علیه السلام [ ٥ شعبان ]', ' آخرین روز سال', ' روز جهانی شادی [ 20 March ]', ];

    const esfand1399holy = [ false, false, false, false, true, false, false, false, false, false, false, true, false, false, false, true, false, true, false, ];
    //}}}
    const days = [ '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲', '۱۳', '۱۴', '۱۵', '۱۶', '۱۷', '۱۸', '۱۹', '۲۰', '۲۱', '۲۲', '۲۳', '۲۴', '۲۵', '۲۶', '۲۷', '۲۸', '۲۹', '۳۰', '۳۱', ];
  //}}}
  function calGenerator() {
    //variables{{{
    let cal_choice_month;
    let cal_choice_month_all = document.getElementsByName('month');
    let customTextColor = document.getElementById('calCustomTextColor').value;
    let monthName;
    let allNums;
    let startDay;
    let holidays;
    let nums;
    let mona;
    let holy;
    let i;
    for(i = 0; i < cal_choice_month_all.length; i++) {
      if(cal_choice_month_all[i].checked) {
        cal_choice_month = cal_choice_month_all[i].value;
      }
    }
    
    switch (cal_choice_month) {
      case 'dey':
        monthName = dey1399monthName;
        allNums = dey1399allNum;
        startDay = dey1399startDay;
        holidays = dey1399holidays;
        nums = dey1399nums;
        mona = dey1399mona;
        holy = dey1399holy;
        break;
      case 'bahman':
        monthName = bahman1399monthName;
        allNums = bahman1399allNum;
        startDay = bahman1399startDay;
        holidays = bahman1399holidays;
        nums = bahman1399nums;
        mona = bahman1399mona;
        holy = bahman1399holy;
        break;
      case 'esfand':
        monthName = esfand1399monthName;
        allNums = esfand1399allNum;
        startDay = esfand1399startDay;
        holidays = esfand1399holidays;
        nums = esfand1399nums;
        mona = esfand1399mona;
        holy = esfand1399holy;
    }

    //}}}
    let patterson = `<!------ ابزار تقویم شمسی ۱۳۹۹ ------>
      <style> \n`;
    let gcode;
    let scripter;
    let coder;
    let coder_weekdays;
    let coder_footer = ' ';
    let Ti = [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',];
    let Ci = [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',];

    let startPlace = startDay - 1;
    for (let j = 0; j < allNums; j++) {
      Ti[startPlace] = days[j];
      if(holidays[j]) {
        Ci[startPlace] = 'holidayRed';
      }
      startPlace++;
    }

    let cal_type;
    let cal_type_all = document.getElementsByName('calAdType');
    for(i = 0; i < cal_type_all.length; i++) {
      if(cal_type_all[i].checked) {
        cal_type = cal_type_all[i].value;
      }
    }
    // capture fields{{{
      let jsEnable = document.getElementById('calAdjs').value;
      let cal_header_texture = document.getElementById('calHeaderTex').value;
      let cal_header_bg_color = document.getElementById('calHeaderBgColor').value;
      let cal_header_text_color = document.getElementById('calHeaderTextColor').value;

      let cal_days_texture = document.getElementById('calDaysTex').value;
      let cal_days_bg_color = document.getElementById('calDaysBgColor').value;
      let cal_days_text_color = document.getElementById('calDaysTextColor').value;

    // font part{{{
      let cal_font_choice;
      let cal_font_choice_all = document.getElementsByName('fn');
      for(i = 0; i < cal_font_choice_all.length; i++) {
        if(cal_font_choice_all[i].checked)
          cal_font_choice = cal_font_choice_all[i].value;
      }

// fonts{{{
    let codeSahel = `@font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('https://bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('https://bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('https://bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('https://bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('https://bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('https://bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('https://bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('https://bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('https://bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('https://bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('https://bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('https://bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('https://bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('https://bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('https://bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('https://bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('https://bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('https://bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('https://bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('https://bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('https://bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('https://bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('https://bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('https://bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('https://bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('https://bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('https://bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('https://bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('https://bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('https://bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('https://bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('https://bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('https://bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('https://bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: calfont
      src: url('https://bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('https://bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('https://bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('https://bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('https://bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('https://bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('https://bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('https://bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('https://bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('https://bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('https://bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('https://bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('https://bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('https://bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('https://bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('https://bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('https://bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('https://bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('https://bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('https://bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('https://bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('https://bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('https://bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('https://bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('https://bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('https://bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('https://bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('https://bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('https://bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('https://bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('https://bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: 'calfont';
      src: url('https://bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('https://bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('https://bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('https://bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('https://bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
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

      let all_added_mona_nums = document.getElementsByName('calMonaNums');
      let all_added_mona_descs = document.getElementsByName('calMonaDescs');
      const all_added_mona_nums_stack = [];
      const all_added_mona_descs_stack = [];
      
      for(i = 0; i < all_added_mona_nums.length; i++) {
        if(all_added_mona_nums[i].value && all_added_mona_descs[i].value) {
          all_added_mona_nums_stack.push(all_added_mona_nums[i].value);
          all_added_mona_descs_stack.push(all_added_mona_descs[i].value);
        }
      }
    // }}}
    
    if(cal_type === 'sidebar') {
// coder<!--{{{-->
      coder = `.calbolder {
  font-weight: bold;
}

.caldinline {
  display: inline;
}

.calSideDaysName:first-child {
    border-right: 1px solid #eee;
}

.calSideWeekNum:first-child {
    border-right: 1px solid #eee;
}

#calPostMonth h2 {
  color: ${cal_header_text_color};
}

#calPostYear h2 {
    color: ${cal_header_text_color};
    font-size: 2em;
}

.holidayRed {
  color: red !important;
}

.monaBlue {
  color: ${customTextColor};
}

#calWrap {
  max-width: 100%;
  font-family: 'calfont', serif !important;
  word-break: break-word;
  background: white;
  padding: 5px;
  margin-bottom: 50px;
  border-radius: 1em;
}

#calHeader {
  max-width: 100%;
  padding: 15px;
  background-color: ${cal_header_bg_color};
  color: ${cal_header_text_color};
  text-align: center;
  background-image: url('${cal_header_texture}');
  border-radius: .5em;
  border-top-right-radius: 1em;
  border-top-left-radius: 1em;
  margin-bottom: .5em;
}

#calPostMonth {
  display: inline;
}

#calPostMonth h2 {
  display: inline;
  font-size: 2em;
}

#calPostYear {
  display: inline;
}

#calPostYear h2 {
  display: inline;
}

#calBody {
    margin-bottom: 1em;
    text-align: center;
}

.calmonasebat.caldinline {
    margin-left: 1em;
}

#calFooter {
  line-height: 1.8;
  text-align: justify;
  font-size: .9em;
  padding: 5px;
}

.calSideDaysList {
  width: 100%;
  display: table;
}

.calSideDaysName {
  display: table-cell;
  width: 14%;
  padding: 4px 6px;
  border: 1px solid #eee;
  border-bottom: 0;
  border-right: 0;
  background-color: ${cal_days_bg_color};
  color: ${cal_days_text_color};
  border-top-right-radius: .3em;
  border-top-left-radius: .3em;
  background-image: url('${cal_days_texture}');
}

.calSideWeekDays {
  width: 100%;
  display: table;
}

.calSideWeekDays:last-child {
  border-bottom: 1px solid #eee;
}

.calSideWeekNum {
  display: table-cell;
  width: 12%;
  padding: 4px 6px;
  border: 1px solid #eee;
  border-bottom: 0;
  border-right: 0;
}

.calSideWeekNum:hover {
    background-color: #eee;
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

</style>

<div id="daytime" style="display: none;">(*now format="%e"*)</div>

<div id="calWrap">
  <div id="calHeader">
    <div id="calPostMonth">
      <h2 style="font-family: calfont, serif !important;">
(*now format="%e %B %Y"*)
      </h2>
    </div>
  </div>
  <div id="calBody">

    <div class="calSideDaysList">

      <div class="calSideDaysName">
        ش
      </div>
      <div class="calSideDaysName">
        ی
      </div>
      <div class="calSideDaysName">
        د
      </div>
      <div class="calSideDaysName">
        س
      </div>
      <div class="calSideDaysName">
        چ
      </div>
      <div class="calSideDaysName">
        پ
      </div>
      <div class="calSideDaysName">
        ج
      </div>

    </div>
`; 
//<!--}}}-->
// weekday{{{
coder_weekdays = `<div class="calSideWeekDays">

      <div name="bomb-1" class="calSideWeekNum ${Ci[0]}">
        ${Ti[0]}
      </div>
      <div name="bomb-2" class="calSideWeekNum ${Ci[1]}">
        ${Ti[1]}
      </div>
      <div name="bomb-3" class="calSideWeekNum ${Ci[2]}">
        ${Ti[2]}
      </div>
      <div name="bomb-4" class="calSideWeekNum ${Ci[3]}">
        ${Ti[3]}
      </div>
      <div name="bomb-5" class="calSideWeekNum ${Ci[4]}">
        ${Ti[4]}
      </div>
      <div name="bomb-6" class="calSideWeekNum ${Ci[5]}">
        ${Ti[5]}
      </div>
      <div name="bomb-7" class="calSideWeekNum holidayRed">
        ${Ti[6]}
      </div>

    </div>

    <div class="calSideWeekDays">

      <div name="bomb-8" class="calSideWeekNum ${Ci[7]}">
        ${Ti[7]}
      </div>
      <div name="bomb-9" class="calSideWeekNum ${Ci[8]}">
        ${Ti[8]}
      </div>
      <div name="bomb-10" class="calSideWeekNum ${Ci[9]}">
        ${Ti[9]}
      </div>
      <div name="bomb-11" class="calSideWeekNum ${Ci[10]}">
        ${Ti[10]}
      </div>
      <div name="bomb-12" class="calSideWeekNum ${Ci[11]}">
        ${Ti[11]}
      </div>
      <div name="bomb-13" class="calSideWeekNum ${Ci[12]}">
        ${Ti[12]}
      </div>
      <div name="bomb-14" class="calSideWeekNum holidayRed">
        ${Ti[13]}
      </div>

    </div>

    <div class="calSideWeekDays">

      <div name="bomb-15" class="calSideWeekNum ${Ci[14]}">
        ${Ti[14]}
      </div>
      <div name="bomb-16" class="calSideWeekNum ${Ci[15]}">
        ${Ti[15]}
      </div>
      <div name="bomb-17" class="calSideWeekNum ${Ci[16]}">
        ${Ti[16]}
      </div>
      <div name="bomb-18" class="calSideWeekNum ${Ci[17]}">
        ${Ti[17]}
      </div>
      <div name="bomb-19" class="calSideWeekNum ${Ci[18]}">
        ${Ti[18]}
      </div>
      <div name="bomb-20" class="calSideWeekNum ${Ci[19]}">
        ${Ti[19]}
      </div>
      <div name="bomb-21" class="calSideWeekNum holidayRed">
        ${Ti[20]}
      </div>

    </div>

    <div class="calSideWeekDays">

      <div name="bomb-22" class="calSideWeekNum ${Ci[21]}">
        ${Ti[21]}
      </div>
      <div name="bomb-23" class="calSideWeekNum ${Ci[22]}">
        ${Ti[22]}
      </div>
      <div name="bomb-24" class="calSideWeekNum ${Ci[23]}">
        ${Ti[23]}
      </div>
      <div name="bomb-25" class="calSideWeekNum ${Ci[24]}">
        ${Ti[24]}
      </div>
      <div name="bomb-26" class="calSideWeekNum ${Ci[25]}">
        ${Ti[25]}
      </div>
      <div name="bomb-27" class="calSideWeekNum ${Ci[26]}">
        ${Ti[26]}
      </div>
      <div name="bomb-28" class="calSideWeekNum holidayRed">
        ${Ti[27]}
      </div>

    </div>

    <div class="calSideWeekDays">

      <div name="bomb-29" class="calSideWeekNum ${Ci[28]}">
        ${Ti[28]}
      </div>
      <div name="bomb-30" class="calSideWeekNum ${Ci[29]}">
        ${Ti[29]}
      </div>
      <div name="bomb-31" class="calSideWeekNum ${Ci[30]}">
        ${Ti[30]}
      </div>
      <div name="bomb-32" class="calSideWeekNum ${Ci[31]}">
        ${Ti[31]}
      </div>
      <div name="bomb-33" class="calSideWeekNum ${Ci[32]}">
        ${Ti[32]}
      </div>
      <div name="bomb-34" class="calSideWeekNum ${Ci[33]}">
        ${Ti[33]}
      </div>
      <div name="bomb-35" class="calSideWeekNum holidayRed">
        ${Ti[34]}
      </div>

    </div>

    <div class="calSideWeekDays">

      <div name="bomb-36" class="calSideWeekNum ${Ci[35]}">
        ${Ti[35]}
      </div>
      <div name="bomb-37" class="calSideWeekNum ${Ci[36]}">
        ${Ti[36]}
      </div>
      <div name="bomb-38" class="calSideWeekNum ${Ci[37]}">
        ${Ti[37]}
      </div>
      <div name="bomb-39" class="calSideWeekNum ${Ci[38]}">
        ${Ti[38]}
      </div>
      <div name="bomb-40" class="calSideWeekNum ${Ci[39]}">
        ${Ti[39]}
      </div>
      <div name="bomb-41" class="calSideWeekNum ${Ci[40]}">
        ${Ti[40]}
      </div>
      <div name="bomb-42" class="calSideWeekNum holidayRed">
        ${Ti[41]}
      </div>

    </div>
<div>
  <h4 style="background-color: ${cal_header_bg_color};color: ${cal_header_text_color};background-image: url('${cal_header_texture}');border-radius: .3em;font-size: 1.1em; padding: 5px; border-top-right-radius: 0; border-top-left-radius: 0; font-family: calfont, serif !important;">
      ${monthName}
       ماه
    </h4>
      </div>

  </div>

  <div id="calFooter">\n`;
//}}}
// footer<!--{{{-->
let exampool;
let redSmile = [];
let rasmy = document.getElementById('calRasmi').checked;

if(rasmy) {
  for(let j = 0; j < holy.length; j++) {
       if(holy[j]) {
        redSmile[j] = 'holidayRed';
       } else {
        redSmile[j] = ' ';
       }
   }
  for(let j = 0; j < nums.length; j++)  {
     exampool = `\n<div class="calmonasebat caldinline ${redSmile[j]}">
       ${nums[j]}
 ⇽
  ${mona[j]}
    </div>\n`;
    coder_footer += exampool;
   }
}

if(all_added_mona_nums_stack && all_added_mona_descs_stack) {
  for(let j = 0; j < all_added_mona_nums_stack.length; j++) {
   exampool = `\n<div class="calmonasebat caldinline monaBlue">
       ${days[all_added_mona_nums_stack[j] - 1]}
 ⇽
  ${all_added_mona_descs_stack[j]}
    </div>\n`;
    coder_footer += exampool;
  }
}

const ender = `</div>
</div>
<!------ ابزار تقویم شمسی ۱۳۹۹ ------> \n`;
//<!--}}}-->
// scripter{{{
    scripter = `\<script\>
    let exactNum;
    const starter = ${startDay};
    const daytimer = document.getElementById('daytime').textContent;
    const diys = [ '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۱۰', '۱۱', '۱۲', '۱۳', '۱۴', '۱۵', '۱۶', '۱۷', '۱۸', '۱۹', '۲۰', '۲۱', '۲۲', '۲۳', '۲۴', '۲۵', '۲۶', '۲۷', '۲۸', '۲۹', '۳۰', '۳۱', ];
    for(let j = 0; j < diys.length; j++){
      if(daytimer === diys[j]){
        exactNum = j;
      }
    }
    let idName = exactNum + starter;
      document.getElementsByName('bomb-' + idName)[0].classList.add('selected');
      document.addEventListener("DOMContentLoaded", function() {
      document.getElementsByName('bomb-' + idName)[1].classList.add('selected');
      });
    \<\/script\>\n`;
//}}}
    
    patterson += coder;
    patterson += coder_weekdays;
    patterson += coder_footer;
    patterson += ender;

    if(document.getElementById('calAdjs').checked) {
      patterson += scripter;
    }

    if(document.getElementById('casSpace').checked) {
      let ahmadi = '<p>&nbsp;</p>';
      patterson = ahmadi + patterson + ahmadi;
    }

    document.getElementById('generatedCode').textContent = patterson.trim();
    document.getElementById('preview').innerHTML = patterson;
    } else {

// coder<!--{{{-->
      coder = `.calbolder {
  font-weight: bold;
}

.caldinline {
  display: inline;
}

.holidayRed {
  color: red !important;
}

.monaBlue {
  color: ${customTextColor};
}

#calPostMonth h2 {
  color: ${cal_header_text_color};
  font-size: 2em;
}

#calPostYear h2 {
    color: ${cal_header_text_color};
    font-size: 2em;
}

#calWrap {
  width: 100%;
  font-family: 'calfont', serif !important;
  word-break: break-word;
  background-color: white;
  border-radius: 1em;
}

#calHeader {
  max-width: 100%;
  padding: 15px;
  background-color: ${cal_header_bg_color};
  color: ${cal_header_text_color};
  text-align: center;
  background-image: url('${cal_header_texture}');
  border-radius: .5em;
  border-top-right-radius: 1em;
  border-top-left-radius: 1em;
  margin-bottom: .5em;
}

#calPostMonth {
  display: inline;
}

#calPostMonth h2 {
  display: inline;
}

#calPostYear {
  display: inline;
}

#calPostYear h2 {
  display: inline;
}

.calPostDays {
  display: table;
  width: 100%;
  font-size: 1.1em;
  text-align: center;
}

.calPostDayName {
  display: table-cell;
  width: 30%;
  padding: 10px;
  border: 1px solid #eee;
  background-color: ${cal_days_bg_color};
  color: ${cal_days_text_color};
  font-weight: bold;
  background-image: url('${cal_days_texture}');
  border-top-right-radius: .5em;
  border-bottom-right-radius: .5em;
}

.calPostWeekDay {
  display: table-cell;
  width: 12%;
  border: 1px solid #eee;
  border-right: 0;
  border-bottom: 0;
}

.calPostWeekDay:hover {
    background-color: #eee;
}

.calPostDays:last-child {
    border-bottom: 1px solid #eee;
}

#calBody {
    margin-bottom: 1em;
    text-align: center;
}

.calmonasebat.caldinline {
    margin-left: 1em;
}

#calFooter {
    line-height: 1.8;
    text-align: justify;
    padding: 5px;
}
</style>

<div id="calWrap">
  <div id="calHeader">
    <div id="calPostMonth">
      <h2 style="font-family: calfont, serif !important;">
        تقویم 
        ${monthName}
      </h2>
    </div>
    <div id="calPostYear">
      <h2 style="font-family: calfont, serif !important;">
        ۱۳۹۹
      </h2>
    </div>
  </div>
  <div id="calBody">

`; 
//<!--}}}-->
// weekday{{{
coder_weekdays = `

    <div class="calPostDays">
      <div class="calPostDayName">
        شنبه
      </div>

      <div class="calPostWeekDay ${Ci[0]}">
        ${Ti[0]} 
      </div>
      <div class="calPostWeekDay ${Ci[7]}">
        ${Ti[7]}
      </div>
      <div class="calPostWeekDay ${Ci[14]}">
        ${Ti[14]}
      </div>
      <div class="calPostWeekDay ${Ci[21]}">
        ${Ti[21]}
      </div>
      <div class="calPostWeekDay ${Ci[28]}">
        ${Ti[28]}
      </div>
      <div class="calPostWeekDay ${Ci[35]}">
        ${Ti[35]}
      </div>
    </div>

    <div class="calPostDays">
      <div class="calPostDayName">
        یکشنبه
      </div>

      <div class="calPostWeekDay ${Ci[1]}">
        ${Ti[1]}
      </div>
      <div class="calPostWeekDay ${Ci[8]}">
        ${Ti[8]}
      </div>
      <div class="calPostWeekDay ${Ci[15]}">
        ${Ti[15]}
      </div>
      <div class="calPostWeekDay ${Ci[22]}">
        ${Ti[22]}
      </div>
      <div class="calPostWeekDay ${Ci[29]}">
        ${Ti[29]}
      </div>
      <div class="calPostWeekDay ${Ci[36]}">
        ${Ti[36]}
      </div>
    </div>

    <div class="calPostDays">
      <div class="calPostDayName">
        دوشنبه
      </div>

      <div class="calPostWeekDay ${Ci[2]}">
        ${Ti[2]}
      </div>
      <div class="calPostWeekDay ${Ci[9]}">
        ${Ti[9]}
      </div>
      <div class="calPostWeekDay ${Ci[16]}">
        ${Ti[16]}
      </div>
      <div class="calPostWeekDay ${Ci[23]}">
        ${Ti[23]}
      </div>
      <div class="calPostWeekDay ${Ci[30]}">
        ${Ti[30]}
      </div>
      <div class="calPostWeekDay ${Ci[37]}">
        ${Ti[37]}
      </div>
    </div>

    <div class="calPostDays">
      <div class="calPostDayName">
        سه‌شنبه
      </div>

      <div class="calPostWeekDay ${Ci[3]}">
        ${Ti[3]}
      </div>
      <div class="calPostWeekDay ${Ci[10]}">
        ${Ti[10]}
      </div>
      <div class="calPostWeekDay ${Ci[17]}">
        ${Ti[17]}
      </div>
      <div class="calPostWeekDay ${Ci[24]}">
        ${Ti[24]}
      </div>
      <div class="calPostWeekDay ${Ci[31]}">
        ${Ti[31]}
      </div>
      <div class="calPostWeekDay ${Ci[38]}">
        ${Ti[38]}
      </div>
    </div>

    <div class="calPostDays">
      <div class="calPostDayName">
        چهارشنبه
      </div>

      <div class="calPostWeekDay ${Ci[4]}">
        ${Ti[4]}
      </div>
      <div class="calPostWeekDay ${Ci[11]}">
        ${Ti[11]}
      </div>
      <div class="calPostWeekDay ${Ci[18]}">
        ${Ti[18]}
      </div>
      <div class="calPostWeekDay ${Ci[25]}">
        ${Ti[25]}
      </div>
      <div class="calPostWeekDay ${Ci[32]}">
        ${Ti[32]}
      </div>
      <div class="calPostWeekDay ${Ci[39]}">
        ${Ti[39]}
      </div>
    </div>

    <div class="calPostDays">
      <div class="calPostDayName">
        پنجشنبه
      </div>

      <div class="calPostWeekDay ${Ci[5]}">
        ${Ti[5]}
      </div>
      <div class="calPostWeekDay ${Ci[12]}">
        ${Ti[12]}
      </div>
      <div class="calPostWeekDay ${Ci[19]}">
        ${Ti[19]}
      </div>
      <div class="calPostWeekDay ${Ci[26]}">
        ${Ti[26]}
      </div>
      <div class="calPostWeekDay ${Ci[33]}">
        ${Ti[33]}
      </div>
      <div class="calPostWeekDay ${Ci[40]}">
        ${Ti[40]}
      </div>
    </div>

    <div class="calPostDays">
      <div class="calPostDayName">
        جمعه
      </div>

      <div class="calPostWeekDay holidayRed">
        ${Ti[6]}
      </div>
      <div class="calPostWeekDay holidayRed">
        ${Ti[13]}
      </div>
      <div class="calPostWeekDay holidayRed">
        ${Ti[20]}
      </div>
      <div class="calPostWeekDay holidayRed">
        ${Ti[27]}
      </div>
      <div class="calPostWeekDay holidayRed">
        ${Ti[34]}
      </div>
      <div class="calPostWeekDay holidayRed">
        ${Ti[41]}
      </div>
    </div>
  </div>

  <div id="calFooter">\n`;
//}}}
// footer<!--{{{-->
let exampool;
let redSmile = [];
let rasmy = document.getElementById('calRasmi').checked;

if(rasmy) {
  for(let j = 0; j < holy.length; j++) {
       if(holy[j]) {
        redSmile[j] = 'holidayRed';
       } else {
        redSmile[j] = ' ';
       }
   }
  for(let j = 0; j < nums.length; j++)  {
     exampool = `\n<div class="calmonasebat caldinline ${redSmile[j]}">
       ${nums[j]}
 ⇽
  ${mona[j]}
    </div>\n`;
    coder_footer += exampool;
   }
}

if(all_added_mona_nums_stack && all_added_mona_descs_stack) {
  for(let j = 0; j < all_added_mona_nums_stack.length; j++) {
   exampool = `\n<div class="calmonasebat caldinline monaBlue">
       ${days[all_added_mona_nums_stack[j] - 1]}
 ⇽
  ${all_added_mona_descs_stack[j]}
    </div>\n`;
    coder_footer += exampool;
  }
}

const ender = `</div>
</div>
<!------ ابزار تقویم شمسی ۱۳۹۹ ------> \n`;
//<!--}}}-->

    patterson += coder;
    patterson += coder_weekdays;
    patterson += coder_footer;
    patterson += ender;

    if(document.getElementById('casSpace').checked) {
      let ahmadi = '<p>&nbsp;</p>';
      patterson = ahmadi + patterson + ahmadi;
    }

    document.getElementById('generatedCode').textContent = patterson.trim();
    document.getElementById('preview').innerHTML = patterson;
    }                                                                                                                                  

  }
// Enter key logic <!--{{{-->
  let usopp = document.getElementsByName('calMonaDescs');
  
  for(let j = 0; j < usopp.length; j++) {
    usopp[j].addEventListener("keyup", function(event){
      if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById('addMBox').click();
      }
    });

  usopp = document.getElementsByName('calMonaDescs');
  }
// Enter key logic <!--}}}-->
