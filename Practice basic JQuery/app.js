<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <title>Practice Basic jQuery Methods</title>
</head>
<body>
  
  <h1><span>Yap!</span> World-Famous Restaurant Reviews</h1>
  
  <div class="section">
    <h2>Recent Reviews</h2>
    <div class="review">
      <h3>Dat Dog</h3>
      <p>Best gator sausage New Orleans has to offer!</p>
    </div>
    <div id="newRestaurant">
      <h3></h3>
      <p></p>
    </div>
  </div>
  <div class="section">
    <h2>Add a Review</h2>
    <p id="flashMessage">Write a review in the next 24 hours and receive a 10% off coupon!</p>
    
    <label>Restaurant Title: <input type="text" id="restaurantNameInput"></label>
    <label>Restaurant Review: <textarea id="restaurantReviewInput"></textarea></label>
    <button id="submitBtn">Submit</button>
    
  </div>
  <script src="js/app.js"></script>
</body>
</html>
