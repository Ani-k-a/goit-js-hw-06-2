function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const background = document.querySelector('body');


button.addEventListener('click', handleBtnClick);

function handleBtnClick (ev){
  let color = getRandomHexColor();
  textColor.textContent = color;
  background.style.backgroundColor = color;
};