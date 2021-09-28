
const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counterEl: document.querySelector('#value'),
};

let counterValue = 0;

const decrementCounter = () => {
    counterValue -= 1;
    refs.counterEl.textContent = counterValue;  
}

const incrementCounter = () => {
    counterValue += 1;
    refs.counterEl.textContent = counterValue;
}

refs.decrementBtn.addEventListener('click', decrementCounter);
refs.incrementBtn.addEventListener('click', incrementCounter);