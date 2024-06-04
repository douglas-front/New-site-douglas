import ThreeCube from "@/app/components/ThreeCube"
import styles from "./styles.module.scss"
export default function Hero(){
  return(
    <section className={styles.hero}>
      <ThreeCube/>
    </section>
  )
}