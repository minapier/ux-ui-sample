"use client";
import type { AccordionItemContent, AccordionItemProps } from "./accordionItemData";
import styles from "./accordion.module.css";
import AccordionItem from "./AccordionItem";

/**
 * 
 * @param {AccordionItemProps} items - Array of accordion item content objects.
 * @returns Accordion component displaying AccordionItem components.
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
