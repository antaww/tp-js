let items = {
    item1: {
        id: 0,
        name: 'Ace',
        price: '597.44',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/b3f/cb8/589/thumb__1440x0_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/911/555/444/thumb__660x920_0_0_crop.jpg',
    },
    item2: {
        id: 1,
        name: 'Blackbeard',
        price: '2135.90',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/5b4/85f/f9b/thumb__1440x0_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/8ac/541/91b/thumb__660x920_0_0_crop.jpg',
    },
    item3: {
        id: 2,
        name: 'Kuzan',
        price: '332.48',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/0fa/109/6f9/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/2bd/67c/39b/thumb__0x752_0_0_crop.jpg',
    },
    item4: {
        id: 3,
        name: 'Usopp',
        price: '315.38',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/bf4/22b/a08/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/99f/78d/9b5/thumb__660x920_0_0_crop.jpg',
    },
    item5: {
        id: 4,
        name: 'Oden',
        price: '341.03',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/689/e82/b09/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/aba/621/1d4/thumb__660x920_0_0_crop.jpg',
    },
    item6: {
        id: 5,
        name: 'Zoro',
        price: '289.74',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/c9d/280/25e/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/5a9/79d/34b/thumb__660x920_0_0_crop.jpg',
    },
    item7: {
        id: 6,
        name: 'Shanks',
        price: '682.91',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/7ec/5c0/20d/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/836/dd0/aac/thumb__660x920_0_0_crop.jpg',
    },
    item8: {
        id: 7,
        name: 'Perona',
        price: '315.38',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/8cf/6f0/e2c/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/b36/9f3/271/thumb__660x920_0_0_crop.jpg',
    },
    item9: {
        id: 8,
        name: 'Boa Hancock',
        price: '768.38',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/875/794/700/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/1dc/be5/86d/thumb__660x920_0_0_crop.jpg',
    },
    item10: {
        id: 9,
        name: 'Tony Tony Chopper',
        price: '640.17',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/fb4/67e/183/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/9eb/cc3/cb2/thumb__660x920_0_0_crop.jpg',
    },
    item11: {
        id: 10,
        name: 'Trafalgar D. Water Law',
        price: '682.91',
        img1: 'https://www.tsume-art.com/storage/app/uploads/public/cd1/575/8ed/thumb__0x752_0_0_crop.jpg',
        img2: 'https://www.tsume-art.com/storage/app/uploads/public/f25/b34/81a/thumb__660x920_0_0_crop.jpg',
    },
};

window.addEventListener('load', addItemToHTML);
window.addEventListener('load', addItemToCartHTML);
window.addEventListener('load', addFooterToCartHTML);


window.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
        addToCart(e.target.parentNode);
    } else if (e.target.classList.contains('remove-from-cart')) {
        removeFromCart(e.target.parentNode);
    }
});


//
// FUNCTIONS
//

/**
 * It loops through the items object and adds each item to the HTML
 */
function addItemToHTML() {
    if (document.title !== 'Cart') {
        for (let key in items) {
            let itemHTML = `
    <div class="item" id="${items[key].id}" data-item-price="${items[key].price}">
        <img class="firstImg"
             src="${items[key].img1}" alt="">
        <img class="secondImg"
                src="${items[key].img2}" alt="">
        <div class="name">${items[key].name}</div>
        <div class="price">$${items[key].price}</div>
        <i class="fas fa-plus add-to-cart"></i>
        <i class="fas fa-minus remove-from-cart"></i>
    </div>
    `;
            document.querySelector('.container').innerHTML += itemHTML;
        }
    }
}

function addItemToCartHTML() {
    if (document.title === 'Cart') {
        console.log('cart');
        for (let key in items) {
            let itemId = items[key].id;
            if (localStorage.getItem(itemId + '-quantity')) {
                let totalItemPrice = localStorage.getItem(itemId + '-totalPrice');
                let totalItemPriceDecimal = totalItemPrice.toString().split('.')[1];
                if (totalItemPriceDecimal.length === 1) {
                    totalItemPrice += '0';
                }
                let cartItemHTML = `
            <div class="cart-body-product">
                <div class="cart-body-item">
                    <p>${items[key].name}</p>
                </div>
                <div class="cart-body-item">
                    <p>$${items[key].price}</p>
                </div>
                <div class="cart-body-item">
                    <p>${localStorage.getItem(itemId + '-quantity')}</p>
                </div>
                <div class="cart-body-item">
                    <p>$${totalItemPrice}</p>
                </div>
        </div>
        `;
                document.querySelector('.cart-body').innerHTML += cartItemHTML;
            }
        }
    }
}

function addFooterToCartHTML() {
    if (document.title === 'Cart') {
        let totalWithoutTax = localStorage.getItem('total');
        let taxCost = (totalWithoutTax * 0.08).toFixed(2);
        let totalWithTax = (parseFloat(totalWithoutTax) + parseFloat(taxCost)).toFixed(2);
        let footerHTML = `
        <div class="cart-footer-item">
            <p>Subtotal</p>
            <p>$${totalWithoutTax}</p>
        </div>
        <div class="cart-footer-item">
            <p>Shipping</p>
            <p>$${taxCost}</p>
        </div>
        <div class="cart-footer-item">
            <p>Total</p>
            <p>$${totalWithTax}</p>
        </div>
        `;
        document.querySelector('.cart-footer').innerHTML += footerHTML;
    }
}


/**
 * The function takes in an item, gets the item's id, checks if the item is in the cart, if it is, it increments the
 * quantity, if it isn't, it adds it to the cart, then it gets the item's price, multiplies it by the quantity, and stores
 * it in the cart
 * @param item - the button that was clicked
 */
function addToCart(item) {
    let itemId = item.getAttribute('id');
    let itemPrice = item.getAttribute('data-item-price');
    let quantity = localStorage.getItem(itemId + '-quantity');
    if (quantity === null) {
        quantity = 1;
    } else {
        quantity++;
    }
    localStorage.setItem(itemId + '-quantity', quantity);
    localStorage.setItem(itemId + '-totalPrice', (quantity * itemPrice).toString());
    updateCart();
}


/**
 * If the quantity of the item is greater than 1, then decrement the quantity and update the total price of the item in the
 * local storage. Otherwise, remove the item from the local storage
 * @param item - The item that was clicked on.
 */
function removeFromCart(item) {
    let itemId = item.getAttribute('id');
    let itemPrice = item.getAttribute('data-item-price');
    let quantity = localStorage.getItem(itemId + '-quantity');
    if (quantity > 1) {
        quantity--;
        localStorage.setItem(itemId + '-quantity', quantity);
        localStorage.setItem(itemId + '-totalPrice', (quantity * itemPrice).toString());
    } else {
        localStorage.removeItem(itemId + '-quantity');
        localStorage.removeItem(itemId + '-totalPrice');
    }
    updateCart();
}


/**
 * It loops through all the items in localStorage, and if the key contains '-totalPrice', it adds the value to the total
 * @returns The total price of all items in the cart.
 */
function getTotal() {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        if (key.includes('-totalPrice')) {
            total += parseFloat(localStorage.getItem(key));
        }
    }
    return total.toString();
}


/**
 * It updates the total in localStorage
 */
function updateCart() {
    localStorage.setItem('total', getTotal());
    if (localStorage.getItem('total') === '0') {
        localStorage.removeItem('total');
    }
}