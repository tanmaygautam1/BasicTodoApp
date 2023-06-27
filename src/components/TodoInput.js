import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const enterPressHandle = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="Input-box"
        placeholder="Enter Your Todo Items"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={enterPressHandle}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
