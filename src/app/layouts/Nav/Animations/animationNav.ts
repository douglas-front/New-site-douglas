import gsap from "gsap";

export function openNav(setIsOpen: any) {
  //isOpen in Button.tsx is seted to false

  //animation span in menu
  gsap.to(".li1", {
    y: 0,
    ease: "elastic.out(1,8)",
    duration: 1,
    delay: 0.4,
  });

  gsap.to(".li2", {
    y: 0,
    ease: "elastic.out(1,8)",
    duration: 1,
    delay: 0.5,
  });

  gsap.to(".li3", {
    y: 0,
    ease: "elastic.out(1,8)",
    duration: 1,
    delay: 0.6,

    onComplete: () => {
      setIsOpen(true);
    },
  });

  //animation overlay
  gsap.to(".styles_overlay__PDkD5", {
    height: "100vh",
    ease: "power3.inOut",
    duration: 0.5,
  });
}

export function closeNav(setIsOpen: any) {
  //isOpen in Button.tsx is seted to true

  //animation span in menu
  gsap.to(".li1", {
    y: "15vw",
    ease: "elastic.out(1,8)",
    duration: 0.7,
  });

  gsap.to(".li2", {
    y: "15vw",
    ease: "elastic.out(1,8)",
    duration: 0.7,
    delay: 0.1,
  });

  gsap.to(".li3", {
    y: "15vw",
    ease: "elastic.out(1,8)",
    duration: 0.7,
    delay: 0.2,
  });

  //animation overlay
  gsap.to(".styles_overlay__PDkD5", {
    height: "0vh",
    ease: "power3.inOut",
    delay: 0.5,

    onComplete: () => {
      setIsOpen(false);
    },
  });
}
