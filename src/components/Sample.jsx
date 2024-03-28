import React from 'react';
import styles from './Sample.module.css';

const Sample = ({ heading, bodyText, buttonText, onClick }) => {
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        onClick(event);
      }}
    >
      <div className={styles.sample}>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.bodyText}>{bodyText}</p>
        <button className={styles.button}>{buttonText}</button>
      </div>
    </a>
  );
};

export default Sample;
