import React from 'react';
import styles from './Feature.module.scss';

const Feature = ({ image, link, title, subtitle }) => {
  return (
    <div className={styles['feature']}>
        <img className={styles['feature__image']} src={image}/>
        <div className={styles['feature__details']}>
            {link ? (<a className={styles['feature__link']} href={link} target="_blank">
              <h4 className={styles['feature__title']}>{title}</h4>
            </a>) : <h4 className={styles['feature__title']}>{title}</h4>}
            {subtitle && <p className={styles['feature__subtitle']}>{subtitle}</p>}
        </div>
    </div>
  );
};

export default Feature;