const keypad = document.getElementById("keypad")
const calculatorPattern = /[0-9\+\-\*\/\.\%]/;
let screenState = document.querySelector(".screen > p");
let numState;

const operation = {
	"Backspace": function () {
		if (screenState.textContent.toLowerCase().includes("e") && screenState.textContent.length > 3) {
			screenState.textContent = screenState.textContent
				.slice(0, screenState.textContent.indexOf("e") - 1) + screenState.textContent
					.slice(screenState.textContent.indexOf("e"))

		} else {

			screenState.textContent = screenState.textContent.slice(0, screenState.textContent.length - 1)

		}
	},
	"Clear": function () {
		screenState.textContent = ""
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
	console.log(numState)
}

