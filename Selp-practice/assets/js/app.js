$(document).ready(
function(){
    // hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
            
            },
            600:{
            
            },
            1000:{
            
            }
        }
    })
}
);

$(document).ready(
    function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

}
);
