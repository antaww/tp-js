let addItemToCart = document.querySelectorAll('.add-to-cart');
let removeItemFromCart = document.querySelectorAll('.remove-from-cart');

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
window.addEventListener('click', function (e) {
    console.log(e.target);
});

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