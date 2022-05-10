var imgs = document.querySelectorAll('.slider-1 .sliderContent div');
var prev = document.querySelector('.slider-1 .prev')
var next = document.querySelector('.slider-1 .next')
var sliderWraper = document.querySelector('.slider-1 .sliderContent')

var pos = 0;
var nbSlide = imgs.length;


window.addEventListener("keydown", event => {
    if (event.key == "ArrowRight") {
        nextFunc()
    }
})

function nextFunc() {
    pos = pos - 100;
    if (!(pos < ((-nbSlide + 1) * 100))) {
        sliderWraper.style.left = pos + 'vw';
    }
}

next.addEventListener('click', () => {
    nextFunc();
})