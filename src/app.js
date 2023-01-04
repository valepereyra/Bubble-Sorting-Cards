/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //esta funcion genera UNA carta ramdom
  function ramdomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let indexPalo = Math.floor(Math.random() * palos.length);
    let indexNumero = Math.floor(Math.random() * numeros.length);

    console.log(palos[indexPalo], numeros[indexNumero]);
    //obteniendo elementos
    let top = document.getElementById("top");
    let number = document.getElementById("number");
    let bottom = document.getElementById("bottom");

    //ingresar valores
    // top.innerHTML = palos[indexPalo];
    // number.innerHTML = numeros[indexNumero];
    // bottom.innerHTML = palos[indexPalo];

    for (let i = 1; i <= 3; i++) {
      document.body.innerHTML += `<div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" id="top">${palos[indexPalo]}</li>
        <li class="list-group-item" id="number">${numeros[indexNumero]}</li>
        <li class="list-group-item" id="bottom">${palos[indexPalo]}</li>
      </ul>
    </div>`;
    }
  }

  ramdomCard();

  let nombre = "Rosinni";

  console.log("Bienvenida " + nombre + " te estabamos esperando");

  //template literals
  console.log(`Bienvenida ${nombre} te estabamos esperando`);
};

window.onload = function() {
  let palo = ["♣", "♠", "♥", "♦"];
  let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  let sorteoPalo = Math.floor(Math.random() * palo.length);
  let sorteoNumber = Math.floor(Math.random() * number.length);

  let contenedorNumber = number[sorteoNumber];
  let contenedorPalo = palo[sorteoPalo];

  let color = contenedorPalo == "♦" || contenedorPalo == "♥" ? "red" : "black";

  document.getElementById("arriba").innerHTML = contenedorPalo;
  document.getElementById("arriba").style.color = color;
  document.getElementById("medio").innerHTML = contenedorNumber;
  document.getElementById("medio").style.color = color;
  document.getElementById("abajo").innerHTML = contenedorPalo;
  document.getElementById("abajo").style.color = color;
};
