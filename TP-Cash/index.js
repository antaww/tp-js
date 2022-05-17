let doors = document.querySelectorAll('.door');
let coins = document.querySelector('.coins');
let benefits = document.querySelector('.benefits');


let wallet = 500;
let totalGain = 0;
let result = [];
let isSpinning = false;


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
        if (isSpinning) {
            return;
        }
        SpinFunc(i);
    }
});


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
    doors.forEach(door => {
        door.innerHTML = '';
    });
    console.log("Wallet before spin : ", wallet);
    console.log("Coins bet : ", i);
    if (wallet - i < 0) {
        console.log("You don't have enough money to play");
        for (let i = 0; i < doors.length; i++) {
            setTimeout(function () {
                doors[i].innerHTML = "<div class='boxes'>" + "❌" + "</div>";
                let box = doors[i].querySelector('.boxes');
                box.classList.add('heartBeat');
            }, i * 500);
        }
        return
    }
    isSpinning = true;
    wallet -= i;
    coins.innerHTML = wallet;
    let shuffledItems = shuffle(items);
    for (let i = 0; i < doors.length; i++) {
        setTimeout(function () {
            doors[i].innerHTML = "<div class='boxes'>" + shuffledItems[i] + "</div>";
            let box = doors[i].querySelector('.boxes');
            box.classList.add('heartBeat');
        }, i * 500);
    }
    setTimeout(function () {
        CalculateGain(i);
        console.log("Wallet after spin : ", wallet);
    }, doors.length * 500);
}

function CalculateGain(i) {
    result = [];
    let gain = 0;
    for (let j = 0; j < doors.length; j++) {
        result.push(doors[j].children.item(0).innerHTML);
    }
    console.log(result);
    gain = gemCheck(i, gain);
    gain = sevenCheck(i, gain);
    gain = lemonCheck(i, gain);
    gain = cherryCheck(i, gain);

    wallet += gain;
    console.log("Total gain : ", totalGain);
    console.log("Gain this round : ", gain);
    coins.innerHTML = wallet;
    benefits.innerHTML = totalGain;
    isSpinning = false;
}

Init();

// COINS MULTIPLIER FUNCTIONS //

function sevenCheck(i, gain) {
    if (result.includes("7️")) {
        let sevenCount = result.filter(x => x === "7️").length;
        console.log(sevenCount, "7️");
        if (sevenCount === 3) {
            totalGain += i * 10
            gain += i * 10;
        }
    }
    return gain;
}

function gemCheck(i, gain) {
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
    return gain;
}

function lemonCheck(i, gain) {
    if (result.includes("🍋")) {
        let lemonCount = result.filter(x => x === "🍋").length;
        console.log(lemonCount, "🍋");
        if (lemonCount === 3) {
            totalGain += i * 1.25
            gain += i * 1.25;
        }
    }
    return gain;
}

function cherryCheck(i, gain) {
    if (result.includes("🍒")) {
        let cherryCount = result.filter(x => x === "🍒").length;
        console.log(cherryCount, "🍒");
        if (cherryCount === 3) {
            totalGain += i * 1.5
            gain += i * 1.5;
        }
    }
    return gain;
}



