function Bili_video(){
  this.avnumber = undefined;
  this.page = undefined;
  switch (arguments.length) {
    case 1:

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
