// Put your application javascript here

let mark = document.querySelector('.mark');

gsap.from(mark, {
    duration: 1,
    y: -100,
    ease: 'power2.inOut'
});