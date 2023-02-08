import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import CardDeal from './CardDeal';
import GetStarted from './GetStarted';


const Projects = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Projects
      </h2>
      
      <GetStarted></GetStarted>
    </div>
  </section>
);

export default Projects;