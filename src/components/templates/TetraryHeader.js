import React from 'react'

function TetraryHeader({ children }) {
  return (
    <header>
    <div className="is-size-3 is-uppercase my-5  has-text-weight-semibold">
      {children}
    </div>
  </header>
  )
}

export default TetraryHeader