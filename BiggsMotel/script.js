let homeButton = document.getElementById('homeMenu');
let homeDropdown = document.getElementById('homeDropdown');
let contact = document.getElementById("contactMenu");


homeButton.addEventListener('mouseenter', function() {
  homeDropdown.style.display = 'block'; // Display the dropdown options when the mouse hovers over the "Home" menu
});

homeButton.addEventListener('mouseleave', function() {
  // Check if the mouse is still over the dropdown menu
  let isMouseOverDropdown = false;

  homeDropdown.addEventListener('mouseenter', function() {
    isMouseOverDropdown = true;
  });

  homeDropdown.addEventListener('mouseleave', function() {
    isMouseOverDropdown = false;
    homeDropdown.style.display = 'none'; // Hide the dropdown options when the mouse leaves the dropdown menu
  });

  // Hide the dropdown options only if the mouse is not over the dropdown menu
  setTimeout(function() {
    if (!isMouseOverDropdown) {
      homeDropdown.style.display = 'none';
    }
  }, 200);
});


var roomsButton = document.getElementById('roomsMenu');
var roomsDropdown = document.getElementById('roomsDropdown');



 document.addEventListener("DOMContentLoaded", function() {
    let gallery = document.getElementById("gallaryMenu");
    gallery.addEventListener("click", function() {
      window.location.href = "gallery.html";
    });
  });

document.addEventListener('DOMContentLoaded', function(){
  homeButton.addEventListener('click', function(){
    window.location.href = "index.html";
  });
});
 document.addEventListener("DOMContentLoaded", function() {
    let res = document.getElementById("reservationsMenu");
    res.addEventListener("click", function() {
      window.location.href = "res.html";
    });
  });


function scrollToCheckIn() {
  const checkInElement = document.getElementById("check-in");
  if (checkInElement) {
    checkInElement.scrollIntoView({ behavior: "smooth" });
  } 
}
function scrollIntoViewFirst(){ 
  window.location.href = "index.html#check-in";
  const checkInElement = document.getElementById("check-in");
  if (checkInElement) {
    checkInElement.scrollIntoView({ behavior: "smooth" });
  }
 
}

function scrollToService(){
  const room = document.getElementById("room");
  if(room){
    room.scrollIntoView({behavior:"smooth"});
  }
}

function scrollToServiceFirst(){
  window.location.href = "index.html#room";
  const room = document.getElementById("room");
  if(room){
    room.scrollIntoView({behavior:"smooth"});
  }
}




