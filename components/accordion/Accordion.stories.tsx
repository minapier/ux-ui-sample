import type { Meta } from "@storybook/nextjs-vite";
import Accordion from "./Accordion";

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
  args: {
    items: [
      {
        slug: "accordion-item-1",
        title: "Strategic web planning",
        content:
          "Clear project direction grounded in goals, priorities, constraints, and audience needs.",
      },
      {
        slug: "accordion-item-2",
        title: "Website and experience design",
        content:
          "High-quality pages, landing pages, and campaign experiences designed for performance and visibility.",
      },
      {
        slug: "accordion-item-3",
        title: "Design systems and visual standards",
        content:
          "System foundations, components, and guidelines that keep large teams aligned over time.",
      },
    ],
  },
};
