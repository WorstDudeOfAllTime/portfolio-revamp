import ProjectDisplay from './ProjectDisplay';
import styles from './../styles/ProjectCarousel.module.css';
import apiDul from './img/apidul.png';
import idiot from './img/whatanidiot.png';
import worstRest from './img/worstrest.png';
import badDates from './img/baddates.png'
import { useState } from 'react';
const ProjectCarousel = () => {
  const [counter, setCounter] = useState(0);
  const projectList = [
    {
      projName: 'BadDates',
      link: 'https://restaurant-redux.vercel.app/',
      image: badDates,
      description:
        'BadDates: an app to anonymously post your bad date stories. Built with Next.js and MongoDB.',
    },
    {
      projName: 'Worst Restaurant',
      link: 'https://restaurant-redux.vercel.app/',
      image: worstRest,
      description:
        'MIT xPro Capstone Project 1/2. A restaurant aggregation application utilizing NextJS and Firestore.',
    },
    {
      projName: 'API Dulette',
      link: 'https://api-dulette.vercel.app/',
      image: apiDul,
      description:
        "A simple API grabber designed to pull two APIs from GitHub's Popular API list as an app building challenge.",
    },
    {
      projName: 'What An Idiot',
      link: 'https://what-an-idiot.vercel.app/',
      image: idiot,
      description:
        'Had a bad week and decided to have a little fun about it. My idiot face and a plethora of Shakespearen era insults.',
    },
  ];
  return (
    <div className={`flexCent ${styles.carouselContainer}`}>
      <div className={`${styles.buttonLeft} ${styles.buttonContainer}`}>
        <button
          className={`${styles.buttons}`}
          onClick={() => {
            if (counter === 0) {
              setCounter((prevCounter) => {
                return 3;
              });
            } else {
              setCounter((prevCount) => {
                return prevCount - 1;
              });
            }
          }}
        >
          Prev
        </button>
      </div>
      <ProjectDisplay project={projectList[counter]} />
      <div className={`${styles.buttonRight} ${styles.buttonContainer}`}>
        <button
          className={`${styles.buttons}`}
          onClick={() => {
            if (counter === 3) {
              setCounter((prevCounter) => {
                return 0;
              });
            } else {
              setCounter((prevCount) => {
                return prevCount + 1;
              });
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
