//Filter section

// $(document).ready(function(){
//   $(".button").click(function(){
//       var name = $(this).attr('data-filter');
//       if(name == "all"){
//           $(".shot-thumbnail").show('2000');
//       }else{
//           $(".shot-thumbnail").not("."+name).hide('2000');
//           $(".shot-thumbnail").filter("."+name).show('2000');
//       }
//   })

//   $(".navigation a").click(function(){
//       $(this).addClass("active").siblings().removeClass("active");
//   })
// })

// -----------------navbar---------------------

$(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 50)
        $(".navbar").addClass("nav-shadow")
    else
        $(".navbar").removeClass("nav-shadow")
})

// -----------------navbar---------------------

$(document).ready(function() {
    var $gallery = $('#gallery');
    var $boxes = $('.revGallery-anchor');
    $boxes.hide(); 

    $gallery.imagesLoaded( {background: true}, function() {
    $boxes.fadeIn();

        $gallery.isotope({
            // options
            sortBy : 'original-order',
            layoutMode: 'fitRows',
            itemSelector: '.revGallery-anchor',
            stagger: 30,
        });
    });	

     $('button').on( 'click', function() {
         var filterValue = $(this).attr('data-filter');
          $('#gallery').isotope({ filter: filterValue });
          $gallery.data('lightGallery').destroy(true);
        $gallery.lightGallery({
              selector: filterValue.replace('*','')
        });
    });
});

$(document).ready(function() {
    $("#gallery").lightGallery({
    
}); 
});

//button active mode
$('.button').click(function(){
$('.button').removeClass('is-checked');
$(this).addClass('is-checked');
});


//CSS Gram Filters on Mouse enter
$("#gallery a .nak-gallery-poster").addClass("inkwell");

$("#gallery a").on({
mouseenter : function() {
$(this).find(".nak-gallery-poster").removeClass("inkwell").addClass("walden");
},
mouseleave : function() {
$(this).find(".nak-gallery-poster").removeClass("walden").addClass("inkwell");
}
}); 