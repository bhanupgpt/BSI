const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  this.style.backgroundColor = "red"; // Change color to red on click
});


function greet() {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const greeting = `Hello! It's ${time}`;
    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greeting;
  }
  
greet();// Call the greet function on page load

const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const calcButton = document.getElementById("calcButton");
const resultP = document.getElementById("result");

calcButton.addEventListener("click", function() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 + num2;
  resultP.textContent = "Result: " + result; // Display result in paragraph
});
