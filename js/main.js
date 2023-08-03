const responsive={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
} 

$(document).ready(function(){
    $nav=$(".nav");
    $toggleCollapse=$('.toggle-collapse');
   
    /*click event on togle menu*/ 
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    /*-------------owl- carousel*-----------*/
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });



    /*click to scrll top*/
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000);
    })
    
    /*$('.move-down span').click(function(){
        $('html,body').animate({
            scrollDown:0
        },2000);
    })*/
   //AOS
   AOS.init();


});