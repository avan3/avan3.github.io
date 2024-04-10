import React, { useRef } from "react";
import styles from "../styles";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const submit = (e) => {
    e.preventDefault();

    emailjs.sendForm;
  };

  console.log(import.meta.env.VITE_SERVICE_ID); // "123"

  return (
    <section
      id="contact"
      className="bg-orange-600 text-white p-10 flex flex-col md:flex-row justify-between items-center"
    >
      <section className="text-center w-full xs:w-2/3 md:w-1/2">
        <h2 className={`${styles.heading2}`}>Contact Me.</h2>
        <hr className="w-48 h-1 mx-auto my-4 bg-white border-0 rounded md:my-5 \" />
        <p className={`font-noto_sans font-normal ${styles.paragraph}`}>
          Please contact me for any future opportunities!
        </p>
      </section>
      <section className="w-full xs:w-2/3 md:w-1/2">
        <form className="md:w-3/4 m-auto">
          <div className="mb-3">
            <label htmlFor="full-name">Full Name:</label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              className="
                w-full
                text-slate-900
                block px-2 py-2 mt-2
                rounded-md
                border-2
                border-slate-200
              "
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="
                w-full
                text-slate-900
                block px-2 py-2 mt-2
                rounded-md
                border-2
                border-slate-200
              "
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Subject:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="
                w-full
                text-slate-900
                block px-2 py-2 mt-2
                rounded-md
                border-2
                border-slate-200
              "
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="
                resize-none
                w-full
                text-slate-900
                block px-2 py-2 mt-2
                rounded-md
                border-2
                border-slate-200
              "
            />
          </div>
          <div>
            <Button
              type="submit"
              text="Submit"
              bgColor="bg-white"
              textColor="text-orange-600"
            />
          </div>
        </form>
      </section>
    </section>
  );
};

export default Contact;
