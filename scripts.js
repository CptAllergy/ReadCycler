$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
  });

  if (localStorage.getItem("notification") == null) {
    // initially set items on localstorage
    let value = JSON.stringify(false);
    localStorage.setItem("notification", value);
  } else {
    let value = JSON.parse(localStorage.getItem("notification"));
    if (value) {
      showNotification();
    } else {
      hideNotification2();
    }
  }


  let url = window.location.href.toLowerCase();
  if (url != null) {
    if (url.includes("search")) {
      let search = url.split("=");
      let search_parameter = search.length > 1 ? search[1] : null;
      search_parameter = decodeURI(search_parameter);
      if (search_parameter != null) {
        let input, location, genre, resultsForSearch;

        showingResultsForSearch = document.getElementById("showing-results-for-search");
        input = document.getElementById("search-input");
        location = document.getElementById("location-input");
        genre = document.getElementById("genre-input");
        resultsForSearch = document.getElementById("result-for-search");
        //console.log(showingResultsForSearch, input, location, genre, resultsForSearch);
        input.value = search_parameter;
        if (input.value != "") {
          let string = 'Showing results for: "' + input.value + '"';
          resultsForSearch.textContent = string;
        }
      }
    } else if (url.includes("profile") || url.includes("myTrades".toLowerCase()) || url.includes("Carlos_Notas".toLowerCase()) || url.includes("Joaquim_Barreiros".toLowerCase())) {
      if (url.includes("success")) {
        document.getElementById('success-alert').style.display = "block";
      }
    }
  }

});

var search_bar = document.getElementById("search-navbar");

//Press enter for search
$(search_bar).on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    let search_name = document.getElementById('search-navbar').value;
    // console.log(search_name);
    if (search_name != undefined && search_name != null) {
      // window.location = '/ReadCycler/reserved/searchPage.html?search=' + search_name;
      window.location = '/reserved/searchPage.html?search=' + search_name;
    }
  }
});

var search_bar_big = document.getElementById("search-input");
$(search_bar_big).on('keyup', function (e) {
  if (e.key === 'Enter' || e.keyCode === 13) {
    let search_name = document.getElementById('search-input').value;
    // console.log(search_name);
    if (search_name != undefined && search_name != null) {
      // window.location = '/ReadCycler/reserved/searchPage.html?search=' + search_name;
      window.location = '/reserved/searchPage.html?search=' + search_name;
    }
  }
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
      // window.location = '/ReadCycler/reserved/searchPage.html?search=' + search_name;
      window.location = '/reserved/searchPage.html?search=' + search_name;
    }
  }
}

