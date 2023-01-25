
document.getElementById("logout").addEventListener("click", ()=>{
  logout();
})

function logout(){
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // console.log(currentUser);
  currentUser = null;
  // console.log(currentUser);
  localStorage.removeItem("currentUser");
   window.location.href = "login.html";
}

//data array:
const movies = [
    {name: "batman1", genre: "Action", price: "4.55$", inStock: 0},
    {name: "batman2", genre: "Action", price: "4.55$", inStock: 1},
    {name: "batman3", genre: "Action", price: "4.55$", inStock: 2},
    {name: "batman4", genre: "Action", price: "4.55$", inStock: 3},
    {name: "batman5", genre: "Action", price: "4.55$", inStock: 4},
    {name: "batman6", genre: "Action", price: "4.55$", inStock: 5},
    {name: "batman7", genre: "Action", price: "4.55$", inStock: 6},
    {name: "batman8", genre: "Action", price: "4.55$", inStock: 7},
];

window.addEventListener("load", function(){

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
 
  if( !currentUser){
    alert("You need to log in first!");
    window.location.href = "login.html";
  }

  else{
  var table = document.getElementById("table");
  var body = document.getElementById("body");

  body.innerHTML = "";

  console.log(body);
  //here it gives already full list of array items in form of table (like body with rows and td's). 
  //But WHY? If all functionality comes afterwards??

  console.log(body.innerHTML);
  // But this gives just empty string, as defined on line 18

  var tr = "";

  movies.forEach(x=>{
    
    var image;
    if (x.inStock>=1){
     image ='<img src="icons/check.png" alt="green check icon">'
    }
    else 
    {image='<img src="icons/cross.png" alt="red icon with white cross">'}

    tr+='<tr>';
    tr+='<td>' + x.name+'</td>'+'<td>'+x.genre+'</td>'+'<td>'+x.price+'</td>'+'<td>'+image+'</td>'+'<td>'+"Rent"+'</td>';  
    tr+='</tr>';

  })

  body.innerHTML+=tr;
  // body.appendChild(tr);

  //attach created body to pre-defined table:
  table.appendChild(body);

  if (table) {
 
    // const yourMovies = localStorage.getItem("yourmovies") || [];
    const yourMovies =  [];
  
    for (var i = 1; i < table.rows.length; i++) {
        
      table.rows[i].i = i;
        
      table.rows[i].cells[4].onclick = function() {
          
        // localStorage.setItem("yourmovies", JSON.stringify(yourMovies));
        var row = this.parentNode;
        // console.log(this.parentNode);
        var tname = row.cells[0].innerHTML;
        var tgenre = row.cells[1].innerHTML;
        var tprice = row.cells[2].innerHTML;
        var i=row.rowIndex;
        // console.log(i);
        
        var count = Number(movies[i-1].inStock);
    
        if(count>0){
          var obj = {'name': tname, 'genre': tgenre, 'price': tprice};
          // console.log(obj);
          
          yourMovies.push(obj);
          // console.log(yourMovies);

          localStorage.setItem("yourmovies", JSON.stringify(yourMovies));
    
          //here generating table for yourMovies from yourMovies Array:
          var yourTable = document.getElementById("yourTable");
          var yourBody = document.getElementById("yourBody");
          // console.log(yourTable);
          //gives null
          yourBody.innerHTML = ""; 
          // console.log(yourBody);
          // console.log(yourBody.innerHTML);
          var tr = "";
     
          yourMovies.forEach(x=>{
            
            tr+='<tr>';
            tr+='<td>' + x.name+'</td>'+'<td>'+x.genre+'</td>'+'<td id="time-span">'+ '<span id="time-sign-minus">&#60</span><span id="time"><span id="hours">12</span><span id="hours-sign">h</span></span><span id="time-sign-plus">&#62</span>'+
                '</td>'+'<td>'+x.price+'</td>'+'<td>'+"Remove"+'</td>';  
            tr+='</tr>';
                      
            })
          yourBody.innerHTML+=tr;
          yourTable.appendChild(yourBody);

          count--;
          // console.log(count);
          // to change stock amount in movies array:
          movies[i-1].inStock = count;
                
          // and if stock equals 0, change also image in table to "cross":
           
          if(count===0){
            row.cells[3].innerHTML = '<img src="icons/cross.png" alt="red icon with white cross">';
          }
    
          if(yourTable){
            for (var i=1; i<yourTable.rows.length; i++){
              // yourTable.rows[i].i = i;
              yourTable.rows[i].cells[4].onclick = function(){
                var row = this.parentNode;
               
                //first - find that specific object in array, by index
                var i=row.rowIndex;
                           
                var nameToRemove = yourTable.rows[i].cells[0].innerHTML;
                console.log(nameToRemove);
    
                //remove from array
                yourMovies.splice(i-1, 1);
                localStorage.setItem("yourmovies", JSON.stringify(yourMovies));
                       
                const searchObject = movies.find((x)=>x.name==nameToRemove);
                console.log(searchObject);
                 
                var indexOfObject = movies.findIndex((obj)=>{
                  if(obj.name === nameToRemove){
                    return true;
                  }
                })
                console.log(indexOfObject);
                  
                searchObject.inStock++;
                
                console.log(searchObject.inStock);
                console.log(table.rows[indexOfObject+1]);
          
                table.rows[indexOfObject+1].cells[3].innerHTML='<img src="icons/check.png" alt="green check icon">';
                        
                console.log(movies);
                console.log(table);
        
                yourTable.deleteRow(i);
                console.log(yourTable);
                console.log(yourMovies);
                                     
              }    
                
              yourTable.rows[i].cells[2].onclick = function(e) {
                var row = this.parentNode;
                console.log(row);
                console.log(yourTable.rows.length);
                var i=row.rowIndex;
                console.log(i);
            
                var plusSpan = yourTable.rows[i].querySelector("#time-span :nth-child(3)");
                console.log(plusSpan);
    
    
                var hours = row.querySelector("#time-span :nth-child(2) :nth-child(1)");
                console.log(hours);
                var hoursNumber = Number(hours.innerHTML);
                console.log(hoursNumber);
    
                var minusSpan = yourTable.rows[i].querySelector("#time-span :nth-child(1)");
                  console.log(minusSpan);
    
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
          }  
           else alert("This movie is out of stock!");
        }
      }
    }

}
})
  
