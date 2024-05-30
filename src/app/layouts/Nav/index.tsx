import Arrow from "./Arrow";
import Menu from "./Menu";
import styles from "./styles.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>Douglas</h1>
      <Arrow />
      <Menu />
    </nav>
  );
}
