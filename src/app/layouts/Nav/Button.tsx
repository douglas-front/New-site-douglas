"use client";
import { MdArrowOutward } from "react-icons/md";
import styles from "./styles.module.scss";
import { useState } from "react";
import { openNav, closeNav } from "./Animations/NavAnimations";

export default function Button() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    isOpen ? closeNav(setIsOpen) : openNav(setIsOpen);
  };

  return (
    <button
      onClick={handleButtonClick}
      className={styles.button}
      style={{ background: isOpen ? "#F7F7F7" : "#00304A" }}
    >
      <MdArrowOutward style={{ color: isOpen ? "#00304A" : "#F7F7F7" }} />
    </button>
  );
}
