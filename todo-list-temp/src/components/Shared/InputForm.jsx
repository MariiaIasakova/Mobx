import React, { useState } from "react";

const InputForm = ({ add, pushError, deleteAllErrors }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleAdd = () => {
    if (value !== "") {
      add(value);
      deleteAllErrors();
    } else {
      pushError("Input value is empty");
    }
    setValue("");
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="search-block">
      <input
        type="text"
        id="search-input"
        className="search-input"
        onKeyPress={handleEnter}
        value={value}
        onChange={handleChange}
        placeholder="Write a task"
      />
      <button
        id="search-btn"
        className="search-btn"
        aria-label="Create task"
        onClick={handleAdd}>
        Create
      </button>
    </div>
  );
}

export default InputForm;
