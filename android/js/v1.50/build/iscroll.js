define([],function(){function n(e,t,n){var r=document.createElement("div"),i=document.createElement("div");return n===!0&&(r.style.cssText="position:absolute;z-index:9999",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),i.className="iScrollIndicator",e=="h"?(n===!0&&(r.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",i.style.height="100%"),r.className="iScrollHorizontalScrollbar"):(n===!0&&(r.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",i.style.width="100%"),r.className="iScrollVerticalScrollbar"),r.style.cssText+=";overflow:hidden",t||(r.style.pointerEvents="none"),r.appendChild(i),r}function r(t,n){this.wrapper=typeof n.el=="string"?document.querySelector(n.el):n.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0};for(var r in n)this.options[r]=n[r];this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(e.addEvent(this.indicator,"touchstart",this),e.addEvent(window,"touchend",this)),this.options.disablePointer||(e.addEvent(this.indicator,"MSPointerDown",this),e.addEvent(window,"MSPointerUp",this)),this.options.disableMouse||(e.addEvent(this.indicator,"mousedown",this),e.addEvent(window,"mouseup",this))),this.options.fade&&(this.wrapperStyle[e.style.transform]=this.scroller.translateZ,this.wrapperStyle[e.style.transitionDuration]=e.isBadAndroid?"0.001s":"0ms",this.wrapperStyle.opacity="0")}var e=function(){function r(e){return n===!1?!1:n===""?e:n+e.charAt(0).toUpperCase()+e.substr(1)}var e={},t=document.createElement("div").style,n=function(){var e=["t","webkitT","MozT","msT","OT"],n,r=0,i=e.length;for(;r<i;r++){n=e[r]+"ransform";if(n in t)return e[r].substr(0,e[r].length-1)}return!1}();e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(e,t){for(var n in t)e[n]=t[n]},e.addEvent=function(e,t,n,r){e.addEventListener(t,n,!!r)},e.removeEvent=function(e,t,n,r){e.removeEventListener(t,n,!!r)},e.prefixPointerEvent=function(e){return window.MSPointerEvent?"MSPointer"+e.charAt(9).toUpperCase()+e.substr(10):e},e.momentum=function(e,t,n,r,i,s){var o=e-t,u=Math.abs(o)/n,a,f;return s=s===undefined?6e-4:s,a=e+u*u/(2*s)*(o<0?-1:1),f=u/s,a<r?(a=i?r-i/2.5*(u/8):r,o=Math.abs(a-e),f=o/u):a>0&&(a=i?i/2.5*(u/8):0,o=Math.abs(e)+a,f=o/u),{destination:Math.round(a),duration:f}};var i=r("transform");return e.extend(e,{hasTransform:i!==!1,hasPerspective:r("perspective")in t,hasTouch:"ontouchstart"in window,hasPointer:window.PointerEvent||window.MSPointerEvent,hasTransition:r("transition")in t}),e.isBadAndroid=/Android /.test(window.navigator.appVersion)&&!/Chrome\/\d/.test(window.navigator.appVersion),e.extend(e.style={},{transform:i,transitionTimingFunction:r("transitionTimingFunction"),transitionDuration:r("transitionDuration"),transitionDelay:r("transitionDelay"),transformOrigin:r("transformOrigin")}),e.hasClass=function(e,t){var n=new RegExp("(^|\\s)"+t+"(\\s|$)");return n.test(e.className)},e.addClass=function(t,n){if(e.hasClass(t,n))return;var r=t.className.split(" ");r.push(n),t.className=r.join(" ")},e.removeClass=function(t,n){if(!e.hasClass(t,n))return;var r=new RegExp("(^|\\s)"+n+"(\\s|$)","g");t.className=t.className.replace(r," ")},e.offset=function(e){var t=-e.offsetLeft,n=-e.offsetTop;while(e=e.offsetParent)t-=e.offsetLeft,n-=e.offsetTop;return{left:t,top:n}},e.preventDefaultException=function(e,t){for(var n in t)if(t[n].test(e[n]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(e){return e*(2-e)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(e){return Math.sqrt(1- --e*e)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(e){var t=4;return(e-=1)*e*((t+1)*e+t)+1}},bounce:{style:"",fn:function(e){return(e/=1)<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375}},elastic:{style:"",fn:function(e){var t=.22,n=.4;return e===0?0:e==1?1:n*Math.pow(2,-10*e)*Math.sin((e-t/4)*2*Math.PI/t)+1}}}),e.tap=function(e,t){var n=document.createEvent("Event");n.initEvent(t,!0,!0),n.pageX=e.pageX,n.pageY=e.pageY,e.target.dispatchEvent(n)},e.click=function(e){var t=e.target,n;/(SELECT|INPUT|TEXTAREA)/i.test(t.tagName)||(n=document.createEvent("MouseEvents"),n.initMouseEvent("click",!0,!0,e.view,1,t.screenX,t.screenY,t.clientX,t.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n._constructed=!0,t.dispatchEvent(n))},e}(),t=function(t,n){this.wrapper=typeof t=="string"?document.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceLock:!1,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var r in n)this.options[r]=n[r];this.translateZ=this.options.HWCompositing&&e.hasPerspective?" translateZ(0)":"",this.options.useTransition=e.hasTransition&&this.options.useTransition,this.options.useTransform=e.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY=this.options.eventPassthrough=="vertical"?!1:this.options.scrollY,this.options.scrollX=this.options.eventPassthrough=="horizontal"?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing=typeof this.options.bounceEasing=="string"?e.ease[this.options.bounceEasing]||e.ease.circular:this.options.bounceEasing,this.options.resizePolling=this.options.resizePolling===undefined?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.options.shrinkScrollbars=="scale"&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()};return t.prototype={version:"5.1.1",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(e){if(e.target!=this.scroller||!this.isInTransition)return;this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd"))},_start:function(t){typeof CbcNative!="undefined"&&CbcNative.lockTouchEvent();if(e.eventType[t.type]!=1&&t.button!==0)return;if(!this.enabled||this.initiated&&e.eventType[t.type]!==this.initiated)return;this.options.preventDefault&&!e.isBadAndroid&&!e.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var n=t.touches?t.touches[0]:t,r;this.initiated=e.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=e.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,r=this.getComputedPosition(),this._translate(Math.round(r.x),Math.round(r.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=n.pageX,this.pointY=n.pageY,this._execEvent("beforeScrollStart")},_move:function(t){if(!this.enabled||e.eventType[t.type]!==this.initiated)return;this.options.preventDefault&&t.preventDefault();var n=t.touches?t.touches[0]:t,r=n.pageX-this.pointX,i=n.pageY-this.pointY,s=e.getTime(),o,u,a,f;this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=r,this.distY+=i,a=Math.abs(this.distX),f=Math.abs(this.distY);if(s-this.endTime>300&&a<10&&f<10)return;!this.directionLocked&&!this.options.freeScroll&&(a>f+this.options.directionLockThreshold?this.directionLocked="h":f>=a+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n");if(this.directionLocked=="h"){if(this.options.eventPassthrough=="vertical")t.preventDefault();else if(this.options.eventPassthrough=="horizontal"){this.initiated=!1;return}i=0}else if(this.directionLocked=="v"){if(this.options.eventPassthrough=="horizontal")t.preventDefault();else if(this.options.eventPassthrough=="vertical"){this.initiated=!1;return}r=0}r=this.hasHorizontalScroll?r:0,i=this.hasVerticalScroll?i:0,o=this.x+r,u=this.y+i;if(o>0||o<this.maxScrollX)o=this.options.bounce?this.x+r/3:o>0?0:this.maxScrollX;if(u>0||u<this.maxScrollY)u=this.options.bounce?this.y+i/3:u>0?0:this.maxScrollY;this.directionX=r>0?-1:r<0?1:0,this.directionY=i>0?-1:i<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(o,u),s-this.startTime>300&&(this.startTime=s,this.startX=this.x,this.startY=this.y),this._execEvent("scrollMove")},_end:function(t){if(!this.enabled||e.eventType[t.type]!==this.initiated)return;this.options.preventDefault&&!e.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var n=t.changedTouches?t.changedTouches[0]:t,r,i,s=e.getTime()-this.startTime,o=Math.round(this.x),u=Math.round(this.y),a=Math.abs(o-this.startX),f=Math.abs(u-this.startY),l=0,c="";this.isInTransition=0,this.initiated=0,this.endTime=e.getTime();if(this.resetPosition(this.options.bounceTime))return;this.scrollTo(o,u);if(!this.moved){this.options.tap&&e.tap(t,this.options.tap),this.options.click&&e.click(t),this._execEvent("scrollCancel");return}if(this._events.flick&&s<200&&a<100&&f<100){this._execEvent("flick");return}this.options.momentum&&s<300&&(r=this.hasHorizontalScroll?e.momentum(this.x,this.startX,s,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},i=this.hasVerticalScroll?e.momentum(this.y,this.startY,s,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:u,duration:0},o=r.destination,u=i.destination,l=Math.max(r.duration,i.duration),this.isInTransition=1);if(this.options.snap){var h=this._nearestSnap(o,u);this.currentPage=h,l=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(o-h.x),1e3),Math.min(Math.abs(u-h.y),1e3)),300),o=h.x,u=h.y,this.directionX=0,this.directionY=0,c=this.options.bounceEasing}if(o!=this.x||u!=this.y){if(o>0||o<this.maxScrollX||u>0||u<this.maxScrollY)c=e.ease.quadratic;this.scrollTo(o,u,l,c);return}this._execEvent("scrollEnd")},_resize:function(){var e=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){e.refresh()},this.options.resizePolling)},resetPosition:function(e){var t=this.x,n=this.y;return e=e||0,!this.hasHorizontalScroll||this.x>0?t=0:this.x<this.maxScrollX&&(t=this.maxScrollX),!this.hasVerticalScroll||this.y>0?n=0:this.y<this.maxScrollY&&(n=this.maxScrollY),t==this.x&&n==this.y?!1:(this.scrollTo(t,n,e,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){var t=this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&(!this.options.bounceLock||this.maxScrollY<0),this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=e.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},off:function(e,t){if(!this._events[e])return;var n=this._events[e].indexOf(t);n>-1&&this._events[e].splice(n,1)},_execEvent:function(e){if(!this._events[e])return;var t=0,n=this._events[e].length;if(!n)return;for(;t<n;t++)this._events[e][t].apply(this,[].slice.call(arguments,1))},scrollBy:function(e,t,n,r){e=this.x+e,t=this.y+t,n=n||0,this.scrollTo(e,t,n,r)},scrollTo:function(t,n,r,i){i=i||e.ease.circular,this.isInTransition=this.options.useTransition&&r>0,!r||this.options.useTransition&&i.style?(this._transitionTimingFunction(i.style),this._transitionTime(r),this._translate(t,n)):this._animate(t,n,r,i.fn)},scrollToElement:function(t,n,r,i,s){t=t.nodeType?t:this.scroller.querySelector(t);if(!t)return;var o=e.offset(t);o.left-=this.wrapperOffset.left,o.top-=this.wrapperOffset.top,r===!0&&(r=Math.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),i===!0&&(i=Math.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),o.left-=r||0,o.top-=i||0,o.left=o.left>0?0:o.left<this.maxScrollX?this.maxScrollX:o.left,o.top=o.top>0?0:o.top<this.maxScrollY?this.maxScrollY:o.top,n=n===undefined||n===null||n==="auto"?Math.max(Math.abs(this.x-o.left),Math.abs(this.y-o.top)):n,this.scrollTo(o.left,o.top,n,s)},_transitionTime:function(t){t=t||0,this.scrollerStyle[e.style.transitionDuration]=t+"ms",!t&&e.isBadAndroid&&(this.scrollerStyle[e.style.transitionDuration]="0.001s");if(this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].transitionTime(t)},_transitionTimingFunction:function(t){this.scrollerStyle[e.style.transitionTimingFunction]=t;if(this.indicators)for(var n=this.indicators.length;n--;)this.indicators[n].transitionTimingFunction(t)},_translate:function(t,n){this.options.useTransform?this.scrollerStyle[e.style.transform]="translate("+t+"px,"+n+"px)"+this.translateZ:(t=Math.round(t),n=Math.round(n),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=n+"px"),this.x=t,this.y=n;if(this.indicators)for(var r=this.indicators.length;r--;)this.indicators[r].updatePosition()},_initEvents:function(t){var n=t?e.removeEvent:e.addEvent,r=this.options.bindToWrapper?this.wrapper:window;n(window,"orientationchange",this),n(window,"resize",this),this.options.click&&n(this.wrapper,"click",this,!0),this.options.disableMouse||(n(this.wrapper,"mousedown",this),n(r,"mousemove",this),n(r,"mousecancel",this),n(r,"mouseup",this)),e.hasPointer&&!this.options.disablePointer&&(n(this.wrapper,"MSPointerDown",this),n(r,"MSPointerMove",this),n(r,"MSPointerCancel",this),n(r,"MSPointerUp",this)),e.hasTouch&&!this.options.disableTouch&&(n(this.wrapper,"touchstart",this),n(r,"touchmove",this),n(r,"touchcancel",this),n(r,"touchend",this)),n(this.scroller,"transitionend",this),n(this.scroller,"webkitTransitionEnd",this),n(this.scroller,"oTransitionEnd",this),n(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t=window.getComputedStyle(this.scroller,null),n,r;return this.options.useTransform?(t=t[e.style.transform].split(")")[0].split(", "),n=+(t[12]||t[4]),r=+(t[13]||t[5])):(n=+t.left.replace(/[^-\d.]/g,""),r=+t.top.replace(/[^-\d.]/g,"")),{x:n,y:r}},_initIndicators:function(){function a(e){for(var t=o.indicators.length;t--;)e.call(o.indicators[t])}var e=this.options.interactiveScrollbars,t=typeof this.options.scrollbars!="string",i=[],s,o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(s={el:n("v",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:t,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(s.el),i.push(s)),this.options.scrollX&&(s={el:n("h",e,this.options.scrollbars),interactive:e,defaultScrollbars:!0,customStyle:t,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(s.el),i.push(s))),this.options.indicators&&(i=i.concat(this.options.indicators));for(var u=i.length;u--;)this.indicators.push(new r(this,i[u]));this.options.fadeScrollbars&&(this.on("scrollEnd",function(){a(function(){this.fade()})}),this.on("scrollCancel",function(){a(function(){this.fade()})}),this.on("scrollStart",function(){a(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){a(function(){this.fade(1,!0)})})),this.on("refresh",function(){a(function(){this.refresh()})}),this.on("destroy",function(){a(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){e.addEvent(this.wrapper,"wheel",this),e.addEvent(this.wrapper,"mousewheel",this),e.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){e.removeEvent(this.wrapper,"wheel",this),e.removeEvent(this.wrapper,"mousewheel",this),e.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(e){if(!this.enabled)return;e.preventDefault(),e.stopPropagation();var t,n,r,i,s=this;this.wheelTimeout===undefined&&s._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){s._execEvent("scrollEnd"),s.wheelTimeout=undefined},400);if("deltaX"in e)t=-e.deltaX,n=-e.deltaY;else if("wheelDeltaX"in e)t=e.wheelDeltaX/120*this.options.mouseWheelSpeed,n=e.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in e)t=n=e.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in e))return;t=n=-e.detail/3*this.options.mouseWheelSpeed}t*=this.options.invertWheelDirection,n*=this.options.invertWheelDirection,this.hasVerticalScroll||(t=n,n=0);if(this.options.snap){r=this.currentPage.pageX,i=this.currentPage.pageY,t>0?r--:t<0&&r++,n>0?i--:n<0&&i++,this.goToPage(r,i);return}r=this.x+Math.round(this.hasHorizontalScroll?t:0),i=this.y+Math.round(this.hasVerticalScroll?n:0),r>0?r=0:r<this.maxScrollX&&(r=this.maxScrollX),i>0?i=0:i<this.maxScrollY&&(i=this.maxScrollY),this.scrollTo(r,i,0)},_initSnap:function(){this.currentPage={},typeof this.options.snap=="string"&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var e=0,t,n=0,r,i,s,o=0,u,a=this.options.snapStepX||this.wrapperWidth,f=this.options.snapStepY||this.wrapperHeight,l;this.pages=[];if(!this.wrapperWidth||!this.wrapperHeight||!this.scrollerWidth||!this.scrollerHeight)return;if(this.options.snap===!0){i=Math.round(a/2),s=Math.round(f/2);while(o>-this.scrollerWidth){this.pages[e]=[],t=0,u=0;while(u>-this.scrollerHeight)this.pages[e][t]={x:Math.max(o,this.maxScrollX),y:Math.max(u,this.maxScrollY),width:a,height:f,cx:o-i,cy:u-s},u-=f,t++;o-=a,e++}}else{l=this.options.snap,t=l.length,r=-1;for(;e<t;e++){if(e===0||l[e].offsetLeft<=l[e-1].offsetLeft)n=0,r++;this.pages[n]||(this.pages[n]=[]),o=Math.max(-l[e].offsetLeft,this.maxScrollX),u=Math.max(-l[e].offsetTop,this.maxScrollY),i=o-Math.round(l[e].offsetWidth/2),s=u-Math.round(l[e].offsetHeight/2),this.pages[n][r]={x:o,y:u,width:l[e].offsetWidth,height:l[e].offsetHeight,cx:i,cy:s},o>this.maxScrollX&&n++}}this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1===0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=Math.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}),this.on("flick",function(){var e=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(this.x-this.startX),1e3),Math.min(Math.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,e)})},_nearestSnap:function(e,t){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var n=0,r=this.pages.length,i=0;if(Math.abs(e-this.absStartX)<this.snapThresholdX&&Math.abs(t-this.absStartY)<this.snapThresholdY)return this.currentPage;e>0?e=0:e<this.maxScrollX&&(e=this.maxScrollX),t>0?t=0:t<this.maxScrollY&&(t=this.maxScrollY);for(;n<r;n++)if(e>=this.pages[n][0].cx){e=this.pages[n][0].x;break}r=this.pages[n].length;for(;i<r;i++)if(t>=this.pages[0][i].cy){t=this.pages[0][i].y;break}return n==this.currentPage.pageX&&(n+=this.directionX,n<0?n=0:n>=this.pages.length&&(n=this.pages.length-1),e=this.pages[n][0].x),i==this.currentPage.pageY&&(i+=this.directionY,i<0?i=0:i>=this.pages[0].length&&(i=this.pages[0].length-1),t=this.pages[0][i].y),{x:e,y:t,pageX:n,pageY:i}},goToPage:function(e,t,n,r){r=r||this.options.bounceEasing,e>=this.pages.length?e=this.pages.length-1:e<0&&(e=0),t>=this.pages[e].length?t=this.pages[e].length-1:t<0&&(t=0);var i=this.pages[e][t].x,s=this.pages[e][t].y;n=n===undefined?this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(i-this.x),1e3),Math.min(Math.abs(s-this.y),1e3)),300):n,this.currentPage={x:i,y:s,pageX:e,pageY:t},this.scrollTo(i,s,n,r)},next:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n++,n>=this.pages.length&&this.hasVerticalScroll&&(n=0,r++),this.goToPage(n,r,e,t)},prev:function(e,t){var n=this.currentPage.pageX,r=this.currentPage.pageY;n--,n<0&&this.hasVerticalScroll&&(n=0,r--),this.goToPage(n,r,e,t)},_initKeys:function(t){var n={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40},r;if(typeof this.options.keyBindings=="object")for(r in this.options.keyBindings)typeof this.options.keyBindings[r]=="string"&&(this.options.keyBindings[r]=this.options.keyBindings[r].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(r in n)this.options.keyBindings[r]=this.options.keyBindings[r]||n[r];e.addEvent(window,"keydown",this),this.on("destroy",function(){e.removeEvent(window,"keydown",this)})},_key:function(t){if(!this.enabled)return;var n=this.options.snap,r=n?this.currentPage.pageX:this.x,i=n?this.currentPage.pageY:this.y,s=e.getTime(),o=this.keyTime||0,u=.25,a;this.options.useTransition&&this.isInTransition&&(a=this.getComputedPosition(),this._translate(Math.round(a.x),Math.round(a.y)),this.isInTransition=!1),this.keyAcceleration=s-o<200?Math.min(this.keyAcceleration+u,50):0;switch(t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?r+=n?1:this.wrapperWidth:i+=n?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?r-=n?1:this.wrapperWidth:i-=n?1:this.wrapperHeight;break;case this.options.keyBindings.end:r=n?this.pages.length-1:this.maxScrollX,i=n?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:r=0,i=0;break;case this.options.keyBindings.left:r+=n?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:i+=n?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:r-=n?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:i-=n?1:5+this.keyAcceleration>>0;break;default:return}if(n){this.goToPage(r,i);return}r>0?(r=0,this.keyAcceleration=0):r<this.maxScrollX&&(r=this.maxScrollX,this.keyAcceleration=0),i>0?(i=0,this.keyAcceleration=0):i<this.maxScrollY&&(i=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(r,i,0),this.keyTime=s},_animate:function(t,n,r,i){function l(){var c=e.getTime(),h,p,d;if(c>=f){s.isAnimating=!1,s._translate(t,n),s.resetPosition(s.options.bounceTime)||s._execEvent("scrollEnd");return}c=(c-a)/r,d=i(c),h=(t-o)*d+o,p=(n-u)*d+u,s._translate(h,p),s.isAnimating&&rAF(l)}var s=this,o=this.x,u=this.y,a=e.getTime(),f=a+r;this.isAnimating=!0,l()},handleEvent:function(e){switch(e.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(e);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(e);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(e);break;case"keydown":this._key(e);break;case"click":e._constructed||(e.preventDefault(),e.stopPropagation())}}},r.prototype={handleEvent:function(e){switch(e.type){case"touchstart":case"MSPointerDown":case"mousedown":this._start(e);break;case"touchmove":case"MSPointerMove":case"mousemove":this._move(e);break;case"touchend":case"MSPointerUp":case"mouseup":case"touchcancel":case"MSPointerCancel":case"mousecancel":this._end(e)}},destroy:function(){this.options.interactive&&(e.removeEvent(this.indicator,"touchstart",this),e.removeEvent(this.indicator,"MSPointerDown",this),e.removeEvent(this.indicator,"mousedown",this),e.removeEvent(window,"touchmove",this),e.removeEvent(window,"MSPointerMove",this),e.removeEvent(window,"mousemove",this),e.removeEvent(window,"touchend",this),e.removeEvent(window,"MSPointerUp",this),e.removeEvent(window,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var n=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=n.pageX,this.lastPointY=n.pageY,this.startTime=e.getTime(),this.options.disableTouch||e.addEvent(window,"touchmove",this),this.options.disablePointer||e.addEvent(window,"MSPointerMove",this),this.options.disableMouse||e.addEvent(window,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var n=t.touches?t.touches[0]:t,r,i,s,o,u=e.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,r=n.pageX-this.lastPointX,this.lastPointX=n.pageX,i=n.pageY-this.lastPointY,this.lastPointY=n.pageY,s=this.x+r,o=this.y+i,this._pos(s,o),t.preventDefault(),t.stopPropagation()},_end:function(t){if(!this.initiated)return;this.initiated=!1,t.preventDefault(),t.stopPropagation(),e.removeEvent(window,"touchmove",this),e.removeEvent(window,"MSPointerMove",this),e.removeEvent(window,"mousemove",this);if(this.scroller.options.snap){var n=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),r=this.options.snapSpeed||Math.max(Math.max(Math.min(Math.abs(this.scroller.x-n.x),1e3),Math.min(Math.abs(this.scroller.y-n.y),1e3)),300);if(this.scroller.x!=n.x||this.scroller.y!=n.y)this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=n,this.scroller.scrollTo(n.x,n.y,r,this.scroller.options.bounceEasing)}this.moved&&this.scroller._execEvent("scrollEnd")},transitionTime:function(t){t=t||0,this.indicatorStyle[e.style.transitionDuration]=t+"ms",!t&&e.isBadAndroid&&(this.indicatorStyle[e.style.transitionDuration]="0.001s")},transitionTimingFunction:function(t){this.indicatorStyle[e.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(e.addClass(this.wrapper,"iScrollBothScrollbars"),e.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(e.removeClass(this.wrapper,"iScrollBothScrollbars"),e.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));var t=this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=Math.max(Math.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,this.options.shrink=="clip"?(this.minBoundaryX=-this.indicatorWidth+8,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=Math.max(Math.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.options.shrink=="clip"?(this.minBoundaryY=-this.indicatorHeight+8,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&Math.round(this.sizeRatioX*this.scroller.x)||0,n=this.options.listenY&&Math.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?(this.options.shrink=="scale"&&(this.width=Math.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?this.options.shrink=="scale"?(this.width=Math.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",t=this.maxPosX+this.indicatorWidth-this.width):t=this.maxBoundaryX:this.options.shrink=="scale"&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),n<this.minBoundaryY?(this.options.shrink=="scale"&&(this.height=Math.max(this.indicatorHeight+n*3,8),this.indicatorStyle.height=this.height+"px"),n=this.minBoundaryY):n>this.maxBoundaryY?this.options.shrink=="scale"?(this.height=Math.max(this.indicatorHeight-(n-this.maxPosY)*3,8),this.indicatorStyle.height=this.height+"px",n=this.maxPosY+this.indicatorHeight-this.height):n=this.maxBoundaryY:this.options.shrink=="scale"&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=n,this.scroller.options.useTransform?this.indicatorStyle[e.style.transform]="translate("+t+"px,"+n+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=n+"px")},_pos:function(e,t){e<0?e=0:e>this.maxPosX&&(e=this.maxPosX),t<0?t=0:t>this.maxPosY&&(t=this.maxPosY),e=this.options.listenX?Math.round(e/this.sizeRatioX):this.scroller.x,t=this.options.listenY?Math.round(t/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(e,t)},fade:function(t,n){if(n&&!this.visible)return;clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var r=t?250:500,i=t?0:300;t=t?"1":"0",this.wrapperStyle[e.style.transitionDuration]=r+"ms",this.fadeTimeout=setTimeout(function(e){this.wrapperStyle.opacity=e,this.visible=+e}.bind(this,t),i)}},t.utils=e,typeof module!="undefined"&&module.exports?module.exports=t:window.IScroll=t,t});