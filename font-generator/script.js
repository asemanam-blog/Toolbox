  new ClipboardJS('.copymim');

// function code{{{
function fontGenerator1() {
  const readyFonts = document.getElementsByName('fn');
  let fontName = document.getElementById('fname').value;
  let gcode = "";

  if(fontName) {
    document.getElementById('fgenerator').classList.remove('has-error');
    document.getElementById('fgenerator').classList.add('has-success');

    // fonts{{{
    let codeSahel = `@font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot');
      src: url('//bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/369269427634872660/Sahel.woff2') format('woff2'),
           url('//bayanbox.ir/download/170849866728974209/Sahel.woff') format('woff'),
           url('//bayanbox.ir/download/7647040835641858110/Sahel.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot');
      src: url('//bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot');
      src: url('//bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3887856610465830487/Sahel-Light.woff') format('woff'),
           url('//bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot');
      src: url('//bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff') format('woff'),
           url('//bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf') format('truetype');
      font-weight: 600;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot');
      src: url('//bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/425330091083841669/Sahel-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/544990584268099048/Sahel-Black.woff') format('woff'),
           url('//bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeEstedad = `@font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/7229065351789228441/Estedad-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/5964064727761107919/Estedad-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/4706008847631740894/Estedad-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/4199606498735587208/Estedad-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/2401577679731551133/Estedad-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/8910074916671737446/Estedad-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/440578148748782943/Estedad-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/3394188548996175807/Estedad-Light.woff') format('woff'),
           url('//bayanbox.ir/download/7024357422257652821/Estedad-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/4755912241818113617/Estedad-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3729655252517301574/Estedad-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/4706824288744683568/Estedad-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/7264348870941121474/Estedad-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2054550866280388657/Estedad-Black.woff') format('woff'),
           url('//bayanbox.ir/download/3242088144867282409/Estedad-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeGandom = `@font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot');
      src: url('//bayanbox.ir/download/5951560974950976253/Gandom.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/7158980145103763633/Gandom.woff2') format('woff2'),
           url('//bayanbox.ir/download/7034607442957864942/Gandom.woff') format('woff'),
           url('//bayanbox.ir/download/8877035923866158099/Gandom.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeVazir = `@font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot');
      src: url('//bayanbox.ir/download/4827310715344697348/Vazir.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/9079346587792044865/Vazir.woff2') format('woff2'),
           url('//bayanbox.ir/download/8618153108850776974/Vazir.woff') format('woff'),
           url('//bayanbox.ir/download/8657326714357973781/Vazir.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot');
      src: url('//bayanbox.ir/download/3127900390656889313/Vazir-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/5063798073756651715/Vazir-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/4210439832040483/Vazir-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/6689263819179841112/Vazir-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: ${fontName}
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot');
      src: url('//bayanbox.ir/download/4788108570966676489/Vazir-Thin.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8291707899487589516/Vazir-Thin.woff2') format('woff2'),
           url('//bayanbox.ir/download/4891302480295056655/Vazir-Thin.woff') format('woff'),
           url('//bayanbox.ir/download/7694252029990167982/Vazir-Thin.ttf') format('truetype');
      font-weight: 100;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot');
      src: url('//bayanbox.ir/download/2145901445273298749/Vazir-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/480789687696406702/Vazir-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/8034585666937353743/Vazir-Light.woff') format('woff'),
           url('//bayanbox.ir/download/3663169406797095077/Vazir-Light.ttf') format('truetype');
      font-weight: 300;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot');
      src: url('//bayanbox.ir/download/268780843901925913/Vazir-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8925194329199670169/Vazir-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/3398576698258263885/Vazir-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/1188790689842971969/Vazir-Medium.ttf') format('truetype');
      font-weight: 500;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot');
      src: url('//bayanbox.ir/download/5301377955093925764/Vazir-Black.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/2797256569259906116/Vazir-Black.woff2') format('woff2'),
           url('//bayanbox.ir/download/2098427805263518896/Vazir-Black.woff') format('woff'),
           url('//bayanbox.ir/download/7879127803118434964/Vazir-Black.ttf') format('truetype');
      font-weight: 900;
    }\n\n`;
    let codeTanha = `@font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot');
      src: url('//bayanbox.ir/download/4283813783520695778/Tanha.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8355624978044358298/Tanha.woff2') format('woff2'),
           url('//bayanbox.ir/download/3745008623210693287/Tanha.woff') format('woff'),
           url('//bayanbox.ir/download/307780555297967699/Tanha.ttf') format('truetype');
      font-weight: normal;
    }\n\n`;
    let codeSamim = `@font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot');
      src: url('//bayanbox.ir/download/3288979502621362699/Samim.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1330485846507218831/Samim.woff2') format('woff2'),
           url('//bayanbox.ir/download/5498234319773606817/Samim.woff') format('woff'),
           url('//bayanbox.ir/download/5158595780113274685/Samim.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot');
      src: url('//bayanbox.ir/download/6031674416168132834/Samim-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/6253351407518428808/Samim-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/1766626631351543219/Samim-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/3711583956320459853/Samim-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot');
      src: url('//bayanbox.ir/download/809807358508061526/Samim-Medium.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/1491854791857769154/Samim-Medium.woff2') format('woff2'),
           url('//bayanbox.ir/download/6210185130357835581/Samim-Medium.woff') format('woff'),
           url('//bayanbox.ir/download/5059576223412133120/Samim-Medium.ttf') format('truetype');
      font-weight: 500;
    }\n\n`;
    let codeShabnam = `@font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot');
      src: url('//bayanbox.ir/download/518006874442269860/Shabnam.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/3946638059260645630/Shabnam.woff2') format('woff2'),
           url('//bayanbox.ir/download/403551674795643717/Shabnam.woff') format('woff'),
           url('//bayanbox.ir/download/9192777214826533716/Shabnam.ttf') format('truetype');
      font-weight: normal;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot');
      src: url('//bayanbox.ir/download/5872406951715889120/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/4648389630524582840/Shabnam-Bold.woff2') format('woff2'),
           url('//bayanbox.ir/download/7035566593386297368/Shabnam-Bold.woff') format('woff'),
           url('//bayanbox.ir/download/8954537497289677592/Shabnam-Bold.ttf') format('truetype');
      font-weight: bold;
    }

    @font-face {
      font-family: '${fontName}';
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot');
      src: url('//bayanbox.ir/download/6082484685282823413/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
           url('//bayanbox.ir/download/8486791504106884669/Shabnam-Light.woff2') format('woff2'),
           url('//bayanbox.ir/download/7602238239672903600/Shabnam-Light.woff') format('woff'),
           url('//bayanbox.ir/download/6463550134959388265/Shabnam-Light.ttf') format('truetype');
      font-weight: 300;
    }\n\n`;
//}}}

    for(let i = 0; i < readyFonts.length; i++) {
      if(readyFonts[i].checked){
        switch(readyFonts[i].value) {
//{{{
          case 'sahel':
            gcode += codeSahel;
            break;
          case 'estedad':
            gcode += codeEstedad;
            break;
          case 'gandom':
            gcode += codeGandom;
            break;
          case 'vazir':
            gcode += codeVazir;
            break;
          case 'tanha':
            gcode += codeTanha;
            break;
          case 'samim':
            gcode += codeSamim;
            break;
          case 'shabnam':
            gcode += codeShabnam;
//}}}
        }
      }
    }

    document.getElementById('generatedCode').textContent = gcode.trim();

  } else {
    //let god = document.createElement('p');
    //let crea = document.createTextNode('نام فونت را وارد کنید!');
    //god.appendChild(crea);
    //god.classList.toggle('form-input-hint');
    
    document.getElementById('fgenerator').classList.add('has-error');
  }
  
}
// function code}}}
