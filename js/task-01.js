const categoriesRef = document.querySelectorAll(".item");
    console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(elem => {
    console.log(`Категория: ${elem.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${elem.lastElementChild.children.length}`)
});