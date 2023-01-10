const showRegisterForm = document.getElementById("show-register-form");

const registerForm = document.getElementById("register");

showRegisterForm.addEventListener("click", function(){
  registerForm.style.display = "block";
  showRegisterForm.style.display= "none";
})

const signInBtn = document.getElementById("signInBtn");
signInBtn.addEventListener("click", function(){
  // window.location.href = "home.html"
 var emailInput = document.getElementById("emailInput");
  var passwordInput = document.getElementById("passwordInput");
  // var regEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  
  //this not allowing second @ bedore @gmail.com, but allowing anything else
  // var regEmail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var pattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/"; //this is better?
  if (emailInput.value =="" ){
  alert ("Please enter your email address!");
  emailInput.focus();
  // return false;
  }

// else if( !emailInput.value.match(pattern)){
//   alert ("Please enter your email address in correct format!");
//     emailInput.focus();
// }

else if( !emailInput.value){
  alert ("Please enter your email address in correct format!");
    emailInput.focus();
}

  // else if( !regEmail.test(emailInput.value)){
  //   alert ("Please enter your email address in correct format!");
  //   emailInput.focus();
  //   return false;
  // }

  // else if (emailInput.value !="" && regEmail.test(emailInput.value) ){
    else if (emailInput.value !="" && emailInput.value.match(pattern) ){
      // else if (emailInput.value !="" && emailInput.value ){
    if(passwordInput.value == ""){
      alert ("Please enter your password!");
      passwordInput.focus();
      // return false;
    }
  
    else if(passwordInput.value.length<8){
      alert ("Password must be at least 8 characters long!");
      passwordInput.focus();
      // return false;
    }

  }
  else if (emailInput.value !="" && emailInput.value.match(pattern) && passwordInput.value != "" && passwordInput.value.length>=8){
    window.location.href = "home.html"
  }
 
})