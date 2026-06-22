import Image from "next/image";
// import styles from "./page.module.css";
import FormComponent from "../../../components/form/Form";
import InputField from "@/components/form/input/Input";
import styles from "../components/css/classes.css";

export default function FormPage() {
  return (
    <div>
      <main>
        <div>
          <h1 className="h3">Form component</h1>
          <div style={{maxWidth: 400}}>
            <FormComponent submitLabel="Whatever">
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
              <InputField
                fieldID="EmailField"
                fieldLabel="Email"
                fieldName="EmailField"
                fieldType="email"
                fieldPlaceholder="Enter email"
                required={true}
              />
            </FormComponent>
          </div>
        </div>
      </main>
    </div>
  );
}
