requirejs.config({
    //baseUrl:'/html/cbc-client/android/js/share',
    baseUrl:'/js/share',
    paths:{
        'jquery': 'jquery'
    },
    shim:{
        'jquery':{
            exports: '$'
        }
    }
});

require([
    'jquery',
    'swiper'
],
function($, Swipe) {
    $(function(){

        if($('.slider ul li').length > 1){
            var slider_len = $('.slider ul li').length;
            for(var i=0;i<slider_len;i++){
                $('#slider .dot').append(i==0?'<span class="current"></span>':'<span></span>');
            }

            var islider = new Swipe(document.querySelector('.slider'),{
                auto: 0,
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

        var x = document.getElementById("music-audio");

        $('#sound').bind('click', function(){
            if($(this).hasClass('pause')){
                x.play();
            }else{
                x.pause();
            }
            $(this).toggleClass('pause');
        });

    });
});
