import React from 'react'
import { Link } from 'react-router-dom'
import { features } from "../constants";
import styles, { layout } from "../style";



console.log("Page not found")


const PageNotFound = () =>  (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          404 Page not found
        </h2>
        
        
        
      </div>
    </section>
  );
  
  export default PageNotFound;