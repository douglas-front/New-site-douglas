"use client";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import gsap from "gsap";
import rendering from "@/app/Animations/EnterPage/transitionLanguage";

export default function EnterPage() {
  //array content class of h1's
  const arrayOfClass = [".hello", ".ola", ".bonJour", ".styles_enter__aKZGu"];

  //animation for other language
  useEffect(() => {
    rendering();

    return () => {
      arrayOfClass.forEach((item) => {
        gsap.killTweensOf(item);
      });
    };
  }, []);

  return (
    <div className={styles.enter}>
      <h1 className="ola">OLÁ!</h1>
      <h1 className="hello">HELLO!</h1>
      <h1 className="bonJour">QUE TAL?</h1>
    </div>
  );
}
