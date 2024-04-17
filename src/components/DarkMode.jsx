import React, { useState, useEffect } from "react";
import Button from "./Button";
import { GiMoon } from "react-icons/gi";
import { BiSolidSun } from "react-icons/bi";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // access to html element
  const element = document.documentElement;

  // set theme to localStorage and html element
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  });

  // TODO: can enhance with more themes
  // useEffect(() => {
  //   const selectedTheme = localStorage.getItem("theme");

  //   if (selectedTheme) {
  //     console.log("selectedTheme: ", selectedTheme);
  //     document.documentElement.classList.add(selectedTheme);
  //   } else if (window.matchMedia("(prefers-color-sceme: dark").matches) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.add("light");
  //   }
  // }, []);

  return (
    <>
      <button
        type="btn"
        className="text-secondary relative w-[24px] h-[24px] m-2"
        onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
      >
        <BiSolidSun
          className={`w-[24px] h-[24px] duration-300 absolute top-0 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        />
        <GiMoon
          className={`w-[24px] h-[24px] duration-300 absolute top-0 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
      </button>
      {/* <Button
        text="dark"
        handler={() => setTheme(theme == "dark" ? "light" : "dark")}
        bgColor="bg-primary"
        textColor="text-white"
      /> */}
    </>
  );
};

export default DarkMode;
