var sub = new Swiper(".sell_container .sub_bg", {
    autoplay:{
        delay:2000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true,
    slidesPerView: 5,
    spaceBetween: 22,
    navigation: {
        nextEl: ".slide_bnr_btn .swiper-button-next",
        prevEl: ".slide_bnr_btn  .swiper-button-prev",
    },
    breakpoints: { 
        1920: {
            slidesPerView: 5,
            spaceBetween: 22,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        0: {
            spaceBetween: 10,
            slidesPerView: 5,  //1024이하 일때
        }
    }
});

/* const main1 = document.querySelector('.sell_container .main_bg')
const sub1 = document.querySelector('.sub_menu .sub_view1')
const sub2 = document.querySelector('.sub_bg .slide2')
const sub3 = document.querySelector('.sub_bg .slide3')
const sub4 = document.querySelector('.sub_bg .slide4')
const sub5 = document.querySelector('.sub_bg .slide5')
const sub6 = document.querySelector('.sub_bg .slide6')
const sub7= document.querySelector('.sub_bg .slide7')
const sub8 = document.querySelector('.sub_bg .slide8')
const sub9 = document.querySelector('.sub_bg .slide9')
const sub10 = document.querySelector('.sub_bg .slide10')
sub1.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_002.png" alt="">'
})
sub2.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_001.png" alt="">'
})
sub3.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_003.png" alt="">'
})
sub4.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_004.png" alt="">'
})
sub5.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_005.png" alt="">'
})
sub6.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_002.png" alt="">'
})
sub7.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_001.png" alt="">'
})
sub8.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_003.png" alt="">'
})
sub9.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_004.png" alt="">'
})
sub10.addEventListener('mouseenter',()=>{
    main1.innerHTML = '<img src="./images/sell_page/item_005.png" alt="">'
}) */

    const main1 = document.querySelector('.sell_container .main_bg')
    const sub1 = document.querySelector('.sub_bg .slide1')
    const sub2 = document.querySelector('.sub_bg .slide2')
    const sub3 = document.querySelector('.sub_bg .slide3')
    const sub4 = document.querySelector('.sub_bg .slide4')
    const sub5 = document.querySelector('.sub_bg .slide5')
    const sub6 = document.querySelector('.sub_bg .slide6')
    const sub7 = document.querySelector('.sub_bg .slide7')
    const sub8 = document.querySelector('.sub_bg .slide8')
    const sub9 = document.querySelector('.sub_bg .slide9')
    const sub10 = document.querySelector('.sub_bg .slide10')
    sub1.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_001.png" alt="">'
    })
    sub2.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_002.png" alt="">'
    })
    sub3.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_003.png" alt="">'
    })
    sub4.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_004.png" alt="">'
    })
    sub5.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_005.png" alt="">'
    })
    sub6.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_002.png" alt="">'
    })
    sub7.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_001.png" alt="">'
    })
    sub8.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_003.png" alt="">'
    })
    sub9.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_004.png" alt="">'
    })
    sub10.addEventListener('mouseenter',()=>{
        main1.innerHTML = '<img src="./images/sell_page/item_005.png" alt="">'
    })
    
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