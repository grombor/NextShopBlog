import {useRouter} from 'next/router'
import React from 'react'

import MenuButton from './SideMenu/MenuButton';

function ProductsEditor({ icon, url, label }) {
const router = useRouter();

  return (
    <div>
      <ul className="menu-list">
        <li>
          <a onClick={() => {router.push(url)}} id="editorItem" className="is-uppercase">
            <MenuButton angle={icon}>{label}</MenuButton>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ProductsEditor