let doors = document.querySelectorAll('.door');
let spin10 = document.querySelector('#spinner10');
let spin50 = document.querySelector('#spinner50');
let spin200 = document.querySelector('#spinner200');
let reset = document.querySelector('#reseter');
let coins = document.querySelector('.coins');
let benefits = document.querySelector('.benefits');


let wallet = 500;
let totalGain = 0;
let result = [];


const items = [
    "🍋",
    "🍒",
    "💎",
    "🍋",
    "🍒",
    "💎",
    "7️"
]

function Init() {
    coins.innerHTML = wallet;
}

window.addEventListener('click', function (e) {
    if (e.target.id.includes('spinner')) {
        let i = e.target.id.substring(7);
        SpinFunc(i);
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

function SpinFunc(i) {
    console.clear();
    //clear doors
    doors.forEach(door => {
        door.innerHTML = '';
    });
    console.log("Wallet before spin : ", wallet);
    console.log("Coins bet : ", i);
    if (wallet - i < 0) {
        console.log("You don't have enough money to play");
        return
    }
    wallet -= i;
    coins.innerHTML = wallet;
    let shuffledItems = shuffle(items);
    for (let i = 0; i < doors.length; i++) {
        //Wait 0.5s before displaying the next door
        setTimeout(function () {
            doors[i].innerHTML = shuffledItems[i];
        }, i * 500);
    }
    //Wait to for loop to finish
    setTimeout(function () {
        CalculateGain(i);
        console.log("Wallet after spin : ", wallet);
    }, doors.length * 500);
}

function CalculateGain(i) {
    result = [];
    let gain = 0;
    for (let j = 0; j < doors.length; j++) {
        result.push(doors[j].innerHTML);
    }
    console.log(result);
    if (result.includes("💎")) {
        let gemCount = result.filter(x => x === "💎").length;
        console.log(gemCount, "💎");
        if (gemCount === 1) {
            totalGain += i * 0.5
            gain += i * 0.5;
        } else if (gemCount === 2) {
            totalGain += i * 1;
            gain += i * 1;
        } else if (gemCount === 3) {
            totalGain += i * 2.5;
            gain += i * 2.5;
        }
    }
    wallet += gain;
    console.log("Total gain : ", totalGain);
    console.log("Gain this round : ", gain);
    coins.innerHTML = wallet;
    benefits.innerHTML = totalGain;
}

Init();



