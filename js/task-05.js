const textInput = document.querySelector('#name-input');
const title = document.querySelector('#name-output');

textInput.addEventListener('input', handleInput);

function handleInput (){
    
    title.textContent = textInput.value === "" ? "Anonimus" : textInput.value;
console.dir(textInput.value)
};