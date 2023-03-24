const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const sliderRow = document.querySelector('.slider_row')

let offSet = 0

next.addEventListener('click', nextSlider)
prev.addEventListener('click', prevSlider)

function nextSlider() {
    offSet = offSet + 380 + 30;
    if (offSet > 2870) {
        offSet = 2870
    }
    sliderRow.style.left = -offSet + 'px';
}

function prevSlider() {
    offSet = offSet - 380 - 30;
    if (offSet < 0) {
        offSet = 0
    }
    sliderRow.style.left = -offSet + 'px';

}