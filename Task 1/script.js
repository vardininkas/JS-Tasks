/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const element = document.getElementById("submit-btn");
element.addEventListener("click", konvertuok);
document
  .getElementById("submit-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

function konvertuok() {
  const ivestiKilogramai = document.getElementById("search").value;
  document.getElementById("atsakymas").style.visibility = "visible";

  document.getElementById("svaraiReiksme").innerHTML =
    ivestiKilogramai * 2.2046;
  document.getElementById("gramaiReiksme").innerHTML = ivestiKilogramai / 0.001;
  document.getElementById("uncijosReiksme").innerHTML =
    ivestiKilogramai * 35.274;
}
