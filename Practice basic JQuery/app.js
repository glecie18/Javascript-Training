$(document).ready(function() {
  // 1. Show the hidden restaurant review with an animation.
  $('#hiddenReview').fadeIn('slow'); // Or you can use slideDown('slow') for a different animation.

  // 2. Set the title of the hidden restaurant review to a different name.
  $('#hiddenReview h3').text('The Best New Restaurant in Town');

  // 3. Change the text of the hidden restaurant review, including HTML elements.
  $('#hiddenReview p').html('This is an <strong>amazing</strong> restaurant! <span>Highly recommend!</span>');

  // 4. Change the name of the app inside the span in h1.
  $('h1 span').text('New Restaurant Finder');

  // 5. Create an animation for the paragraph with id "flashMessage".
  $('#flashMessage').animate({
    top: '+=50px', // Slide down (adjust the value as necessary)
  }, 1000) // 1 second to slide down
  .delay(2000) // Delay for 2 seconds
  .animate({
    top: '-=50px', // Slide up
  }, 1000); // 1 second to slide up

  // 6. Inside the click handler, create a working restaurant review form.
  $('#submitBtn').click(function() {
    // a. Get the values of the input fields
    var restaurantName = $('#restaurantName').val();
    var restaurantReview = $('#restaurantReview').val();

    // b. Insert the restaurant name value into the #newRestaurant h3 tag
    $('#newRestaurant h3').text(restaurantName);

    // c. Insert the restaurant review value into the #newRestaurant paragraph tag
    $('#newRestaurant p').html(restaurantReview);
  });
});
