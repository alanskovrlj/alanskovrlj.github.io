
function validateForm() {
 
 
  var idLista = ["name", "email", "telefon"];
  var string;
  
  /* let x = document.forms["upit"]["pizza"].value;
  if (x == "hide") {
    alert("Niste odabrali pizzu");
    return false;
  } */
  

  var ready = true;

  let x = document.forms["upit"]["pizza"].value;
  if (x == "hide") {


    document.getElementById("check-pizza").innerHTML = "* Molimo Vas da odaberete pizzu";
    document.getElementById("check-pizza").style.color = "#d93025"

    document.getElementById("pizza-select").style.borderColor = "#d93025";


    /* let node = document.createTextNode("* Odaberite pizzu!");
    let element = document.getElementById("check-pizza");
    element.appendChild(node);
    element.style.color = "#d93025"; */
    ready = false;
  }

  for (let i = 0; i < idLista.length; i++) {
    string = document.forms["upit"][idLista[i]].value;

    if (string == "") {
      document.getElementById(idLista[i]).style.borderColor = "#d93025";
      document.getElementById("test" + i.toString()).innerHTML = "* Ovo polje je obavezno";
      document.getElementById("test" + i.toString()).style.color = "#d93025"

      /* let node = document.createTextNode("* Ovo polje je obavezno");
      element = document.getElementById("test" + i.toString());
      element.appendChild(node); */
      /* element.style.color = "#d93025"; */
      ready = false;
    }
  }
  if(ready = false) {
    return false;
  }
  
  let y = document.forms["upit"]["checkbox"].checked;
  if (y == false) {

    document.getElementById("uvjeti").innerHTML = "* Ovo polje je obavezno";
      document.getElementById("uvjeti").style.color = "#d93025"
    /*  let node = document.createTextNode("* Ovo polje je obavezno");
    element = document.getElementById("uvjeti");
    element.appendChild(node);
    element.style.color = "#d93025";
 */
    return false;
  }

}
