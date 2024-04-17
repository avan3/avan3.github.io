import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { FormProvider, useForm } from "react-hook-form";
import {
  email_validation,
  full_name_validation,
  message_validation,
  subject_validation,
} from "../utils/inputValidation";
import emailjs from "@emailjs/browser";
import { BsFillCheckSquareFill } from "react-icons/bs";

const Form = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Contact form submission!", data);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          console.log("Email succesfully sent! ", response);
          methods.reset();
          setSuccess(true);
        },
        (error) => {
          console.error("Sending email has failed: ", error.text);
          setSuccess(false);
        }
      );
  });
  return (
    <FormProvider {...methods}>
      <form
        className="md:w-3/4 m-auto"
        noValidate
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="mb-3">
          <Input {...full_name_validation} />
        </div>
        <div className="mb-3">
          <Input {...email_validation} />
        </div>
        <div className="mb-3">
          <Input {...subject_validation} />
        </div>
        <div className="mb-5">
          <Input {...message_validation} />
        </div>
        <div>
          {success ? (
            <>
              <p className="flex items-center gap-2 mb-3 font-semibold text-white">
                <BsFillCheckSquareFill /> Form has been submitted successfully
              </p>
              <Button
                handler={() => setSuccess(false)}
                type="button"
                text="Send Another Email"
                bgColor="bg-white"
                textColor="text-primary"
              />
            </>
          ) : (
            <Button
              handler={onSubmit}
              type="submit"
              text="Submit"
              bgColor="bg-white"
              textColor="text-primary"
            />
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
