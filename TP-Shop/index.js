let addItemToCart = document.querySelectorAll('.add-to-cart');
let removeItemFromCart = document.querySelectorAll('.remove-from-cart');

let items = {
    item1: {
        id: 0,
        name: 'Ace',
        price: '597.44',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/3ea/659/e45/thumb__1440x0_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/a29/273/685/thumb__1440x0_0_0_crop.jpg',
    }
};

window.addEventListener('load', addItemToHTML);

function addItemToHTML() {
    for (let key in items) {
        let itemHTML = `
    <div class="item" id="${items[key].id}" data-item-price="${items[key].price}">
        <img class="firstImg"
             src="${items[key].img1}">
        <img class="secondImg"
                src="${items[key].img2}">
        <div class="name">${items[key].name}</div>
        <div class="price">$${items[key].price}</div>
        <i class="fas fa-plus add-to-cart"></i>
        <i class="fas fa-minus remove-from-cart"></i>
    </div>
    `;
        document.querySelector('.container').innerHTML += itemHTML;
    }
}


addItemToCart.forEach(function (item) {
    item.addEventListener('click', function () {
        let itemId = item.parentElement.getAttribute('id')
        if (localStorage.getItem(itemId) === null) {
            localStorage.setItem(itemId, "1");
        } else {
            let quantity = localStorage.getItem(itemId);
            quantity++;
            localStorage.setItem(itemId, quantity);
        }
        let itemPrice = parseFloat(item.parentElement.dataset.itemPrice);
        itemPrice = itemPrice.toFixed(2);
        let totalPriceItem = localStorage.getItem(itemId) * itemPrice;
        totalPriceItem = totalPriceItem.toFixed(2);
        console.log(totalPriceItem);
    })
})

removeItemFromCart.forEach(function (item) {
    item.addEventListener('click', function () {
        let itemId = item.parentElement.getAttribute('id')
        let quantity = localStorage.getItem(itemId);
        if (quantity > 1) {
            quantity--;
            localStorage.setItem(itemId, quantity);
        } else {
            localStorage.removeItem(itemId);
        }
        let itemPrice = parseFloat(item.parentElement.dataset.itemPrice);
        itemPrice = itemPrice.toFixed(2);
        let totalPriceItem = localStorage.getItem(itemId) * itemPrice;
        totalPriceItem = totalPriceItem.toFixed(2);
        console.log(totalPriceItem);
    })
})