const keypad = document.getElementById("keypad")
let screenState = document.querySelector(".screen > p");

keypad.addEventListener("click", (e) => {
	if (e.target.dataset.num.match(/[0-9]/)) { // if numbers
		screenState.textContent += e.target.dataset.num
	}

	else if (e.target.dataset.num == "backspace") { // if backspace
		screenState.textContent = screenState.textContent.slice(0, screenState.textContent.length - 1)
	}

	else if (e.target.dataset.num == "clear") {
		screenState.textContent = ""
	}
})