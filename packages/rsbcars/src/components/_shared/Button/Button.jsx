import React from "react";

const Button = ({ onClick, disabled, btnText, children, type = "button" }) => {
  return (
    <button disabled={disabled} onClick={onClick} type={type}>
      <span>{btnText}</span>
      {children}
    </button>
  );
};

export default Button;
