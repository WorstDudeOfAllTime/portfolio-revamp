import NavLink from './NavLink';
import styles from './../styles/NavBar.module.css'
const NavBar = () => {
  return (
  <div className={`flexCent ${styles.navBox}`}>
    <NavLink
      linkref={'/portfolio'}
      title={'portfolio'}
      pageNum={'p1'}
      desc={'a showcase of my work thus far'}
    />
    <NavLink
      linkref={
        'https://drive.google.com/file/d/1D8__GuYFWGnNwuUs9oK_IIr9ZdPzcMh5/view'
      }
      target={'_blank'}
      title={'resume'}
      pageNum={'p2'}
      desc={'work and educational history'}
    />
    <NavLink
      linkref={'/info&contact'}
      title={'info&contact'}
      pageNum={'p3'}
      desc={'who i am and where to find me'}
    />
  </div>
  );
};

export default NavBar;
