!function(a,b,c){function d(a){a.preventDefault()}function e(a,b,c){return 0>a?c?b-1:0:a>=b?c?0:b-1:a}function f(a,b,c){var d="0px",e="0px";"v"===b?e=c+"px":d=c+"px",a.css({"-webkit-transform":"translate3d("+d+", "+e+", 0px);",transform:"translate3d("+d+", "+e+", 0px);"})}function g(b){var c=a.extend(!0,{},j,b),d=this;d.curIndex=-1,d.o=c,d.startY=0,d.movingFlag=!1,d.$this.addClass("fullPage-wp"),d.$parent=d.$this.parent(),d.$pages=d.$this.find(c.page).addClass("fullPage-page fullPage-dir-"+c.dir),d.pagesLength=d.$pages.length,d.update(),d.initEvent(),d.start()}function h(a,b){this.$this=a,g.call(this,b)}if("undefined"==typeof a)throw new Error("zepto.fullpage's script requires Zepto");var i=null,j={page:".page",start:0,duration:500,loop:!1,drag:!1,dir:"v",der:.1,change:function(a){},beforeChange:function(a){},afterChange:function(a){},orientationchange:function(a){}};a.extend(h.prototype,{update:function(){"h"===this.o.dir&&(this.width=this.$parent.width(),this.$pages.width(this.width),this.$this.width(this.width*this.pagesLength)),this.height=this.$parent.height(),this.$pages.height(this.height),this.moveTo(this.curIndex<0?this.o.start:this.curIndex)},initEvent:function(){var a=this,c=a.$this;c.on("touchstart",function(b){return a.status?a.movingFlag?0:(a.startX=b.targetTouches[0].pageX,void(a.startY=b.targetTouches[0].pageY)):1}),c.on("touchend",function(b){if(!a.status)return 1;if(a.movingFlag)return 0;var c="v"===a.o.dir?(b.changedTouches[0].pageY-a.startY)/a.height:(b.changedTouches[0].pageX-a.startX)/a.width,d=c>a.o.der||c<-a.o.der?c>0?-1:1:0;a.moveTo(a.curIndex+d,!0)}),a.o.drag&&c.on("touchmove",function(b){if(!a.status)return 1;if(a.movingFlag)return a.startX=b.targetTouches[0].pageX,a.startY=b.targetTouches[0].pageY,0;var d=b.changedTouches[0].pageY-a.startY;(0==a.curIndex&&d>0||a.curIndex===a.pagesLength-1&&0>d)&&(d/=2);var e=b.changedTouches[0].pageX-a.startX;(0==a.curIndex&&e>0||a.curIndex===a.pagesLength-1&&0>e)&&(e/=2);var g="v"===a.o.dir?-a.curIndex*a.height+d:-a.curIndex*a.width+e;c.removeClass("anim"),f(c,a.o.dir,g)}),b.addEventListener("orientationchange",function(){(180===b.orientation||0===b.orientation)&&a.o.orientationchange("portrait"),(90===b.orientation||-90===b.orientation)&&a.o.orientationchange("landscape")},!1),b.addEventListener("resize",function(){a.update()},!1)},holdTouch:function(){a(document).on("touchmove",d)},unholdTouch:function(){a(document).off("touchmove",d)},start:function(){this.status=1,this.holdTouch()},stop:function(){this.status=0,this.unholdTouch()},moveTo:function(a,c){var d=this,g=d.$this,h=d.curIndex;if(a=e(a,d.pagesLength,d.o.loop),c?g.addClass("anim"):g.removeClass("anim"),a!==h){var i=d.o.beforeChange({next:a,cur:h});if(i===!1)return 1}return d.movingFlag=!0,d.curIndex=a,f(g,d.o.dir,-a*("v"===d.o.dir?d.height:d.width)),a!==h&&d.o.change({prev:h,cur:a}),b.setTimeout(function(){d.movingFlag=!1,a!==h&&(d.o.afterChange({prev:h,cur:a}),d.$pages.removeClass("cur").eq(a).addClass("cur"))},d.o.duration),0},movePrev:function(a){this.moveTo(this.curIndex-1,a)},moveNext:function(a){this.moveTo(this.curIndex+1,a)},getCurIndex:function(){return this.curIndex}}),a.fn.fullpage=function(b){return i||(i=new h(a(this),b)),this},a.fn.fullpage.version="0.5.0",a.each(["update","moveTo","moveNext","movePrev","start","stop","getCurIndex","holdTouch","unholdTouch"],function(b,c){a.fn.fullpage[c]=function(){return i?i[c].apply(i,[].slice.call(arguments,0)):0}})}(Zepto,window);