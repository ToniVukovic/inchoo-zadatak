//GET ELEMENTS
let menu = document.getElementById("menu");
let tipka = document.getElementById("tipka");
let gore = document.getElementById("up");
let lijevo = document.getElementById("left");

//OTVARA I ZATVARA MENU
function toggleOpen() {
  menu.classList.toggle("open");
  tipka.classList.toggle("active");
  gore.classList.toggle("show");
  lijevo.classList.toggle("show-left");
}

//POMICE MENU GORE-DOLJE (DODATNI ZADATAK)
let up = document.getElementById("nav-up");
let down = document.getElementById("nav-down");

var slideIndex = 3;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("item");

  if (n >= x.length) {
    down.disabled = true;
  }
  if (n < x.length) {
    down.disabled = false;
  }

  if (n <= 3) {
    up.disabled = true;
  }
  if (n > 3) {
    up.disabled = false;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "flex";
  x[slideIndex - 2].style.display = "flex";
  x[slideIndex - 3].style.display = "flex";
}
