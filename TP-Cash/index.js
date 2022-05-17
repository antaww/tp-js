let doors = document.querySelectorAll('.door');
let spin10 = document.querySelector('#spinner10');
let spin50 = document.querySelector('#spinner50');
let spin200 = document.querySelector('#spinner200');
let reset = document.querySelector('#reseter');
let coins = document.querySelector('.coins');
let benefits = document.querySelector('.benefits');

const wallet = 500;
const gain = 0;

const items = [
    "🍋",
    "🍒",
    "💎",
    "🍋",
    "🍒",
    "💎",
    "7️"
]

function Init(){
    coins.innerHTML = wallet;
}

window.addEventListener('click', function(e){
    if(e.target.id.includes('spinner')){
        let i = e.target.id.substring(7);
        console.log(i);
    }
});




// Randomly select an item (the last item has a lower chance of being selected (50%))
function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
}

function SpinFunc() {

    coins.innerHTML = wallet - 10;
// Shuffle the items and assign them to the doors
    let shuffledItems = shuffle(items);
    for (let i = 0; i < doors.length; i++) {
        doors[i].innerHTML = shuffledItems[i];

    }
}

Init();



