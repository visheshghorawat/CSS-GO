
   function getTotal(){


     var fname = document.getElementById('fname').value;
     var rate = document.getElementById('room').value;
     var n = document.getElementById('nights').value;
     var max_person = document.getElementById('room').max;
     var n_guests = document.getElementById('guests').value;
     var n_room = document.getElementById('number_room').value;
     var bf_price = document.getElementById('breakfast').value;

     var total= rate*n_room*n;
     var total_bf = total + n_guests*bf_price;
     
     if(total_bf>0){
       document.getElementById("total").innerHTML = "Total amount For your stay: "+ total_bf +"  "  +"Cosmos";}
     else{
       document.getElementById("total").innerHTML = "Please enter valid Input";}
     if(n>0 && total_bf>0){
       document.getElementById("n").innerHTML = "For a Duration of " + n + " Night/s";}
     event.preventDefault();
   }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  getTotal();
  event.preventDefault();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}