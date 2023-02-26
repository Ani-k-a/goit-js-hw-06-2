function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector('#boxes');
const inputQuantity = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');


function createBoxes(quantity){
 let SIZE = 20;
 let arrEl = [];
  for (let i = 1; i <= quantity; i++) {
    SIZE +=10
    const newBox = document.createElement('div');
    newBox.style.width = `${SIZE}px`;
    newBox.style.height = `${SIZE}px`;
    newBox.style.backgroundColor = getRandomHexColor();  
    arrEl.push(newBox);
  }
  boxes.append(...arrEl);
}
function destroyBoxes(){
boxes.innerHTML = '';
}

createBtn.addEventListener('click', ()=>{
  destroyBoxes();
  console.dir(inputQuantity);
  console.log(inputQuantity.value);
  console.log(inputQuantity.dataset);
  createBoxes(1)}
  );

  destroyBtn.addEventListener('click', destroyBoxes);

