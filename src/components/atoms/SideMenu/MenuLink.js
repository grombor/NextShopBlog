import React from 'react'

const MenuLink = ({ link, children }) => {
  return (
    <li>
    <a href={link} className='mx-3 py-1 is-hidden-desktop'>
        {children}
        </a>
  </li>
  )
}

export default MenuLink