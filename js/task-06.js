const input = document.querySelector('#validation-input');

const validate = (event) => {
    console.log(event.target);
}

input.addEventListener('focusout', validate);