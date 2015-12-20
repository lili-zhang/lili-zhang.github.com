define(['zepto','template','lazyload'],function($, template, lazyload){
    /*
    function session(name,value){
        if(!window.sessionStorage) return false;
        var path = window.location.href;
        if(typeof value !="undefined"){
            window.sessionStorage.setItem(name +"_" + path, value);
        }else{
            return window.sessionStorage.getItem(name + "_" + path) || "";
        }
    }
    //记录
    function remember(){
        try{
            if($('#content li').length <= window.name) return false;
            var fragment=[];
            $('#content li').each(function(i,e){
                if(i >= window.name)
                    fragment.push("<li>"+e.innerHTML+"</li>");
            });
            session('data', fragment.join(''));
            session('top', document.body.scrollTop);
            session('page', pager.current||0);
        }catch(e){}
    }
    //加载记录
    function loadRes(){
        try{
            if(session('data')){
                $('#content').append(session('data'));
                lazyload.addImages(document.querySelectorAll('#content img.video-img[data-src]'));
                document.body.scrollTop = session('top');
                pager.current = + session('page');
                //如果超过最大页数 隐藏获取更多
                //if(pager.current >= pager.count ||page.current >= pager.limit){
                    //$("#morepage").hide();
                //}
                window.sessionStorage.clear();
            }
        }catch(e){}
    }

    //页面进入后
    $(function(){
        window.name = $('#content li').length; //记住开始节点数
        loadRes();
        $('#content').bind('touchstart',function(e){
            remember();
        });
    });*/

    function Pagination(options, tpl){
        this.settings = options || null;
        this.content = $('#content') || null;
        this.tpl = tpl || null;
        if(this.content==null || this.settings ==null || this.tpl == null) return false;
        this.init();
        var self = this;
    }
    Pagination.prototype = {
        init: function(){
            this.btn = $('#morepage');
            if(this.btn.length<1) return false;
            this.isPending = false;
            this.isLimit = false;
            this.scrolldelay = null;
            this.listenScroll();
            var self = this;
            this.btn.bind('autoload touchstart' , function(){
                self.isPending = true;
                self.showLoading();

                $.ajax({
                    url: self.settings.url +self.settings.param + "&num=" + (self.settings.current) + "&size=" + (self.settings.size),
                    dataType: 'json',
                    timeout: 3000,
                    success: function(data, status, xhr){

                        self.isPending = false;

                        if(data.status ==='ok'){
                            try{

                                //日期格式  00:00 00:01 00:10 00:15 01:00 01:02 01:49 02:00 02:06 02:59 19:39 01:00:01 01:10:00 01:10:01 01:56:41
                                function formatSeconds(value) {
                                    var second = parseInt(value),// 秒
                                        minute = 0,// 分
                                        hour = 0,// 时
                                        result = '';

                                    if(second >= 60) {
                                        minute = parseInt(second/60);
                                        second = parseInt(second%60);
                                        if(minute > 60) {
                                            hour = parseInt(minute/60);
                                            minute = parseInt(minute%60);
                                        }
                                    }
                                    var tf = function(i){return (i < 10 ? '0' : '') + i};

                                    if(hour > 0){
                                        result = tf(hour)+":"+tf(minute)+":"+tf(second);
                                    }else {
                                        result = tf(minute)+":"+tf(second);
                                    }
                                    return result;
                                }

                                //处理模版中的日期
                                if(data.content){
                                    for(var i=0;i<data.content.length;i++) {
                                        data.content[i].duration = formatSeconds(data.content[i].duration);
                                        if(data.content[i].duration =='00:00'){
                                            data.content[i].duration = '';
                                        }
                                        if (/^\/attachment/.test(data.content[i].imageHor)){
                                            data.content[i].imageHor = data.domainMedia + data.content[i].imageHor;
                                        }else{
                                            data.content[i].imageHor = data.dopoolMedia + data.content[i].imageHor;
                                        }

                                        if(data.content[i].charge){
                                            data.content[i].charge = 'icon-vip';
                                        }else{
                                            data.content[i].charge = '';
                                        }

                                    }
                                }

                                var dom = $(template.compile(self.tpl)({list: data.content, domainStatic: data.domainStatic, subId: data.subId, version: data.version, pager:self.settings}));
                                //var dom = $(template.compile(self.tpl)(data));
                                self.content.append(dom);
                                lazyload.addImages(dom.find('img.video-img'));
                                self.showMore();

                            }catch (e){
                                throw e;
                            }
                        }
                        //超过最大页数
                        //if(self.settings.current >= self.settings.count || self.settings.current >= self.settings.limit){
                        if(self.settings.current >= self.settings.count){
                            //self.isLimit = true;
                            self.btn.hide();
                            self.isPending = true;
                            //self.btn.html("没有数据了!");
                        }
                        self.settings.current++;
                    },
                    error: function(xhr, errType, err){
                        if(errType === 'timeout')
                            self.showMsg("获取内容超时，请稍候重新获取！");
                        else
                            self.showMsg("获取失败，请您稍后重试！");
                        setTimeout(function(){//3秒后自动重新获取
                            self.btn.trigger('autoload');
                        },3000);
                    }
                });
            })
        },
        listenScroll: function(){
            var self = this;
            window.addEventListener("scroll", function(){
                clearTimeout(self.scrolldelay);
                //if(self.isPending || self.isLimit) return false;
                if(self.isPending) return false;
                self.scrolldelay = setTimeout(function(){
                    if(document.body.scrollTop > (document.height||document.documentElement.offsetHeight) -window.innerHeight-10){
                        self.btn.trigger('autoload');
                    }
                },100);
            });
        },
        getData: function(){

        },
        showMsg: function(txt){
            this.btn.find('.loading').html("<i></i>"+txt);
            this.btn.addClass('loaderr');
        },
        showLoading: function(){
            this.btn.find('.loading').html('<i></i>加载中...');
            this.btn.addClass('pending');
        },
        showMore: function(){
            this.btn.removeClass('pending');
        }
    };


    //new Pagination(pager,tpl);

    return Pagination;

});