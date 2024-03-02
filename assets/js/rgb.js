const btn = document.getElementById("btn");
const spanColor = document.querySelector(".color");
const textColor = document.querySelector(".text-color");
const border = document.querySelector(".border");
const boxShadow = document.querySelector(".box-shadow");

// RGB COLOR VALUE GENERATOR
const randomColor = function () {
  let rgbNum = 256;
  console.log(rgbNum);
  return Math.floor(Math.random() * rgbNum);
};
