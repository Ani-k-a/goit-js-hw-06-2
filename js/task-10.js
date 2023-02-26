function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


function createBox(){
  const newBox = document.createElement('h2');
  newBox.style.backgroundColor = getRandomHexColor();
  newBox.style.width = '30px';
  newBox.style.height = '30px';
return newBox;
}

function createBoxes(){
  boxes.append(createBox());
}

console.dir(input);

input.addEventListener('change', ()=> {
  console.log(input.value)
  createBtn.addEventListener('click', createBoxes);
})



