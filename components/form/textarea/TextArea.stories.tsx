import type { Meta, StoryObj } from "@storybook/nextjs-vite";
// import FormComponent from "./Form";
import TextArea from "./TextArea";
import { expect } from "storybook/test";

const meta = {
  title: "Text Area",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FiveRows: Story = {
  args: {
    fieldID: "TextField",
    fieldLabel: "Text field",
    fieldName: "TextField",
    fieldPlaceholder: "Placeholder text",
    required: true,
    requiredIcon: "*",
  },
};

export const TenRows: Story = {
  args: {
    fieldID: "TextField",
    fieldLabel: "Text field",
    fieldName: "TextField",
    fieldPlaceholder: "Placeholder text",
    required: false,
    rows: 10,
  },
};