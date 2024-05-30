import styles from "./styles.module.scss"

export default function Nav(){
    return(
        <nav className={styles.nav}>
            <h1>Douglas</h1>
            <div>
                <img src="/img/arrow.png" alt="arrow" />
            </div>
        </nav>
    )
}