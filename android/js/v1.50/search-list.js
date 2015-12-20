require(['common','search'],function(){
    require([
        'zepto',
        'page',
        'text!./tpl/list.html'
    ], function ($, Page, ahtml ) {
        new Page(pager, ahtml);
    });
});