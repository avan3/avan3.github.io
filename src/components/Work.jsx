import React from "react";
import styles from "../styles";
import Button from "./Button";

const Work = () => {
  return (
    <section id="work" className="text-slate-900 p-10 flex justify-center">
      <section className="w-full md:w-[1020px] text-center">
        <h2 className={`${styles.heading2}`}>Work.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-orange-600 border-0 rounded md:my-5 \" />
        <section className="flex flex-col sm:flex-row">
          <section className="basis-1/2">
            <h3 className={`${styles.heading3}`}>Current</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-orange-600 border-0 rounded mb-3 \" />
            <section className="w-full xs:w-[480px] mx-auto py-1 flex flex-col xs:flex-row justify-around">
              <section
                className={`${styles.paragraph} text-lg text-orange-600`}
              >
                Dec 2022 - Present
              </section>
              <section
                className={`${styles.paragraph} xs:text-left max-w-[240px] m-auto`}
              >
                <p className="text-lg">
                  <span className="font-bold">IT Developer III</span> · TD Bank
                </p>
                <p>Some text here describing what I do at TD</p>
              </section>
            </section>
          </section>
          <section className="basis-1/2">
            <h3 className={`${styles.heading3}`}>Resume</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-orange-600 border-0 rounded mb-3 \" />
            <section className="w-full xs:w-[540px] mx-auto my-12 flex justify-center">
              <Button
                className="mx-5"
                text={
                  <a href="../assets/AVResume.pdf" download="AVResume.pdf">
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
