var arrow = document.querySelector(".arrow");

pos = 30;
id = null;

clearInterval(id);
id = setInterval(function () {
  if (down == true) animate(dolje);
  if (down == false) animate(gore);
}, 10);

var down = true;

function animate(callback) {
  if (pos > 40) {
    down = false;
  }
  if (pos < 30) {
    down = true;
  }
  pos = callback();
  arrow.style.top = pos + "vh";
  return false;
}

function dolje() {
  return (pos += 0.1);
}
function gore() {
  return (pos = pos - 0.1);
}
