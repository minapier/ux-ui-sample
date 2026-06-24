import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import FormComponent from "./Form";
import InputField from "./input/Input";
import TextArea from "./textarea/TextArea";
import { expect } from "storybook/test";

const meta = {
  title: "Form",
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
      <TextArea
        fieldID="Message"
        fieldLabel="Your Message"
        fieldName="Message"
        fieldPlaceholder="Type your message here"
        required={true}
      />,
    ],
    submitLabel: "Contact Us",
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.type(canvas.getByText("Enter name"), "Michael Napier");
    await userEvent.type(canvas.getByText("Enter a number"), "123");
    await userEvent.type(canvas.getByText("Enter email"), "test@sample.com");
    await userEvent.type(
      canvas.getByText("Your Message"),
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim vitae velit et interdum. Nam ac mi lacus. Duis ac nibh ligula. Mauris pharetra massa ultrices, ullamcorper magna eu, fringilla tortor. Donec laoreet, magna sit amet gravida rhoncus, arcu elit finibus urna, vel auctor orci erat nec augue.",
    );
    await userEvent.click(canvas.getByRole("button"));
    await expect(
      canvas.getByText("Form is submitted successfully! Thank you."),
    ).toBeInTheDocument();
  },
};
