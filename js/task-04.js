const decrease = document.querySelector('button[data-action="decrement"]');
const increase = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

decrease.addEventListener('click', decreaseValue);

increase.addEventListener('click', icreaseValue);


function icreaseValue () { 
    counterValue += 1;
    value.textContent = counterValue;
    return value;
}
function decreaseValue () { 
    counterValue -= 1;
    value.textContent = counterValue;
    return value;
}

