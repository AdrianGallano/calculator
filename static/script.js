const keypad = document.getElementById("keypad")
const calculatorPattern = /[0-9\+\-\*\/]/;
let screenState = document.querySelector(".screen > p");

keypad.addEventListener("click", (e) => {
	displayScreen(e.target.dataset.num)
})

document.addEventListener("keydown", (e) => {
	if(!e.key.match(calculatorPattern) && e.key != "Backspace") return;
	displayScreen(e.key)
})


function displayScreen(buttonPressed){
	if (buttonPressed.match(/[0-9]/)) { // if numbers
		screenState.textContent += buttonPressed
	}else{ /* if operations */

		if (buttonPressed == "Backspace") { // if backspace
			screenState.textContent = screenState.textContent.slice(0, screenState.textContent.length - 1)
		}
	
		else if (buttonPressed == "clear") { // clear
			screenState.textContent = ""
		}
	}


}

