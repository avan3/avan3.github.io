import React from "react";
import styles from "../styles";
import Button from "./Button";

const Work = () => {
  return (
    <section id="work" className="text-secondary p-10 flex justify-center">
      <section className="w-full md:w-[1020px] text-center">
        <h2 className={`${styles.heading2}`}>Work.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-primary border-0 rounded md:my-5 \" />
        <section className={`${styles.flexCenter} flex-col md:flex-row`}>
          <div className="group flex flex-col gap-3 w-[320px] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-[1.75rem] pt-[1.21rem] pb-[2.61rem] px-[1.26rem] md:px-[2.06rem]">
            <a href="https://avan3.github.io/sakura_omakase/">
              <div className="m-auto flex justify-center items-center w-[200px] h-[200px] bg-sakuraOmakase bg-contain group-hover:brightness-85">
                {/* <span className="font-semibold text-xl duration-300 opacity-0 group-hover:opacity-100">
                  Go to
                </span> */}
              </div>
            </a>
            <div className="basis-1/2">
              <p className="font-noto_sans font-bold text-lg group-hover:text-orange-600">
                Sakura Omakase
              </p>
              {/* <p>
                Mock Japanesese restaurant website that is responsive and
                visually appealing.
                <br /> Leveraging React and Tailwind CSS
              </p> */}
            </div>
          </div>
        </section>
        <section
          className={`${styles.flexCenter} flex-col md:flex-row md:items-start`}
        >
          <section className="md:basis-1/2">
            <h3 className={`${styles.heading3}`}>Current</h3>
            <hr className="w-72 md:w-48 h-1 mx-auto bg-primary border-0 rounded mb-3 \" />
            <section className="w-full mx-auto py-1 flex flex-col sm:flex-row justify-around">
              <section className={`${styles.paragraph} w-full sm:w-[480px]`}>
                <p className="text-lg">
                  <span className="font-bold">IT Developer III</span> · TD Bank
                </p>
                <p className="text-primary text-md">Dec 2022 - Present</p>
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
            <hr className="w-72 md:w-48 h-1 mx-auto bg-primary border-0 rounded mb-3 \" />
            <section className="w-full mx-auto my-12 flex justify-center">
              <Button className="mx-5 bg-primary text-white">
                <a href="AVResume.pdf" download="AVResume.pdf" target="_blank">
                  Download Resume
                </a>
              </Button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Work;
