"use client";
import { useState, useEffect } from "react";
import { PropsWithChildren } from "react";
import buttonStyles from "../../components/button/button.module.css";
import formStyles from "./form.module.css";

interface FormProps {
  submitLabel?: string;
  children: React.ReactNode;
}

export default function FormComponent({ submitLabel, children }: FormProps) {
  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* Get form data from event object */
    const formData = new FormData(event.target);
    /* Extract an object of form field values from form data. */
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form submit: ", formValues);
    /* Then do something with the form values... */

    /* Reset form */
    event.target.reset();
  };

  return (
    <form className={formStyles.form} onSubmit={handleSubmit}>
      {children}
      <button
        className={`${buttonStyles.cta} ${buttonStyles.button}`}
        type="submit"
      >
        {submitLabel ? submitLabel : "Submit"}
      </button>
    </form>
  );
}
