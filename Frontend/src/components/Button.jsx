import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

function Button({ label, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {label === 'Translate' ? <FontAwesomeIcon icon={faLanguage} /> : label}
    </button>
  );
}
export default Button;