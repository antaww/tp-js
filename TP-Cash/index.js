let doors = document.querySelectorAll('.door');
let coins = document.querySelector('.coins');
let benefits = document.querySelector('.benefits');
let totalGainDiv = document.querySelector('.totalGain');
let gainRoundDiv = document.querySelector('.gainRound');
let coinsBetDiv = document.querySelector('.coinsBet');


let wallet = 500;
let totalGain = 0;
let result = [];
let isSpinning = false;


const items = [
    "🍋",
    "🍋",
    "🍒",
    "🍒",
    "💎",
    "💎",
    "🍋",
    "🍒",
    "🍒",
    "💎",
    "7️"
]

/* It's initializing the game by setting the wallet to 500. */
function Init() {
    coins.innerHTML = wallet;
}

/* It's listening for a click on the buttons and calling the SpinFunc function with the value of the button as a parameter. */
window.addEventListener('click', function (e) {
    if (e.target.id.includes('spinner')) {
        let i = e.target.id.substring(7);
        if (isSpinning) {
            return;
        }
        SpinFunc(i);
    }
});


/* It's shuffling the array. */
function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
}

/* It's listening for a click on the buttons and calling the SpinFunc function with the value of the button as a parameter. */
function SpinFunc(i) {
    totalGainDiv.classList.remove('wobble');
    gainRoundDiv.classList.remove('wobble');
    coinsBetDiv.classList.remove('wobble');
    console.clear();
    doors.forEach(door => {
        door.innerHTML = '';
    });
    console.log("Wallet before spin : ", wallet);
    console.log("Coins bet : ", i);
    coinsBetDiv.innerHTML = "Jetons misés : " + i;
    coinsBetDiv.classList.add('wobble');
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

/* It's calculating the gain of the round. */
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
    totalGainDiv.innerHTML = "Total gagné : " + totalGain;
    totalGainDiv.classList.add('wobble');
    console.log("Gain this round : ", gain);
    gainRoundDiv.innerHTML = "Gagné ce tour : " + gain;
    gainRoundDiv.classList.add('wobble');
    coins.innerHTML = wallet;
    isSpinning = false;
}

Init();

// COINS MULTIPLIER FUNCTIONS //

/* It's checking if there is a 7️ in the result array. If there is, it's counting how many 7️ there is. If there is 3, it's
adding the value of the bet to the total gain and the gain of the round. */
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

/* It's checking if there is a 💎 in the result array. If there is, it's counting how many 💎 there is. If there is 1, it's
adding the value of the bet to the total gain and the gain of the round. */
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

/* It's checking if there is a 🍋 in the result array. If there is, it's counting how many 🍋 there is. If there is 3, it's
adding the value of the bet to the total gain and the gain of the round. */
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
/* It's checking if there is a 🍒 in the result array. If there is, it's counting how many 🍒 there is. If there is 3, it's
adding the value of the bet to the total gain and the gain of the round. */
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



