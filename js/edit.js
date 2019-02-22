/*global $ */
$(document).ready(function ($) {
    'use strict';
    
    
     /*creating click event*/
      $('a#click-a').click(function(){
        $('.nav').toggleClass('nav-view');
          $('.nav-overlay').css("display","block");
      });
    
      $('.ico-close').click(function(){
        $('.nav').removeClass('nav-view');
          $('.nav-overlay').css("display","none");
      });
    
     $('.nav-overlay').click( function() {
         $('.nav').removeClass('nav-view'); 
         $('.nav-overlay').css("display","none"); 
      });


    // ADD PRODUCT PAGE UPLOAD IMGS    
    $(".input-file").change(function(){
       var input = (this);
       var image = $(this).siblings('.input-image');
       if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
              image.attr('src', e.target.result);
              console.log(this);
            }
            reader.readAsDataURL(input.files[0]);
        }
    });
    
    
    // HOME RADIO BUTTON 
    $('.home-student').click(function() {
       if($('#student-chosen').is(':checked')) 
         { 
             $('.home-student h4').css("color","#00e573");
             $('.home-teacher h4').css("color","#54c0eb");
         }
        else {
            $('.home-student h4').css("color","#54c0eb");
           }
    });

   $('.home-teacher').click(function() {
       if($('#teacher-chosen').is(':checked')) 
         { 
            $('.home-teacher h4').css("color","#00e573");
             $('.home-student h4').css("color","#54c0eb");
         }
        else {
            $('.home-teacher h4').css("color","#54c0eb");
           }
    });
    
    
});
    
 