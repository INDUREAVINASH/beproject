import React from 'react';
import techninjas from '../../assets/images/techninjas.png';
import styles from './TechNinjas.module.css'

const TechNinjas = () => {
  return (
    <div className='container' style={{width: "100%"}}>
      <img src={techninjas} className={styles.img} />
    </div>
  )
}

export default TechNinjas