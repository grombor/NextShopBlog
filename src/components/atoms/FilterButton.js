import {FaLongArrowAltDown, FaLongArrowAltUp} from "react-icons/fa";
import styles from './FilterButton.module.css'

function FilterButton({children, setSortValue, buttonParameterName}) {
  const handleClick = () => {
    setSortValue(buttonParameterName)
  }
  return (
    <button className={`button ${styles.button}`} onClick={handleClick}>
      {children}
      <span className='icon ml-3'>
        <FaLongArrowAltDown/>
        <FaLongArrowAltUp/>
      </span>
    </button>
  )
}

export default FilterButton