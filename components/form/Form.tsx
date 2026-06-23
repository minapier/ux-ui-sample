"use client";
import { useState, useEffect } from "react";
import { PropsWithChildren } from "react";
import buttonStyles from "../../components/button/button.module.css";
import formStyles from "./form.module.css";

interface FormProps {
  /* Submit button label text */
  submitLabel?: string;
  /* Form input child components */
  children: React.ReactNode;
}

/**
 * The Form component is used to display a form with a submit button. Form input components (such as InputField) are included as this component's children.
 */
export default function FormComponent({ submitLabel, children }: FormProps) {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* Get form data from event object */
    const formData = new FormData(event.target);
    /* Extract an object of form field values from form data. */
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form submit: ", formValues);
    /* Then do something with the form values... */
    setIsSubmitted(true);

    /* Reset form */
    event.target.reset();
  };

  return (
    <>
      {isSubmitted ? (
        <div>Form is submitted successfully! Thank you.</div>
      ) : (
        <form className={formStyles.form} onSubmit={handleSubmit}>
          {children}
          <button
            className={`${buttonStyles.cta} ${buttonStyles.button}`}
            type="submit"
          >
            {submitLabel ? submitLabel : "Submit"}
          </button>
        </form>
      )}
    </>
  );
}
