const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const cardCreate = (el) => {
  let item = document.createElement('li');
  item.textContent = el;
  item.classList.add('item');
  console.log(item)
  return item;
}

const itemsListCard = ingredients.map(cardCreate)

list.append(...itemsListCard);
