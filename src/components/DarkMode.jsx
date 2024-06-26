import React, { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  // access to html element
  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  return (
    <button type="btn" className="relative w-[24px] h-[24px]">
      <input
        onChange={toggleTheme}
        className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-orange-400
          before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full 
          before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] 
          after:h-5 after:w-5 after:rounded-full after:border-none after:bg-primary
          after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
          after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
          checked:bg-orange-400 checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] 
          checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full 
          checked:after:border-none checked:after:bg-primary 
          checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
          checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] 
          hover:cursor-pointer dark:bg-orange-400 dark:after:bg-primary dark:checked:bg-orange-400 
          dark:checked:after:bg-primary"
        type="checkbox"
        role="switch"
        name="flexSwitchCheckDefault"
        checked={theme === "dark"}
      />
    </button>
  );
};

export default DarkMode;
