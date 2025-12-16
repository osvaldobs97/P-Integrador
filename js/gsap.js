console.log("GSAP:", typeof gsap); /* prueba */


document.addEventListener("DOMContentLoaded", () => {
    /* titulo desde abajo */
    gsap.from(".hero-text", {
        opacity: 0,
        y: 60,
        duration: 3,
        ease: "power3.out"
    });

});
/* texto escribiendose */
document.addEventListener("DOMContentLoaded", () => {

    const textElement = document.querySelector(".type-text");
    const fullText = textElement.textContent;

    textElement.textContent = "";

    let index = 0;

    gsap.to({}, {
        duration: fullText.length * 0.10,
        onUpdate: () => {
            textElement.textContent = fullText.slice(0, Math.floor(index));
            index += 0.6;
        }
    });

});



/* Razones  */
document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".razones-title", {
        scrollTrigger: {
            trigger: ".razones",
            start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from("#carousel2", {
        scrollTrigger: {
            trigger: ".razones",
            start: "top 75%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 3,
        ease: "power2.out"
    });

});

/* productos relevantes */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".producto-card", {
        scrollTrigger: {
            trigger: ".producto-card",
            start: "top 60%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.4,
        ease: "power2.out"
    });

});

/* logo universalcopy */
gsap.from(".logo-text .line2", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
});
gsap.to(".logo-text", {
    y: -8,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});






