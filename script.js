'use strict';

const products = [
    { id: 1, title: 'Маргарита', price: 250 },
    { id: 2, title: 'Сицилийская', price: 280 },
    { id: 3, title: 'Дьябола', price: 200 },
    { id: 4, title: 'Четыре сыра', price: 300 },
    { id: 5, title: 'Неаполитанская', price: 250 },
    { id: 6, title: 'Кальцоне', price: 200 },
    { id: 7, title: 'Капричиоза', price: 230 },
    { id: 8, title: 'Четыре сезона', price: 250 },
    { id: 9, title: 'Гавайская', price: 250 },
    { id: 10, title: 'Сардиния', price: 250 },
];

const renderProduct = (item, img ='img/pizza.png') =>
             `<div class="product-item">
                <img src="${img}" alt="image" class="product-img">
                <h3 class="product-title">${item.title}</h3>
                <p class="product-price">${item.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`;

const renderProducts = list => {
    document.querySelector('.mainContainer').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item, item.img)).join(''));
};

renderProducts(products);