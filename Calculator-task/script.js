const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = calculate(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

function calculate(expression) {
  const operators = ['+', '-', '*', '/'];
  let operand1 = '';
  let operand2 = '';
  let operator = '';
  let result = '';
  
  for (let char of expression) {
    if (operators.includes(char)) {
      operator = char;
    } else if (operator === '') {
      operand1 += char;
    } else {
      operand2 += char;
    }
  }
  
  switch (operator) {
    case '+':
      result = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      result = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      result = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      result = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      result = 'Error';
  }
  
  return result;
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
  
};




// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((item) => 
// {
//   item.onclick = () => 
//   {
//     if (item.id == "clear") 
//     {
//       display.innerText = "";
//     } else if (item.id == "backspace") 
//     {
//       let string = display.innerText.toString();
//       display.innerText = string.substr(0, string.length - 1);
//     } else if (display.innerText != "" && item.id == "equal") 
//     {
//       display.innerText = eval(display.innerText);
//     } else if (display.innerText == "" && item.id == "equal") 
//     {
//       display.innerText = "Empty!";
//       setTimeout(() => (display.innerText = ""), 2000);
//     } else {
//       display.innerText += item.id;
//     }
//   };
// });

// const themeToggleBtn = document.querySelector(".theme-toggler");
// const calculator = document.querySelector(".calculator");
// const toggleIcon = document.querySelector(".toggler-icon");
// let isDark = true;
// themeToggleBtn.onclick = () => {
//   calculator.classList.toggle("dark");
//   themeToggleBtn.classList.toggle("active");
//   isDark = !isDark;
// };
