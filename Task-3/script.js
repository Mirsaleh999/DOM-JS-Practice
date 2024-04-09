
const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");
const borderWidthInput = document.querySelector("#borderWidth");
const borderStyle = document.querySelector("#borderStyle");
const borderColor = document.querySelector("#borderColor");
const color = document.querySelector("#color");
const backgroundColor = document.querySelector("#backgroundColor");
const changeDivBtn = document.querySelector("#changeDivBtn");
const targetDiv = document.querySelector("#targetDiv");

function changeDivStyle() {
  targetDiv.style.width = widthInput.value + "px";
  targetDiv.style.height = heightInput.value + "px";
  targetDiv.style.borderWidth = borderWidthInput.value + "px";
  targetDiv.style.borderStyle = borderStyle.value;
  targetDiv.style.borderColor = borderColor.value;
  targetDiv.style.color = color.value;
  targetDiv.style.backgroundColor = backgroundColor.value;
}

changeDivBtn.addEventListener("click", changeDivStyle);
