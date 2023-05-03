import styles from './Button.module.css';

export const Button = ({ type, size, onClick, children, other, isDisabled }) => {
  const COLORS = ['primary', 'link', 'info', 'success', 'danger', 'warning'];
  const SIZES = ['small', 'normal', 'medium', 'large'];
  const buttonType = COLORS.includes(type) ? type : COLORS[0];
  const buttonSize = SIZES.includes(size) ? size : SIZES[1];

  return (
    <button
      type='button'
      className = { `button is-${buttonType} is-${buttonSize} is-${other} ${styles.button}`}
      onClick = { onClick }
      disabled = {isDisabled}
    >
      <span className="is-uppercase">{children}</span>
    </button>
  );
};
