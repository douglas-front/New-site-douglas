"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Animation } from "./Animations/animationHero";
import Image from "next/image";


export default function Hero() {
  useEffect(() => {

    //function for animate (animations/animationHero.ts)
    Animation();
  }, []);

  return (
    <section className={styles.hero}>
      <h1 className="h1Hero">DOUGLAS</h1>
      <h3 className="full">FULL STACK DEVELOPER</h3>

      <div className={`${styles.scroll} scroll`}>
        <h2>Scroll</h2>
      
        <Image src="/img/mouse.png" alt="mouse"/>
      </div>
    </section>
  );
}
