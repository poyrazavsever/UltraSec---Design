$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:true,
            loop:false
        }
    }
})


function openNav() {
    document.getElementById("YanMenu").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("YanMenu").style.width = "0";
  }
  