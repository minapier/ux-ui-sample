import type { Meta } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

export const Primary = {
  args: {
    ctaLabel: "Click",
    ctaLink: { href: "https://www.google.com", target: "_blank" },
    ctaStyle: { style: "primary", type: "button" },
  },
};

export const Secondary = {
  args: {
    ctaLabel: "Contact Us",
    ctaLink: { href: "https://www.riascureman.com", target: "_blank" },
    ctaStyle: { style: "secondary", type: "button" },
  },
};

export const Link = {
  args: {
    ctaLabel: "Contact Us",
    ctaLink: { href: "https://www.riascureman.com", target: "_blank" },
    ctaStyle: { type: "button" },
  },
};
