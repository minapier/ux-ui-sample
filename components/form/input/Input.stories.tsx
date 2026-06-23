import type { Meta, StoryObj } from "@storybook/nextjs-vite";
// import FormComponent from "./Form";
import InputField from "./Input";
import { expect } from "storybook/test";

const meta = {
  title: "RSD Input Field",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextField: Story = {
  args: {
    fieldID: "TextField",
    fieldLabel: "Text field",
    fieldName: "TextField",
    fieldType: "text",
    fieldPlaceholder: "Placeholder text",
    required: true,
    requiredIcon: "*",
  },
};

export const NumberField: Story = {
  args: {
    fieldID: "NumberField",
    fieldLabel: "Number field",
    fieldName: "NumberField",
    fieldType: "number",
    fieldPlaceholder: "12345",
    required: false
  },
};

export const DateField: Story = {
  args: {
    fieldID: "DateField",
    fieldLabel: "Date field",
    fieldName: "DateField",
    fieldType: "date",
    fieldPlaceholder: new Date().toLocaleDateString(),
    required: false,
  },
};

export const EmailField: Story = {
  args: {
    fieldID: "EmailField",
    fieldLabel: "Email field",
    fieldName: "EmailField",
    fieldType: "email",
    fieldPlaceholder: "example@example.com",
    required: true,
  },
};

export const PasswordField: Story = {
  args: {
    fieldID: "PasswordField",
    fieldLabel: "Password field",
    fieldName: "PasswordField",
    fieldType: "password",
    fieldPlaceholder: "Enter password",
    required: true,
  },
};
