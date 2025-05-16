const lista = [5, 15, 3, 7, 1, 4, 6, 2, 11, 55];

console.log(lista.join());
lista.sort((a, b) => {
  //console.log(a,b,a-b)
  return a - b;
});

console.log(lista.join());
lista.sort((a, b) => {
  //console.log(a,b,a-b)
  return Math.random() - 0.5;
});
console.log(lista.join());

const objLista = [
  { nev: "Jenő", kor: 23, nem: "férfi" },
  { nev: "Béla", kor: 54, nem: "férfi" },
  { nev: "Juli", kor: 12, nem: "nő" },
  { nev: "Jani", kor: 40, nem: "férfi" },
  { nev: "Lujza", kor: 33, nem: "nő" },
];

/* rendezzük név szerint */
objLista.sort((a, b) => {
  return a.nev.localeCompare(b.nev);
});
console.log(JSON.stringify(objLista));

/* szám szerint */
objLista.sort((a, b) => {
  return a.kor - b.kor;
});
console.log(JSON.stringify(objLista));

/* sort helyben rendez nem helyezi át az adatokat, nem hoz létre uj listát, az eredetit módosítja */

/* lista szűrése 10-nél nagyobb számok*/
const ujLista = lista.filter((a) => {
  return a > 10;
});
console.log(ujLista.join());

/* szűrjük ki a páros számokat */
const parosLista = lista.filter((a) => {
  return a % 2 === 0;
});
console.log(parosLista.join());

/* válogassuk ki a nőket */
const noObjLista = objLista.filter((a) => {
  return a.nem === "nő";
});
console.log(JSON.stringify(noObjLista));

/* írj metódust ami a div-ben megjelenített paraméterként kaott lista tartalmát */
megjelenit(objLista, document.querySelector(".tartalom"));

function megjelenit(lista, szuloElem) {
  let html = "";
  lista.forEach((elem) => {
    console.log(elem);
    html += `<p>${elem.nev}, ${elem.kor} éves, ${elem.nem}</p>`;
  });
  szuloElem.innerHTML = html
}

/* Készíts legördülő menüt amelyben kiválaszthatjuk hogy névszerint/korszerint rendezve jelenjenek 
meg az adatok illetve hogy szűrjünk 18 év felettiekre vagy nőkre vagy ferfiakra */

const kivalasztElem = document.querySelector("#valaszt");
console.log(kivalasztElem.value);
kivalasztElem.addEventListener("change", () => {
  console.log(kivalasztElem.value);
  switch (kivalasztElem.value) {
    case "valassz": //az eredeti lista jelenjen meg
      megjelenit(objLista, document.querySelector(".tartalom"));
      break;
   case "nevNovekvo": //név sszerint növekvő sorrendben jelenjen meg
    objLista.sort((a, b) => {
      return a.nev.localeCompare(b.nev);
    });
    megjelenit(objLista, document.querySelector(".tartalom"));
      break;
    case "nevCsokken": //az eredeti lista jelenjen meg
      objLista.sort((a, b) => {
        return b.nev.localeCompare(a.nev);
      });
      megjelenit(objLista, document.querySelector(".tartalom"));
      break;
    case "nok": //az eredeti lista jelenjen meg
      const noObjLista = objLista.filter((a) => {
        return a.nem === "nő";
      });
      megjelenit(noObjLista, document.querySelector(".tartalom"));
      break;
    case "ferfiak": //az eredeti lista jelenjen meg
      const ferfiObjLista = objLista.filter((a) => {
        return a.nem === "férfi";
      });
      megjelenit(ferfiObjLista, document.querySelector(".tartalom"));
      break;
    case "nagykoru": //az eredeti lista jelenjen meg
      const nagykoruObjLista = objLista.filter((a) => {
        return a.kor >= 18;
      });
      megjelenit(nagykoruObjLista, document.querySelector(".tartalom"));
      break;
    default:
      break;
  }
})
