
const mongoose = require("mongoose");

const isvalidpassword = function (password) {
    const passwordRegex = 	/^(?=.*\d).{8,15}$/; // atleast one numericdigit
    return passwordRegex.test(password);
};

const isvalidMobileNumber = function (phone) {
    const MobileNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return MobileNumberRegex.test(phone);
};

const isvalidEmail = function (email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[com]+)*$/;
    return emailRegex.test(email);
};

const isvaliduserId = function (userId) {
    return mongoose.Types.ObjectId.isValid(userId);
  };

  const isvalidName = function (name) {
    const nameRegex = /^[a-zA-Z][a-zA-Z]*$/;
    return nameRegex.test(name);
  };

  const isValidBooktitle = function (title) {
    const regex = /^[A-Za-z0-9\s\-_,\.;:()]+$/
    return regex.test(title)
  }

  const isvalidDate = function (date){
    const regex =/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
    return regex.test(date)
  }

  const isvalidISBN = function (value){
    const regex =/^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/g
    return regex.test(value)
  }

  const isvalidEmpty = function(value){
    const regex =/^\s+$/
    return regex.test(value)
  }
  

  
  


module.exports = {
    isvalidpassword,
    isvalidMobileNumber,
    isvalidEmail,
    isvaliduserId,
    isvalidName,
    isValidBooktitle,
    isvalidDate,
    isvalidISBN,
    isvalidEmpty
};
