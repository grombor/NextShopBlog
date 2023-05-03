import styles from './Header.module.css';

export const Header = ({
  size,
  redText,
  blackText,
  subHeaderText,
  subHeaderSize,
}) => {
  return (
    <header className="my-0">
      <h1 className={`mx-0 is-size-${size} is-uppercase ${styles.has_shadow} is-size-4-mobile has-text-centered-touch`}>
        <span className="has-text-danger">{redText}</span>
        <span className="has-text-primary">{blackText}</span>
      </h1>
      <h2
        className={`is-size-${subHeaderSize} is-uppercase has-text-primary ${styles.has_shadow} is-size-6-mobile has-text-centered-touch`}
      >
        {subHeaderText}
      </h2>
    </header>
  );
};
