// < !--Кнопка должна быть выключенной, пока не отмечен чекбокс-- >

const inputs = document.querySelectorAll("input[type=checkbox]")
const button = document.querySelector(".form__button-submit")

function check() {
	button.disabled = true
	inputs.forEach(input => {
		if (input.checked) button.disabled = false
	})
}

inputs.forEach(input => input.addEventListener("change", check))