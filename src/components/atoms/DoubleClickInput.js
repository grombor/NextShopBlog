import React, {useRef, useState} from 'react'

function DoubleClickInput({
  // width, height, 
  defaultValue, changeValueParrentFunction, objectFromParrent, parameterName}) {
  const inputRef = useRef(defaultValue);

  const [isActive, changeActive] = useState(false)
  const [value, changeValue] = useState(defaultValue)


  function reversed() {
    changeActive(!isActive)
    if (inputRef?.current?.value != null) {
      changeValue(inputRef?.current?.value)
      changeValueParrentFunction(objectFromParrent, parameterName, inputRef?.current?.value)
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      reversed();
    }
    else if(event.key ==='Escape'){
      changeActive(!isActive)
    }
  }

  const textArea = <textarea id='double-click-input-text' ref={inputRef} type='text' defaultValue={value} onDoubleClick={reversed}
  onKeyDown={handleKeyDown}
  // style={{width: `${width}`, height: `${height}`, fontSize: "18px", resize: 'none'}}
  />

  const paragraph = <p id='double-click-input-static' onDoubleClick={reversed} 
  style={{
    // width: `${width}`,
    // height: `${height}`,
    // fontSize: "18px",
    alignItems: 'center',
    display: 'flex'
  }}
  >{value}</p>

  return (
    <>
      {isActive ? textArea : paragraph }
    </>
  )
}

export default DoubleClickInput