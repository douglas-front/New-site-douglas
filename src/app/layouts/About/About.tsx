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
      trigger: `.${styles.about}`,
      start: "40% 50%",
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

    gsap.to(`.${styles.overlay}`, {
      display: "block",
      width: "100vw",
      height: "100%",
      
      scrollTrigger: {
        trigger: `.${styles.about}`,
        start: "55% 50%",
        end: "100% 50%",
        scrub: true,
        pin: true
      }
    })
    gsap.to("body", {
      
      background: "#E8E5E5",
      scrollTrigger: {
        trigger: `.${styles.about}`,
        start: "55% 50%",
        end: "100% 50%",
        scrub: true,
      }
    })

    gsap.to(".three", {
      width: 0,
      height: 0,
      
      scrollTrigger: {
        trigger: `.${styles.about}`,
        start: "55% 50%",
        end: "100% 50%",
        scrub: true,
      }
    })

    return () => {
      ScrollTrigger.killAll();
      gsap.killTweensOf(".paragraph");
      gsap.killTweensOf(".span_inside_title");
      gsap.killTweensOf("body");
      gsap.killTweensOf(".three");
    };
  }, []);

  return (
    <section className={styles.about} id="about">
      <h1 className={styles.title}>
        <span className="span_inside_title">About</span>
      </h1>
      <div className={styles.paragraphs}>
        <p className="paragraph">
          <span>
            My name is Douglas i am a <br /> full stack developer with <br />{" "}
            technologys like Node.js <br /> Next.js , React and MongoDB
          </span>
        </p>
        <p className="paragraph">
          <span>
            I have been studying and <br /> improving every day, always <br />{" "}
            looking for continuous evolution <br /> and learning
          </span>
        </p>
        <p className="paragraph">
          <span>
            I am passionate about the <br /> area of programming and <br />{" "}
            design, i have been improving <br /> both with projects
          </span>
        </p>
        <p className="paragraph">
          <span>
            I have experience with next js, <br /> react and node js, making{" "}
            <br /> incredible and functional <br /> web applications
          </span>
        </p>
      </div>

      <div className={styles.overlay}></div>
    </section>
  );
}
