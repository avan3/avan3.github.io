import React, { useState, useEffect } from "react";
import { BiArrowFromBottom } from "react-icons/bi";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${
            isVisible
              ? "opacity-100 cursor-pointer"
              : "opacity-0 cursor-default"
          }
          bg-orange-600 hover:bg-orange-700 ring-orange-700 inline-flex items-center rounded-full p-3 
          text-white shadow-sm transition-opacity outline-none ring-2 ring-offset-2`}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollToTop;
