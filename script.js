// text slide
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


// nav

$(document).ready(() => {
    $('.hamburger').click(() => {
        $('.nav-footer').css({ "left": "0", "visibility": "visible" })
    })

    $('.cancle').click(() => {
        $('.nav-footer').css({ "left": "-200px", "visibility": "hidden" })
    })
})

// shop-wish
$(document).ready(() => {

    $('.shop-btn').click(() => {
        $('.shop-details').css({ "right": "0", "visibility": "visible" })
    }),

        $('.shop-cancle').click(() => {
            $('.shop-details').css({ "right": "-400px", "visibility": "hidden" })
        })

})

// shop
$(document).ready(() => {

    $('.shopping').click(() => {
        $('.shop-details').css({ "right": "0", "visibility": "visible" })
    }),

        $('.shop-cancle').click(() => {
            $('.shop-details').css({ "right": "-400px", "visibility": "hidden" })
        })

})

// wish

$(document).ready(() => {

    $('.wish-btn').click(() => {
        $('.wish-details').css({ "right": "0", "visibility": "visible" })
    }),

        $('.wish-cancle').click(() => {
            $('.wish-details').css({ "right": "-400px", "visibility": "hidden" })
        })

})
