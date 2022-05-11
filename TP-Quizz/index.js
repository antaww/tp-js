var imgs = document.querySelectorAll('.slider-1 .sliderContent div');
var next = document.querySelector('.slider-1 .next')
var sliderWraper = document.querySelector('.slider-1 .sliderContent')

var pos = 0;
var nbSlide = imgs.length;

// Set correct answers
var answers = ["a", "a", "bc"];

// Get the correct answers from the user of checkboxes
function GetCheckboxValues(question) {
    var vals = "";
    for (var i = 0, n = question.length; i < n; i++) {
        if (question[i].checked) {
            vals += question[i].value;
        }
    }
    question = vals;
    return question;
}

function submitAnswers() {
    var total = 3;
    var score = 0;

//Get user input
    var q1 = document.forms['quizForm']['q1'].value;
    var q2 = document.forms['quizForm']['q2'].value;
    var q3 = document.getElementsByName('q3');
    q3 = GetCheckboxValues(q3);


    for (var i = 1; i <= total; i++) {
        // Check answers
        if (eval('q' + i) === answers[i - 1]) {
            score++;
        }
        // Display answers
        // console.log('q'+i,answers[i-1]);
    }

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

