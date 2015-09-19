# bilibili-embed-convert  
 [![Join the chat at https://gitter.im/Z4Tech/bilibili-embed-convert](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Z4Tech/bilibili-embed-convert?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Build Status](https://travis-ci.org/Z4Tech/bilibili-embed-convert.svg)](https://travis-ci.org/Z4Tech/bilibili-embed-convert) [![Code Climate](https://codeclimate.com/github/Z4Tech/bilibili-embed-convert/badges/gpa.svg)](https://codeclimate.com/github/Z4Tech/bilibili-embed-convert)

convert url of bilibili.com to embedded video element.

##Usage
    var bili_convert = require('bilibili-embed-convert');

    //Create object
    var bili_video = new bili_convert(url);
    var bili_video_num = new bili_convert(av_number);
    var bili_video_num_page = new bili_convert(av_number, page_number);

    //Generate embedded code
    var flash = bili_video.flashAddr();
    var embedded = bili_video.embedAddr();
    var embedded_size = bili_video.embedAddr(height, width);
