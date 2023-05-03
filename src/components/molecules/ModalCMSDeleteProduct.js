import React, {useEffect, useState} from 'react';

function ModalCMSDeleteProduct() {
    const [isVisible, setIsVisible] = useState()

  function handleClose() {
    if (isVisible) {
        setIsVisible(false)
        document.getElementById('modal-delete').classList.remove('is-active')
    }
  }

  useEffect(() => {
        setIsVisible(false)
  }, [])
  
  return (
    <div className={`modal ${isVisible ? 'is-active' : null}`} id="modal-delete">
      <div className="modal-background"></div>
      <div className="modal-content">test</div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleClose}
      ></button>
    </div>
  );
}

export default ModalCMSDeleteProduct;
