import gsap from "gsap";

export function openNav(setIsOpen : any) {

  //isOpen in Button.tsx is seted to false
  setIsOpen(true);


  //animation of li in the menu
  gsap.to(".li1", {
    y: 0,
    delay: 0.3,
    duration: 1,
    ease: "elastic.out(1,5)",
  });
  gsap.to(".li2", {
    y: 0,
    delay: 0.4,
    duration: 1,
    ease: "elastic.out(1,5)",
  });
  gsap.to(".li3", {
    y: 0,
    delay: 0.5,
    duration: 1,
    ease: "elastic.out(1,5)",
  });


  //animation overlay
  gsap.to(".styles_overlay__PDkD5", {
    bottom: 0,
    height: "200vh",
    ease: "power3.inOut",
    duration: 0.5,
  });
}

export function closeNav(setIsOpen: any) {

  //isOpen in Button.tsx is seted to true
  setIsOpen(false);

  //animation of li in the menu
  gsap.to(".li1", {
    y: "35vw",
    delay: 0.1,
    duration: 1.5,
    ease: "elastic.out(1,5)",
  });
  gsap.to(".li2", {
    y: "35vw",
    delay: 0.05,
    duration: 1.5,
    ease: "elastic.out(1,5)",
  });
  gsap.to(".li3", {
    y: "35vw",

    duration: 1.5,
    ease: "elastic.out(1,5)",
  });

  //animation overlay
  gsap.to(".styles_overlay__PDkD5", {
    bottom: "-100%",
    height: "0vh",
    ease: "power3.inOut",
    delay: 0.05,
  });
}
