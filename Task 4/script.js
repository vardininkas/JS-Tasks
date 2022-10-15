/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

let automobiliuSarasas = {};
function sukeltiDuomenis(auto) {
  const outputas = document.getElementById("output");
  for (let i = 0; i < auto.length; i++) {
    const konteineris = document.createElement("div");
    const gamintojas = document.createElement("div");
    const modelis = document.createElement("div");

    gamintojas.className = "gamintojasContainer";
    konteineris.className = "konteinerisContainer";
    modelis.className = "modelisContainer";
    modelis.innerText = auto[i].models;
    gamintojas.innerText = auto[i].brand;

    konteineris.append(gamintojas);
    konteineris.append(modelis);
    outputas.append(konteineris);
  }
}
fetch(ENDPOINT)
  .then((result) => result.json())
  .then((output) => {
    automobiliuSarasas = output;
    sukeltiDuomenis(automobiliuSarasas);
  })
  .catch((err) => console.error(err));
