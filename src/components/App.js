
import React, {useState} from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectOption, setSelectOption] = useState("");

  const  selectOptionText = (option) => {
    setSelectOption(option);
  }
  return (
    <div class="parent" style={{background: "green"}}>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>
        <ChildComponent1 selectOptionText={selectOptionText} />
        <ChildComponent2 selectOptionText={selectOptionText}/>
        <p>Selected Option: {selectOption}</p>
    </div>
  )
}

export default App
