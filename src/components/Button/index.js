import React from "react";

export const Button = ({ onClick, label, type }) => {
  return (
    <div>
      <input
        type={type}
        className="submit-btn mt-5 bg-[#845ef1] text-[#f7f7f7] outline-none rounded-lg px-4 py-3 cursor-pointer"
        value={label}
        onClick={onClick}
      />
    </div>
  );
};
