// cards elements
const cardNumber = document.querySelector("#i-number");
const cardName = document.querySelector("#i-name");
const cardDate = document.querySelector("#i-date");
const cardMonth = document.querySelector("#i-month");
const cardYear = document.querySelector("#i-year");
const cardCvc = document.querySelector("#i-cvc");
// form elements
const form = document.getElementById("cc-form");
const nameInput = document.querySelector("#card-name");
const numberInput = document.querySelector("#card-number");
const monthInput = document.querySelector("#card-month");
const yearInput = document.querySelector("#card-year");
const cvcInput = document.querySelector("#card-cvc");
const formDate = document.querySelector("#card-info-left");
const submitBtn = document.querySelector("#submit-btn");
const continueBtn = document.querySelector("#continue-btn");
const errorEl = document.createElement("div");
const completeWrapper = document.querySelector("#complete-state");

document.addEventListener("DOMContentLoaded", function () {
	let inputs = document.querySelectorAll("input");
	inputs.forEach((input) => (input.value = ""));
	handleInputs();
});
function handleInputs() {
	// name input field handling
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
		if (event.target.value.length > 1 && event.target.value.includes(" ")) {
			cardName.innerHTML = event.target.value;
			errorEl.innerHTML = "";
			nameInput.classList.remove("error");
		} else {
			errorHandling(nameInput);
		}
	});
	numberInput.addEventListener("keypress", (event) => {
		if (
			!(
				(event.code >= "Digit0" && event.code <= "Digit9") ||
				(event.code >= "Numpad0" && event.code <= "Numpad9")
			)
		) {
			event.preventDefault();
		}
	});
	numberInput.maxLength = 19;
	numberInput.addEventListener("input", (event) => {
		let inputValue = event.target.value;
		// format number input to 0000 0000 0000 0000
		inputValue = inputValue
			.replace(/\D/g, "")
			.replace(/(\d{4})/g, "$1 ")
			.trim();
		event.target.value = inputValue;
		cardNumber.innerHTML = inputValue;
		if (event.target.value.length < 19) {
			console.log("test");
			errorHandling(numberInput);
		} else {
			errorEl.innerHTML = "";
			numberInput.classList.remove("error");
		}
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
				errorInput.classList.add("error");
				nameInput.parentNode.insertBefore(errorEl, nameInput.nextSibling);
				errorEl.classList.add("error-message");
				errorEl.innerHTML = "Please insert name";
				break;
			case numberInput:
				errorInput.classList.add("error");
				numberInput.parentNode.insertBefore(errorEl, numberInput.nextSibling);
				errorEl.classList.add("error-message");
				errorEl.innerHTML = "Please insert valid card format";
				break;
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
const submitClickHandler = function (event) {
	event.preventDefault();
	form.classList.add("fadeout");
	form.style.opacity = "0%";
	completeWrapper.classList.add("fadeIn");

	completeWrapper.style.display = "block";
};
const addSubmitEventListener = submitBtn.addEventListener(
	"click",
	submitClickHandler
);
continueBtn.addEventListener('click', () =>{
  window.location = '/'
})