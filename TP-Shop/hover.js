document.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('firstImg')) {
        e.target.nextElementSibling.style.display = 'block';
        e.target.style.display = 'none';
    }
});

document.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('secondImg')) {
        e.target.previousElementSibling.style.display = 'block';
        e.target.style.display = 'none';
    }
});
