"use client";
import styles from "./About.module.scss";
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  animation_Title,
  animation_Paragraph,
  animation_Title_Out,
  animation_Paragraph_Out,
} from "@/app/layouts/About/animations/TextsAnimation";

export default function About() {
  useIsomorphicEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: `${styles.about}`,
      start: "70% 50%",
      end: "100% 50%",
      onEnter: () => {
        animation_Title();
        animation_Paragraph();
      },
      onLeave: () => {
        animation_Title_Out();
        animation_Paragraph_Out();
      },
      onLeaveBack: () => {
        animation_Title_Out();
        animation_Paragraph_Out();
      },
      onEnterBack: () => {
        animation_Title();
        animation_Paragraph();
      },
    });

    return () => {
      ScrollTrigger.killAll();
      gsap.killTweensOf(".paragraph");
      gsap.killTweensOf(".span_inside_title");
    };
  }, []);

  return (
    <section className={styles.about} id="about">
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
