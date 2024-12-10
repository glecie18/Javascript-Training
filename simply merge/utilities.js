var mailValues = {
    first_name: "Glecie"
  };
  
  var emailTemplate = "Hi %first_name%! Thanks for completing this code challenge :)";
  
  var mergedContent = utilities.merge(emailTemplate, mailValues);
  console.log(mergedContent); 
  