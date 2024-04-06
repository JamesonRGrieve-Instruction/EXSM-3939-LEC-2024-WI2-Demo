import React from 'react';
import styles from './Card.module.css';
export default function Card({ title, description, imageSrc }) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div>
        <img src={imageSrc} alt={description} />
      </div>
      <p>{description}</p>
    </div>
  );
}
