var arrow = document.querySelector(".arrow");
var btn = document.querySelector(".ham");
var mobileNav = document.querySelector(".mobile-nav");

var toggleBtn = false;

btn.addEventListener("click", function (e) {
  if (toggleBtn) {
    mobileNav.style.visibility = "collapse";
    toggleBtn = false;
  } else {
    toggleBtn = true;
    mobileNav.style.visibility = "visible";
  }
});

pos = 35;
id = null;

clearInterval(id);
id = setInterval(function () {
  if (down == true) animate(dolje);
  if (down == false) animate(gore);
}, 1);

var down = true;

function animate(callback) {
  if (pos > 40) {
    down = false;
  }
  if (pos < 35) {
    down = true;
  }
  pos = callback();
  arrow.style.top = pos + "vh";
  return false;
}

function dolje() {
  return (pos += 0.03);
}
function gore() {
  return (pos = pos - 0.03);
}
