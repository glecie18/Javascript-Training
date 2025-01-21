const utilities = require("./utilities");

const mailValues = {};

mailValues.first_name = "Glecie";

const emailTemplate = "Hi %first_name%! Thanks for completing this code challenge :)";

const mergedContent = utilities.merge(emailTemplate, mailValues);
