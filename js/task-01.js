const items = document.querySelectorAll('.item');


console.log(`Number of categories: ${items.length}`)

const listEl = [...items].map(el => {
    const titleEl = el.firstElementChild.textContent;
    const listLength = el.querySelectorAll('li').length;
    console.log(
    `Category: ${titleEl}
     Elements: ${listLength}`);
    
})