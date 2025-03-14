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

// account login
$(document).ready(() => {

    $('.sign-btn').click(() => {
        $('.account-wrapper').css({ "visibility": "visible", "opacity": "1" })
    })

    $('.sign-btn').click(() => {
        $('.ac-form').css({ "transform": "translateX(0px)" })
    })

    $('.acc-c').click(() => {
        $('.account-wrapper').css({ "visibility": "hidden", "opacity": "0" })

        $('.ac-form').css({ "transform": "translateX(400px)" })
    })
})

// create account

$(document).ready(() => {

    $('.acc-create').click(() => {
        $('.create-acc').css({ "transform": "translateX(0px)", "opacity": "1", "visibility": "visible" })
    })

    $('.acc-login').click(() => {
        $('.create-acc').css({ "transform": "translateX(400px)", "opacity": "0", "visibility": "hidden" })
    })

    $('.acc-c').click(() => {
        $('.create-acc').css({ "transform": "translateX(400px)", "opacity": "0", "visibility": "hidden" })
    })
})

$(document).ready(() => {

    $('.acc-c').click(() => {
        $('.nav-footer').css({ "left": "-200px", "visibility": "hidden" })
    })
})


// front
$(document).ready(() => {

    $('.f-c').click(() => {
        $('.front-entry').css({ "opacity": "0", "visibility": "hidden" })

        $('.front-pic').css({ "transform": "translateX(120px)" })
    })
})

let frontDisplay = document.querySelector(".front-entry");
let frontImg = document.querySelector(".front-pic")

setTimeout(() => {
    frontDisplay.style.opacity = 1;
    frontDisplay.style.visibility = "visible"
    frontImg.style.transform = "translateX(0px)"
}, 1000);


// mouseover-nav

$(document).ready(() => {

    $(".nav-all-a").mouseover(() => {
        $(".mouseover-det").css({ "visibility": "visible" })
    })
    $(".nav-all-a").mouseout(() => {
        $(".mouseover-det").css({ "visibility": "hidden" })
    })
    $(".mouseover-back").click(() => {
        $(".mouseover-det").css({ "visibility": "hidden" })
    })


})



