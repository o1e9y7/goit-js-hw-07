const categoris = document.querySelector('#categories') 
const item =  categoris.querySelectorAll('li.item')
console.log('Number of categories:', item.length)


item.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const categoryEl = item.querySelectorAll('ul li');
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryEl.length}`);
});