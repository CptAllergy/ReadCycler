$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
  });

});


// $('body').on('click', '.search-btn-nav', function() {
//   console.log("search_name");
//   var search_name = document.getElementById('search-navbar').value;
//
//   if (search_name != undefined && search_name != null) {
//     window.location = '/searchPage?search=' + search_name;
//   }
// });


var search_btn = document.getElementById('search-btn');
if (search_btn != null) {
  search_btn.onclick = function () {
    let search_name = document.getElementById('search-input').value;
    // console.log(search_name);
    if (search_name != undefined && search_name != null) {
      window.location = '/ReadCycler/reserved/searchPage.html?search=' + search_name;
    }
  }
}

var search_btn_nav = document.getElementById('search-btn-nav');
if (search_btn_nav != null) {
  search_btn_nav.onclick = function () {
    let search_name = document.getElementById('search-navbar').value;
    // console.log(search_name);
    if (search_name != undefined && search_name != null) {
      window.location = '/ReadCycler/reserved/searchPage.html?search=' + search_name;
    }
  }
}




// $('.search-btn').on('click',  function() {
//   var search_name = document.getElementById('search-input').value;
//   console.log(search_name);
//   if (search_name != undefined && search_name != null) {
//     window.location = '/searchPage?search=' + search_name;
//   }
// });

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
if (btnSignUp != null) {
  btnSignUp.onclick = function () {
    modal.style.display = "block";
  }
}
if (btnLogIn != null) {
  btnLogIn.onclick = function () {
    modalLogin.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
if (span != null) {
  span.onclick = function () {
    modal.style.display = "none";
    modalLogin.style.display = "none";
  }
}
// When the user clicks on <span> (x), close the modal
if (span2 != null) {
  span2.onclick = function () {
    modal.style.display = "none";
    modalLogin.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
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


//Likes Modal
// Get the modal
var modalLikes = document.getElementById("likesModal");

// Get the button that opens the modal
var btnLikes = document.getElementById("editLikesId");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
if (btnLikes != null) {
  btnLikes.onclick = function () {
    modalLikes.style.display = "block";
  }
}


// When the user clicks on <span> (x), close the modal
if (span3 != null) {
  span3.onclick = function () {
    modalLikes.style.display = "none";
  }
}



//New trade functions
function addBookToLocalStorage() {
  let title = document.getElementById("bookTitleId").value;
  let condition = document.getElementById("bookConditionId").value;
  let genre = document.getElementById("genres").value;
  if (title == null || title.valueOf() == "".valueOf() || condition == null || condition.valueOf() == "".valueOf()|| genre == null || genre.valueOf() == "".valueOf()) {
    let redText = document.getElementById("pleaseFillText");
    redText.style.display = "block";
  } else {
    let withvar = "";
    let status = "Pending";
    let id = Math.floor(Date.now() / 1000).toString(16);
    //date
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '/' + mm + '/' + yyyy;

    var book = {
      tradeId: id,
      book: title,
      status: status,
      with: withvar,
      date: today,
      condition: condition,
      genre: genre
    };

    var trades = JSON.parse(localStorage.getItem("myTrades"));
    trades.unshift(book);
    localStorage.setItem("myTrades", JSON.stringify(trades));
    location.href = "myTrades.html";
  }
}




function searchFunction() {
  var resultsForSearch;
  var input, location, genre, resultsForSearch;

  showingResultsForSearch = document.getElementById("showing-results-for-search");
  input = document.getElementById("search-input");
  location = document.getElementById("location-input");
  genre = document.getElementById("genre-input");
  resultsForSearch = document.getElementById("result-for-search")

  if (input.value != "") {
    var string = 'Showing results for: "' + input.value + '"';
    resultsForSearch.textContent = string;
  }

}


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
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) { elmnt.innerHTML = this.responseText; }
          if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
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



