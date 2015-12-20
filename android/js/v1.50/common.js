requirejs.config({
    //baseUrl:'/cbc-client/android/js/v1.50',
    baseUrl:'/js/v1.50',
    paths:{
        'zepto': 'zepto',
        'lazyload': 'lazyload'
    },
    shim:{
        'zepto':{
            exports: '$'
        }
    }
});

require([
    'zepto',
    'lazyload',
    'swiper',
    'iscroll'
],
function($, lazyload, Swipe, IScroll) {
    $(function(){

        //图片懒加载
        lazyload.addImages(document.querySelectorAll('img.video-img'));

        //slider 焦点图
        $('.slider').height('auto');

        if($('.slider ul li').length > 1){
            var slider_len = $('.slider ul li').length;
            for(var i=0;i<slider_len;i++){
                $('#slider .dot').append(i==0?'<span class="current"></span>':'<span></span>');
            }

            var islider = new Swipe(document.querySelector('.slider'),{
                auto: 3000,
                transitionEnd: function(index, elem) {
                    if(slider_len == 2){
                        if(index == 2){
                            index = 0;
                        }else if(index==3){
                            index = 1;
                        }
                        lazyload.addImages(document.querySelectorAll('img.video-img'));
                    }
                    $('#slider .dot span').removeClass('current').eq(index).addClass('current');
                }
            });
        }

        //直播视频、剧集
        if ($('#iScroll').length > 0) {

            var iScroll_li = $('#iScroll li');
            var iScroll_w = 0;

            for (var i = 0; i < iScroll_li.length; i++) {
                iScroll_w += iScroll_li[i].offsetWidth;
            }
            $('#iScroll ul').css('width', iScroll_w +5+ 'px');

            var myScroll = new IScroll('#iScroll', {
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false
            });
        }
        //生活新增tab切换
        $('.nearby-menu li').click(function() {
            $(this).addClass('selected').siblings().removeClass();
            $(this).parent().parent().find('.nearby-tab ul').addClass('hidden').eq($(this).index()).removeClass('hidden');
        });
        //生活
        $('.c-list ul').height('auto');

        if($('.c-list ul li').length > 1){
            var len = $('.c-list ul li').length;
            for(var i=0;i<len;i++){
                $('#c-list .dot').append(i==0?'<span class="current"></span>':'<span></span>');
            }

            var islider2 = new Swipe(document.querySelector('.c-list'),{
                auto: 0,
                transitionEnd: function(index, elem) {
                    if(len == 2){
                        if(index == 2){
                            index = 0;
                        }else if(index==3){
                            index = 1;
                        }
                    }
                    $('#c-list .dot span').removeClass('current').eq(index).addClass('current');
                }
            });
        }

    });
});
