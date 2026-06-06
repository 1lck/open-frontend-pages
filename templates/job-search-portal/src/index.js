//navbar
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll>150){
            $(".navbar").css("background","#0076de");
            $(".navbar").css("box-shadow","none");
        }else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shadow","none"); 
        }
    })
})

//smooth scroll
var navbarHeight=$(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref=$(this).attr("href");
    var targetElement=$(targetHref);
    if(!targetHref || targetHref === "#" || targetElement.length === 0){
        return;
    }
    $("html,body").animate({
        scrollTop:targetElement.offset().top - navbarHeight
    },1000)
    e.preventDefault();
});

//navbar mobile
const mobile=document.querySelector(".menu-toggle");
const mobileLink=document.querySelector(".navbar-menu");

mobile.addEventListener("click",function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click",function(){
    const menuBars=document.querySelector("is-active");
    if(window.innerWidth <=768 && menuBars){
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})

//swiper
var swiper=new Swiper(".swiper",
{
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerView:3,
            spaceBetween:20,
        },
        768:{
            slidesPerView:3,
            spaceBetween:40,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:50,
        }
    }
})
