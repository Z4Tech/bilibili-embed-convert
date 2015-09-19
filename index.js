var bparser = require("./parseBiliURL");

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
          throw new error("Wrong argument type.");
      }
      break;
    case 2:
      if(typeof(arguments[0])!='number'
      || typeof(arguments[1])!='number'){
        throw new error("Arguments must be numbers.");
      }else{
        this.avnumber = arguments[0];
        this.page = arguments[1];
      }
      break;
    default:
      throw new error("Wrong arguments number.");
  }
}

module.exports = Bili_video;
