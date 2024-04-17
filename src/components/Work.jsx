import React from "react";
import styles from "../styles";
import Button from "./Button";

const Work = () => {
  return (
    <section id="work" className="text-slate-900 p-10 flex justify-center">
      <section className="w-full md:w-[1020px] text-center">
        <h2 className={`${styles.heading2}`}>Work.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-orange-600 border-0 rounded md:my-5 \" />
        <section
          className={`${styles.flexCenter} flex-col md:flex-row md:items-start`}
        >
          <section className="md:basis-1/2">
            <h3 className={`${styles.heading3}`}>Current</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-orange-600 border-0 rounded mb-3 \" />
            <section className="w-full mx-auto py-1 flex flex-col sm:flex-row justify-around">
              <section className={`${styles.paragraph} w-full sm:w-[480px]`}>
                <p className="text-lg">
                  <span className="font-bold">IT Developer III</span> · TD Bank
                </p>
                <p className="text-orange-600 text-md">Dec 2022 - Present</p>
                <ul className="text-sm">
                  <li>
                    Developed critical features for web applications enhancing
                    the user interface and experience
                  </li>
                  <li>
                    Thoroughly investigated and promptly fixed new and existing
                    bugs increasing customer satisfaction
                  </li>
                </ul>
              </section>
            </section>
          </section>
          <section className="md:basis-1/2">
            <h3 className={`${styles.heading3}`}>Resume</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-orange-600 border-0 rounded mb-3 \" />
            <section className="w-full mx-auto my-12 flex justify-center">
              <Button
                className="mx-5"
                text={
                  <a href="/src/assets/AVResume.pdf" download="AVResume.pdf">
                    Download Resume
                  </a>
                }
                bgColor="bg-orange-600"
                textColor="text-white"
              />
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Work;
