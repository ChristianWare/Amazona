import Link from "next/link";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navContainer}>
      <Link href='/'>
        <a className={styles.logo}>amazona</a>
      </Link>
      <ul className={styles.menuContainer}>
        <Link href='/'>
          <a>
            <li>Home</li>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <li>Produts</li>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <li>Contact</li>
          </a>
        </Link>
        
      </ul>
    </nav>
  );
}

export default Navbar;
