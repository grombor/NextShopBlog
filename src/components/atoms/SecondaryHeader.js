import React from 'react';

function SecondaryHeader({ children }) {
  return (
    <header>
      <div className="is-size-2 is-uppercase my-5  has-text-weight-semibold">
        {children}
      </div>
    </header>
  );
}

export default SecondaryHeader;
