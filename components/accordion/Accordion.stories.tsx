import type { Meta } from "@storybook/nextjs-vite";
import Accordion from "./Accordion";
import accordionData from "../../app/components/accordion/accordionContent.json"

const meta = {
  title: "Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],  
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default = {
  args: accordionData,
};
