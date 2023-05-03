import {FaAngleDown} from 'react-icons/fa';

function MenuButton({ children, angle }) {
  return (
    <div className='is-flex is-justify-content-space-between'>
        {children}
        <span className='icon-text'>
           {angle === undefined ? <FaAngleDown/> : angle}
        </span>
        </div>
  )
}

export default MenuButton