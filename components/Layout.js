import NavBar from './NavBar';
import styles from './../styles/Layout.module.css';
import Head from 'next/head';
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kris Bertolino </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/modern-no-20"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.cdnfonts.com/css/goudy-old-style"
          rel="stylesheet"
        ></link>
      </Head>
      <div className={styles.magPage}>
        <NavBar />
        <div className={` flexCentCol ${styles.contentBox}`}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
