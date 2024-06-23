"use client";
import ThreeCube from "@/app/components/ThreeCube";
import styles from "./Hero.module.scss";
import Circle from "@/app/components/Arrow";
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect";
import { rendering } from "./animations/heroTextAnimations";

export default function Hero() {
  useIsomorphicEffect(() => {
    rendering();
  }, []);

  return (
    <section className={styles.hero}>
      <ThreeCube />

      <div className={styles.title}>
        <h1>
          <span className="spanTitleHero1">DESIGNER</span>{" "}
          <span className="spanTitleHero2">DEVELOPER</span>{" "}
          <span className="spanTitleHero3">FULLSTACK</span>
        </h1>
      </div>

      <div className={styles.color}>
        <p><span className="paragraphHero">#FFF</span></p>
        <p><span className="paragraphHero">#0F0E0E</span></p>
      </div>
      
      <div className={styles.paragraph}>
        <p><span className="paragraphHero">Creative Full Stack Designer & Full Stack Developer</span></p>
      </div>

      <div className={styles.circle}>
        <Circle />
      </div>

      <div className={styles.blur}>
      </div>
    </section>
  );
}
