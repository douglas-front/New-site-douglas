import gsap from "gsap";

export function rendering(){
    animationTitle()
    animationCircle()
    animationParagraph()
}


function animationTitle(){

    gsap.to(".spanTitleHero1",{
        y: 0,
        ease: "elastic.out(1,8)",
        delay: 2.2,
        duration: 1
    })
    gsap.to(".spanTitleHero2",{
        y: 0,
        ease: "elastic.out(1,8)",
        delay: 2.4,
        duration: 1
    })
    gsap.to(".spanTitleHero3",{
        y: 0,
        ease: "elastic.out(1,8)",
        delay: 2.6,
        duration: 1
    })
}
function animationCircle(){
    gsap.set(".styles_circle__eXbn7",{
        scale: 0
    })

    gsap.to(".styles_circle__eXbn7",{
        scale: 1,
        delay: 4,
        ease: "elastic.out(1,9)",
        duration: 2
    })

    //this "arrow" are in components/circle 

    gsap.to(".arrow",{
        rotate: 360,
        delay: 4.7,
        duration: 1
    })
}
function animationParagraph(){

    gsap.to(".paragraphHero",{
        y: 0,
        delay: 2.2,
        ease: "elastic.out(1,8)",
        duration: 1
    })
}