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

function vtGenerator() {
  const vfat = document.getElementsByName('vtcheck');
  let vfmain = document.getElementById('vfnameMain').value;
  let vfogg  = document.getElementById('vfnameogg').value;
  let vfwebm = document.getElementById('vfnamewebm').value;
  let space = document.getElementById('space');
  let gatcode = "";

  if(vfmain || vfogg || vfwebm) {
    document.getElementById('vtgenerator').classList.remove('has-error');
    document.getElementById('vtgenerator').classList.add('has-success');

    // attributes{{{
    let codeControl = 'controls="controls" '
    let codeAutoplay = 'autoplay="autoplay" '
    let codeLoop = 'loop="loop" '
    let codePreload = 'preload="preload" '

    for(let i = 0; i < vfat.length; i++) {
      if(vfat[i].checked){
        switch(vfat[i].value) {
      //{{{
          case 'control':
            gatcode += codeControl;
            break;
          case 'autoplay':
            gatcode += codeAutoplay;
            break;
          case 'loop':
            gatcode += codeLoop;
            break;
          case 'preload':
            gatcode += codePreload;
      //}}}
        }
      }
    }

    gatcode = gatcode.trim();
    //}}}
      // width and ...{{{
      let width, smooth, atext, src, patternMain; 
      let vfwidth = document.getElementById('vfwidth').value;
      let vftext = document.getElementById('vftext').value;
      let vfsmooth = document.getElementById('smooth');

      if(vfwidth) {
        width = 'width: ' + vfwidth + ';';
      } else {
        width = "";
      }
      
      if(vfsmooth.checked) {
        smooth = 'border-radius: 5em;';
      } else {
        smooth = '';
      }

      if(vftext) {
        atext = vftext;
      } else {
        atext = "";
      }
//}}}

    if(vfmain && vfogg || vfmain && vfwebm || vfogg && vfwebm) {
      // files code{{{
      if(vfmain) {
        vfmain = '<source src="' + vfmain + '" type="audio/mp3">\n';
      } else {
        vfmain = "";
      }

      if(vfogg && vfwebm) {
        vfogg = '<source src="' + vfogg + '" type="audio/ogg">\n';
      } else if (!vfwebm) {
        vfogg = '<source src="' + vfogg + '" type="audio/ogg">';
      } else {
        vfogg = "";
      }

      if(vfwebm) {
        vfwebm = '<source src="' + vfwebm + 'type="audio/wav">';
      } else {
        vfwebm = "";
      }
//}}}

      if(space.checked) {
        patternMain =  `<p>&nbsp;</p>
<audio style="${width} ${smooth}" ${gatcode}>
  ${vfmain} ${vfogg} ${vfwebm}
  ${atext}
</audio>
<p>&nbsp;</p>`; 
      } else {
patternMain =  `<audio style="${width} ${smooth}" ${gatcode}>
  ${vfmain} ${vfogg} ${vfwebm}
  ${atext}
</audio>`; 
      }
    } else {
      // files code{{{
      if(vfmain) {
        src = vfmain;
      } else if(vfogg) {
        src = vfogg;
      } else if(vfwebm) {
        vfwebm = vfwebm;
      }
//}}}
      if(space.checked) {
        patternMain = `<p>&nbsp;</p>
<audio src="${src}" style="${width} ${smooth}" ${gatcode}> </audio>
<p>&nbsp;</p>`;
      } else {
        patternMain = `<audio src="${src}" style="${width} ${smooth}" ${gatcode}> </audio>`;
      }
    }


    document.getElementById('generatedCode').textContent = patternMain.trim();
    document.getElementById('vtPreview').innerHTML = patternMain;

  } else {
    
    document.getElementById('vtgenerator').classList.add('has-error');
  }
  
}
