const btn = document.querySelector('#font-size-control');

const sizeControl = (event) => {
    const text = document.querySelector('#text');
    text.style.fontSize = `${event.target.value}px`;
}

btn.addEventListener('input', sizeControl);