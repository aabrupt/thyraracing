import {FC} from 'react'
import styles from '@styles/Navbar.module.sass'

const Navbar: FC<{}> = () => {
    return (
        <nav className={styles.container}>
            <img src="/ThyraracingLogo.png/" alt="Logga" className={styles.logo}/>

            <ul className={styles.menu}>
                <li><a href="/">Start</a></li>
                <li><a href="/om">Om mig</a></li>
                <li><a href="/kalender">Kalender</a></li>
                <li><a href="/resultat">Resultat</a></li>
                <li><a href="/galleri">Galleri</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
            </ul>
        </nav>
    )
}

export default Navbar