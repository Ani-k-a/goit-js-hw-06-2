const inputValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputValue.addEventListener('input', handleScrollMove);

function handleScrollMove(){
text.style.fontSize = `${inputValue.value}px`;
}