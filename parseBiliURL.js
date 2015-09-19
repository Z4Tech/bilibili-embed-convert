exports.parse = function(url){
  var l_url = url.toLowerCase();
  var av_seg = l_url.match(/av[1-9]\d*/);
  if(!av_seg){
    throw new error("Wrong URL: " + url);
    return null;
  }
  var av = parseInt(av_seg[0].match(/[1-9]\d*/)[0]);
  var page_seg = l_url.match(/index_[1-9]\d*.html/);
  var page;
  if(!page_seg){
    page = 1;
  }else{
    page = parseInt(page_seg[0].match(/[1-9]\d*/)[0]);
  }
  return [av, page];
}
