import gsap from "gsap";
import SplitType from "split-type";

export default function rendering() {
  welcome();
  container();
}

function welcome() {
  new SplitType(".welcome", {
    types: "chars",
    charClass: "welcomeChar",
  });

  const timeLine = gsap.timeline({ defaults: { ease: "power3.out" } });

  timeLine
    .set(".welcomeChar", {
      y: "17vw",
      opacity: 1,
      position: "relative",
    })
    .to(".welcomeChar", {
      y: 0,
      stagger: 0.07,
      duration: 1,
      ease: "elastic.out(1,8)",
    })
    .to(".welcomeChar", {
      y: "-100vw",
      stagger: 0.05,
      duration: 10,
      ease: "elastic.out(1,8)",
    });

  gsap.to(".welcome", {
    opacity: 1,
  });

  gsap.to(".welcome", {
    opacity: 0,
    delay: 1.4,
  });
}

function container() {
  gsap.to(".styles_enter__aKZGu", {
    height: 0,
    delay: 2,
  });
}
