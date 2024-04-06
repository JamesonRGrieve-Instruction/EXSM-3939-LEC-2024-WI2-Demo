import React from 'react';

const Modal = ({ heading, bodyText, buttonText, onClick }) => {
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        onClick(event);
      }}
    >
      <div>
        <h1>{heading}</h1>
        <p>{bodyText}</p>
        <button>{buttonText}</button>
      </div>
    </a>
  );
};

export default Modal;
