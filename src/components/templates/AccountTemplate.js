import React from 'react'
import SideMenu from '../molecules/Accordion/SideMenu'

function AccountTemplate() {
  return (
    <div className="columns my-6">
    <div className="column is-3 is-offset-1">
      <SideMenu />
    </div>
    <div className="column">
      col-2
    </div>
  </div>
  )
}

export default AccountTemplate