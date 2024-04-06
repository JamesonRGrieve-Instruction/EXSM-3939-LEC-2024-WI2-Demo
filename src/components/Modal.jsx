import React from 'react';
import styles from './Modal.module.css';
const Modal = ({ onConfirm, onCancel, children }) => {
  return (
    <div className={styles.card}>
      <span>
        <button onClick={onCancel}>X</button>
      </span>
      {children}
      <div className={styles.button_container}>
        <button onClick={onConfirm}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
