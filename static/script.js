const keypad = document.getElementById("keypad")
const calculatorPattern = /[0-9\+\-\*\/\.\%]/;
let screenState = document.querySelector(".screen > p");
let numState;

const operation = {
	"Backspace": function () {
		screenState.textContent = screenState.textContent.slice(0, screenState.textContent.length - 1)
	},
	"Clear": function () {
		screenState.textContent = ""
	},

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

			if (screenState.textContent.length >= 17) return;

			screenState.textContent += buttonPressed

		} else { /* if operations */

			operation[buttonPressed]()
		}

	numState = Number(screenState.textContent)
	console.log(numState)
}

