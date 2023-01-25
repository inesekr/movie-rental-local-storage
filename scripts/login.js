

window.addEventListener("load", function(){

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));



  if (currentUser){
    alert("You are already logged in");
    window.location.href = "home.html";
  }

  else{


document.getElementById("show-register-form").addEventListener("click", (event)=>{
  let registerForm = document.getElementById("register");
    registerForm.style.display = "block";
    document.getElementById("show-register-form").style.display= "none";
})

// function showForm(){
//   let registerForm = document.getElementById("register");
//   registerForm.style.display = "block";
//   document.getElementById("show-register-form").style.display= "none";
// }


document.getElementById("registerBtn").addEventListener("click", (event)=>{
  // event.preventDefault();
  registerValidation();
})

document.getElementById("signInBtn").addEventListener("click", (event)=>{
  validateLogIn();
})

function validateLogIn(){

let email= document.getElementById("email");
let password = document.getElementById("password");

// var pattern= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  
//this not allowing second @ before @gmail.com, but allowing anything else?
// var regEmail= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// var pattern = "/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/";

//this is better?
// var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; 

let regexp = /\S+@\S+\.\S+/; //this checks for format anything@anything.anything

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
  else {
      console.log("no errors found");
      console.log(usersArr);
      console.log("check array");
 
      console.log(email.value);
      console.log("check");
      let thisUser = usersArr.find(({userEmail, userPassword})=> userEmail===email.value && userPassword===password.value);
  
      console.log(thisUser);
      console.log("check");

      if(thisUser){
           console.log("Success");
           
      localStorage.setItem("currentUser", JSON.stringify(thisUser));

        window.location.href = "home.html";
         }
         else{
          console.log("User not found!");
          alert("User not found!");
            window.location.href = "login.html";
         }
      }
  };



function registerValidation(){

 let nameReg= document.getElementById("nameReg");
  let surname= document.getElementById("surname");
  let emailReg= document.getElementById("emailReg");
  let emailRepeat= document.getElementById("emailRepeat");
  let passwordReg = document.getElementById("passwordReg");
  let passwordRepeat = document.getElementById("passwordRepeat");

  let regexp = /\S+@\S+\.\S+/; //this checks for format anything@anything.anything
  
  //allows only letters, AND spaces:
  // var regexpLetters = /^[A-Za-z ]*$/; 

  let regexpLetters = /^[A-Za-z]*$/; //allows only letters, NO spaces

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
  if( !regexp.test(emailReg.value)){
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
    registerUser();
  }
};


let usersArr = JSON.parse(localStorage.getItem("users")) || [];
function registerUser(){

      console.log(usersArr);
   
      let userName = nameReg.value;
      let userSurname = surname.value;
      let userEmail = emailReg.value;
      let userPassword = passwordReg.value;

      //need to create new user object
      let user = {userName, userSurname, userEmail, userPassword};
      // console.log(user);
      
      usersArr.push(user);
      // console.log(usersArr);
      localStorage.setItem("users", JSON.stringify(usersArr));
      alert("You have succesfully registered, can sign in now");
         window.location.href = "login.html";
}

  }})