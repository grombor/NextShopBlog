export const SecondaryButton = ({label, size, color}) => {
    const handleClick = () => {
        console.log('click')
    }
  return (
    <button className={`button is-${size} is-warning`}  onClick={handleClick}>
{label}
    </button>
  )
}

