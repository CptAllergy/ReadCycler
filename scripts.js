$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop : true,
        margin : 10,
        nav : true,
    });
});

// Get the modal
var modal = document.getElementById("signUpModal");
var modalLogin = document.getElementById("logInModal");

// Get the button that opens the modal
var btnSignUp = document.getElementById("signUp");
var btnLogIn = document.getElementById("logIn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnSignUp.onclick = function() {
  modal.style.display = "block";
}
btnLogIn.onclick = function() {
    modalLogin.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
    modalLogin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalLogin) {
      modalLogin.style.display = "none";
  }
}



