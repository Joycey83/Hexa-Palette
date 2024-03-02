const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const spanColor = document.querySelector(".color");
const textColor = document.querySelector(".text-color");
const border = document.querySelector(".border");
const boxShadow = document.querySelector(".box-shadow");

// Hexcode contains 6 values but randomly generate from 16 values ranging from 0-9, A-F
function randomHexCodeNumber() {
  return Math.floor(Math.random() * hex.length);
}
