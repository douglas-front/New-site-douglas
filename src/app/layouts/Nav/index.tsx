import Button from "./Button";
import Menu from "./Overlay";
import styles from "./styles.module.scss";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>Douglas</h1>
      <Button />
      <Menu />
    </nav>
  );
}
