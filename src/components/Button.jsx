import React from "react";

const Button = ({
  text,
  bgColor,
  textColor,
  handler = () => {},
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={`${bgColor} ${textColor} font-semibold cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
