let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Dress',
        image: 'image1.png',
        price: 10000
    },
    {
        id: 2,
        name: 'Shoes',
        image: 'image2.jpg',
        price: 12000
    },
    {
        id: 3,
        name: 'Bag',
        image: 'image3.jpg',
        price: 15000
    },
    {
        id: 4,
        name: 'Watch',
        image: 'image4.jpg',
        price: 11000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('services')
        console.log(newDiv)
        newDiv.innerHTML = `
        <img src="./images/${value.image}" class ="image"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})" class ="button">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
    initApp();
    function addToCart(key){
        if(listCards[key] == null){
            listCards[key] = products[key];
            listCards[key].quantity = 1;
        }
        reloadCard();
}
    function reloadCard(){
        listCard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;
        listCards.forEach((value, key) =>{
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;

            if(value != null){
                let newDiv = document.createElement('li');
                newDiv.classList.add('li')
                newDiv.innerHTML = `
                <div><img src="./images/${value.image}" class ="image"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg></div>
                `;
                listCard.appendChild(newDiv);
            }
        })
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
}
    function changeQuantity(key, quantity){
        if(quantity == 0){
            delete listCards[key];
        }else{
            listCards[key].quantity = quantity;
            listCards[key].price = quantity * products[key].price;
        }
        reloadCard();
}
