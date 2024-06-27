import gsap from "gsap";

export const animation_Title = () => {
  gsap.to(".span_inside_title", {
    y: 0,
    duration: 1.5,
    ease: "elastic.out(1,9)",
  });
};
export const animation_Title_Out = () => {
  gsap.to(".span_inside_title", {
    y: "100%",
    duration: 1.5,
    ease: "elastic.out(1,9)",
  });
};

export const animation_Paragraph = () => {
  gsap.to(".paragraph span", {
    y: 0,
    duration: 1,
    ease: "elastic.out(1,8)",
    stagger: 0.2,
  });
};
export const animation_Paragraph_Out = () => {
  gsap.to(".paragraph span", {
    y: "200%",
    duration: 0.1,
    ease: "elastic.out(1,1)",
    stagger: 0.2,
  });
};
