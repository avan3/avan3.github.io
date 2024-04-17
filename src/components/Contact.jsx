import React from "react";
import styles from "../styles";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-white p-10 flex flex-col md:flex-row justify-between items-center"
    >
      <section className="text-center w-full xs:w-2/3 md:w-1/2">
        <h2 className={`${styles.heading2}`}>Contact Me.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-5 \" />
        <p className={`font-noto_sans font-normal ${styles.paragraph}`}>
          Please contact me for any future opportunities!
        </p>
      </section>
      <section className="w-full xs:w-2/3 md:w-1/2">
        <Form />
      </section>
    </section>
  );
};

export default Contact;
