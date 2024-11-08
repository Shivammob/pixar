//slider 1
// var mySwiper = new Swiper('.industriestypes__slider-section', {
//     slidesPerView: 3,
//     // spaceBetween: 20,
//     centeredSlides: true,
//     loop: true,
//     grabCursor: true,
//     speed: 1200, 
//     centeredSlidesBounds: true,
//     //initialSlide: 0,
//     // autoplay: {
//     //     delay: 3000,
//     // },
//     on: {
//         click(event) {
//            // console.log('event.target', this.clickedIndex);
//             mySwiper.slideTo(this.clickedIndex);
//         },
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1.1,
//             //spaceBetween: 20,
//         },
//         575: {
//             slidesPerView: 1.5,
//             //spaceBetween: 20,
//         },
//         768: {
//             slidesPerView: 2.5,
//             //spaceBetween: 20,
//         },
//         991: {
//             slidesPerView: 3,
//             //spaceBetween: 20,
//         },
//         1366: {
//             slidesPerView: 3,
//             //spaceBetween: 20,
//         },
//         1920: {
//             slidesPerView: 3,
//             //spaceBetween: 20,
//         }
//     }
// });

//slider 2
var swiper = new Swiper('.culturedriven__culture-slider', {
    slidesPerView: 3.5,
    spaceBetween: 20,
    loop: true, 
    grabCursor: true,
   // centeredSlides: true,
    speed: 1000,
    centeredSlidesBounds: true,
    initialSlide: 0,
    on: {
        click(event) {
           // console.log('event.target', this.clickedIndex);
            swiper.slideTo(this.clickedIndex);
        },
    },
    breakpoints: {
        0: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 2.5,
            spaceBetween: 20,
        },
        1366: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        1920: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
    }
});


//shape change on scroll
var herobanner = document.getElementById("vrman");
var heroimage = document.getElementById("heroimage");
var scroll = 0;
var test = 0;
window.addEventListener('scroll', function (e) {
    //console.log(window.scrollY);
    var mediaQuery = window.matchMedia('(min-width: 768px)')
    if (mediaQuery.matches) {
        if (window.scrollY > 550 && window.screenY < 1000) {
            console.log(window.scrollY)
            if (!herobanner.classList.contains("img-circle")) {
                herobanner.classList.add("img-circle");
                // herobanner.style.opacity = test + 0.2;
                // test = test + 0.2;
            }
        } else {
            herobanner.classList.remove("img-circle");
        }
        if (window.scrollY > 1000 && window.screenY < 1480) {
            //console.log("working");
            if (!herobanner.classList.contains("img-triangle")) {
                herobanner.classList.add("img-triangle");
            }
        } else {
            herobanner.classList.remove("img-triangle");
        }

        if (window.scrollY > 1480 && window.screenY < 2500) {
            //console.log("working");
            if (!herobanner.classList.contains("img-square")) {
                herobanner.classList.add("img-square");
            }
        } else {
            herobanner.classList.remove("img-square");
        }
        if (window.scrollY > 2500) {
            heroimage.style.display = "none";
        }
        else {
            heroimage.style.display = "block";
        }
    }
    // console.log(scrollpos);
});


//hide hero image 


//change opacity on scroll
// var steps1 = document.getElementById("steps1");
// var steps2 = document.getElementById("steps2");
// var steps3 = document.getElementById("steps3");
// var scroll = 0;
// var test = 0;
// window.addEventListener('scroll', function (e) {
//     console.log(window.scrollY);

//     if (window.scrollY > 450 && window.screenY < 650) {
//         if (!steps1.classList.contains("opacity-show")) {
//             steps1.classList.add("opacity-show");
//             steps2.classList.remove("opacity-show");
//             steps3.classList.remove("opacity-show");
//             // steps1.style.opacity = test + 0.2;
//             // test = test + 0.2;
//         }
//         else {
//             console.log("hello");
//             steps1.classList.remove("opacity-show");
//         }
//     }

//     if (window.scrollY > 650 && window.screenY < 810) {
//         console.log("not working");
//         if (!steps2.classList.contains("opacity-show")) {
//             steps2.classList.add("opacity-show");
//             steps1.classList.remove("opacity-show");
//             steps3.classList.remove("opacity-show");
//         }
//         else {
//             console.log("hello1");
//             steps2.classList.remove("opacity-show");
//         }
//     } 

