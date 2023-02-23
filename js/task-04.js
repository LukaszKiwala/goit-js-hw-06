let counterValue = 0;

const decr = document.querySelector("button[data-action='decrement']");

const incr = document.querySelector("button[data-action='increment']");

const value = document.querySelector("#value");

const countIncr = function () {
    
    counterValue += 1;
    value.textContent = counterValue;
}

const countDecr = function () {
    
    counterValue -= 1;
    value.textContent = counterValue;
}

incr.addEventListener("click", countIncr);
decr.addEventListener("click", countDecr); 