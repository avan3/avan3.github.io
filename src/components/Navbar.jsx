import { useState } from "react";
import { navLinks } from "../constants";
import styles from "../styles";
import Button from "./Button";
import av_logo from "../assets/av_logo2.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full xl:w-2/3 flex py-3 justify-between items-center navbar top-0  ${styles.paddingX}`}
    >
      <h3 className="text-[32px] text-orange-600 font-noto_sans font-bold">
        <img
          src={av_logo}
          alt="av_logo"
          className="w-[66px] h-[42px] my-2 relative"
        />
      </h3>
      <ul className="list-none sm:flex hidden justify-end items-end flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-noto_sans
                        font-semibold
                        cursor-pointer
                        text-[16px]
                        text-slate-900
                        mr-10 
                      ${index < navLinks.length - 1 ? "block" : "hidden"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <a className="hidden sm:block" href="#contact">
        <Button text="Contact" bgColor="bg-orange-600" textColor="text-white" />
      </a>

      <div className="sm:hidden flex flex-1 justify-end items-end">
        <div
          className="w-[28px] h-[28px] z-10 flex flex-col justify-around bg-transparent border-none cursor-pointer"
          onClick={() => setToggle((prev) => !prev)}
        >
          <div
            className={`w-[28px] h-1 bg-slate-900 duration-300 relative rounded-[10px] origin-[1px] ${
              toggle ? "rotate-45" : "rotate-0"
            }`}
          ></div>
          <div
            className={`w-[28px] h-1 bg-slate-900 duration-300 relative rounded-[10px] ${
              toggle ? "-translate-x-5 opacity-0" : "translate-x-0 opacity-100"
            }`}
          ></div>
          <div
            className={`w-[28px] h-1 bg-slate-900 duration-300 relative rounded-[10px] origin-[1px] ${
              toggle ? "-rotate-45" : "rotate-0"
            }`}
          ></div>
        </div>

        <div
          className={`${
            toggle ? "translate-x-0" : "translate-x-96"
          } flex bg-white absolute top-0 right-0 min-w-[240px] items-center h-[100vh] duration-300 border border-orange-600`}
        >
          <ul className="list-none flex flex-col">
            {navLinks.map((nav) => {
              const Icon = nav.icon;
              return (
                <li
                  key={nav.id}
                  className={`font-noto_sans 
                                  font-semibold
                                  cursor-pointer 
                                  text-[16px] 
                                  w-[270px]
                                  text-gray-900
                                  flex items-center justify-center
                                  py-4`}
                  onClick={() => setToggle((prev) => !prev)}
                >
                  {Icon ? (
                    <Icon className="w-[40px] h-[20px] justify-center text-orange-600" />
                  ) : (
                    ""
                  )}
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
