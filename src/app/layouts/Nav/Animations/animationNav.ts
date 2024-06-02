import gsap from "gsap";

export function openNav(setIsOpen: any) {
  //isOpen in Button.tsx is seted to false
  setIsOpen(true);

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
  setIsOpen(false);


  //animation span in menu
  gsap.to(".li1", {
    y: "15vw",
    ease: "elastic.out(1,8)",
    duration: 0.5,
  });

  gsap.to(".li2", {
    y: "15vw",
    ease: "elastic.out(1,8)",
    duration: 0.5,
    delay: 0.1,
  });

  gsap.to(".li3", {
    y: "15vw",
    ease: "elastic.out(1,8)",
    duration: 0.5,
    delay: 0.2,
  });

  //animation of li in the menu
  // gsap.to(".li1", {
  //   y: "35vw",
  //   delay: 0.1,
  //   duration: 1.5,
  //   ease: "elastic.out(1,5)",
  // });
  // gsap.to(".li2", {
  //   y: "35vw",
  //   delay: 0.05,
  //   duration: 1.5,
  //   ease: "elastic.out(1,5)",
  // });
  // gsap.to(".li3", {
  //   y: "35vw",

  //   duration: 1.5,
  //   ease: "elastic.out(1,5)",
  // });

  //animation overlay
  gsap.to(".styles_overlay__PDkD5", {
    height: "0vh",
    ease: "power3.inOut",
    delay: 0.5,
  });
}

// export function linesInX() {
//   gsap.to(".styles_line2__ZPsZD", {
//     rotate: "-40deg",
//     y: "-0.6vw",
//     duration: 0.1,
//   });
//   gsap.to(".styles_line1__dg30t", {
//     rotate: "45deg",
//     y: "-0.2vw",
//     duration: 0.1,
//   });
// }

// export function linesNormal() {
//   gsap.to(".styles_line2__ZPsZD", {
//     rotate: "0",
//     y: "0",
//     duration: 0.1,
//   });
//   gsap.to(".styles_line1__dg30t", {
//     rotate: "0",
//     y: "0",
//     duration: 0.1,
//   });
// }
