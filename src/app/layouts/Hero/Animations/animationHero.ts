import gsap from "gsap";
import SplitType from "split-type";

export function Animation() {
  //started new split text
  new SplitType(".h1Hero", {
    types: "chars",
  });

  //context gsap for animation
  let ctx = gsap.context(() => {
    const timeLine = gsap.timeline({ defaults: { ease: "power3.out" } });

    //this char "d o u g l a s"
    timeLine.set(".char", {
      y: "17vw",
      opacity: 1,
      position: "relative",
    });

    timeLine.to(".char", {
      y: 0,
      stagger: 0.03,
      duration: 1.2,
      ease: "elastic.out(1,1)",
      delay: 2.2,
    });

    //this h1Hero class
    gsap.to(".h1Hero", {
      opacity: 1,
      delay: 1,
    });

    //animation for the text "full stack"
    gsap.to(".full", {
      delay: 2.5,
      y: "1vw",
      opacity: 1,
      ease: "elastic.out(1,1)",
    });
  });
}
