"use client";
import styles from "./styles.module.scss";
import { useState } from "react";
import { openNav, closeNav } from "./Animations/animationNav";

export default function Button() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen() {
    isOpen ? closeNav(setIsOpen) : openNav(setIsOpen);
  }

  return (
    <button className={styles.button} onClick={() => handleOpen()}>
      <div
        style={{ backgroundColor: isOpen ? "#0F0E0E" : "#FFFCF6" }}
        className={styles.line1}
      ></div>
      <div
        style={{ backgroundColor: isOpen ? "#0F0E0E" : "#FFFCF6" }}
        className={styles.line2}
      ></div>
    </button>
  );
}
