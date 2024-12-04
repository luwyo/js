
class ProductsList {
    constructor(container = '.mainContainer'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    }
    _fetchProducts() {
        this.goods = [
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
}

render() {
    const block = document.querySelector(this.container);
    for(let product of this.goods){
        const productObj = new ProductItem(product);
        this.allProducts.push(productObj);
        block.insertAdjacentHTML('beforeend',productObj.render())
    }
}

getSum() {
            let s = 0;
            this.goods.forEach(item=>{
                s += item.price;
            })
    //        let sum = 0;
    //        for(let product of this.goods){
    //            sum += product.price;
    //        }
            //reduce используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
    //        let res = this.allProducts.reduce((sum, item) => sum + item.price,0);
    //        alert(res);
        }    
    }
    class ProductItem {
        constructor(product, img = 'img/pizza.png'){
            this.title = product.title;
            this.price = product.price;
            this.id = product.id;
            this.img = img;
            
        }

        render() {
            return `<div class="product-item">
                <img src="${this.img}" alt="image" class="product-img">
                <h3 class="product-title">${this.title}</h3>
                <p class="product-price">${this.price} руб</p>
                <button class="by-btn">В корзину</button>
            </div>`
        }
    }
let list = new ProductsList();
list.render();
list.getSum();

class Basket {
    addGoods() {

    }
    removeGoods() {

    }
    changeGoods() {

    }
    
    render(){
        
    }
}

class ElemBasket {
    render(){}

}