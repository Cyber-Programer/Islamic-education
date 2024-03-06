const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smoothScroll: true,
    lerp: 0.01, // Decrease the lerp value for smoother but slower scrolling
    multiplier: 1, // Adjust the multiplier to control the scrolling speed (lower value for slower scrolling)
    getSpeed: true,
    getDirection: true,
    scrollFromAnywhere: true, // Enable smooth scrolling from any position
    touchMultiplier: 1, // Adjust touch multiplier for smoother scrolling on touch devices
    inertia: 0.2 // Decrease inertia for smoother but slower scrolling
});



function typing(){
    const text = document.querySelector('#text');
    const data = ['ইসলাম','নামাজ','হাদিস '];
    let x = 0;
    let count = 0;
    let type = true;
    let datainx = 0;

    const intervalId = setInterval(() => {
        text.textContent = data[datainx].substring(0, x);

        if (type) {
            x++;
        } else {
            x--;
        }

        if (x < 0) {
            type = true;
            x = 0;
        }

        if (x > data[datainx].length) {
            type = false;
        }

        if (x === 0 && !type) {
            type = true;
            datainx++;
            
            // Reset datainx if it exceeds the array length
            if (datainx === data.length) {
                datainx = 0;
            }
            
            // Clear the interval if all strings are displayed
            if (datainx === 0 && !type) {
                clearInterval(intervalId);
            }
        }
    }, 300);
}


typing()

gsap.to('#movingImage', {
    y: 20, // Move 50 pixels down
    // x: 20,
    duration: 0.8, // Animation duration
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Reverse the animation
    ease: 'power1.inOut' // Easing function
});

document.addEventListener('DOMContentLoaded',function(){
    gsap.from('.header h1',{
        
        opacity:0.5,
        y:50,
        duration:2,
        
        onComplete: () => {
            gsap.to('.header h1',{
                opacity:1,
                duration:1
            })
        }
    })

    gsap.from('.header p',{
        x:40,
        duration:1,
    })

    gsap.from('#movingImage',{
        opacity:0.3,
        duration:1,
    })

    gsap.from('#logo , nav ul a',{
        y:-50,
        duration:0.9,
    })

})

gsap.from('.page2 h3',{
    opacity:0,
    duration:0.3,
    delay:0.3,
    ease: 'power1.inOut',
    scrollTrigger:{
        trigger:'.page2 h3',
        scroller:'body',
        start:'top 90%',
        // scrub: true,
        // markers:true,
        // repeat:-1,
        // toggleActions: "restart pause reverse pause"
    }
});


gsap.from('.page2 .scrool-container',{
    y:400,
    duration:0.5,
    delay:0.2,
    ease:'power1.inOut',
    scrollTrigger:{
        trigger:'.scrool-container',
        scroller:'body',
        start:'top 98%',
        // scrub: true,
        // markers:true,
    }
})


gsap.to('.page2 .scrool-container', {
    duration: 3, // Adjust the duration as needed
    scrollLeft: '+=680', // Adjust the distance to scroll
    // ease: 'linear',
    ease: 'power1.inOut',
    repeat: -1, // Repeat infinitely
    yoyo: true, // Reverse the animation
    // scrub: true,
});


gsap.from('.page3 .left h2',{
    x:100,
    duration:0.8,
    delay:0.1,
    scrollTrigger:{
        trigger:'.page3 .left h2',
        scroller:'body',
        start:'top 60%',
        ease: 'power1.inOut',
    }
})

gsap.from('.page3 .left p',{
    x:-100,
    duration:0.8,
    delay:0.1,
    scrollTrigger:{
        trigger:'.page3 .left p',
        scroller:'body',
        start:'top 60%',
    }
})

