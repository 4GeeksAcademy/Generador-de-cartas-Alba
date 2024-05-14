/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  console.log("ejecutar");
  //write your code here

  let arr = ["♦", "♥", "♠", "♣"];
  let nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let numsRandom = Math.floor(Math.random() * nums.length);
  let arrRandom = Math.floor(Math.random() * arr.length);

  if (arr[arrRandom] == "♦" || arr[arrRandom] == "♥") {
    document.querySelector("#card").classList.add("red");
  }
  let top = document.querySelector("#top-suit");
  let number = document.querySelector("#number");
  let bottom = document.querySelector("#bottom-suit");
  top.innerHTML = arr[arrRandom];
  number.innerHTML = nums[numsRandom];
  bottom.innerHTML = top.innerHTML;
};
