import React from "react";
import "./input.css";

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
      <div className={`input-wrapper ${style}`}>
        <div className="">
          <img src={icon} />
        </div>

        <div>
          <input
            placeholder={label}
            type={type}
            className="form-input"
            value={value}
            onChange={onChange}
            name={name}
          />
        </div>
      </div>
      {error && <span className="formik-error">{error}</span>}
    </>
  );
}
