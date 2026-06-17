export interface AccordionItemContent {
  slug: string;
  title: string;
  content: string;
};

export interface AccordionItemProps {
  items: AccordionItemContent[];
}

export const accordionItemData: AccordionItemProps = {
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
    {
      slug: "accordion-item-4",
      title: "Figma architecture and handoff",
      content:
        "Organized, reusable Figma files that support efficient review and smooth implementation.",
    },
    {
      slug: "accordion-item-5",
      title: "Creative direction",
      content:
        "Visual direction for launches, events and campaigns where quality and alignment are critical.",
    },
    {
      slug: "accordion-item-6",
      title: "Website development",
      content:
        "Maintainable website builds structured for performance and long-term use.",
    },
  ]
};
