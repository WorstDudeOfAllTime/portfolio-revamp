import styles from './../styles/ProjectDisplay.module.css'
import Image from 'next/image';
const ProjectDisplay = ({project})=> {
  return (
    <div key={project.projName} style={{color: 'black'}} className={`flexCentCol ${styles.projectContainer}`}>
      <h1 style={{width:'100%', marginLeft:'30px'}}>{project.projName}</h1>
      <a style={{display: 'flex', justifyContent:'center'}} href={project.link} target="_blank" rel="noreferrer" >
      <Image priority={true} className={styles.projImage} src={project.image}/>
      </a>
      <p >{project.description}</p>
    </div>
  )

}

export default ProjectDisplay;