var search_btn_nav = document.getElementById('search-btn-nav');
if (search_btn_nav != null) {
  search_btn_nav.onclick = function () {
    let search_name = document.getElementById('search-navbar').value;
    // console.log(search_name);
    if (search_name != undefined && search_name != null) {
      // window.location = '/ReadCycler/reserved/searchPage.html?search=' + search_name;
      window.location = '/reserved/searchPage.html?search=' + search_name;
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
    if (modal != null) {
      modal.style.display = "none";
    }
    if (modalLogin != null) {
      modalLogin.style.display = "none";
    } if (modalLikes != null) {
      modalLikes.style.display = "none";
    }
    if (modalChat != null) {
      modalChat.style.display = "none";
    }
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
  if (event.target == modalChat) {
    modalChat.style.display = "none";
  }
  console.log(event.target);
  if (event.target != document.getElementById("bellAroundId") && event.target != document.getElementById("chatMenuId")
    && event.target != document.getElementById("bell-warning") && document.getElementById("nots").style.display == "block") {
    document.getElementById("nots").style.display = "none";
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

// When the user clicks the button, open the modal 
if (btnLikes != null) {
  btnLikes.onclick = function () {
    modalLikes.style.display = "block";
  }
}

//Chat Modal
// Get the modal
var modalChat = document.getElementById("chatModal");

// When the user clicks the button, open the modal 
function openChatNotification(elem) {
  if (modalChat != null && elem.getAttribute("id").includes("chatId")) {
    modalChat.style.display = "block";

  }
}




// Get the button that opens the modal
var btnChat1 = document.getElementById("chatId1");

// When the user clicks the button, open the modal 
if (btnChat1 != null) {
  btnChat1.onclick = function () {
    modalChat.style.display = "block";
  }
}




//New trade functions
function addBookToLocalStorage() {
  let title = document.getElementById("bookTitleId").value;
  let condition = document.getElementById("bookConditionId").value;
  let genre = document.getElementById("genres").value;
  if (title == null || title.valueOf() == "".valueOf() || condition == null || condition.valueOf() == "".valueOf() || genre == null || genre.valueOf() == "".valueOf()) {
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
    location.href = "myTrades.html?success";
  }
}

//Check Trade function
function checkTradeFunction(elem) {
  window.location = '/reserved/tradeDetails.html?tradeId=' + elem.parentNode.getAttribute("id");
}

function updateLikesLocalStorage() {

  let likes = document.querySelectorAll('input[name=likes]:checked');
  let processedLikes = [];

  for (i = 0; i < likes.length; i++) {
    let element = likes[i];
    // console.log(element.getAttribute('data-name'));
    if (i < likes.length - 1) {
      processedLikes[i] = { name: element.getAttribute('data-name') + ',' };
    } else {
      processedLikes[i] = { name: element.getAttribute('data-name') };
    }
  }

  localStorage.setItem("userLikes", JSON.stringify(processedLikes));
  location.href = "profile.html?success";
}


function submitReport() {

  location.href = "Carlos_Notas.html?success";
}

function submitReportQuim() {
  location.href = "Joaquim_Barreiros.html?success";
}

function travelCheckDetails(elem) {
  let name = elem.parentNode.getAttribute("id");
  name = name.replace(" ", "_") + ".html";
  location.href = "../reserved/" + name;
}

function sendRequest(elem) {
  let by = elem.getAttribute("id");
  let notification;
  if (by.includes("Joaquim")) {

    notification = {
      notId: "chatId",
      message: "Joaquim accepted your request",
      face: "../assets/Quim.png"
    };
    addToStorageTrade("Joaquim Barreiros", "Accepted");
  } else if (by.includes("Carlos")) {

    notification = {
      notId: "noChat",
      message: "Carlos denied your request",
      face: "../assets/Carlos-Moedas.jpg"
    };

    addToStorageTrade("Carlos Notas", "Declined");
  }

  let notifs = JSON.parse(localStorage.getItem("notifications"));
  if (notifs.length >= 5) {
    notifs.pop();
  }
  notifs.unshift(notification);
  localStorage.setItem("notifications", JSON.stringify(notifs));

  document.getElementById('success-alert').style.display = "block";

  let value = JSON.stringify(true);
  localStorage.setItem("notification", value);
}

function addToStorageTrade(name, deal) {
  let title = document.getElementById("detailTitle").innerHTML;
  let condition = "New";
  let genre = "Fantasy";

  let withvar = name;
  let status = deal;
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

}




function searchFunction() {
  let input, location, genre, resultsForSearch;

  showingResultsForSearch = document.getElementById("showing-results-for-search");
  input = document.getElementById("search-input");
  location = document.getElementById("location-input");
  genre = document.getElementById("genre-input");
  resultsForSearch = document.getElementById("result-for-search")

  if (input.value != "" && input.value != null) {
    let string = 'Showing results for: "' + input.value + '"';
    resultsForSearch.textContent = string;
    window.location = '/reserved/searchPage.html?search=' + input.value;
  }

}

function hideNotification() {
  if (document.getElementById("nots") != null) {
    if (document.getElementById("nots").style.display == "none") {
      document.getElementById("nots").style.display = "block";
    } else {
      document.getElementById("nots").style.display = "none";
    }
  }

  let value = JSON.stringify(false);
  localStorage.setItem("notification", value);
  document.getElementById("bell-warning").style.display = "none";
  document.getElementById("chatMenuId").classList.remove('animated');
}

function hideNotification2() {
  let value = JSON.stringify(false);
  localStorage.setItem("notification", value);
  document.getElementById("bell-warning").style.display = "none";
  document.getElementById("chatMenuId").classList.remove('animated');
}

function showNotification() {
  document.getElementById("bell-warning").style.display = "inline";
  document.getElementById("chatMenuId").classList.add('animated');
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


function notifications() {
  var nots = [
    {
      notId: "noChat",
      message: "You have no notifications",
      face: "../assets/discord.png"
    }
  ];


  let notifs = localStorage.getItem("notifications");
  notifs = JSON.parse(notifs);

  if (notifs == null || notifs.length == 0) {
    empty = [];
    localStorage.setItem("notifications", JSON.stringify(empty))
    return {
      nots: nots,
    };
  } else {
    return {
      nots: notifs,
    };
  }




}




