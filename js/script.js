// cards elements
const cardNumber = document.getElementById("i-number");
const cardName = document.getElementById("i-name");
const cardDate = document.getElementById("i-date");
const cardMonth = document.getElementById("i-month");
const cardYear = document.getElementById("i-year");
const cardCvc = document.getElementById("i-cvc");
// form elements
const nameInput = document.getElementById("card-name");
const numberInput = document.getElementById("card-number");
const monthInput = document.getElementById("card-month");
const yearInput = document.getElementById("card-year");
const cvcInput = document.getElementById("card-cvc");
const formDate = document.getElementById("card-info-left");
const submitBtn = document.getElementById("submit-btn");
const errorEl = document.createElement("div");

document.addEventListener("DOMContentLoaded", function () {
  handleInputs();
});

function handleInputs() {
  // name input handling
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
  // Month input handling
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
      errorEl.innerHTML = "";
    }
    if (
      parseInt(event.target.value) >= 1 &&
      parseInt(event.target.value) <= 12
    ) {
      cardMonth.innerHTML = event.target.value;
      monthInput.classList.remove("error");
      errorEl.innerHTML = "";
    } else {
      errorHandling(monthInput);
    }
  });

  // Year Input handling
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
    yearInput.classList.remove("error");

    // limit input to 2 digits
    yearInput.maxLength = 2;
    // if true dynamically display value, but throw error message
    if (event.target.value.length <= 2) {
      cardYear.innerHTML = event.target.value;
      if (parseInt(cardYear.innerHTML) < 23) errorHandling(yearInput);
    }
    // if true for both, remove error message and error class from input
    if (event.target.value.length === 2 && parseInt(cardYear.innerHTML) >= 23) {
      yearInput.classList.remove("error");
      errorEl.innerHTML = "";
    }
  });

  // Security code input handling
  cvcInput.addEventListener("keypress", (event) => {
    // only allow numbers as input
    if (
      !(
        (event.code >= "Digit0" && event.code <= "Digit9") ||
        (event.code >= "Numpad0" && event.code <= "Numpad9")
      )
    ) {
      event.preventDefault();
    }
  });
  // CVC input field formatting
  cvcInput.addEventListener("input", (event) => {
    errorEl.innerHTML = "";
    if (event.target.value.length < 3) {
      cardCvc.innerHTML = event.target.value;
      errorHandling(cvcInput);
    } else if (event.target.value.length == 3) {
      cardCvc.innerHTML = event.target.value;
      event.target.value = event.target.value.slice(0, 3);

      cvcInput.classList.remove("error");
    } else {
      // limit input field to max 3 characters
      event.target.value = event.target.value.slice(0, 3);
    }
  });
  // error handling
  const errorHandling = function (errorInput) {
    switch (errorInput) {
      case nameInput:
        errorInput.classList.add("error")
        nameInput.appendChild(errorEl)
      case monthInput:
      case yearInput:
        errorInput.classList.add("error");
        formDate.appendChild(errorEl);
        errorEl.classList.add("error-message");
        errorEl.innerHTML = "Provide a valid expiry date";
        break;
      case cvcInput:
        errorInput.classList.add("error");
        cvcInput.parentNode.appendChild(errorEl);
        errorEl.classList.add("error-message");
        errorEl.innerHTML = "Provide a 3 digit security code";
    }
  };
}
