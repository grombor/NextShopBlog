import styles from './notification.module.css';
import React, {useState} from 'react';

export default function Notification({ type, msg }) {
  const [display, setDisplay] = useState('true');

  const TYPES = ['primary', 'link', 'info', 'success', 'warning', 'danger'];
  const notificationType = TYPES.includes(type) ? type : 'info';

  const handleToggle = () => {
    setDisplay(!display);
  };

  return (
    <div
      className={`box notification is-${notificationType} ${
        !display ? styles.hidden : styles.show
      }`}
    >
      <button
        className="delete"
        onClick={() => {
          handleToggle();
        }}
      ></button>
      {msg}
    </div>
  );
}
