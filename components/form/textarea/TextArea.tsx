"use client";
import styles from "../input/input.module.css";

export type TextAreaProps = {
  /* ID attribute of the input tag */
  fieldID: string;
  /* Name attribute of the input tag */
  fieldName: string;
  /* Field label text */
  fieldLabel: string;
  /* Placeholder text in the input tag */
  fieldPlaceholder?: string;
  /* Number of rows (sizing) */
  rows?: number;
  /* Is this field required? */
  required?: boolean;
  /* Icon (character) displayed next to the label if this field is required */
  requiredIcon?: string;
};

/**
 * The TextArea component is an input field used for forms used for multi-row text.
 */
export default function TextArea({
  fieldID = "ID",
  fieldName = "Name",
  fieldLabel = "Label",
  fieldPlaceholder = "Placeholder",
  rows = 5,
  required = false,
  requiredIcon = "*",
}: TextAreaProps) {
  return (
    <label className={styles.inputWrap} htmlFor={fieldID}>
      <span className={styles.labelWrapper}>
        <div className={styles.labelText}>{fieldLabel}</div>
        {required && <div className={styles.labelRequired}>{requiredIcon}</div>}
      </span>
      <textarea className={styles.inputField} id={fieldID} name={fieldName} placeholder={fieldPlaceholder} required={required} rows={rows} />
    </label>
  );
}
