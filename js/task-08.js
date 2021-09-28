const createBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]');

const createBoxes = (amount) => {
    const box = document.querySelector('#boxes');
    for (let i = 0; i < amount; i++){
        const div = document.createElement('div');
        box.appendChild(div);

        const childCount = box.childNodes.length;
        div.style.backgroundColor = randomRgb();
        div.style.width = 30 + childCount*10 + 'px';
        div.style.height = 30 + childCount*10 + 'px';
    }
}

const destroyBoxes = () => {
    const box = document.querySelector('#boxes');
    box.innerHTML = '';
}

const createHandler = (event) => {
    const amount = document.querySelector('#controls').querySelector('input').value;
    createBoxes(amount);
}

const destroyHandler = (event) => {
    destroyBoxes();
}

createBtn.addEventListener('click', createHandler);
clearBtn.addEventListener('click', destroyHandler);

const randomRgb = () => {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
}