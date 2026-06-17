import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

export default {
    title: "RSD Button",
    component: Button,
};

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

// const meta = {
//   component: Button,
// } satisfies Meta<typeof Button>;

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//     ctaLabel: "Click",
//     ctaLink: { href: "https://www.google.com", target: "_blank" },
//     ctaStyle: { style: "primary", type: "button" },
//   },
//   render: (args) => {
//     <Button {...args} />;
//   },
// };
