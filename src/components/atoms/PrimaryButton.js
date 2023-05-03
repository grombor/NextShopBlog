import styles from './PrimaryButton.module.css';

export const PrimaryButton = ({label, size, color}) => {
    const handleClick = () => {
        console.log('click')
    }
  return (
    <button className={`button  is-${size} ${styles.button}`}  onClick={handleClick}>
{label}
    </button>
  )
}

