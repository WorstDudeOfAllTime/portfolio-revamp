import styles from './../styles/NavLink.module.css';
import Link from 'next/link';
const NavLink = ({ linkref, title, pageNum, desc, target }) => {
  return (
    <Link
      className={`flexCentCol ${styles.navContainer}`}
      href={linkref}
      target={target ? target : null}
    >
      <div className={`flexCentCol ${styles.navLink}`}>
        <h3 className={`flexCent ${styles.pageNum}`}>{pageNum}</h3>
        <h3 className={` ${styles.title}`} style={{ margin: '0px' }}>
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default NavLink;
