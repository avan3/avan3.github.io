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
import { BsFillCheckSquareFill, BsFillXCircleFill } from "react-icons/bs";

const INITIAL_FORM_STATE = {
  loading: false,
  success: false,
  error: null,
};

const Form = () => {
  const methods = useForm();
  const [state, setState] = useState(INITIAL_FORM_STATE);

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Contact form submission!", data);
    setState({
      loading: true,
      success: false,
      error: null,
    });

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
          setState({
            loading: false,
            success: true,
            error: null,
          });
        },
        (error) => {
          console.error("Sending email has failed: ", error.text);
          setState({
            loading: false,
            success: false,
            error,
          });
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
        <div className="mb-3">
          <Input {...message_validation} />
        </div>
        <div>
          {state.success ? (
            <>
              <p className="flex items-center gap-2 mt-2 mb-3 font-semibold text-white">
                <BsFillCheckSquareFill className="m-1 w-[16px] h-[16px]" />
                Form has been submitted successfully!
              </p>
              <Button
                onClick={() => setState(INITIAL_FORM_STATE)}
                type="button"
                className="bg-white text-primary"
              >
                Send Another Email
              </Button>
            </>
          ) : (
            <>
              {state.error ? (
                <p className="flex items-center gap-2 mt-2 font-semibold text-white">
                  <BsFillXCircleFill className="m-1 w-[16px] h-[16px]" />
                  <span className="basis-10/12">
                    Error occurred while submitting form. Please try again!
                  </span>
                </p>
              ) : (
                ""
              )}
              <Button
                onClick={onSubmit}
                disabled={state.loading}
                type="submit"
                className="bg-white text-primary mt-2"
              >
                {state.loading ? (
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 mx-2 text-primary animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  "Submit"
                )}
              </Button>
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
