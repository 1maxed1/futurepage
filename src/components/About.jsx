import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";

const About = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        About
      </h2>
      
    </div>
  </section>
);

export default About;