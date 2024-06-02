import gsap from "gsap";

export default function rendering() {
  TitleAnimation();
  CircleAnimation();
  ParagraphAnimation();
}

function TitleAnimation() {
  gsap.to(".titleHero", {
    y: 0,
    ease: "elastic.out(1,8)",
    duration: 1.5,
    delay: 2,
  });
}

function CircleAnimation() {
  gsap.to(".styles_circle__eXbn7", {
    scale: 1,
    delay: 3,
    ease: "elastic.out(1,8)",
    duration: 1.5,
  });
}

function ParagraphAnimation() {
  gsap.to(".paragraph_Hero1", {
    y: 0,
    ease: "elastic.out(1,8)",
    duration: 1.5,
    delay: 2,
  });
  gsap.to(".paragraph_Hero2", {
    y: 0,
    ease: "elastic.out(1,8)",
    duration: 1.5,
    delay: 2.2,
  });
}
