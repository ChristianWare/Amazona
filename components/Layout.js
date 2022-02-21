import Head from "next/head";
import Navbar from "./Navbar";
import styles from '../styles/Layout.module.css'
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <Navbar />
      <div className={styles.siteContainer}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
