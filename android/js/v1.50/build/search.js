require(["common"],function(){require(["zepto"],function(e){e(function(){var t=e("#search"),n=e("#btn-clear"),r=!1,i;t.bind("input",function(){t.val().trim().length>0?(n.removeClass("hidden"),e.ajax({url:suggest.url+t.val().trim()+suggest.param,dataType:"json",timeout:1e3,success:function(t){var n="";i=t.length;if(i>0){e("#suggest").html(""),e("#suggest").show(),i>suggest.size&&(i=suggest.size);for(var r=0;r<i;r++)n+="<li>"+t[r]+"</li>";e("#suggest").append(n)}}})):(n.addClass("hidden"),e("#suggest").hide())}),e("#suggest li").live("click",function(){r=!0,e("#suggest").hide(),e(".search .keyword").val(e(this).html().trim()),e(".search form").submit()}),e("body").bind("click",function(){e("#suggest").hide()}),n.bind("click",function(){n.addClass("hidden"),t.val("")}),e(".search form").submit(function(){r||e(".search .keyword").val(t.val())})})})}),define("search",function(){});