import React from "react";
import styles from "../styles";

const About = () => {
  return (
    <section
      id="about"
      className="bg-orange-600 text-white p-10 flex justify-center"
    >
      <section className="w-full sm:w-[720px] text-center">
        <h2 className={`${styles.heading2}`}>About Me.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-5 \" />
        <p
          className={`font-noto_sans font-normal ${styles.paragraph} text-left`}
        >
          Hey! I&apos;m Andrew Van. A seasoned software developer dedicated to
          crafting exceptional web experiences.
        </p>
        <p
          className={`font-noto_sans font-normal ${styles.paragraph} text-left my-2`}
        >
          With a strong foundation in web development technologies and a passion
          for problem-solving, I thrive on turning ideas into polished digital
          solutions that perform flawlessly across devices.
        </p>
        <p
          className={`font-noto_sans font-normal ${styles.paragraph} text-left`}
        >
          Let&apos;s collaborate to elevate your online presence and create
          something truly remarkable together
        </p>
      </section>
    </section>
  );
};

export default About;
