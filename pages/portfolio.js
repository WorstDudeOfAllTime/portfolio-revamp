import styles from './../styles/Portfolio.module.css';
import ProjectCarousel from '../components/ProjectCarousel';
const Portfolio = () => {
  return (
    <div className={styles.portfolioContainer}>
      
      <div className={`flexCentCol ${styles.portfolioDisplay}`}>
        <ProjectCarousel />
      </div>
    </div>
  );
};

export default Portfolio;
