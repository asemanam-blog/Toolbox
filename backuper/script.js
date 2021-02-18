<!--logic--><!--{{{-->
  const fileSelector = document.getElementById('file-selector');
  const content = document.getElementById('content');
  //Theme style wbStyle{{{
  const wbStyle = `@font-face{font-family:sahel;src:url(http://bayanbox.ir/download/919886705665374178/Sahel.eot);src:url(http://bayanbox.ir/download/919886705665374178/Sahel.eot?#iefix) format('embedded-opentype'),url(http://bayanbox.ir/download/369269427634872660/Sahel.woff2) format('woff2'),url(http://bayanbox.ir/download/170849866728974209/Sahel.woff) format('woff'),url(http://bayanbox.ir/download/7647040835641858110/Sahel.ttf) format('truetype');font-weight:400}@font-face{font-family:sahel;src:url(http://bayanbox.ir/download/709884648622908642/Sahel-Bold.eot);src:url(http://bayanbox.ir/download/709884648622908642/Sahel-Bold.eot?#iefix) format('embedded-opentype'),url(http://bayanbox.ir/download/5068651307526560092/Sahel-Bold.woff2) format('woff2'),url(http://bayanbox.ir/download/3922379025974558251/Sahel-Bold.woff) format('woff'),url(http://bayanbox.ir/download/4100737264156121493/Sahel-Bold.ttf) format('truetype');font-weight:700}@font-face{font-family:sahel;src:url(http://bayanbox.ir/download/8448688790896899538/Sahel-Light.eot);src:url(http://bayanbox.ir/download/8448688790896899538/Sahel-Light.eot?#iefix) format('embedded-opentype'),url(http://bayanbox.ir/download/1882535583685963055/Sahel-Light.woff2) format('woff2'),url(http://bayanbox.ir/download/3887856610465830487/Sahel-Light.woff) format('woff'),url(http://bayanbox.ir/download/1297985578615747329/Sahel-Light.ttf) format('truetype');font-weight:300}@font-face{font-family:sahel;src:url(http://bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot);src:url(http://bayanbox.ir/download/771749534225091192/Sahel-SemiBold.eot?#iefix) format('embedded-opentype'),url(http://bayanbox.ir/download/522421405705684235/Sahel-SemiBold.woff2) format('woff2'),url(http://bayanbox.ir/download/1779843738826698288/Sahel-SemiBold.woff) format('woff'),url(http://bayanbox.ir/download/5257983568675665773/Sahel-SemiBold.ttf) format('truetype');font-weight:600}@font-face{font-family:sahel;src:url(http://bayanbox.ir/download/382602697786892261/Sahel-Black.eot);src:url(http://bayanbox.ir/download/382602697786892261/Sahel-Black.eot?#iefix) format('embedded-opentype'),url(http://bayanbox.ir/download/425330091083841669/Sahel-Black.woff2) format('woff2'),url(http://bayanbox.ir/download/544990584268099048/Sahel-Black.woff) format('woff'),url(http://bayanbox.ir/download/2008733210309004007/Sahel-Black.ttf) format('truetype');font-weight:900}body,html{height:100%;width:100%;margin:0;padding:0;left:0;top:0;font-size:16px;font-family:sahel,serif}html{background-color:#f8f9fa}body{overflow-x:hidden}h1,h2,h3,h4,h5,h6{font-family:sahel,serif;color:inherit;margin-bottom:.5em;margin-top:0}audio,video{max-width:100%}body{background-image:linear-gradient(to bottom,#fff 1%,#f8f9fa 40%,#f8f9fa 90%,#f8f9fa 100%)}img{max-width:100%}*{color:#333447;line-height:1.5;box-sizing:border-box;margin:0;padding:0}a{text-decoration:none;color:#0645ad}.wb-sidebar{margin-right:10px;margin-left:10px}.bAvatar img{padding:10px}.bTitle{margin-top:10px;margin-bottom:15px;font-size:25pt;display:inline-block;margin-left:10px!important;font-weight:700}.wb-content{border:1px solid #a7d7f9;border-left-width:0;background-color:#fff;padding:10px;margin-top:-1px;padding-right:1.5em;padding-left:1.5em;padding-bottom:1.5em}ul.wb-top-menu{list-style:none;float:right;margin:0;padding:0;height:100%}.wb-top-menu li{display:block;background-image:linear-gradient(to top,#77c1f6 0,#e8f2f8 1px,#fff 100%);background-position:left bottom;background-repeat:repeat-x;padding-top:1em;float:right;height:100%;margin:0;padding:0;line-height:1.125em;white-space:nowrap}.wb-top-menu li.selected{background:#fff}.wb-top-menu li.selected a{color:#202122}.wb-top-menu li a{background-image:linear-gradient(to bottom,rgba(167,215,249,0) 0,#a7d7f9 100%);background-repeat:no-repeat;background-size:1px 100%;display:block;float:right;height:3.2em;position:relative;padding-top:1em;padding-left:8px;padding-right:8px;cursor:pointer;background-position:left bottom;color:#0645ad}.wb-post-list-title h2{font-size:18px;display:inline;padding-left:5px}.wb-post-list-title{position:relative;background:#b3ccff;height:30px;margin:1em 0;border-radius:10px;margin-bottom:5px}.tIcon img{position:relative;bottom:5px}.wp-post-list-catalist{position:absolute;top:-4px;right:3px}.wb-post-summary{padding:0 10px;text-align:justify}.wb-post-list-item{margin-bottom:60px}.d-block{display:block}.wb-slogan.center{margin-bottom:10px;display:inline-block}.wb-sidekick{margin-right:10px;margin-left:10px;margin-bottom:30px}.blog-desc{text-align:justify;font-size:15px;line-height:1.55;font-weight:lighter}.bAvatar{margin-bottom:.5em}.search-box{margin-top:0;position:relative;top:15px;background:#fff;border:1px solid #a2a9b1}.search-box .submit{background:no-repeat center/1.23076923em url(http://bayanbox.ir/download/6638811085461315912/search.svg);opacity:.67;background-size:17px;background-position:40% 45%}.search-box input.text{position:relative;bottom:3px;color:#000;font-family:sahel,serif}.wb-system-messages{width:100%;margin:10px}.wb-system-messages-item{border-radius:.1rem;color:#fff;display:block;padding:.4rem;width:100%}.wb-system-messages.success{background:rgba(50,182,67,.95);border-color:#32b643}.wb-system-messages.wrn{background:rgba(255,183,0,.95);border-color:#ffb700}.wb-system-messages.err{background:rgba(232,86,0,.95);border-color:#e85600}.wb-categories h3{display:block;background-image:linear-gradient(to left,rgba(200,204,209,0) 0,#c8ccd1 33%,#c8ccd1 66%,rgba(200,204,209,0) 100%);background-position:center bottom;background-repeat:no-repeat;background-size:100% 1px;color:#54595d;margin:.5em .66666667em 0 0;border:0;padding:.25em 0;font-size:1em;font-weight:400;cursor:default}.wb-categories div{margin:0;padding-top:.3em;margin-right:10px}.wb-categories div a{margin:0;padding:.2em 0;font-size:14px;line-height:1.7;word-wrap:break-word;display:block;color:#0645ad}.wb-post-list-detail{margin-bottom:1em;margin-right:10px}.wb-post-list-author{display:inline-block;font-size:14px}.wb-post-list-author img{width:21px}.wb-post-list-author span{color:#999ca2}.wb-post-list-date{display:inline-block;margin-right:10px;font-size:14px}.wb-post-list-date img{width:21px}.wb-post-list-date span{color:#999ca2}.wb-continue{font-weight:700;display:block;margin:.7em .5em;color:#0981c4;float:right}.wb-pagination{padding:10px;font-weight:700}.wb-new{float:right;color:#000}.wb-old{float:left;color:#000}.wb-pagination div.clear{margin-bottom:1.5em}.wb-post-detail{padding:1em 0 0}.wb-post-detail h1{font-size:1.7em;font-weight:600;border-bottom:1px solid #a2a9b1;line-height:1.9}.wb-post-detail h2,h3{border-bottom:1px solid #a2a9b1;line-height:1.9}.wb-post-detail .wb-post-list-detail{margin-top:5px}.wb-page-detail h1{margin-bottom:.5em;font-size:1.9em}.wp-post-list-catalist a{color:#202122}.wb-rating{float:left}.wb-clear{clear:both}.rate-button-box.rate-up{margin-left:10px}.rate-down.rated .rate-counter{color:#ffa502}.rate-up.rated .rate-counter{color:#4cd137}.label{background:#eef0f3;border-radius:.1rem;color:#455060;display:inline-block;line-height:1.25;padding:.1rem .2rem}.mx-1{margin-left:.2rem!important;margin-right:.2rem!important}.wb-continue-sectioner{background-color:#f8f9fa;margin-top:2em;margin-bottom:1em}.wb-continue-sectioner .wb-rating{margin-left:10px}.wb-comm-first-col img{border-radius:50%;border:2px solid #a7d7f9;position:relative;top:-15px;right:-15px}.wb-comm-first-col span{position:relative;bottom:7px;left:10px;font-weight:600}.wb-comm-first-col a{position:relative;bottom:7px;left:10px;color:#0981c4;font-weight:600}.wb-comm-first-col{height:50px}.wb-comm-second-col p{margin-bottom:1rem;text-align:justify}.wb-comm-second-col{margin-top:.5rem;padding-right:1.3rem;padding-left:1.3rem}.wb-comment-section-all{padding-right:10px;padding-left:10px}.wb-comm-third-col span{color:#999ca2}.wb-comm-third-col{padding:10px;display:inline-block;position:relative;background-color:#fff;z-index:1;border-radius:100%}.wb-comment-section{border:1px solid #a7d7f9;border-radius:20px;border-top-right-radius:25px;margin:60px auto;box-shadow:0 4px 15px #999ca2;width:80%;margin-top:35px}.wb-comm-reply-sep{height:2px;background-color:#a7d7f9;margin-right:20px;margin-left:10px;position:relative;top:-23px}.wb-comm-reply-name{color:#0981c4;position:relative;text-align:center;top:-5px;font-weight:600}.wb-comm-reply-text{padding-right:30px;padding-left:30px;text-align:justify;font-weight:300;line-height:1.9;position:relative;top:-5px;padding-bottom:35px;padding-top:15px}.formField2 label{float:unset;width:unset;text-align:right;display:block;padding-right:5px;padding-bottom:10px}.formField2 .fldcontent{margin-right:unset}.fldcontent select:not([multiple]):not([size]),.form-select:not([multiple]):not([size]){background:#fff url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E") no-repeat right .35rem center/.4rem .5rem;padding-right:1.2rem}.fldcontent select,.form-select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;border:.05rem solid #bcc3ce;border-radius:.1rem;color:inherit;font-size:.8rem;height:1.8rem;line-height:1.2rem;outline:0;padding:.25rem .4rem;padding-right:.4rem;vertical-align:middle;width:100%}.fldcontent input[readonly][type=text],.fldcontent textarea[readonly],.form-input[readonly],.inputFix input[readonly][type=text]{background-color:#f7f8f9}.fldcontent input[type=text],.fldcontent textarea,.form-input,.inputFix input[type=text]{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#fff;background-color:#fff;background-image:none;background-image:none;border:.05rem solid #bcc3ce;border-radius:.1rem;color:#3b4351;display:block;font-size:.8rem;height:1.8rem;line-height:1.2rem;max-width:100%;outline:0;padding:.25rem .4rem;position:relative;transition:background .2s,border .2s,box-shadow .2s,color .2s;width:100%}.formField2 .fldcontent label{display:inline}.fldcontent textarea{height:10em}#captchaInput{margin-bottom:.6rem}.formField2{padding-top:1.3em}.wb-comment-add{border-radius:20px;border-top-right-radius:20px;border-top-right-radius:25px;margin:40px auto;width:80%}#bComSub{margin-top:0;padding:10px;padding-left:7px;padding-top:6px}li{margin-right:15px}.wb-tags span{padding:.2em .9em;background-color:#f8f9fa;display:inline-block;font-weight:700;border:1px solid #c8ced7}.wb-tags{display:block;margin-top:2em}.wb-tag-item{display:inline-block;padding:.2em .4em;margin-right:.1em;margin-left:.1em;background-color:#f8f9fa}.wb-post-list-date span a{color:#999ca2}.wb-ads h3,.wb-stats h3,.wb-tag-cloud h3{display:block;background-image:linear-gradient(to left,rgba(200,204,209,0) 0,#c8ccd1 33%,#c8ccd1 66%,rgba(200,204,209,0) 100%);background-position:center bottom;background-repeat:no-repeat;background-size:100% 1px;color:#54595d;margin:.5em .66666667em 0 0;border:0;padding:.25em 0;font-size:1em;font-weight:400;cursor:default}.wb-stat-value span{color:#54595d;float:left;padding-top:10px}.wb-stat-name span{color:#54595d;font-size:14px;float:right;padding-top:10px}.wb-tag-link{display:inline-block;margin-left:3px;margin-bottom:5px}.wb-ad-item{margin:10px 0}.wb-footer{border-top:1px solid #a2a9b1;width:90%;margin-top:5em;padding:2em;text-align:center}.wb-bayan span,.wb-copyright,.wb-mimr{display:block;margin-bottom:5px}.wb-mimr{float:left}.wb-bayan{float:right}.wb-bayan svg,.wb-copyright svg,.wb-mimr svg{position:relative;top:5px}div.wb-category-children{margin-right:15px}#followersLs{width:160px;margin-right:auto;margin-left:auto}.wb-follow{margin-bottom:30px}.wb-full-page p,.wb-full-post p{text-align:justify}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.3rem}h4{font-size:1.15rem}h5{font-size:1rem}h6{font-size:.875rem}p{font-weight:300;line-height:1.9;margin:0 0 1.2rem}.center{text-align:center;margin-left:auto;margin-right:auto}.container,.container-fluid{margin-right:auto;margin-left:auto}.container-fluid{padding-right:2rem;padding-left:2rem}.row{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:0;-ms-flex:0 1 auto;flex:0 1 auto;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.col-xs,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-offset-0,.col-xs-offset-1,.col-xs-offset-10,.col-xs-offset-11,.col-xs-offset-12,.col-xs-offset-2,.col-xs-offset-3,.col-xs-offset-4,.col-xs-offset-5,.col-xs-offset-6,.col-xs-offset-7,.col-xs-offset-8,.col-xs-offset-9{box-sizing:border-box;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.col-xs{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-xs-1{-ms-flex-preferred-size:8.33333333%;flex-basis:8.33333333%;max-width:8.33333333%}.col-xs-2{-ms-flex-preferred-size:16.66666667%;flex-basis:16.66666667%;max-width:16.66666667%}.col-xs-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-xs-4{-ms-flex-preferred-size:33.33333333%;flex-basis:33.33333333%;max-width:33.33333333%}.col-xs-5{-ms-flex-preferred-size:41.66666667%;flex-basis:41.66666667%;max-width:41.66666667%}.col-xs-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-xs-7{-ms-flex-preferred-size:58.33333333%;flex-basis:58.33333333%;max-width:58.33333333%}.col-xs-8{-ms-flex-preferred-size:66.66666667%;flex-basis:66.66666667%;max-width:66.66666667%}.col-xs-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-xs-10{-ms-flex-preferred-size:83.33333333%;flex-basis:83.33333333%;max-width:83.33333333%}.col-xs-11{-ms-flex-preferred-size:91.66666667%;flex-basis:91.66666667%;max-width:91.66666667%}.col-xs-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-xs-offset-0{margin-left:0}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-11{margin-left:91.66666667%}.start-xs{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start}.center-xs{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.end-xs{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end}.top-xs{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.middle-xs{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-xs{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.around-xs{-ms-flex-pack:distribute;justify-content:space-around}.between-xs{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.first-xs{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last-xs{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}@media only screen and (min-width:48em){.hide-sm{display:none!important}.show-sm{display:block!important}.container{width:100%}.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-offset-0,.col-sm-offset-1,.col-sm-offset-10,.col-sm-offset-11,.col-sm-offset-12,.col-sm-offset-2,.col-sm-offset-3,.col-sm-offset-4,.col-sm-offset-5,.col-sm-offset-6,.col-sm-offset-7,.col-sm-offset-8,.col-sm-offset-9{box-sizing:border-box;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.col-sm{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-sm-1{-ms-flex-preferred-size:8.33333333%;flex-basis:8.33333333%;max-width:8.33333333%}.col-sm-2{-ms-flex-preferred-size:16.66666667%;flex-basis:16.66666667%;max-width:16.66666667%}.col-sm-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-sm-4{-ms-flex-preferred-size:33.33333333%;flex-basis:33.33333333%;max-width:33.33333333%}.col-sm-5{-ms-flex-preferred-size:41.66666667%;flex-basis:41.66666667%;max-width:41.66666667%}.col-sm-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-sm-7{-ms-flex-preferred-size:58.33333333%;flex-basis:58.33333333%;max-width:58.33333333%}.col-sm-8{-ms-flex-preferred-size:66.66666667%;flex-basis:66.66666667%;max-width:66.66666667%}.col-sm-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-sm-10{-ms-flex-preferred-size:83.33333333%;flex-basis:83.33333333%;max-width:83.33333333%}.col-sm-11{-ms-flex-preferred-size:91.66666667%;flex-basis:91.66666667%;max-width:91.66666667%}.col-sm-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-sm-offset-0{margin-left:0}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-11{margin-left:91.66666667%}.start-sm{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start}.center-sm{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.end-sm{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end}.top-sm{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.middle-sm{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-sm{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.around-sm{-ms-flex-pack:distribute;justify-content:space-around}.between-sm{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.first-sm{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last-sm{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}}@media only screen and (min-width:64em){.hide-md{display:none!important}.show-md{display:block!important}.container{width:100%}.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-offset-0,.col-md-offset-1,.col-md-offset-10,.col-md-offset-11,.col-md-offset-12,.col-md-offset-2,.col-md-offset-3,.col-md-offset-4,.col-md-offset-5,.col-md-offset-6,.col-md-offset-7,.col-md-offset-8,.col-md-offset-9{box-sizing:border-box;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.col-md{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-md-1{-ms-flex-preferred-size:8.33333333%;flex-basis:8.33333333%;max-width:8.33333333%}.col-md-2{-ms-flex-preferred-size:16.66666667%;flex-basis:16.66666667%;max-width:16.66666667%}.col-md-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-md-4{-ms-flex-preferred-size:33.33333333%;flex-basis:33.33333333%;max-width:33.33333333%}.col-md-5{-ms-flex-preferred-size:41.66666667%;flex-basis:41.66666667%;max-width:41.66666667%}.col-md-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-md-7{-ms-flex-preferred-size:58.33333333%;flex-basis:58.33333333%;max-width:58.33333333%}.col-md-8{-ms-flex-preferred-size:66.66666667%;flex-basis:66.66666667%;max-width:66.66666667%}.col-md-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-md-10{-ms-flex-preferred-size:83.33333333%;flex-basis:83.33333333%;max-width:83.33333333%}.col-md-11{-ms-flex-preferred-size:91.66666667%;flex-basis:91.66666667%;max-width:91.66666667%}.col-md-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-md-offset-0{margin-left:0}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-3{margin-left:25%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-6{margin-left:50%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-9{margin-left:75%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-11{margin-left:91.66666667%}.start-md{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start}.center-md{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.end-md{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end}.top-md{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.middle-md{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-md{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.around-md{-ms-flex-pack:distribute;justify-content:space-around}.between-md{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.first-md{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last-md{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}}@media only screen and (min-width:75em){.hide-lg{display:none!important}.show-lg{display:block!important}.container{width:100%}.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-offset-0,.col-lg-offset-1,.col-lg-offset-10,.col-lg-offset-11,.col-lg-offset-12,.col-lg-offset-2,.col-lg-offset-3,.col-lg-offset-4,.col-lg-offset-5,.col-lg-offset-6,.col-lg-offset-7,.col-lg-offset-8,.col-lg-offset-9{box-sizing:border-box;-webkit-box-flex:0;-ms-flex:0 0 auto;flex:0 0 auto}.col-lg{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:0;flex-basis:0;max-width:100%}.col-lg-1{-ms-flex-preferred-size:8.33333333%;flex-basis:8.33333333%;max-width:8.33333333%}.col-lg-2{-ms-flex-preferred-size:16.66666667%;flex-basis:16.66666667%;max-width:16.66666667%}.col-lg-3{-ms-flex-preferred-size:25%;flex-basis:25%;max-width:25%}.col-lg-4{-ms-flex-preferred-size:33.33333333%;flex-basis:33.33333333%;max-width:33.33333333%}.col-lg-5{-ms-flex-preferred-size:41.66666667%;flex-basis:41.66666667%;max-width:41.66666667%}.col-lg-6{-ms-flex-preferred-size:50%;flex-basis:50%;max-width:50%}.col-lg-7{-ms-flex-preferred-size:58.33333333%;flex-basis:58.33333333%;max-width:58.33333333%}.col-lg-8{-ms-flex-preferred-size:66.66666667%;flex-basis:66.66666667%;max-width:66.66666667%}.col-lg-9{-ms-flex-preferred-size:75%;flex-basis:75%;max-width:75%}.col-lg-10{-ms-flex-preferred-size:83.33333333%;flex-basis:83.33333333%;max-width:83.33333333%}.col-lg-11{-ms-flex-preferred-size:91.66666667%;flex-basis:91.66666667%;max-width:91.66666667%}.col-lg-12{-ms-flex-preferred-size:100%;flex-basis:100%;max-width:100%}.col-lg-offset-0{margin-left:0}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-11{margin-left:91.66666667%}.start-lg{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:start}.center-lg{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.end-lg{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:end}.top-lg{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.middle-lg{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.bottom-lg{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.around-lg{-ms-flex-pack:distribute;justify-content:space-around}.between-lg{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.first-lg{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.last-lg{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}}@media (max-width:767px){.last-mim{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.wb-top-menu{margin-right:10px!important;margin-left:10px!important;overflow-x:scroll}.wb-post-list-title{height:unset;padding-bottom:5px;padding-right:5px}.wp-post-list-catalist{position:unset;top:unset;right:unset}body,html{overflow-x:hidden}ul.wb-top-menu{margin-top:10px}.wb-post-summary{padding:unset}.bTitle{display:block;margin-left:unset!important}.wb-slogan.center{display:block}.wb-bayan,.wb-mimr{float:unset}.wb-ads{text-align:center}}@media only screen and (min-width:82em){.container{width:83rem}}@media (max-width:1199px){.last-mimm{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.wb-content{padding-right:10px;padding-left:10px}ul.wb-top-menu{margin-top:10px}.wb-comment-section{width:unset}.wb-comment-add{width:unset}}`;
  //Theme style}}}
  // sharedrtl{{{
  const sharedrtl = `@charset "utf-8";body,html{margin:0;padding:0}.rtl{direction:rtl;text-align:right}.ltr{direction:ltr;text-align:left}.rltr{direction:ltr;text-align:right}.alr{text-align:right}.inltr{display:inline-block;direction:ltr}.right{float:right}.left{float:left}html{direction:rtl}img{vertical-align:middle}p{margin:.5em 0}code{direction:ltr;display:inline-block;background-color:#f0f0e0;padding:0 2px}pre{direction:ltr;background-color:#fafaee;border:1px solid #dadada;margin:1em;overflow-x:auto;overflow-y:hidden;padding:2px;width:auto;line-height:1.4em}blockquote{border-right:3px solid #ccc;margin:5px 30px 10px;padding-right:10px;font-style:italic}body,input,select,textarea{font-family:Tahoma,Verdana,"Times New Roman",serif;font-size:12px}h1,h2{font-family:"b traffic",Verdana,"Times New Roman",serif}h3,h4,h5,h6{font-family:Arial,"Times New Roman",serif}.inputBox,a.btn,a.btn:hover,a.btn:visited,button,input.text,input[type=button],input[type=password],input[type=submit],input[type=text],select,textarea{background-color:#fff;color:#333;font-size:1em;padding:4px;border:1px solid #ccc;border-radius:3px;-moz-border-radius:3px;-webkit-border-radius:3px}button,input[type=button],input[type=submit]{-webkit-appearance:button}a.btn:hover,input[type=button]:hover,input[type=reset]:hover,input[type=submit]:hover{border-color:#a0a0a0}input[type=button][disabled],input[type=submit][disabled]{border-color:#ddd;color:#888;cursor:default}select{font-size:11px;padding:1px}option{font-size:11px;padding:2px 4px}table{border-spacing:0}textarea{overflow:auto}.inputBox.focused,input.text:focus,textarea:focus{border-color:#999}.normtip{color:#777}.smalltip,.smalltip-margin{font-size:smaller;color:#777;padding:4px;line-height:1.4em}.smalltip-margin{margin-right:23px}.smalltip-error{color:red}input[type=checkbox],input[type=radio]{vertical-align:middle}.item_err,.item_success,.item_wrn{border:1px solid #e6db55;border-radius:5px;-moz-border-radius:5px;-webkit-border-radius:5px;padding:5px;line-height:18px;margin-bottom:10px;background:#ffffe0;color:#333}.item_err a[href],.item_success a[href],.item_wrn a[href]{text-decoration:none;padding:1px 1px 2px}.item_err .icon,.item_success .icon,.item_wrn .icon{background:url(/media/images/messages.png?TUh8-q) no-repeat right 0;width:18px;height:18px;float:right;margin:0 2px 0 6px}.item_wrn a{color:#c30}.item_wrn a:hover{background-color:#c30;color:#fff}.item_wrn .icon{background-position:right -18px}.item_err{border-color:#fe8f6b;background:#ffe2d9}.item_err a{color:#ce3e0e}.item_err a:hover{background-color:#ce3e0e;color:#fff}.item_success{border-color:#47af41;background:#d2ffcf}.item_success .icon{background-position:right -36px}.item_success a{color:#088f1b}.item_success a:hover{background-color:#088f1b;color:#fff}.rate-button-box.rated{font-weight:700}.rate-up,span.rateup{color:#090}.rate-down,span.ratedn{color:#a00}img.ratedn,img.rateimg,img.rateup,img.renew{background:url(/media/images/messages.png?TUh8-q) no-repeat;width:18px;height:18px;vertical-align:middle}.rate-down img.rateimg,img.ratedn{background-position:0 -72px}.rate-up img.rateimg,img.rateup{background-position:0 -54px}img.renew{background-position:0 -90px}.bComForm .commentAvatar{float:left;padding:8px 0 0 3px;text-align:center}.bComForm .sendbutton{float:left}.bComForm .sendbutton[disabled]{opacity:.5}.bComForm .sendbutton.hasCheckbox{margin-top:-35px}.bComForm .commentAvatar img{border:1px solid #bbb;padding:1px;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px;width:64px;height:64px}.bComForm .commentAvatar a:hover span{display:block}.bComForm .commentAvatar span{display:none;margin:-19px 2px 0;line-height:16px;padding-bottom:2px;background:#fff;color:#000;opacity:.6}.bComForm .hasComment{margin-left:73px}.bComForm .hasComment .in{float:right;width:100%}.formField2{padding-top:8px;clear:both}.formField2 label{float:right;width:100px;text-align:left;padding-left:8px}.formField2 .fldcontent label{float:none;width:auto;text-align:inherit;padding-left:0}.formField2 .fldcontent{padding-left:3px;margin-right:108px}.formField2 input.text,.formField2 textarea{width:98%;padding:4px}div.inputFix{padding:0 0 0 10px}div.inputFix input.text{width:100%}.field .formField2 option,.field2 .formField2 option{padding:2px}.half input.text,.half textarea{width:60%}div.tagcloud{text-align:justify;padding:3px 0}div.tagcloud a{line-height:1.5em;padding:4px}.pagination{padding-top:10px;float:right;width:100%}.pagination a{float:right;padding:0 2px}.pagination a.last,.pagination a.next{float:left}ul.validateErrs,ul.validateSuccess{list-style:none;padding:0;margin:0}.validateErrs{color:red}.validateErrs .warn{color:#ff780f}.validateErrs .suc,.validateSuccess{color:green}input#read_more{display:inline!important;cursor:default;border:none;width:60px;height:16px;background:url(/media/images/post/cont.png?NluZbl);line-height:0;margin:0 3px}pre.prettyprint{line-height:1.3em}.jqifade{position:absolute;background-color:#666;opacity:.6}.jqibox{direction:ltr;position:fixed}.jqibox,.jqifade{width:100%;z-index:999;left:0;top:0;right:0;bottom:0}.jqi{direction:rtl;position:absolute;background-color:#fff;border-radius:11px 7px 7px;-moz-border-radius:11px 7px 7px;-webkit-border-radius:11px 7px 7px;padding:7px;width:380px;left:50%;z-index:1000}.jqi .jqiclose{position:absolute;top:-9px;width:24px;cursor:pointer;font-size:0;color:transparent;background:url(/media/images/close.png?4elmBT) no-repeat;height:24px;right:-6px}.jqi .jqimessage{padding:10px;line-height:20px;color:#444}.jqi .jqibuttons{text-align:left;padding:5px 0}.jqi a.btn,.jqi button{padding:6px 8px;margin:0 5px;background-color:#6d96af;border-width:0;color:#fff;font:bold 11px Tahoma,Geneva,sans-serif}.jqi a.btn{display:inline-block;line-height:16px}.jqi .btn:hover,.jqi button:hover{cursor:pointer;background-color:#5e8aa3}.jqi .btn:focus,.jqi .jqidefaultbutton,.jqi button:focus{background-color:#0094c3}.jqi .jqi-error{background-color:#b20f00}.jqi .jqi-error:focus,.jqi .jqi-error:hover{background-color:#a50f00}.jqiwarning .jqi .jqibuttons{background-color:#fffc00;border-radius:4px;-moz-border-radius:4px;-webkit-border-radius:4px}.beditor .ipic-wrp{border:1px dashed orange}.beditor{margin:2px 7px}.ipic-cfx{display:block!important}.ipic-bdr,.ipic-cap-in,.ipic-cap-out,.ipic-inner,.ipic-mrg,.ipic-wrp{display:inline-block;position:relative}.ipic-bdr img,.ipic-inner img{vertical-align:middle}.ipic-inner img{border-width:0;z-index:-1;position:relative}.ipic-bdr{z-index:1}.ipic-cap-in{position:absolute;padding:20px;min-width:30%}.ipic-cap-out{display:block}.ipic-cap-in h1,.ipic-cap-in p,.ipic-cap-out h1,.ipic-cap-out p{padding:0;margin:0;font-weight:400}.search-box{background:rgba(0,0,0,.06);border-radius:2px;line-height:30px;height:30px;margin:10px 5px}.search-box input{border:0;outline:0;height:30px;padding:0;display:block}.search-box input.text{background:0 0;width:100%;float:right}.search-box .submit{border-radius:2px 0 0 2px;width:35px;float:left;background:#bdc2ca url(/media/images/search.png?_2d5FF)}.search-box .search-wrapper{margin:0 5px 0 40px}.search-box.dark{border:1px solid rgba(255,255,255,.3);background:rgba(0,0,0,.5)}.search-box.dark input.text{color:#eee}.search-box.dark .submit{background-color:rgba(0,0,0,.5)}.search-box.dark .submit:focus,.search-box.dark .submit:hover{background-color:rgba(0,0,0,.7)}.search-box.black{background:rgba(70,70,70,.3)}.search-box.light{background:rgba(255,255,255,.7)}.followBx{background:rgba(0,0,0,.05);border-radius:5px;padding:10px 4px 4px;font-size:16px}#followInBx{margin:0 auto}.followersCount{float:left}.followersTitle{padding:0 4px;margin-bottom:7px}.follower{float:right}.follower:hover img{transform:scale(1.1)}.followThis{display:block;padding:3px 10px 5px;margin:2px;background:#01ba00;color:#fff!important;border-radius:3px;text-align:center}.followBx,.followThis{font-family:"B Nazanin",BNazanin,"A Nazanin","Nazanin 0",IRNazanin,Nazanin,W_Nazanin,"Times New Roman",Arial,serif}.followThis:hover{color:#fff!important}.followThis.followed{background:#0cb3ce}#followInBx #followersLs .followImg{width:34px;height:34px;border-radius:4px;margin:3px}#followersLs{text-align:center;margin:7px 0 13px;clear:both}.hoverTip{position:absolute;z-index:3000;background:#fafaff;border-radius:5px}.hoverTip .body{padding:5px}.followShow{width:250px;background:#fff;border:1px solid #bbb;box-shadow:3px 3px 8px 0 #666;color:#333;direction:rtl;line-height:18px;overflow:hidden}.followShow.dark{color:#fff;background:#000;border-color:#555}#followInBx a,.followShow a{text-decoration:none}.followShow .site{color:#33a}.followShow .site:hover{color:#33f}.followShow.dark .site{color:#bbf}.followShow.dark .site:hover{color:#ddf}#followInBx.dark{color:#fff}.followShow .folDetImg{width:64px;height:64px;float:right;margin:5px 5px 10px 10px}.followShow .body{position:relative;height:74px}.followShow *{box-sizing:content-box}.followShow .followThis{width:136px;position:absolute;bottom:8px;left:8px;font-size:14px;font-weight:700}.folDetTxt{padding-right:79px}`;
  // sharedrtl}}}
  // preTheme1{{{
  const preTheme1 = `<!DOCTYPE html> <html lang="fa"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <link href="http://bayanbox.ir/download/5288479852257857761/favicon.ico" rel="shortcut icon"> <style> `;
  // preTheme}}}
  // preTheme2{{{
  const preTheme2 = `</style> </head> <body> <div class="container"> <div class="row"> <div class="col-lg-2 col-sm-3 col-xs-12 last-mim"> <div class="wb-sidebar"> <div class="bAvatar center"> <a href="/"> <img src="http://bayanbox.ir/view/4882361575334443719/152055.png"> </a> </div> <div class="blog-desc wb-sidekick"> <p>این نمایش از فایل پشتیبان شما به کمک ابزار تبدیل فایل پشتیبان بلاگ بیان و میهن بلاگ به html در وبلاگ <a target="_blank" href="http://asemanam.blog.ir/">آسمانم</a> صورت پذیرفت.&nbsp; برای گزارش خطا و کمک به توسعه‌ی این ابزار و طرح سوالات و اطلاعات بیشتر به <a target="_blank" href="http://asemanam.blog.ir/post/157">این لینک</a> مراجعه فرمایید.</p> </div> </div> </div> <div class="col-lg-10 col-sm-9 col-xs-12"> <div class="wb-main"> <div class="wb-head">`;
  // preTheme}}}
  var html_output = preTheme1 + sharedrtl +  wbStyle + preTheme2;
  var xmlOutput;
  var parser, xmlDoc;
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files[0];
    readTextFile(fileList);
  });

  function readTextFile(file) {
    let bc_title, bc_link, bc_authorfn, bc_authorln, bc_posts;
    let bc_blog_header, bc_comments;
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
    xmlOutput =  event.target.result;
    });
    reader.addEventListener('load', (event) => {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xmlOutput, "text/xml");
        bc_bayan = xmlDoc.getElementsByTagName("BLOG");
        bc_mihanblog = xmlDoc.getElementsByTagName("root");
        if(bc_bayan.length) {
        // staty variables{{{
        bc_title = xmlDoc.getElementsByTagName("BLOG_INFO")[0].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue.trim();
        bc_link = "http://" + xmlDoc.getElementsByTagName("BLOG_INFO")[0].getElementsByTagName("DOMAIN")[0].childNodes[0].nodeValue.trim();

        bc_authorfn = xmlDoc.getElementsByTagName("BLOG_INFO")[0].getElementsByTagName("OWNER")[0].getElementsByTagName('USER')[0].getElementsByTagName("FIRST_NAME")[0].childNodes[0].nodeValue.trim();

        bc_authorln = xmlDoc.getElementsByTagName("BLOG_INFO")[0].getElementsByTagName("OWNER")[0].getElementsByTagName('USER')[0].getElementsByTagName("LAST_NAME")[0].childNodes[0].nodeValue.trim();

        bc_posts = xmlDoc.getElementsByTagName("POST");
        // staty variables}}}
        // first part of mainbar's puzzle{{{
        bc_blog_header = `<a href="${bc_link}">
                <div class="bTitle center">
                  ${bc_title}
                </div>
              </a>
                <span class="wb-slogan center d-block">
                  نمایش فایل پشتیبان وبلاگ
                </span>
                <div class="wb-top-menu-wrap row">
                  <ul class="wb-top-menu col-lg-9 col-xs-12 last-mim last-mimm">
                    <li class="selected">
                      <a href="/">خانه</a>
                    </li>
                  </ul>
                  <div style="clear: both;"></div>
                  <div class="wb-search-form col-lg-3 col-xs-12">
                    <div id="srchBx" class="search-box white">
                        <form action="https://www.google.com/search" method="GET" target="_blank">
                            <div class="search-wrapper">
                                <input class="text" name="q" placeholder="جستجو ..." type="text">
                            </div>
                            <input type="hidden" name="q" value="site:${bc_link}">
                            <input class="submit" type="submit" value="">
                        </form>
                    </div>
                  </div>
                </div>
            </div>
            <div class="wb-content">
              <div class="wb-post-list">\n`;
        // first part of pazzle of mainbar}}}
        } else if (bc_mihanblog.length) {
        // staty variables{{{
        bc_title = "وبلاگ‌من";
        bc_link = "/";
        if(xmlDoc.children[0].childNodes.length > 7) {
          bc_posts = xmlDoc.children[0].childNodes[7].children;
        } else {
          bc_posts = xmlDoc.children[0].childNodes[5].children;
        }
        // staty variables}}}
        // first part of puzzle of mainbar{{{
        bc_blog_header = `<a href="${bc_link}">
                <div class="bTitle center">
                  ${bc_title}
                </div>
              </a>
                <span class="wb-slogan center d-block">
                  نمایش فایل پشتیبان وبلاگ
                </span>
                <div class="wb-top-menu-wrap row">
                  <ul class="wb-top-menu col-lg-9 col-xs-12 last-mim last-mimm">
                    <li class="selected">
                      <a href="/">خانه</a>
                    </li>
                  </ul>
                  <div style="clear: both;"></div>
                  <div class="wb-search-form col-lg-3 col-xs-12">
                    <div id="srchBx" class="search-box white">
                        <form action="https://www.google.com/search" method="GET" target="_blank">
                            <div class="search-wrapper">
                                <input class="text" name="q" placeholder="جستجو ..." type="text">
                            </div>
                            <input class="submit" type="submit" value="">
                        </form>
                    </div>
                  </div>
                </div>
            </div>
            <div class="wb-content">
              <div class="wb-post-list">\n`;
        // first part of pazzle of mainbar}}}
        }
        html_output += bc_blog_header;
        if(bc_bayan.length) {
      // post list loop{{{
      let html_post_item;
      let html_tags = '';
      let html_categories = '';
      let bc_post_title, bc_post_link, bc_post_content, bc_post_date, bc_post_tags, bc_post_categories;
      for (let i = 0; i < bc_posts.length; i++) {
        bc_post_title = bc_posts[i].getElementsByTagName('TITLE')[0].childNodes[0].nodeValue.trim();
        bc_post_link = bc_posts[i].getElementsByTagName('LINK')[0].childNodes[0].nodeValue.trim();
        bc_post_content = bc_posts[i].getElementsByTagName('CONTENT')[0].childNodes[0].nodeValue.trim();
        bc_post_date = bc_posts[i].getElementsByTagName('LAST_MODIFIED_DATE')[0].childNodes[0].nodeValue.trim();
        bc_post_tags = bc_posts[i].getElementsByTagName('TAG');
        bc_post_categories = bc_posts[i].getElementsByTagName('CATEGORY');
         if (bc_post_tags.length > 0) {
        // tags{{{
          html_tags = '<div class="wb-tags"><span> برچسب‌ها </span>';
          let html_tag, html_tag_item;
          for (let j = 0; j < bc_post_tags.length; j++) {
            html_tag_item = bc_post_tags[j].getElementsByTagName('NAME')[0].childNodes[0].nodeValue.trim();
            html_tag = `<div class="wb-tag-item"><a href="#">${html_tag_item}</a> </div>`;
            html_tags += html_tag;
          }
          html_tags += "\n</div>";
        // tags}}}
        }
        if (bc_post_categories.length > 0) {
        // categories{{{
          html_categories = '<div class="wb-tags"><span>دسته‌ها</span>';
          let html_category, html_category_item;
          for (let j = 0; j < bc_post_categories.length; j++) {
            html_category_item = bc_post_categories[j].getElementsByTagName('NAME')[0].childNodes[0].nodeValue.trim();
            html_category = `<div class="wb-tag-item"><a href="#">${html_category_item}</a></div>`;
            html_categories += html_category;
          }
          html_categories += "\n</div>";
        // categories}}}
        }        
        // html_post_item{{{
        html_post_item = `<div class="wb-post-list-item">
                    <div class="wb-post-list-title">
                      <div class="wp-post-list-catalist">
                        <span class="tIcon">
                          <img src="https://s17.picofile.com/file/8423077450/article_icon.png" alt="مقاله">
                        </span>
                        <a href="${bc_post_link}">
                          <h2>
                            ${bc_post_title}
                          </h2>
                        </a>
                      </div>
                    </div>
                    <div class="wb-post-list-detail">
                      <div class="wb-post-list-author">
                        <img src="https://bayanbox.ir/download/2089400947142887402/user.svg" alt="author">
                        <span>
                          ${bc_authorfn} ${bc_authorln}
                        </span>
                      </div>
                      <div class="wb-post-list-date">
                        <img src="https://bayanbox.ir/download/1249587433114230328/date.svg" alt="date">
                        <span>
                          ${bc_post_date}
                        </span>
                      </div>
                    </div>
                    <div class="wb-post-summary">
                      ${bc_post_content}

                      ${html_tags}
                      ${html_categories}
                    </div>
                  </div>\n`;
        // html_post_item}}}
        html_output += html_post_item;
        html_tags = "";
        html_categories = "";
       }
      // post list loop}}}
        } else if (bc_mihanblog.length) {
          // post list loop{{{
          let html_post_item;
          let html_post_item1;
          let html_post_item2;
          let html_post_item3;
          let html_post_item4 = "";
          let bc_post_title, bc_post_link, bc_post_content, bc_post_date, bc_post_tags, bc_post_categories;
          for (let i = 0; i < bc_posts.length; i++) {
            if(xmlDoc.children[0].childNodes.length > 7) {
              bc_comments = xmlDoc.children[0].childNodes[7].children[i].childNodes[43].children;
            } else {
              bc_comments = xmlDoc.children[0].childNodes[5].children[i].childNodes[43].children;
            }

           if(bc_posts[i].childNodes[3].firstChild !== null) {
            bc_post_title = bc_posts[i].childNodes[3].childNodes[0].nodeValue.trim();
           } else {
            bc_post_title = "بدون عنوان";
           }
            bc_post_link = bc_posts[i].childNodes[23].childNodes[0].nodeValue.trim();
            bc_post_content = bc_posts[i].childNodes[5].childNodes[0].nodeValue.trim();
            bc_post_content_more = bc_posts[i].childNodes[9].childNodes[0].nodeValue.trim();
           if(bc_posts[i].childNodes[13].firstChild !== null) {
            bc_post_date = bc_posts[i].childNodes[13].childNodes[0].nodeValue.trim();
             } else {
            bc_post_date =  "بدون تاریخ";
             }
            bc_authorfn = bc_posts[i].childNodes[27].childNodes[0].nodeValue.trim();
            // html_post_item{{{
            html_post_item1 = `<div class="wb-post-list-item">
                        <div class="wb-post-list-title">
                          <div class="wp-post-list-catalist">
                            <span class="tIcon">
                              <img src="https://s17.picofile.com/file/8423077450/article_icon.png" alt="مقاله">
                            </span>
                            <a href="${bc_post_link}">
                              <h2>
                                ${bc_post_title}
                              </h2>
                            </a>
                          </div>
                        </div>
                        <div class="wb-post-list-detail">
                          <div class="wb-post-list-author">
                            <img src="https://bayanbox.ir/download/2089400947142887402/user.svg" alt="author">
                            <span>
                              ${bc_authorfn}
                            </span>
                          </div>
                          <div class="wb-post-list-date">
                            <img src="https://bayanbox.ir/download/1249587433114230328/date.svg" alt="date">
                            <span>
                              ${bc_post_date}
                            </span>
                          </div>
                        </div>
                        <div class="wb-post-summary">
                          ${bc_post_content} \n
                          ${bc_post_content_more}`;

                    if(bc_comments.length > 0) {
                    <!--share and like--><!--{{{-->
                    html_post_item2 = `<div class="wb-full-post-sep">
                    <div class="wb-continue-sectioner">
                        <div class="wb-continue" style="margin-top: .5em;margin-bottom: .3em;">
                            <!--social-sharing--><!--{{{-->
                                <a target="_blank" href="https://twitter.com/intent/tweet?url=${bc_post_link}&amp;status=${bc_post_title}+http://${bc_post_link}">
                                  <div class="label mx-1" style="width: 30px; background: none;">
                                    <svg role="img" viewBox="0 0 24 24"><title>Twitter</title><path style="fill: rgba(153, 156, 162, 1)" d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path></svg>
                                  </div>
                                </a>
                                <a target="_blank" href="https://www.addtoany.com/add_to/whatsapp?linkurl=${bc_post_link}&amp;linkname=${bc_post_title}">
                                  <div class="label mx-1" style="width: 30px; background: none;">
                                    <svg role="img" viewBox="0 0 24 24"><title>WhatsApp</title><path style="fill: rgba(153, 156, 162, 1)" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
                                  </div>
                                </a>
                                <a target="_blank" href="https://www.addtoany.com/add_to/telegram?linkurl=${bc_post_link}&amp;linkname=${bc_post_title}">
                                  <div class="label mx-1" style="width: 30px; background: none;">
                                    <svg role="img" viewBox="0 0 24 24"><title>Telegram</title><path style="fill: rgba(153, 156, 162, 1)" d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"></path></svg>
                                  </div>
                                </a>
                                <a target="_blank" href="mailto:?subject=${bc_post_title}&amp;body=سلام یه نگاهی به این بندا<br>${bc_post_link}">
                                  <div class="label mx-1" style="width: 30px; background: none;">
                                    <svg role="img" viewBox="0 0 24 24"><title>Gmail</title><path style="fill: rgba(153, 156, 162, 1)" d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path></svg>

                                  </div>
                                </a>
                            <!--social-sharing--><!--}}}-->
                        </div>
                      <div class="wb-clear"></div>
                    </div>
                    </div>\n`;
                    <!--share and like--><!--}}}-->
                    <!--comment-post--><!--{{{-->
                    html_post_item3 = '<div class="wb-comment-section-all">';

                      for (let s = 0; s < bc_comments.length; s++) {
                        //stateek variables{{{
                          let bc_comment_name = "";
                          if(bc_comments[s].childNodes[3].children.length > 0) {
                            bc_comment_name = bc_comments[s].childNodes[3].childNodes[0].nodeValue.trim();
                          } else {
                            bc_comment_name = "بی‌نام"
                          }
                          let bc_comment_body = bc_comments[s].childNodes[19].childNodes[0].nodeValue.trim();
                          let bc_comment_date = bc_comments[s].childNodes[17].childNodes[0].nodeValue.trim();
                        //stateek variables}}}
                        html_post_item4 += `<div class="wb-comment-section">
                          <!--first row--><!--{{{-->
                          <div class="wb-comm-first-col">
                            <img src="http://blog.ir/media/images/guest.png">
                            <span>
                              ${bc_comment_name}
                            </span>
                          </div>
                          <!--first row--><!--}}}-->
                          <!--second row--><!--{{{-->
                          <div class="wb-comm-second-col">
                            ${bc_comment_body}
                          </div>
                          <!--second row--><!--}}}-->
                          <!--third row--><!--{{{-->
                          <div class="wb-comm-third-col">
                            <img src="https://bayanbox.ir/download/1249587433114230328/date.svg" alt="date">
                            <span>
                              ${bc_comment_date}
                            </span>
                          </div>
                          <!--third row--><!--}}}-->
                        </div>\n`;
                       }
                    <!--comment-post--><!--}}}-->
                     html_post_item = html_post_item1 + html_post_item2 + html_post_item3 + html_post_item4 + "</div></div></div>\n";
                      html_post_item4 = ""; 
                    } else {
                      html_post_item = html_post_item1 + "</div></div>\n";
                    }
            // html_post_item}}}
            html_output += html_post_item;
           }
          // post list loop}}}
        }
        // postTheme{{{
        let postTheme = `\n</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;
        // postTheme}}}
        html_output += postTheme;
     download_txt()  
    });
    reader.readAsText(file);
  }
  // download function{{{
function download_txt() {
  var textToSave = html_output;
  var hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text,' + encodeURIComponent(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.innerHTML = `<button style="margin-top: 1.5em;border-radius: 3em;" class="btn btn-success d-block w-100">دانلود فایل خروجی</button>\n`;
  hiddenElement.download = 'blogBackup.html';
  hiddenElement.click();
  document.getElementById('content').appendChild(hiddenElement);
}
  // download function}}}
<!--logic--><!--}}}-->
