import React from 'react'
import { features } from "../constants";
import styles, { layout } from "../style";
import Business from './Business';

const News = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        News
      </h2>
      <Business></Business>
      
    </div>
  </section>
);

export default News;