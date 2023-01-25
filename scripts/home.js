
document.getElementById("logout").addEventListener("click", ()=>{
  logout();
})

function logout(){
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  currentUser = null;
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

// hard-coded data array:
let movies = [
    {name: "batman1", genre: "Action", price: "4.55$", inStock: 0},
    {name: "batman2", genre: "Action", price: "4.55$", inStock: 1},
    {name: "batman3", genre: "Action", price: "4.55$", inStock: 2},
    {name: "batman4", genre: "Action", price: "4.55$", inStock: 3},
    {name: "batman5", genre: "Action", price: "4.55$", inStock: 4},
    {name: "batman6", genre: "Action", price: "4.55$", inStock: 5},
    {name: "batman7", genre: "Action", price: "4.55$", inStock: 6},
    {name: "batman8", genre: "Action", price: "4.55$", inStock: 7},
];

movies = JSON.parse(localStorage.getItem("movies")) || movies;

window.addEventListener("load", function(){

  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
 
  if( !currentUser){
    alert("You need to log in first!");
    window.location.href = "login.html";
  }

  else{

    var table = document.getElementById("table");
    // var body = document.getElementById("body");
    for(let i=0; i<movies.length; i++){
      let newRow = table.insertRow();
      let nameCell = newRow.insertCell(0);
      let genreCell = newRow.insertCell(1);
      let priceCell = newRow.insertCell(2);
      let quantityCell = newRow.insertCell(3);
      let rentCell = newRow.insertCell(4);

      var image;
      if (movies[i].inStock>0){
        image ='<img src="icons/check.png" alt="green check icon">'
      }
      else{
        image='<img src="icons/cross.png" alt="red icon with white cross">'
      }

      nameCell.innerHTML = movies[i].name;
      genreCell.innerHTML = movies[i].genre;
      priceCell.innerHTML = movies[i].price;
      quantityCell.innerHTML = '<td>'+image+'</td>'+'<td>'
      rentCell.innerHTML = "Rent";
    }

    let yourMovies = JSON.parse(localStorage.getItem("yourmovies")) || [];
    if (table) {
   
      for (var i = 1; i < table.rows.length; i++) {
        
        table.rows[i].i = i;
        
        table.rows[i].cells[4].onclick = function() {
          
          var row = this.parentNode;
          var tname = row.cells[0].innerHTML;
          var tgenre = row.cells[1].innerHTML;
          var tprice = row.cells[2].innerHTML;
          var i=row.rowIndex;
           
          var count = Number(movies[i-1].inStock);
    
          if(count>0){
            var obj = {'name': tname, 'genre': tgenre, 'price': tprice};
                    
            yourMovies.push(obj);
      
            localStorage.setItem("yourmovies", JSON.stringify(yourMovies));
    
            count--;
            console.log(count);
            // to change stock amount in movies array:
            movies[i-1].inStock = count;

            localStorage.setItem("movies", JSON.stringify(movies));
                
            // and if stock equals 0, change also image in table to "cross":
           
            if(count===0){
            row.cells[3].innerHTML = '<img src="icons/cross.png" alt="red icon with white cross">';
            }    
          }  
          else alert("This movie is out of stock!");
        }
      }
    }
  }
})
  









