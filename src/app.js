/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let arrCard = [];

  function randomCard() {
    const palos = ["♦", "♥", "♠", "♣"];
    const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    let indexPalo = Math.floor(Math.random() * palos.length);
    let indexNumero = Math.floor(Math.random() * numeros.length);

    if (palos[indexPalo] == "♥" || palos[indexPalo] == "♦") {
      document.getElementById(
        "card"
      ).innerHTML += `<div class="card d-flex p-1 m-3 border border-dark" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 30px; margin: 5px;">
          <div class="top text-start text-danger ms-2">${palos[indexPalo]}</div>
          <div class="number text-center">${numeros[indexNumero]}</div>
          <div class="bottom text-danger mx-2" style="transform:rotate(180deg);">${palos[indexPalo]}</div>
          </div>`;
      arrCard.push({
        palo: palos[indexPalo],
        numero: numeros[indexNumero]
      });
    } else {
      document.getElementById(
        "card"
      ).innerHTML += `<div class="card d-flex p-1 m-3 border border-dark" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 30px; margin: 5px;">
              <div class="top text-start ms-2" >${palos[indexPalo]}</div>
              <div class="number text-center">${numeros[indexNumero]}</div>
              <div class="bottom mx-2" style="transform:rotate(180deg);">${palos[indexPalo]}</div
          </div>`;
      arrCard.push({
        palo: palos[indexPalo],
        numero: numeros[indexNumero]
      });
    }
    return arrCard;
  }

  function sortCard() {
    document.getElementById("card").innerHTML = "";
    for (let i = 0; i <= arrCard.length - 1; i++) {
      let sortPalo = arrCard[i].palo;
      let sortNumero = arrCard[i].numero;

      if (sortPalo == "♥" || sortPalo == "♦") {
        document.getElementById(
          "card"
        ).innerHTML += `<div class="card d-flex p-1 m-3 border border-dark" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 30px; margin: 5px;">
          <div class="top text-start text-danger ms-2">${sortPalo}</div>
          <div class="number text-center" >${sortNumero}</div>
          <div class="bottom text-danger mx-2" style="transform:rotate(180deg);">${sortPalo}</div>
        </div>`;
      } else {
        document.getElementById(
          "card"
        ).innerHTML += `<di class="card d-flex p-1 m-3 border border-dark" style="width: 190px; height: 15rem; justify-content: space-between; border-radius: 15px;  font-size: 30px; margin: 5px;">
          <div class="top text-start ms-2">${sortPalo}</div>
          <div class="number text-center">${sortNumero}</div>
          <div class="bottom mx-2" style="transform:rotate(180deg);">${sortPalo}</div>
        </div>`;
      }
    }
    arrCard = [];
  }

  let cartas = [];

  function cartasInput(input) {
    document.getElementById("card").innerHTML = "";
    for (let i = 1; i <= input; i++) {
      let newCard = randomCard();
      cartas.push(newCard);
    }
  }

  function letrasANumeros() {
    for (let i = 0; i <= arrCard.length - 1; i++) {
      if (arrCard[i].numero === "A") {
        arrCard[i].numero = 14;
      }
      if (arrCard[i].numero === "K") {
        arrCard[i].numero = 13;
      }
      if (arrCard[i].numero === "Q") {
        arrCard[i].numero = 12;
      }
      if (arrCard[i].numero === "J") {
        arrCard[i].numero = 11;
      }
    }
  }

  function numerosALetras() {
    for (let i = 0; i <= arrCard.length - 1; i++) {
      if (arrCard[i].numero === 14) {
        arrCard[i].numero = "A";
      }
      if (arrCard[i].numero === 13) {
        arrCard[i].numero = "K";
      }
      if (arrCard[i].numero === 12) {
        arrCard[i].numero = "Q";
      }
      if (arrCard[i].numero === 11) {
        arrCard[i].numero = "J";
      }
    }
  }

  const bubbleSort = arr => {
    let wall = arr.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (arr[index].numero > arr[index + 1].numero) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--;
    }
    return arr;
  };

  document.getElementById("barajarcartas").addEventListener("click", () => {
    let valor = document.getElementById("input");
    cartasInput(valor.value);
  });
  document.getElementById("ordenarcartas").addEventListener("click", () => {
    letrasANumeros();
    bubbleSort(arrCard);
    numerosALetras();
    sortCard();
  });
};
