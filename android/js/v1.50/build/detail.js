require(["common"],function(){require(["zepto"],function(e){e(function(){function f(){var t=[],n=e("#tab-content li");for(var r=0;r<n.length;r++){var i=e("#tab-content li").eq(r).find("a");n[r].id=i.attr("data-detail").split("|")[0],n[r].name=i.attr("data-detail").split("|")[1],t.push({id:n[r].id,name:n[r].name})}return t}e("#tab-title-week li").click(function(){e(this).addClass("selected").siblings().removeClass(),e("#tab-content-week > ul").addClass("hidden").eq(e("#tab-title-week li").index(this)).removeClass("hidden")});if(e("#iScrollLive").length>0){var t=e("#iScrollLive li"),n=0,r=e("#video").attr("content").split("|")[0],i=0;for(var s=0;s<t.length;s++){n+=t[s].offsetWidth;var o=e("#iScrollLive li").eq(s).find("a").attr("href").split("/")[4];r===o&&(i=s)}e("#iScrollLive ul").css("width",n+5+"px");var u=new IScroll("#iScrollLive",{eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});i&&u.scrollToElement("li:nth-child("+(i+1)+")",100)}var a=parseFloat(e(".level div.video-title").css("height"));a<77&&(e(".level .shade").css("height",a),e(".level .btn").css("display","none")),a>82&&e(".video-detail").bind("click",function(){e(".video-detail").hasClass("expland")?(e(".video-detail").removeClass("expland"),e(".level .shade").css("height","77px")):(e(".video-detail").addClass("expland"),e(".level .shade").css("height",a))}),e(".tv-title .icon-download").bind("click",function(){var t='{"series":'+JSON.stringify(f())+"}";CbcNative.getSeriesInfo(t),e(this).addClass("active")}),e(".tv-title .icon-share").bind("click",function(){e(this).addClass("active")}),e("#tab-title li").click(function(){e(this).addClass("selected").siblings().removeClass(),e("#tab-content > ul").addClass("hidden").eq(e("#tab-title li").index(this)).removeClass("hidden")}),e("#tab-content li a").click(function(){e("#tab-content li").removeClass("selected"),e(this).parent("li").addClass("selected");var t=e(this).attr("href").split("|")[5];e(".tv-title h2").html(t)})})})}),define("detail",function(){});