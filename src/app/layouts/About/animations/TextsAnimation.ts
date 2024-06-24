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
  gsap.to(".paragraph", {
    y: 0,
    duration: 2,
    ease: "elastic.out(1,8)",
    stagger: 0.2,
  });
};
export const animation_Paragraph_Out = () => {
  gsap.to(".paragraph", {
    y: "100%",
    duration: 2,
    ease: "elastic.out(1,8)",
    stagger: 0.2,
  });
};
