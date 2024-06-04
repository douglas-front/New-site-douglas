import gsap from "gsap"

export function sphereAnimation(){
    gsap.to(".three",{
      opacity: 1,
      top:  window.matchMedia("(max-width: 830px)").matches? "50vw" : "5vw",
      delay: 2.2,
      ease: "elastic.out(1,8)",
      duration: 2
    })
  }