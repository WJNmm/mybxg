define(['jquery','util'],function($,util){
    //设置导航菜单高亮选中
    //$('.navs a[href="'+location.pathname+'"]').addClass('active');
    util.setMenu(location.pathname);
});