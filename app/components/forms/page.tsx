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
            <FormComponent submitLabel="Contact Us">
              <InputField
                fieldID="NameField"
                fieldLabel="Enter name"
                fieldName="NameField"
                fieldType="text"
                fieldPlaceholder="Enter a name"
                required={true}
              />
              <InputField
                fieldID="NumberField"
                fieldLabel="Enter a number"
                fieldName="NumberField"
                fieldType="number"
                fieldPlaceholder="Enter a number only"
                required={true}
              />
              <InputField
                fieldID="EmailField"
                fieldLabel="Enter email"
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
