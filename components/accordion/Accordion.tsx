// import type { AccordionItemContent, AccordionItemProps } from "./accordionItemData";
import styles from "./accordion.module.css";
import AccordionItem from "./AccordionItem";

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
 * The Accordion component is used to display FAQ-type content. Click on the "+" icon to expand to see more information on the accordion item's topic.
 */
export default function Accordion({ items }: AccordionItemProps) {
  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItemSlot}>
        {items.map((item: AccordionItemContent, i: number) => (
          <AccordionItem
            key={i}
            slug={item.slug}
            title={item.title}
            content={item.content} 
          />
        ))}
      </div>
    </div>
  );
}
