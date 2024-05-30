"use client"
import { typeArrowComponent } from "@/app/@Types/typeArrowComponent";
import styles from "./styles.module.scss";
import { MdArrowOutward } from "react-icons/md";
import { OpenNav, CloseNav } from "./animations/openNav";
import { useState } from "react";

export default function Arrow() {

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

  return (
    <button onClick={()=> isNavOpen? CloseNav(setIsNavOpen) : OpenNav(setIsNavOpen)} style={{ background: isNavOpen? "#F7F7F7" : "#00304A" }} className={styles.arrow}>
      <div style={{color: isNavOpen? "#00304A" : "#F7F7F7" }}>
        <MdArrowOutward />
      </div>
    </button>
  );
}
