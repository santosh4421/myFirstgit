import React, { useState } from "react";

export function Prob1(){


const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddInput = () => {
    setInputList([...inputList, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddInput}>Add Input</button>
      <ul>
        {inputList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
 }