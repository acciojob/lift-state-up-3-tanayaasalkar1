import React from 'react'

const ChildComponent2 = ({ selectOptionText }) => {
  return (
    <div style={{background: "yellow"}}>
        <h2>Child Component 2</h2>
        <button onClick={() => selectOptionText("Option 2")}>Select Option 2</button>
      
    </div>
  )
}

export default ChildComponent2