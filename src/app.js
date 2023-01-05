/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // agrego evento a form
  let form = document.querySelector("form");
  form.addEventListener("submit", ramdomCard);

  //esta funcion genera UNA carta ramdom
  function ramdomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    // traigo el valor del input y lo guardo en cantidadCartas
    let input = document.getElementById("input");
    let cantidadCartas = input.value;

    // //GENERAMOS LAS POSICIONES RAMDOM
    // let indexPalo = Math.floor(Math.random() * palos.length);
    // let indexNumero = Math.floor(Math.random() * numeros.length);

    // console.log(palos[indexPalo], numeros[indexNumero]);
    //obteniendo elementos
    // let top = document.getElementById("top");
    // let number = document.getElementById("number");
    // let bottom = document.getElementById("bottom");

    //ingresar valores
    // top.innerHTML = palos[indexPalo];
    // number.innerHTML = numeros[indexNumero];
    // bottom.innerHTML = palos[indexPalo];

    for (let i = 1; i <= cantidadCartas; i++) {
      //GENERA POR CADA VUELTA UNA NUEVA POSICION RAMDOM DE PALO Y DE NUMERO
      //GENERAMOS LAS POSICIONES RAMDOM
      let indexPalo = Math.floor(Math.random() * palos.length);
      let indexNumero = Math.floor(Math.random() * numeros.length);

      if (palos[indexPalo] === "♥" || palos[indexPalo] === "♦") {
        document.body.innerHTML += `<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-danger" id="top">${palos[indexPalo]}</li>
          <li class="list-group-item text-danger" id="number">${numeros[indexNumero]}</li>
          <li class="list-group-item text-danger" id="bottom">${palos[indexPalo]}</li>
        </ul>
      </div>`;
      } else {
        document.body.innerHTML += `<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="top">${palos[indexPalo]}</li>
          <li class="list-group-item" id="number">${numeros[indexNumero]}</li>
          <li class="list-group-item" id="bottom">${palos[indexPalo]}</li>
        </ul>
      </div>`;
      }
    }
  }

  ramdomCard();
};
