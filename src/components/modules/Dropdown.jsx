import React from "react";

const Dropdown = ({ options, selectedOption, onSelect }) => {
  return (
    <select
      value={selectedOption}
      onChange={(e) => onSelect(e.target.value)}
      className=" w-full rounded-lg py-3 px-5 border border-gray-300 mt-5 font-[400]"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
