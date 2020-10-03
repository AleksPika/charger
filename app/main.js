menu.onclick = function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
};

document.querySelector('.menu_icon_wrapper').onclick = function () {
  document.querySelector('.menu_icon').classList.toggle('menu_icon_active');
}