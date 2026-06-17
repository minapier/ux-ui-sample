"use client";
import type { AccordionItemContent, AccordionItemProps } from "./accordionItemData";
import styles from "./accordion.module.css";
import AccordionItem from "./AccordionItem";

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
