import styles from './Shipmentbox.module.css';

function Shipmentbox({ children, context, header, isDarkTheme }) {
  return (
    <div
      className={`${styles.box} ${isDarkTheme ? styles.dark : styles.light}`}
    >
      <div
        className={`is-size-4 is-uppercase has-text-centered mt-2 ${
          isDarkTheme ? styles.dark : styles.light
        }`}
      >
        {header}
      </div>
      <div className={`is-flex`}>
        <figure className="mx-4 mt-3">{children}</figure>
        <p className={`is-size-7 mr-3`}>{context}</p>
      </div>
    </div>
  );
}

export default Shipmentbox;
