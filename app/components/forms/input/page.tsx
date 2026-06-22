import Image from "next/image";
import InputField from "../../../../components/form/input/Input";
import styles from "../components/css/classes.css";

export default function ButtonPage() {
  return (
    <div>
      <main>
        <div>
          <h1 className="h3">Input component</h1>

          <InputField
            fieldID="TextField"
            fieldLabel="Text Field"
            fieldName="TextField"
            fieldType="text"
            fieldPlaceholder="Placeholder Text"
            required={true}
          />
          <InputField
            fieldID="NumberField"
            fieldLabel="Number Field"
            fieldName="NumberField"
            fieldType="number"
            fieldPlaceholder="Enter a number only"
            required={true}
          />
        </div>
      </main>
    </div>
  );
}
