/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  console.log("ejecutar");
  //write your code here

  let pintsOfPoker = ["♦", "♥", "♠", "♣"];
  let valor = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let valorRandom = Math.floor(Math.random() * valor.length);
  let pintsOfPokerRandom = Math.floor(Math.random() * pintsOfPoker.length);

  if (
    pintsOfPoker[pintsOfPokerRandom] == "♦" ||
    pintsOfPoker[pintsOfPokerRandom] == "♥"
  ) {
    document.querySelector("#card").classList.add("red");
  }
  let topCard = document.querySelector("#top-suit");
  let numberValor = document.querySelector("#number");
  let bottomCard = document.querySelector("#bottom-suit");
  topCard.innerHTML = pintsOfPoker[pintsOfPokerRandom];
  numberValor.innerHTML = valor[valorRandom];
  bottomCard.innerHTML = topCard.innerHTML;
};