//     if (window.scrollY > 810 && window.screenY < 910) {
//         console.log("also not working");
//         if (!steps3.classList.contains("opacity-show")) {
//             steps3.classList.add("opacity-show");
//             steps2.classList.remove("opacity-show");
//             steps1.classList.remove("opacity-show");
//         }
//         else {
//             steps3.classList.remove("opacity-show");
//         }
//     } 

// });
// add class to navbar
// var navs = document.getElementById("navs")
//     if (window.scrollY > 550) {
//         navs.classList.add("navs");
//     }

// var navs = document.getElementById("navs")
// var scroll = 0;
// // var test = 0;
// window.addEventListener('scroll', function (e) {
//     console.log(window.scrollY);

//     if (window.scrollY > 200) {
//         navs.classList.add("navs");
//     }
//     // else {
//     //     navs.remove.add("navs");
//     // }
// });

// add animation class on scroll
(function () {
    var elements;
    var elements1;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.scroll-section');
        elements1 = document.querySelector('.herobanner__heading');
        console.log(elements);
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            //console.log(positionFromTop, "hello");
            var mediaQuery = window.matchMedia('(min-width: 768px)')

            if (mediaQuery.matches) {
                if (positionFromTop - (windowHeight) / 2 <= 0) {
                    element.classList.add('animate-active');
                    element.classList.remove('scroll-section');
                }
            }
            else {
                if (positionFromTop - (windowHeight) / 1 <= 0) {
                    element.classList.add('animate-active');
                    element.classList.remove('scroll-section');
                }
            }
        }
        if (elements1.classList.contains("herobanner__heading")) {
            var positionFromTop = elements1.getBoundingClientRect().top;
            positionFromTop = positionFromTop.toFixed(0);
            console.log(positionFromTop)
            var mediaQuery = window.matchMedia('(min-width: 768px)')
            if (mediaQuery.matches) {
                if (positionFromTop < 120) {
                    // alert("true")
                    if (positionFromTop - (windowHeight) / 2 <= 0) {
                       // alert("animate")
                        elements1.classList.add('animate-active'); 
                        elements1.classList.remove('scroll-section1');
                    }
                }
                else {
                    if (positionFromTop - (windowHeight) / 1 <= 0) {
                        elements1.classList.remove('animate-active');
                       // elements1.classList.remove('scroll-section1');
                    }
                }
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
var elements;
var windowHeight;

function init() {
    elements = document.querySelectorAll('.scroll-section');
    console.log(elements);
    windowHeight = window.innerHeight;
}

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("still-loaded");
    // DOM ready! Images, frames, and other subresources are still downloading.
});

window.addEventListener("load", () => {
    // Fully loaded!
    document.body.classList.add("js-loading");
});


// counter number
// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         let obj = document.getElementById(id),
//             current = start,
//             range = end - start,
//             increment = end > start ? 1 : -1,
//             step = Math.abs(Math.floor(duration / range)),
//             timer = setInterval(() => {
//                 current += increment;
//                 obj.textContent = current;
//                 if (current == end) {
//                     clearInterval(timer);
//                 }
//             }, step);
//     }
//     //  counter("count1", 0, 1200, 3000);

//     var iscroll = true;

//     window.addEventListener('scroll', function (e) {
//         if (iscroll) {
//             if (window.scrollY > 7000) {
//                 counter("count2", 0, 1000, 3000);
//                 counter("count3", 0, 225, 3000);
//                 counter("count4", 0, 25, 3000);
//                 counter("count5", 0, 15, 3000);
//                 counter("count6", 0, 12, 3000);
//                 counter("count7", 0, 4, 3000);
//                 iscroll = false;
//             }
//         }
//     });


// });


// change opacity on scroll top
(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.herobanner__digital-steps');
        console.log(elements);
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            if ((positionFromTop < 300) && (positionFromTop > 0)) {
                element.classList.add('opacity-show');
            }
            else {
                element.classList.remove('opacity-show');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
var elements;
var windowHeight;


// change opacity on scroll bottom
(function () {
    var elements;
    var windowHeight;

    function init() {
        elements = document.querySelectorAll('.industriestypes__industries-categories');
        console.log(elements);
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var positionFromTop = elements[i].getBoundingClientRect().top;
            if ((positionFromTop < 160) && (positionFromTop > 0)) {
                element.classList.add('opacity-show');
            }
            else {
                element.classList.remove('opacity-show');
            }
        }
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);

    init();
    checkPosition();
})();
var elements;
var windowHeight;


