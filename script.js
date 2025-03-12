const slider = document.getElementById("slider");
const sliderClone = slider.innerHTML;
slider.innerHTML += sliderClone;

let position = 0;
const speed = 1; // Speed of the marquee

function animateSlider() {
    position -= speed;
    if (position <= -slider.scrollWidth / 2) {
        position = 0;
    }
    slider.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateSlider);
}

animateSlider();