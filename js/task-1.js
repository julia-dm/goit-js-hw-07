const categories = document.querySelectorAll('.item');
const count = categories.length;
console.log(`Number of categories: ${count}`);



const nameCategories = document.querySelectorAll('.item');

nameCategories.forEach(item => {
    const quantityCategories = item.querySelector('h2').textContent;
    const quantityItems = item.querySelectorAll('li');
    const nameQuantity = quantityItems.length;
    
    console.log(`Catergory: ${quantityCategories}`);
    console.log(`Elements: ${nameQuantity}`);
});