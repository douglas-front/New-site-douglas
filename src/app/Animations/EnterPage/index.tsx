"use client";
import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import rendering from "@/app/Animations/EnterPage/transitionLanguage";

export default function EnterPage() {
  //ref container div
  const ref = useRef<HTMLDivElement>(null);

  //array content class of h1's
  const arrayOfClass = [".hello", ".ola", ".bonJour"]

  //animation for other language
  useEffect(() => {

    rendering();
    gsap.to(ref.current, {
      height: 0,
      delay: 2.2,
    });
    gsap.to(ref.current, {
      borderRadius: "0 0 50% 50%",
      delay: 2.2,
      duration: 0.3
    });

    return()=>{
     arrayOfClass.forEach((item)=>{
        gsap.killTweensOf(item)
    })
     gsap.killTweensOf(ref.current)
    }
  }, []);

  return (
    <div className={styles.enter} ref={ref}>
      <h1 className="ola">OLÁ!</h1>
      <h1 className="hello">HELLO!</h1>
      <h1 className="bonJour">QUE TAL?</h1>
    </div>
  );
}
