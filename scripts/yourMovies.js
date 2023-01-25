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

  let movies = JSON.parse(localStorage.getItem("movies"));
  let yourMovies = JSON.parse(localStorage.getItem("yourmovies")) || [];

  let yourTable = document.getElementById("yourTable");

  if(yourMovies.length>0){
    for (let i=0; i<yourMovies.length; i++){
      let newCartRow = yourTable.insertRow();
      let cartNameCell = newCartRow.insertCell(0);
      let cartGenreCell = newCartRow.insertCell(1);
      let cartTimeCell = newCartRow.insertCell(2);
      let cartPriceCell = newCartRow.insertCell(3);
      let cartRemoveCell = newCartRow.insertCell(4);
      
      cartNameCell.innerHTML = yourMovies[i].name;
      cartGenreCell.innerHTML = yourMovies[i].genre;
      cartTimeCell.innerHTML = '<span id="time-span"><span id="time-sign-minus">&#60</span><span id="time"><span id="hours">12</span><span id="hours-sign">h</span></span><span id="time-sign-plus">&#62</span></span>';
           
      cartPriceCell.innerHTML = yourMovies[i].price;
      cartRemoveCell.innerHTML = "Remove";
     }
  
    for (let i=1; i<yourTable.rows.length; i++){
      // yourTable.rows[i].i = i;

      //function for removing movie from yourMovies array:
      yourTable.rows[i].cells[4].onclick = function(){
        var yourRow = this.parentNode;
       
        //first - find that specific object in array, by index
        var i=yourRow.rowIndex;
                   
        var nameToRemove = yourTable.rows[i].cells[0].innerHTML;
      
        //remove from array
        yourMovies.splice(i-1, 1);
        localStorage.setItem("yourmovies", JSON.stringify(yourMovies));
      
        const searchObject = movies.find((x)=>x.name==nameToRemove);
           
        // var indexOfObject = movies.findIndex((obj)=>{
        //   if(obj.name === nameToRemove){
        //     return true;
        //   }
        // })
   
        searchObject.inStock++;
        localStorage.setItem("movies", JSON.stringify(movies));
              
        // table.rows[indexOfObject+1].cells[3].innerHTML='<img src="icons/check.png" alt="green check icon">';
        
        yourTable.deleteRow(i);
      }

      // function for adjusting time:
      yourTable.rows[i].cells[2].onclick = function(e) {
        var row = this.parentNode;
        var i=row.rowIndex;
                   
        var plusSpan = yourTable.rows[i].querySelector("#time-span :nth-child(3)");
            
        var hours = row.querySelector("#time-span :nth-child(2) :nth-child(1)");
       
        var hoursNumber = Number(hours.innerHTML);
          
        var minusSpan = yourTable.rows[i].querySelector("#time-span :nth-child(1)");
          
        if(e.target===plusSpan){
          if (hoursNumber<168){
            hoursNumber +=12;
            hours.innerHTML =hoursNumber;                                    
          }                
        }
        else if (e.target===minusSpan){
          if(hoursNumber>=24){
            hoursNumber -=12;
            hours.innerHTML = hoursNumber;
          }
        }
      }
    }
  }
})
     



    

