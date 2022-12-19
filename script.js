$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ "Full-Stack Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full-Stack Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
document.getElementById("pr6").addEventListener("click",()=>{window.open("https://astonishing-valkyrie-bbc329.netlify.app/", '_blank')})
document.getElementById("pr66").addEventListener("click",()=>{window.open("https://github.com/Anwar7411/melted-scale-2590", '_blank')})
document.getElementById("pr1").addEventListener("click",()=>{window.open("https://wondrous-marigold-ae1bc8.netlify.app/home.html", '_blank')})
document.getElementById("pr2").addEventListener("click",()=>{window.open("https://anwarbly7411-gmail-com-makes-great-sites-bafa1.netlify.app/Login", '_blank')})
document.getElementById("pr3").addEventListener("click",()=>{window.open("https://benevolent-conkies-f99195.netlify.app/", '_blank')})
document.getElementById("pr11").addEventListener("click",()=>{window.open("https://github.com/Anwar7411/direful-order-8525", '_blank')})
document.getElementById("pr22").addEventListener("click",()=>{window.open("https://github.com/Anwar7411/-dangerous-powder-9842/tree/main/rct101", '_blank')})
document.getElementById("pr33").addEventListener("click",()=>{window.open("https://github.com/Anwar7411/fun-trees-7619", '_blank')})
document.getElementById("emailsend").addEventListener("click",()=>{window.location.href=("mailto:bashaa7411@gmail.com")})

