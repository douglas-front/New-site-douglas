import gsap from "gsap"

export function sphereAnimation(){
    gsap.to(".three",{
      opacity: 1,
      top:  window.matchMedia("(max-width: 830px)").matches? "35vw" : "5vw",
      delay: 3,
      ease: "elastic.out(1,8)",
      duration: 5
    })
  }