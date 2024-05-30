import gsap from "gsap";



export function OpenNav(state: any){

  state(true)


  gsap.to(".styles_menu__R4Bxh",{
    display: "block",
    right: 0,
    ease: "power4.inOut",
    duration: 1.3
  })

}

export function CloseNav(state: any){

  state(false)


  gsap.to(".styles_menu__R4Bxh",{
    right: "-40vw",
    ease: "power4.inOut",
    duration: 1.3
  })

}