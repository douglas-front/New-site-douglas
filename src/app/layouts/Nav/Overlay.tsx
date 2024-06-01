import Menu from "./Menu";
import styles from "./styles.module.scss";

export default function Overlay() {
  return (
    <div className={styles.overlay}>
      <Menu />
    </div>
  );
}
