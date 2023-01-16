var showRegisterForm = document.getElementById("show-register-form");

var registerForm = document.getElementById("register");

showRegisterForm.addEventListener("click", function(){
  registerForm.style.display = "block";
  showRegisterForm.style.display= "none";
})

function loginValidation(){

var email= document.getElementById("email");
var password = document.getElementById("password");

// var pattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  
//this not allowing second @ before @gmail.com, but allowing anything else?
// var regEmail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// var pattern = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";

//this is better?
// var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

var regexp = /\S+@\S+\.\S+/; //this checks for format anything@anything.anything

  if (email.value =="" ){
    alert ("Please enter your email address!");
    email.focus();
    return false;
  }
  if( !regexp.test(email.value)){
    alert ("Please enter your email address in correct format!");
    email.focus();
    return false;
    }
  if(password.value == ""){
      alert ("Please enter your password!");
      password.focus();
      return false;
    }
  if(password.value.length<8){
    console.log(password.value);
    console.log(password.value.length);
    console.log(password.value.length<8);
      alert ("Password must be at least 8 characters long!");
      password.focus();
      return false;
    }
  else
    {
      window.location.href = "home.html";
    }
};

function registerValidation(){
  var nameReg= document.getElementById("nameReg");
  var surname= document.getElementById("surname");
  var emailReg= document.getElementById("emailReg");
  var emailRepeat= document.getElementById("emailRepeat");
  var passwordReg = document.getElementById("passwordReg");
  var passwordRepeat = document.getElementById("passwordRepeat");

  var regexp = /\S+@\S+\.\S+/; //this checks for format anything@anything.anything
  
  //allows only letters, AND spaces:
  // var regexpLetters = /^[A-Za-z ]*$/; 

  var regexpLetters = /^[A-Za-z]*$/; //allows only letters, NO spaces

  if(nameReg.value==""){
    alert ("Please enter your name!");
    nameReg.focus();
    return false;
  }
  if(nameReg.value.length < 2){
    alert ("Name must be at least 2 characters long!");
    nameReg.focus();
    return false;
  }
  if( !regexpLetters.test(nameReg.value)){
    // if( !nameReg.value.match(regexpLetters))
    alert ("Name must include letters only!");
    nameReg.focus();
    return false;
  }
  if(surname.value==""){
    alert ("Please enter your surname!");
    surname.focus();
    return false;
  }
  if(surname.value.length<2){
    alert ("Surname must be at least 2 characters long!");
    surname.focus();
    return false;
  }
  if( !regexpLetters.test(surname.value)){
    alert ("Surname must include letters only!");
    surname.focus();
    return false;
  }
  if (emailReg.value =="" ){
    alert ("Please enter your email address!");
    emailReg.focus();
    return false;
  }
  else if( !regexp.test(emailReg.value)){
    alert ("Please enter your email address in correct format!");
    emailReg.focus();
    return false;
  }
  if(emailReg.value!= emailRepeat.value){
    alert("E-mail addresses don't match!")
    emailRepeat.focus();
    return false;
  }
  if(passwordReg.value == ""){
      alert ("Please enter your password!");
      passwordReg.focus();
      return false;
  }
  if(passwordReg.value.length<8){
      alert ("Password must be at least 8 characters long!");
      passwordReg.focus();
      return false;
  }
  if(passwordReg.value != passwordRepeat.value){
    alert("Passwords don't match");
    passwordRepeat.focus();
    return false;
  }
  else {
      window.location.href = "home.html";
  }
};