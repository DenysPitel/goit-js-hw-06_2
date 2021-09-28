const input = document.querySelector('#validation-input');

const validate = (event) => {
    const length = event.target.getAttribute('data-length');
    if(event.target.value.length != length) {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }else{
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    }
}

input.addEventListener('blur', validate);