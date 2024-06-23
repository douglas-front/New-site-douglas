import gsap from "gsap";
import styles from "@/app/components/Arrow/styles.module.scss"
export function rendering(){
    animationTitle()
    animationArrow()
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
function animationArrow(){
    gsap.set(`.${styles.arrow}`,{
        scale: 0
    })

    gsap.to(`.${styles.arrow}`,{
        scale: 1,
        delay: 4,
        ease: "elastic.out(1,9)",
        duration: 2
    })

    //this "arrow" are in components/circle 

    gsap.to(`.${styles.arrow}`,{
        rotate: 360,
        delay: 4.3,
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