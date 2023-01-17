const cardNumber = document.getElementById("i-number");
const cardName = document.getElementById("i-name");
const cardDate = document.getElementById("i-date");
const cardMonth = document.getElementById("i-month");
const cardYear = document.getElementById("i-year");
const cardCvc = document.getElementById("i-cvc")

const nameInput = document.getElementById("card-name");
const numberInput = document.getElementById("card-number");
const monthInput = document.getElementById("card-month");
const yearInput = document.getElementById("card-year");
const cvcInput = document.getElementById("card-cvc");

const submitBtn = document.getElementById("submit-btn");

document.addEventListener("DOMContentLoaded", function () {
  handleInputs();
});

function handleInputs() {
  nameInput.oninput = () => {
    cardName.innerText = nameInput.value;
  };

  numberInput.oninput = () => {
    cardNumber.innerHTML = numberInput.value;
    

  };
  monthInput.oninput = () => {
    cardMonth.innerHTML = monthInput.value
  }
  
  yearInput.oninput = () => {
    cardYear.innerHTML = yearInput.value
  }
  
  cvcInput.oninput = () => {
    cardCvc.innerHTML = cvcInput.value
  }
}
