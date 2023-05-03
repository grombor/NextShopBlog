import React, {useState} from 'react'

const styles = {
    zIndex: 10,
    position: 'absolute',
    top: '6.3em',
    width: '100%',
}

function Notifications({children, type}) {
    const [isVisible, setIsVisible] = useState(true)
    const COLORS = ['primary', 'link', 'info', 'success', 'danger', 'warning'];
    const buttonType = COLORS.includes(type) ? type : COLORS[0];
  return (
    <>
    {isVisible && children ? (    <div className={`notification is-${buttonType} has-text-centered`} style={styles}>
  <button className="delete" onClick={() => {setIsVisible(false)}}></button>
  {children}
</div>)
: null
}
    </>

  )
}

export default Notifications