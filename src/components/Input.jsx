import React from "react";
import { useFormContext } from "react-hook-form";
import { findInputError, isFormInvalid } from "../utils";
import { AnimatePresence, motion } from "framer-motion";
import { MdError } from "react-icons/md";

const Input = ({ type, id, placeholder, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, id);
  const isInvalid = isFormInvalid(inputError);

  return (
    <>
      <div className="flex justify-between">
        <label htmlFor={id} className="capitalize">
          {id}:
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </AnimatePresence>
      </div>
      {type == "textarea" ? (
        <textarea
          id={id}
          name={id}
          rows="5"
          placeholder={placeholder}
          autoComplete="true"
          className="
            resize-none
            w-full
            text-slate-900
            block px-2 py-2 mt-2
            rounded-md
            border-2
            placeholder:opacity-60
            border-slate-200
            "
          {...register(id, validation)}
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          placeholder={placeholder}
          autoComplete="true"
          className="
            w-full
            text-slate-900
            block px-2 py-2 mt-2
            rounded-md
            border-2
            placeholder:opacity-60
            border-slate-200
            "
          {...register(id, validation)}
        />
      )}
    </>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Input;
