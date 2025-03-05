const bnrSlide = new Swiper('.bnr_slide',{
    //속성
    autoplay:{
        delay:2000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:false, // 사용자 상호작용 상관없이 계속 진행
    },
    loop:true, //무한 반복 설정
    speed:1000, // 애니메이션 전환 시 걸리는 시간
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    
})
const newSlide = new Swiper('.new_slide',{
    //속성
    loop:true, //무한 반복 설정
    slidesPerView:5,  //한번에 표시되는 슬라이드 개수
    //(위)표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함 !!
    spaceBetween: 37.5,
    slidesPerGroup:2,
    centeredSlides:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
        1920: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 5,
        },
        0: {
            slidesPerView: 3,  //1024이하 일때
        }
    }
});
const bestSlide = new Swiper('.best_slide',{
    autoplay:{
        delay:2000, //다음 슬라이드전환까지 대기시간
        disableOnInteraction:true, // 사용자 상호작용 상관없이 계속 진행
    },
    //속성
    loop:true, //무한 반복 설정
    slidesPerView: 3.5,  //한번에 표시되는 슬라이드 개수
    //(위)표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함 !!
    spaceBetween: 30,
    //centeredSlides:true,
    scrollbar: {
        el: ".best_slide .event-scrollbar",
    },
    breakpoints: { 
        1920: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        1000: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        },
        0: {
            spaceBetween: 13,
            slidesPerView: 3,  //1024이하 일때
        }
    }
});

const categorySlide = new Swiper('.category_area .swiper',{
    //속성
    loop:true, //무한 반복 설정
    slidesPerView:5,  //한번에 표시되는 슬라이드 개수
    //(위)표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함 !!
    spaceBetween: 37.5,
    centeredSlides:false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: { 
        1920: {
            slidesPerView: 5,
        },
        1024: {
            slidesPerView: 5,
        },
        0: {
            slidesPerView: 3,  //1024이하 일때
        }
    }
});

var custom = new Swiper(".custom", {
    loop:true, //무한 반복 설정
    centeredSlides:false,
    slidesPerView: 2,
    spaceBetween: 25,
    breakpoints: { 
        1920: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,  //1024이하 일때
        }
    }
});

const swiches = document.querySelector('.swiches')
const keyboard = document.querySelector('.keyboard')
const categoryBtn = document.querySelectorAll('.category_btn a')
categoryBtn[0].addEventListener('click',(e)=>{
    e.preventDefault()
    categoryBtn[0].classList.remove('active')
    categoryBtn[1].classList.remove('active')
    categoryBtn[2].classList.remove('active')
    categoryBtn[3].classList.remove('active')
    categoryBtn[4].classList.remove('active')
    categoryBtn[0].classList.add('active')
    keyboard.style.display = 'block'
    swiches.style.display = 'none'
})
categoryBtn[1].addEventListener('click',(e)=>{
    e.preventDefault()
    categoryBtn[0].classList.remove('active')
    categoryBtn[2].classList.remove('active')
    categoryBtn[3].classList.remove('active')
    categoryBtn[4].classList.remove('active')
    categoryBtn[1].classList.add('active')
    keyboard.style.display = 'none'
    swiches.style.display = 'block'
})
categoryBtn[2].addEventListener('click',(e)=>{
    e.preventDefault()
    categoryBtn[0].classList.remove('active')
    categoryBtn[1].classList.remove('active')
    categoryBtn[3].classList.remove('active')
    categoryBtn[4].classList.remove('active')
    categoryBtn[2].classList.add('active')
})
categoryBtn[3].addEventListener('click',(e)=>{
    e.preventDefault()
    categoryBtn[0].classList.remove('active')
    categoryBtn[1].classList.remove('active')
    categoryBtn[2].classList.remove('active')
    categoryBtn[4].classList.remove('active')
    categoryBtn[3].classList.add('active')
})
categoryBtn[4].addEventListener('click',(e)=>{
    e.preventDefault()
    categoryBtn[0].classList.remove('active')
    categoryBtn[1].classList.remove('active')
    categoryBtn[2].classList.remove('active')
    categoryBtn[3].classList.remove('active')
    categoryBtn[4].classList.add('active')
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