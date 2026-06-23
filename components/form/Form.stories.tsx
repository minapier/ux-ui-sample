import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FormComponent from "./Form";
import InputField from "./input/Input";
import { expect } from "storybook/test";

const meta = {
  title: "RSD Form",
  component: FormComponent,
  subcomponents: { InputField },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Form story */
export const Default: Story = {
  args: {
    children: [
      <InputField
        fieldID="NameField"
        fieldLabel="Enter name"
        fieldName="NameField"
        fieldType="text"
        fieldPlaceholder="Enter a name"
        required={true}
      />,
      <InputField
        fieldID="NumberField"
        fieldLabel="Enter a number"
        fieldName="NumberField"
        fieldType="number"
        fieldPlaceholder="Enter a number only"
        required={true}
      />,
      <InputField
        fieldID="EmailField"
        fieldLabel="Enter email"
        fieldName="EmailField"
        fieldType="email"
        fieldPlaceholder="Enter email"
        required={true}
      />,
    ],
    submitLabel: "Contact Us",
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByText("Enter name"), "Michael Napier");
    await userEvent.type(canvas.getByText("Enter a number"), "123");
    await userEvent.type(canvas.getByText("Enter email"), "test@sample.com");
    await userEvent.click(canvas.getByRole("button"));
    await expect(
      canvas.getByText("Form is submitted successfully! Thank you."),
    ).toBeInTheDocument();
  },
};
