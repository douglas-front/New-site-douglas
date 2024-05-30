import styles from "./styles.module.scss";


export default function Menu() {

  return (
    <div className={styles.menu}>
    <svg
    width="40vw"
    height="100vh"
    viewBox="10 0 806 1053"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path className="path1" d="M225 -192H948V1061H225V-192Z" fill="#00304A" />
    <path 
    className="path2"
      d="M277 1087C240.624 1087 204.604 1072.58 170.997 1044.56C137.389 1016.55 106.853 975.481 81.1314 923.712C55.4096 871.943 35.0059 810.485 21.0854 742.846C7.16483 675.207 0 602.712 0 529.5C0 456.288 7.16483 383.793 21.0854 316.154C35.006 248.515 55.4096 187.057 81.1314 135.288C106.853 83.5193 137.39 42.4541 170.997 14.4371C204.604 -13.5798 240.624 -28 277 -28L277 529.5V1087Z"
      fill="#00304A"
    />
  </svg>

      <menu>
        <li>Projects</li>
        <li>Contact</li>
        <li>About</li>
      </menu>
    </div>
  );
}
