import { useState } from "react";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import styles from "../styles";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`w-full xl:w-2/3 flex py-3 justify-between items-center navbar top-0  ${styles.paddingX}`}
    >
      <h3 className="text-[32px] text-orange-600 font-noto_sans font-bold">
        AV
      </h3>
      <ul className="list-none sm:flex hidden justify-end items-end flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-noto_sans
                        font-semibold
                        cursor-pointer
                        text-[16px]
                        text-slate-900
                        mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <a className="hidden sm:block" href="#contact">
        <Button text="Contact" bgColor="bg-orange-600" textColor="text-white" />
      </a>

      <div className="sm:hidden flex flex-1 justify-end items-end">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-white absolute top-20 right-0 mx-4 min-w-[140px]`}
        >
          <ul className="list-none flex flex-col text-center border-collapse border">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-noto_sans 
                                font-semibold
                                cursor-pointer 
                                text-[16px] 
                                w-[240px]
                                text-gray-900
                                border
                                py-4`}
                onClick={() => setToggle((prev) => !prev)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li
              key="contact"
              className={`font-noto_sans 
                                font-semibold
                                cursor-pointer 
                                text-[16px] 
                                w-[240px]
                                text-gray-900
                                border
                                py-4`}
              onClick={() => setToggle((prev) => !prev)}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
