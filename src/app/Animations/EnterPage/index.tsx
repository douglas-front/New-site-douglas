"use client";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import gsap from "gsap";
import rendering from "@/app/Animations/EnterPage/EnterPageAnimation";

export default function EnterPage() {
  //array content class of h1's

  // animation for other language
  useEffect(() => {
    rendering();

    return () => {
     gsap.killTweensOf(".welcome");
    };
  }, []);

  return (
    <div className={styles.enter}>
      <h1 className="welcome">WELCOME</h1>
    </div>
  );
}
