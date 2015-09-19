var bparser = require("./lib/parseBiliURL");

function Bili_video(){
  this.avnumber = undefined;
  this.page = undefined;
  switch (arguments.length) {
    case 1:
      switch (typeof(arguments[0])) {
        case 'number':
          this.avnumber = arguments[0];
          this.page = 1;
          break;
        case 'string':
          var av_page = bparser.parse(arguments[0]);
          this.avnumber = av_page[0];
          this.page = av_page[1];
          break;
        default:
          console.error("Wrong argument type.");
      }
      break;
    case 2:
      if(typeof(arguments[0])!='number'
      || typeof(arguments[1])!='number'){
        console.error("Arguments must be numbers.");
      }else{
        this.avnumber = arguments[0];
        this.page = arguments[1];
      }
      break;
    default:
      console.error("Wrong arguments number.");
  }
}

Bili_video.prototype.getIndex = function(){
  return [this.avnumber, this.page];
}

Bili_video.prototype.getURL = function(){
  return 'http://www.bilibili.com/video/av'
    + this.avnumber
    + '/index_'
    + this.page
    + '.html';
}

Bili_video.prototype.flashAddr = function(){
  return 'http://share.acg.tv/flash.swf?aid='
  + this.avnumber
  + '&page='
  + this.page;
}

Bili_video.prototype.embedAddr = function(){
    var height = arguments[0] || 452,
        width = arguments[1] ||544;
    return '<embed height="'
      + height
      + '" width="'
      + width
      + '" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid='
      + this.avnumber
      + '&page='
      + this.page
      + '" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>';
}

module.exports = Bili_video;
