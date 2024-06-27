"use client";

import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect";
import styles from "./NewHero.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NewHero() {

    useIsomorphicEffect(()=>{
        gsap.to(".paragraph_newHero span",{
            y: 0,
            ease: "elastic.out(1,8)",
            duration: 2,
            stagger: 0.4,
            delay: 0.3,

            scrollTrigger: {
                trigger: `.${styles.newHero}`,
                start: "30% 50%",
                end: "100% 50%",
                // markers: true
            }
        })
        gsap.to(".title_newHero span",{
            y: 0,
            ease: "elastic.out(1,8)",
            duration: 3,

            scrollTrigger: {
                trigger: `.${styles.newHero}`,
                start: "10% 50%",
                end: "100% 50%",
                // markers: true
            }
        })
        gsap.to(`.${styles.image} img`,{
            height: window.matchMedia("(max-width: 450px)").matches? "250vw" : "85vw",
            width: window.matchMedia("(max-width: 450px)").matches? "100vw" : "100%",
            ease: "elastic.out(1,8)",
            duration: 3,

            scrollTrigger: {
                trigger: `.${styles.newHero}`,
                start: "0% 50%",
                end: "100% 50%",
                scrub: true
            }
        })
    },[])

  return (
    <section className={styles.newHero}>
      <h1 className="title_newHero"><span>Become Artistic.</span></h1>
      <div className={styles.image}>
        <img src="/bgNewHero.png" alt="" />
      </div>

      <p className="paragraph_newHero">
        <span>
          I am passionate about the <br /> area of programming and <br />{" "}
          design, i have been improving <br /> both with projects
        </span>
      </p>
      <p className="paragraph_newHero">
        <span>
          Welcome to this section of <br /> the site, this section I come <br />{" "}
          to show you that it is possible <br /> to combine 2 different <br />{" "}
          layouts
        </span>
      </p>
    </section>
  );
}
