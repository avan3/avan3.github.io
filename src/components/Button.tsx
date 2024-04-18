import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "font-semibold cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
