/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.querySelector("#btn").addEventListener("click", (e) => {
  const outputas = document.querySelector("#output");
  outputas.innerHTML = null;
  fetch(ENDPOINT)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        outputas.innerHTML += `
          <div>
          <h3>Login: ${element.login}</h3>
          <h3>Avatar URL: <a href="${element.avatar_url}">Click me</a></h3>
          </div>
          `;
      });
    });
});
