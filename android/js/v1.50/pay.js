require(['common'], function() {
    require([
        'zepto'
    ],
    function($) {
        $(function(){

            $('.buy-btn a').bind('click', function(){
                $('#winBg').show();
                $('.pay-mode').css('bottom','0px');
            });
            $('#winBg, .submit-btn .btns, #close').bind('click', function(){
                $('#winBg').hide();
                $('.pay-mode').css('bottom','-100%');
            });

            //提交金额标签默认第一个
            if($('.pay-mode label input').length){
                var str = $('.submit-btn .btns').attr('href');
                $('.submit-btn .btns').attr('href',str.replace(str.split('|')[1], $('.pay-mode label input').eq(0).val()));
            }

            // 支付 radio 选中状态
            $('.pay-mode label').bind('click',function(){
                $('.pay-mode label').removeClass('checked');
                $(this).addClass('checked');

                //替换支付方式
                var str = $('.submit-btn .btns').attr('href');
                $('.submit-btn .btns').attr('href',str.replace(str.split('|')[1], $(this).find('input').val()));
                return false;
            });

            //par-error页
            var x = parseInt($('.pay-result .num').html()),
                msg_html = $('.pay-result').html();
            var time = setInterval(function(){
                x--;
                $('.pay-result .num').html(x);
                if(x==1){
                    clearInterval(time);
                    $('.btn').removeClass('btn-disable');
                    $('.pay-result').html('<p class="icon-error"></p><p style="padding-bottom: 33px;">未获取到支付结果请手动刷新！</p>');
                }
            },1000);
            $('.btn').bind('click',function(){
                if(!$(this).hasClass('btn-disable')){
                    window.location.reload();
                    $('.pay-result').html(msg_html);
                }
            });

        });
    });
});
