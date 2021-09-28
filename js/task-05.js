const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const change = (event) => {
    if(event.target.value) {
        output.textContent = event.target.value;
    }else{
        output.textContent = "незнакомец"
    }
}
input.addEventListener('change', change);

