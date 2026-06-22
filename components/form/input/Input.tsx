"use client";
import styles from "./input.module.css";

export type InputProps = {
  fieldID: string;
  fieldName: string;
  fieldLabel: string;
  fieldPlaceholder?: string;
  fieldType?: 'text' | 'number' | 'string' | 'password' | 'date' | 'url' | 'time' | 'tel' | 'hidden' | 'color' | 'checkbox' | 'radio' | 'email';
  required?: boolean;
  requiredIcon?: string;
};

/**
 * The Input component is an input field used for forms.
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
