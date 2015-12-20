require(['common'],function(){
    require([
        'zepto'
    ], function ($) {
        $(function(){
            //搜索
            var input = $('#search'),
                btn = $('#btn-clear'),
                isClick = false,
                dataLength;

            input.bind('input', function(){
                if(input.val().trim().length>0){
                    btn.removeClass('hidden');
                    //搜索联想
                    $.ajax({
                        url: suggest.url + input.val().trim() + suggest.param,
                        dataType: 'json',
                        timeout: 1000,
                        success: function(data){
                            var suggestHtml = '';
                            dataLength = data.length;
                            if(dataLength > 0){
                                $('#suggest').html('');
                                $('#suggest').show();
                                if(dataLength > suggest.size){
                                    dataLength = suggest.size;
                                }

                                for(var i=0;i<dataLength;i++){
                                    suggestHtml += '<li>'+data[i]+'</li>';
                                }
                                $('#suggest').append(suggestHtml);
                            }
                        }
                    });
                }else{
                    btn.addClass('hidden');
                    $('#suggest').hide();
                }
            });

            $('#suggest li').live('click',function(){
                isClick = true;
                $('#suggest').hide();
                $('.search .keyword').val($(this).html().trim());
                $(".search form").submit();
            });

            $('body').bind('click',function(){
                $('#suggest').hide();
            });

            btn.bind('click', function(){
                btn.addClass('hidden');
                input.val('');
            });

            $(".search form").submit(function(){
                if(!isClick){
                    $('.search .keyword').val(input.val());
                }
            });

        });

    });
});