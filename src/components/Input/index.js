import React from "react";

export function Input({
  label,
  type,
  style,
  icon,
  value,
  onChange,
  name,
  error,
}) {
  return (
    <>
      <div
        className={`input-wrapper outline-none rounded-lg px-4 py-3 flex my-4 ${style}`}
      >
        <div className="">
          <img src={icon} />
        </div>

        <div>
          <input
            placeholder={label}
            type={type}
            className="form-input border-none outline-none bg-transparent h-8 w-full"
            value={value}
            onChange={onChange}
            name={name}
          />
        </div>
      </div>
      {error && <span className="text-base text-[#dc143c]">{error}</span>}
    </>
  );
}
