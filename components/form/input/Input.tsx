"use client";
import styles from "./input.module.css";

export type InputProps = {
  /* ID attribute of the input tag */
  fieldID: string;
  /* Name attribute of the input tag */
  fieldName: string;
  /* Field label text */
  fieldLabel: string;
  /* Placeholder text in the input tag */
  fieldPlaceholder?: string;
  /* Type attribute of the input tag */
  fieldType?: 'text' | 'number' | 'string' | 'password' | 'date' | 'url' | 'time' | 'tel' | 'hidden' | 'color' | 'checkbox' | 'radio' | 'email';
  /* Is this field required? */
  required?: boolean;
  /* Icon (character) displayed next to the label if this field is required */
  requiredIcon?: string;
};

/**
 * The InputField component is an input field used for forms. Primarily used for text-type fields (including email, password, number, etc.).
 */
export default function InputField({
  fieldID = "ID",
  fieldName = "Name",
  fieldLabel = "Label",
  fieldPlaceholder = "Placeholder",
  fieldType = "text",
  required = false,
  requiredIcon = "*",
}: InputProps) {
  return (
    <label className={styles.inputWrap} htmlFor={fieldID}>
      <span className={styles.labelWrapper}>
        <div className={styles.labelText}>{fieldLabel}</div>
        {required && <div className={styles.labelRequired}>{requiredIcon}</div>}
      </span>
      <input className={styles.inputField} id={fieldID} name={fieldName} type={fieldType} placeholder={fieldPlaceholder} required={required} />
    </label>
  );
}
