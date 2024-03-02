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

btn.addEventListener("click", () => {
  const rgbValue =
    "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
  spanColor.style.backgroundColor = rgbValue;
  spanColor.textContent = rgbValue;
  textColor.style.color = rgbValue;
  border.style.border = `7px solid ${rgbValue}`;
  boxShadow.style.boxShadow = `2px 2px 7px 1px ${rgbValue}`;
});
