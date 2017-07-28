;(function(){

    $('.header .icon-nav').bind('click', function(){
        $('.header .sub-nav').show();
        $('.header .sub-nav-bg').show();
    });
    $('.header .sub-nav-bg').bind('click', function(){
        $('.header .sub-nav').hide();
        $('.header .sub-nav-bg').hide();
    });

    //slider
    if($('.slider ul li').length > 1){
        var len = $('.slider ul li').length;
        for(var i=0;i<len;i++){
            $('#slider .dot').append(i==0?'<span class="current"></span>':'<span></span>');
        }

        var islider = new Swipe(document.querySelector('.slider'),{
            auto: 3000,
            transitionEnd: function(index, elem) {
                if(len == 2){
                    if(index == 2){
                        index = 0;
                    }else if(index==3){
                        index = 1;
                    }
                }
                $('#slider .dot span').removeClass('current').eq(index).addClass('current');
            }
        });
    }

    //收藏
    $('#favor').bind('click',function(){
        $.ajax({
            url: '../../js/data.json',
            dataType: 'json',
            timeout: 3000,
            success: function(data, status, xhr){
                //成功
                if(data.code == "100"){
                    try {
                        $.dialog({
                            content : data.msg,
                            title : '',
                            ok : function() {
                                //return false;
                            },
                            lock : true
                        });
                    }catch (e){
                        throw e;
                    }
                }else if(data.code == "101"){
                    //失败
                    $.dialog({
                        content : data.msg,
                        title : '',
                        ok : function() {
                            //return false;
                        },
                        lock : true
                    });
                }
            },
            error: function(xhr, errType, err){
                $.dialog({
                    content : '网络连接失败',
                    title : '',
                    okText: '我知道了',
                    ok : function() {
                        //return false;
                    },
                    lock : true
                });
            }
        });
    });

    //订购
    $('#buy').bind('click',function(){
        $.ajax({
            url: 'url',
            dataType: 'json',
            timeout: 3000,
            success: function(data, status, xhr){
                if(data.code ==='100'){
                    $.dialog({
                        content : '订购成功',
                        title : '',
                        okText: '立即阅读',
                        okLink: 'pages/read.html',
                        ok : function() {
                            //return false;
                        },
                        lock : true
                    });
                }else if(data.code ==='101'){ //余额不足
                    $.dialog({
                        content : '余额不足',
                        title : '',
                        okText: '充值',
                        okLink: 'charge.html',
                        ok : function() {
                            //return false;
                        },
                        cancel : function() {
                            //alert('我是取消按钮');
                        },
                        lock : true
                    });
                }
            },
            error: function(xhr, errType, err){
                $.dialog({
                    content : '网络连接失败',
                    title : '',
                    okText: '我知道了',
                    ok : function() {
                        //return false;
                    },
                    lock : true
                });
            }
        });
    });

})();
