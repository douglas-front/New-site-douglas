"use client";
import { useEffect } from "react";
import styles from "./styles.module.scss";
import { Animation } from "@/app/layouts/Hero/animationHero";

export default function Hero() {
    
  useEffect(() => {
    //animation for h1 "douglas" , split type used
    Animation();
  }, []);

  return (
    <section className={styles.hero}>
      <h1 className="textAnimation">DOUGLAS</h1>
      <h3 className="full">FULL STACK DEVELOPER</h3>

      <div className={`${styles.scroll} scroll`}>
        <h2>Scroll</h2>
        <img src="/img/mouse.png" alt="" />
      </div>
    </section>
  );
}
