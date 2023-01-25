
// This was hard-coded user profile info
// var firstName= "John";
// var surname= "Newman";
// var email= "john.newman@gmail.com";


document.getElementById("logout").addEventListener("click", ()=>{
  logout();
})

function logout(){
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  currentUser = null;
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}


window.addEventListener("load", function(){

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser){
    alert("You need to log in first!");
    window.location.href = "login.html";
  }

  else{

    var firstName= currentUser.userName;
    var surname= currentUser.userSurname;
    var email= currentUser.userEmail;

    var profileInfo = document.getElementById("profile-info");
    profileInfo.className = "profile-info";
  
    const namePara = document.createElement('p');
    
    namePara.innerHTML = "<b>Name: </b>" + firstName;
 
    profileInfo.appendChild(namePara);
  
    const surnamePara = document.createElement('p');
    surnamePara.innerHTML = "<b>Surname: </b>" + surname;

    profileInfo.appendChild(surnamePara);
 
    const emailPara = document.createElement('p');
    emailPara.innerHTML = "<b>Email: </b>" + email;

    namePara.className = "profile-p";
    surnamePara.className = "profile-p";
    emailPara.className = "profile-p";

    profileInfo.appendChild(emailPara);

    var resetEmail = document.getElementById("reset-email");
    // resetEmail.addEventListener("click", function(){
    //    prompt("Please enter your new email address");
    // })
  
    resetEmail.onclick = function(input) {
      var input = prompt("Please enter your new email address");
            
      var regexp = /\S+@\S+\.\S+/; //this checks for format anything@anything.anything

      if (input ==="" || input===null ){
        console.log(input);
        alert ("Please enter your email address!");
        // prompt.focus();
        return false;
      }
      if( !regexp.test(input)){
        alert ("Please enter your email address in correct format!");
        return false;
      }
      else {
        emailPara.innerHTML = "<b>Email: </b>" + input;
      }
    }
  }
})

