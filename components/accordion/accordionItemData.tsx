/** Accordion item content object */
export interface AccordionItemContent {
  /** ID string for the accordion item */
  slug: string;
  /** Title string for the accordion item */
  title: string;
  /** Content to display when accordion item is opened. */
  content: string;
};

/** Accordion content object with an array of accordion item content objects. */
export interface AccordionItemProps {
  items: AccordionItemContent[];
}

/**
 * @description An object containing an items array of AccordionItemContent type objects. */ 
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
