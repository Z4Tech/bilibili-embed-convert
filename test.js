var Bili_video = require("./index.js");

console.log("使用av号创建测试");
var bili_video = new Bili_video(1, 1);
console.log(bili_video.avnumber + ' ' + bili_video.page);

var url_list = [
  'http://www.bilibili.com/video/av2333333/index_3.html',
  'http://www.bilibili.com/video/av2333333/index_2.html',
  'http://www.bilibili.com/video/av7/',
  'http://www.bilibili.com/video/av990754/index_2.html',
  'http://www.bilibili.com/video/av2030663/',
  'http://www.bilibili.com/video/av1673701/',
  'http://www.bilibili.com/video/av187189/index_2.html',
  'http://www.bilibili.com/video/av2182749/',
  'http://www.bilibili.com/video/av1032809/',
  'http://www.bilibili.com/video/av2053/'
]

var flash_list = [
  'http://share.acg.tv/flash.swf?aid=2333333&page=3',
  'http://share.acg.tv/flash.swf?aid=2333333&page=2',
  'http://share.acg.tv/flash.swf?aid=7&page=1',
  'http://share.acg.tv/flash.swf?aid=990754&page=2',
  'http://share.acg.tv/flash.swf?aid=2030663&page=1',
  'http://share.acg.tv/flash.swf?aid=1673701&page=1',
  'http://share.acg.tv/flash.swf?aid=187189&page=2',
  'http://share.acg.tv/flash.swf?aid=2182749&page=1',
  'http://share.acg.tv/flash.swf?aid=1032809&page=1',
  'http://share.acg.tv/flash.swf?aid=2053&page=1'
]

var embed_list = [
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=2333333&page=3" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=2333333&page=2" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=7&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=990754&page=2" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=2030663&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=1673701&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=187189&page=2" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=2182749&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=1032809&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
  '<embed height="452" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="http://share.acg.tv/flash.swf" flashvars="aid=2053&page=1" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>'
]
