import Link from 'next/link'
import styles from '../styles/Navbar.module.css'


function Navbar() {
    return (
        <nav className={styles.navContainer}>
            <Link href='/'>
                <a className={styles.logo}>
                    amazona
                </a>
            </Link>
            <ul className={styles.menuContainer}>
                <li>Home</li>
                <li>Contact</li>
                <li>Products</li>
            </ul>
        </nav>
    )
}

export default Navbar
