const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', handleInputCounter);

function handleInputCounter () {
    textInput.classList.add('invalid');
        if (Number(textInput.value.length) == 6) {
            textInput.classList.remove('invalid');
            textInput.classList.add('valid');    
           }    
}

