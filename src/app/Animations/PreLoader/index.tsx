"use client"

import styles from "./styles.module.scss";
import gsap from "gsap";
import welcome from "./PreLoaderAnimation";
import useLenisScroll from "@/app/common/hooks/useLenisScroll";
import useIsomorphicEffect from "@/app/common/hooks/useIsomorphicEffect";

export default function EnterPage() {
  const lenis = useLenisScroll();

  useIsomorphicEffect(() => {
    welcome();

    gsap.to(`.${styles.enter}`, {
      height: 0,
      delay: 2,
      onComplete: () => {
        lenis?.current.start();
      },
    });

    return () => {
      gsap.killTweensOf(".welcome");
      gsap.killTweensOf(`.${styles.enter}`);
    };
  }, []);

  return (
    <div className={styles.enter}>
      <h1 className="welcome">WELCOME</h1>
    </div>
  );
}
