import React from 'react'

const ChildComponent1 = ({ selectOptionText }) => {
  return (
    <div style={{background: "orange"}}>
        <h2>Child Component 1</h2>
      <button onClick={() => selectOptionText("Option 1")}>Select Option 1</button>
      
    </div>
  )
}

export default ChildComponent1