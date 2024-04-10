import React from "react";
import styles from "../styles";

const About = () => {
  return (
    <section
      id="about"
      className="bg-orange-600 text-white p-10 flex justify-center"
    >
      <section className="w-full sm:w-[640px] text-center">
        <h2 className={`${styles.heading2}`}>About Me.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-5 \" />
        <p className={`font-noto_sans font-normal ${styles.paragraph}`}>
          Hey! I&apos;m Andrew Van. A software developer from Toronto, Ontario
          with professional experience developing high quality web applications.
          <br />
          Looking to bring your next project to life.
        </p>
      </section>
    </section>
  );
};

export default About;
