import gsap from "gsap";

export default function rendering() {
  ola();
  bonJour();
  hello();
  container();
}

function ola() {
  gsap.set(".ola", {
    opacity: 0,
  });
  gsap.to(".ola", {
    y: 0,
    display: "block",
    opacity: 1,
  });
  gsap.to(".ola", {
    display: "none",
    delay: 0.1,
  });
}
function bonJour() {
  gsap.to(".bonJour", {
    y: 0,
    display: "block",
    delay: 0.6,
  });
  gsap.to(".bonJour", {
    display: "none",
    delay: 0.7,
  });
}
function hello() {
  gsap.to(".hello", {
    y: 0,
    display: "block",
    delay: 1.2,
  });

  gsap.to(".hello", {
    y: 0,
    opacity: 0,
    delay: 2,
  });
}

function container() {
  gsap.to(".styles_enter__aKZGu", {
    height: 0,
    delay: 2.2,
  });
  gsap.to(".styles_enter__aKZGu", {
    borderRadius: "0 0 100% 100%",
    delay: 2.2,
    duration: 0.3,
  });
}
