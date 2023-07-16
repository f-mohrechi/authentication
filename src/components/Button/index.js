import React from "react";
import "./button.css";

export const Button = ({ onClick, label, type }) => {
  return (
    <div>
      <input
        type={type}
        className="submit-btn"
        value={label}
        onClick={onClick}
      />
    </div>
  );
};
