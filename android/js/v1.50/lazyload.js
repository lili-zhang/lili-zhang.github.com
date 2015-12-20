define(function(){
    var imgs = [];
    //事件绑定 图片延迟加载
    document.body.addEventListener('lazyload', function(e) {
        if (e.target.nodeName == 'IMG') {
            var img = e.target;
            var def = img.src;
            var origin = $(img).data('src')||"";
            //process retina screen
            if (origin.length>0) {
                var res = new Image();
                var path;
                //retina
                /*if(document.documentElement.scrollWidth>=360 || window.devicePixelRatio >1.5){
                    path = origin.replace(/(?:_a)?(\.\w*)+?(\?.*)?$/,"$'_248_180.jpg");
                }else{
                    path = origin;
                }*/

                path = origin;
                res.src = path;
                res.onload = function(){
                    img.src = res.src;
                    //$(img).animate({opacity: 1});
                    $(img).removeAttr('data-src');
                };
                res.onerror = function(){
                    if(/248_180/.test(res.src)){
                        res.src = origin;
                        $(img).removeAttr('data-src');
                    }else{
                        img.src = def;
                    }
                };
            }
        }
    });


    //敏感度
    var threshold = 10;
    function trigger(eventType) {
        var event = document.createEvent('Event');
        event.initEvent(eventType, true, true);
        this.dispatchEvent(event);
    }

    //
    lazyImgs = function(obj) {
        if (imgs.length < 1)
            imgs = Array.prototype.slice.call(obj, 0);
        else
            imgs = imgs.concat(Array.prototype.slice.call(obj, 0));

        listenScroll();
    };

    //
    var loading;
    var loadDelay;
    function listenScroll() {
        clearTimeout(loadDelay);
        loadDelay = setTimeout(function() {
            //get loading images
            var indexs = [];
            loading = imgs.filter(function(el, i) {
                var et = el.y, eb = et + el.offsetHeight;

                if (eb > document.body.scrollTop - threshold && et <= document.body.scrollTop + window.innerHeight + threshold) {
                    indexs.push(i);
                    return true;
                } else {
                    return false;
                }
            });

            //trigger loading
            loading.forEach(function(el) {
                trigger.call(el, 'lazyload');
            });
            //delete loading image
            // loading
            imgs = imgs.filter(function(item, index) {
                return indexs.indexOf(index) == -1 ? true : false;
            });

            indexs = [];
        }, 30);

    }

    window.addEventListener('scroll', listenScroll);

    return {addImages : lazyImgs};

});