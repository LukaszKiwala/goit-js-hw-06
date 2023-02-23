const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

function newInput(element) {
    nameOutput.textContent = element.currentTarget.value;

    if (element.currentTarget.value === "") {
        nameOutput.textContent = "Anonymous"
    }
}

nameInput.addEventListener("input", newInput);