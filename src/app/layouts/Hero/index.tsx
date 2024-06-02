"use client"
import Circle from "@/app/components/Circle";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import rendering from "./animations/heroAnimations";

export default function Hero(){

  useEffect(()=>{
    rendering();
  }, [])

  return(
    <section className={styles.hero}>
      <h1><span className="titleHero">DOUGLAS</span></h1>
      <p><span className="paragraph_Hero1">Creative Full Stack</span> <span className="paragraph_Hero2">Designer & Full Stack Developer</span></p>

      <div className={styles.circle}>
        <Circle/>
      </div>
    </section>
  )
}