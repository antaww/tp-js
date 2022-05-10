var imgs = document.querySelectorAll('.slider-1 .sliderContent div');
var prev = document.querySelector('.slider-1 .prev')
var next = document.querySelector('.slider-1 .next')
var sliderWraper = document.querySelector('.slider-1 .sliderContent')

var pos = 0;
var nbSlide = imgs.length;


var total = 2;
var score = 0;

//Get user input
var q1 = document.forms['quizForm']['q1'].value;
var q2 = document.forms['quizForm']['q2'].value;



// Set correct answers
var answers = ["a", "a"];

function submitAnswers() {

    for (var i = 1; i <= total; i++) {
        // Check answers
        if (eval('q' + i) == answers[i - 1]) {
            score++;
        }
    }
    console.log(score);

    // Display results
    var results = document.getElementById('results');
    results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';

    return false;
}

window.addEventListener("keydown", event => {
    if (event.key == "ArrowRight") {
        nextFunc()
    }
})

function nextFunc() {
    // Validation
    //if
    pos = pos - 100;
    if (!(pos < ((-nbSlide + 1) * 100))) {
        sliderWraper.style.left = pos + 'vw';
    } else {
        submitAnswers();
    }
}

next.addEventListener('click', () => {
    nextFunc();
})

