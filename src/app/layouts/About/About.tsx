"use client";
import styles from "./About.module.scss";
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicEffect(() => {
    gsap.to(".span_inside_title", {
      y: 0,
      duration: 1.5,
      ease: "elastic.out(1,9)",
      scrollTrigger: {
        trigger: `${styles.about}`,
        start: "70% 50%",
        end: "100% 50%",
        
      },
    });

    gsap.to(".paragraph", {
      y: 0,
      duration: 2,
      ease: "elastic.out(1,8)",
      stagger: 0.2,
      scrollTrigger: {
        trigger: `${styles.about}`,
        start: "70% 50%",
        end: "100% 50%",
      },
    });

    return () => {
      ScrollTrigger.killAll();
      gsap.killTweensOf(".paragraph");
      gsap.killTweensOf(".span_inside_title");
    };
  });

  return (
    <section className={styles.about}>
      <h1 className={styles.title}>
        <span className="span_inside_title">About</span>
      </h1>
      <div className={styles.paragraphs}>
        <p className="paragraph">
          My name is Douglas i am a <br /> full stack developer with <br />{" "}
          technologys like Node.js <br /> Next.js , React and MongoDB
        </p>
        <p className="paragraph">
          I have been studying and <br /> improving every day, always <br />{" "}
          looking for continuous evolution <br /> and learning
        </p>
        <p className="paragraph">
          I am passionate about the <br /> area of programming and <br />{" "}
          design, i have been improving <br /> both with projects
        </p>
        <p className="paragraph">
          I have experience with next js, <br /> react and node js, making{" "}
          <br /> incredible and functional <br /> web applications
        </p>
      </div>
    </section>
  );
}
