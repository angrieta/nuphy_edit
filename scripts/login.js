$('.header_menu').show();
$('.submenu').hide();
$('.menu-item').click(function(){
    $('.submenu').slideUp();
    $(this).next('.submenu').slideDown();
})
$('.menu_close').click(function(){
    $('.header_menu')
    .animate({left:'-50%'},300)
})
$('.inner .right_menu').click(function(){
    $('.header_menu')
    .animate({left:'0'},300)
})