$(document).ready(function() {
    
    $('#hiddenReview').fadeIn('slow'); 
  
    $('#hiddenReview h3').text('The Best New Restaurant in Town');
  
    $('#hiddenReview p').html('This is an <strong>amazing</strong> restaurant! <span>Highly recommend!</span>');
  
    $('h1 span').text('New Restaurant Finder');
  
    $('#flashMessage').animate({
      top: '+=50px', 
    }, 1000) 
    .delay(2000) 
    .animate({
      top: '-=50px', 
    }, 1000); 
  
    $('#submitBtn').click(function() { 
      var restaurantName = $('#restaurantName').val();
      var restaurantReview = $('#restaurantReview').val();
     
      $('#newRestaurant h3').text(restaurantName);
  
      $('#newRestaurant p').html(restaurantReview);
    });
  });
  