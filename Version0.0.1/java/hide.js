var menue_over = false;
var menue_open = false;


function openNav() {
  document.getElementById("mySidenav").style.width = "50%";
  menue_open = true;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  menue_open = false;
}



//document.getElementById("netStatus").addEventListener("mouseover", mouseOver);
//document.getElementById("netStatus").addEventListener("mouseout", mouseOut);


function mouseOver() {
  menue_over = true;
}

function mouseOut() {
  menue_over = false;
}


function ColorBlue() {
	circleColor = 'blue';
}

function ColorBlack() {
	circleColor = 'black';
}

function ColorGreen() {
	circleColor = 'green';
}


var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}