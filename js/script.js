const cardNumber = document.getElementById("i-number");
const cardName = document.getElementById("i-name");
const cardDate = document.getElementById("i-date");
const cardMonth = document.getElementById("i-month");
const cardYear = document.getElementById("i-year");
const cardCvc = document.getElementById("i-cvc");

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
  nameInput.addEventListener("keypress", (event) => {
    if (
      !(event.code.startsWith("Key") && event.code.length === 4) &&
      event.code !== "Quote" &&
      event.code !== "Space"
    ) {
      event.preventDefault();
    }
  });

  nameInput.addEventListener("input", (event) => {
    cardName.innerHTML = event.target.value;
  });
  monthInput.addEventListener("keypress", (event) => {
    if (
      !(
        (event.code >= "Digit0" && event.code <= "Digit9") ||
        (event.code >= "Numpad0" && event.code <= "Numpad9")
      )
    ) {
      event.preventDefault();
    }
  });
  monthInput.addEventListener("input", (event) => {
    if (event.target.value.length > 2) {
      event.target.value = event.target.value.slice(0, 2);
    }
    if (
      parseInt(event.target.value) >= 1 &&
      parseInt(event.target.value) <= 12
    ) {
      cardMonth.innerHTML = event.target.value;
    }
  });

  yearInput.addEventListener("keypress", (event) => {
    if (
      !(
        (event.code >= "Digit0" && event.code <= "Digit9") ||
        (event.code >= "Numpad0" && event.code <= "Numpad9")
      )
    ) {
      event.preventDefault();
    }
  });
  yearInput.addEventListener("input", (event) => {
    if (event.target.value.length <= 2) {
      cardYear.innerHTML = event.target.value;
    } else {
      event.target.value = event.target.value.slice(0, 2);
    }
  });

  cvcInput.addEventListener("keypress", (event) => {
    // only allow numbers as input
    if (event.code < "Digit0" || event.code > "Digit9") {
      event.preventDefault();
    } 
  });
  cvcInput.addEventListener("input", (event) => {
    if (event.target.value.length <= 3) {
      cardCvc.innerHTML = event.target.value;
    } 
    else {
      event.target.value = event.target.value.slice(0,3)
    }
  })
}
