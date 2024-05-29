import gsap from "gsap";

export default function rendering(){
    ola();
    bonJour();
    hello();
}

function ola(){
    gsap.set(".ola",{
        opacity: 0
    })
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
function bonJour(){
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
function hello(){
    gsap.to(".hello", {
        y: 0,
        display: "block",
        delay: 1.2,
      });
}
