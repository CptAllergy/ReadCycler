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
var span2 = document.getElementsByClassName("close")[1];

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
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal.style.display = "none";
    modalLogin.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modalLogin) {
    modal.style.display = "none";
      modalLogin.style.display = "none";
  }
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalLogin) {
//       modalLogin.style.display = "none";
//   }
// }


function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}


