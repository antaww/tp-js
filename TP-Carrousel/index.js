var imgs = document.querySelectorAll('.slider-1 .sliderContent div');
var prev = document.querySelector('.slider-1 .prev')
var next = document.querySelector('.slider-1 .next')
var sliderWraper = document.querySelector('.slider-1 .sliderContent')
var summary_ul = document.querySelector('.ul_summary')
var summary_li = summary_ul.children

var pos = 0;
var nbSlide = imgs.length;


/* Listening for the keydown event and if the key is ArrowLeft or ArrowRight it will call the previousFunc or nextFunc. */
window.addEventListener("keydown", event => {
    if (event.key == "ArrowLeft") {
        previousFunc()
    } else if (event.key == "ArrowRight") {
        nextFunc()
    }
})

/**
 * It moves the slider to the left by 100vw, and if the slider is at the beginning of the list, it moves it to the end of
 * the list
 */
function previousFunc() {
    for (let i = 0; i < summary_li.length; i++) {
        summary_li[i].classList.remove('selected');
    }
    const indexPoint = (parseInt(sliderWraper.style.left.replace('vw', '')) / -100) - 1 || nbSlide;
    console.log(nbSlide, indexPoint)

    if (indexPoint > 0 && indexPoint < nbSlide) {
        summary_li[indexPoint].classList.add('selected');
    } else {
        summary_li[nbSlide-1].classList.add('selected');
    }
    pos = pos + 100;
    if (pos > 0) {
        sliderWraper.style.left = ((-nbSlide + 1) * 100) + 'vw';
        pos = (-nbSlide + 1) * 100;
    } else {
        sliderWraper.style.left = pos + 'vw';
    }
}

/* Adding an event listener to the previous button. When the button is clicked, it will call the previousFunc function. */
prev.addEventListener('click', () => {
    previousFunc();
})

/**
 * It moves the slider to the left by 100vw, and if the slider is at the end of the slides, it moves it back to the
 * beginning
 * @param e - the event object
 */
function nextFunc(e) {
    for (let i = 0; i < summary_li.length; i++) {
        summary_li[i].classList.remove('selected');
    }
    const indexPoint = (parseInt(sliderWraper.style.left.replace('vw', '')) / -100) + 1 || 1;
    if (indexPoint > 0 && indexPoint < nbSlide) {
        summary_li[indexPoint].classList.add('selected');
    } else {
        summary_li[0].classList.add('selected');
    }

    pos = pos - 100;
    if (pos < ((-nbSlide + 1) * 100)) {
        sliderWraper.style.left = 0 + 'vw';
        pos = 0;
    } else {
        sliderWraper.style.left = pos + 'vw';
    }
}

/* Adding an event listener to the next button. When the button is clicked, it will call the nextFunc function. */
next.addEventListener('click', (e) => {
    nextFunc(e);
})

/* Creating a list of dots that will be used to navigate through the slides. */
for (let i = 0; i < nbSlide; i++) {
    let li = document.createElement('li');
    li.setAttribute('data-index', i);
    li.classList.add('li_dot');
    summary_ul.appendChild(li);
}

/* Adding an event listener to each dot. When the dot is clicked, it will remove the selected class from all the dots and
add it to the clicked dot. It will also move the slider to the slide that corresponds to the dot. */
for (let i = 0; i < summary_li.length; i++) {

    if (i === 0) {
        summary_li[i].classList.add('selected');
    }
    summary_li[i].addEventListener('click', () => {
        for (let j = 0; j < summary_li.length; j++) {
            summary_li[j].classList.remove('selected');
        }
        summary_li[i].classList.toggle('selected');
        pos = i * -100;
        sliderWraper.style.left = pos + 'vw';
    });
}