const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", sizing);
function sizing(event) {
    text.style.fontSize = `${event.target.value}px`;

}