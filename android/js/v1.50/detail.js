require(['common'], function() {
    require([
        'zepto'
    ],
    function($) {
        $(function(){

            //直播
            $('#tab-title-week li').click(function () {
                $(this).addClass("selected").siblings().removeClass();
                $("#tab-content-week > ul").addClass('hidden').eq($('#tab-title-week li').index(this)).removeClass('hidden');
            });

            if ($('#iScrollLive').length > 0) {
                var iScroll_li2 = $('#iScrollLive li'),
                    iScroll_w2 = 0,
                    cur_id = $('#video').attr('content').split('|')[0],
                    flag = 0;

                for (var i = 0; i < iScroll_li2.length; i++) {
                    iScroll_w2 += iScroll_li2[i].offsetWidth;
                    var video_id = $('#iScrollLive li').eq(i).find('a').attr('href').split('/')[4];
                    if(cur_id === video_id){
                        flag = i;
                    }
                }
                $('#iScrollLive ul').css('width', iScroll_w2 +5+ 'px');

                var myScroll2 = new IScroll('#iScrollLive', {
                    eventPassthrough: true,
                    scrollX: true,
                    scrollY: false,
                    preventDefault: false
                });
                if(flag){
                    myScroll2.scrollToElement('li:nth-child('+(flag+1)+')', 100);
                }
            }
            //视频简介高度是否超限
            var videoHeight = parseFloat($('.level div.video-title').css('height'));
            if(videoHeight<77){
                $('.level .shade').css('height',videoHeight);
                $('.level .btn').css('display','none');
            }
            if(videoHeight>82){
                $('.video-detail').bind('click',function(){
                    if($('.video-detail').hasClass('expland')){
                        $('.video-detail').removeClass('expland');
                        $('.level .shade').css('height',"77px");
                    }else{
                        $('.video-detail').addClass('expland');
                        $('.level .shade').css('height',videoHeight);
                    }
                })
            }

            //组装下载的json
            function SeriesInfo(){
                var jsonObj = [];
                var elements = $('#tab-content li');

                for(var i = 0; i < elements.length; i++){
                    var a_href = $('#tab-content li').eq(i).find('a');

                    elements[i].id = a_href.attr('data-detail').split("|")[0];
                    elements[i].name = a_href.attr('data-detail').split("|")[1];
                    jsonObj.push({id: elements[i].id, name: elements[i].name});
                }
                //var jsonObj = '{"series":[{"id":"1","name":"dddd"},{"id":"2","location":"http://cbc-stor.dopool.com/cp_name/jiushuju/2015-01-22/6649/2/index_2.m3u8","name":"dddd"}]}';
                return jsonObj;
            }
            //置红
            $('.tv-title .icon-download').bind('click',function(){
                var videoInfo = '{"series":'+JSON.stringify(SeriesInfo())+'}';
                CbcNative.getSeriesInfo(videoInfo);
                $(this).addClass('active');
            });
            //置红
            $('.tv-title .icon-share').bind('click',function(){
                $(this).addClass('active');
            });

            //剧集
            $('#tab-title li').click(function () {
                $(this).addClass("selected").siblings().removeClass();
                $("#tab-content > ul").addClass('hidden').eq($('#tab-title li').index(this)).removeClass('hidden');
            });

            $('#tab-content li a').click(function () {
                $('#tab-content li').removeClass('selected');
                $(this).parent('li').addClass("selected");
                var title = $(this).attr('href').split("|")[5];
                $('.tv-title h2').html(title);
            });

        });
    });
});