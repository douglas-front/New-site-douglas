import styles from "./styles.module.scss";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Circle(){
  return(
    <div className={styles.circle}>
      <IoIosArrowRoundDown className="arrow"/>
    </div>
  )
}