const popUp = document.getElementById("pop-up-container")
const keypad = document.getElementById("keypad")
const calculatorPattern = /[0-9\+\-\*\/\.\%\=]/
let screenState = document.querySelector(".screen > p");
let pastScreenState = document.querySelector(".past-screen > p")
let pastOperator;
let numState;
let pastState = 0;

const operation = {
	"Backspace": function () {
		if (screenState.textContent.toLowerCase().includes("e") && screenState.textContent.length > 4
		) {
			screenState.textContent = screenState.textContent
				.slice(0, screenState.textContent.indexOf("e") - 1) + screenState.textContent
					.slice(screenState.textContent.indexOf("e"))

		} else {

			screenState.textContent = screenState.textContent.slice(0, screenState.textContent.length - 1)

		}
	},
	"Clear": function () {
		screenState.textContent = ""
		pastScreenState.textContent = ""
		pastState = 0
	},
	"Change-sign": function () {
		if (screenState.textContent.includes("-")) {
			screenState.textContent = screenState.textContent.slice(1)
		} else {
			screenState.textContent = `-${screenState.textContent}`
		}
	},
	".": function () {
		if (screenState.textContent.includes(".")) return;

		screenState.textContent += `.`
	},
	"%": function () {
		if (screenState.textContent.includes("%") && screenState.textContent.length <= 16) return;

		screenState.textContent = Number(screenState.textContent) / 100

	},
	"+": function () {
		mathFunc("+")
	},
	"-": function () {
		mathFunc("-")
	},
	"/": function () {
		mathFunc("/")
	},
	"*": function () {
		mathFunc("*")
	},
	"=": function () {
		if(screenState.textContent.length <= 0){
			pastScreenState.textContent = ""
			screenState.textContent = pastState
		}else{
			mathFunc(pastOperator)
		}
	}
}

keypad.addEventListener("click", (e) => {
	displayScreen(e.target.dataset.num)
})

document.addEventListener("keydown", (e) => {
	if (!e.key.match(calculatorPattern) && e.key != "Backspace") return;
	displayScreen(e.key)
})

function displayScreen(buttonPressed) {
	if (buttonPressed.match(/[0-9]/)) { // if numbers

		if (screenState.textContent.length >= 16) return;

		screenState.textContent += buttonPressed

	} else { /* if operations */

		operation[buttonPressed]()
	}
	if (screenState.textContent.length > 16) {
		screenState.textContent = Number(screenState.textContent).toExponential();
	}
	numState = Number(screenState.textContent)
}

function mathFunc(operator) {
	if(screenState.textContent.length <= 0){
		pastOperator = operator
		pastScreenState.textContent = `${pastState} ${pastOperator}`
		return;
	}

	if(pastScreenState.textContent.length <= 0){
		pastState = numState
		changeScreen(operator)
	}else{
		switch (pastOperator) {
			case "+":
				pastState += numState
				break;
			case "-":
				pastState -= numState
				break;
			case "/":
				pastState /= numState
				break;
			case "*":
				pastState *= numState
				break;
			default:
				return "Math error"
		}
		changeScreen(operator)
	}
}

function changeScreen(operator){
	pastOperator = operator
	pastScreenState.textContent = `${pastState} ${pastOperator}`
	screenState.textContent = ""
}


window.addEventListener("load", () => {
	popUp.style.display = "flex"
})

popUp.firstElementChild.
firstElementChild.
lastElementChild.addEventListener("click", ()=>{
	popUp.style.display = "none"
})