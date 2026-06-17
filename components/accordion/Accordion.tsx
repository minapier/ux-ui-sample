"use client";
import { useState } from "react";
import type { AccordionItemProps } from "./accordionItemData";
import styles from "./accordion.module.css";
import AccordionItem from "./AccordionItem";

export default function Accordion({ items }: AccordionItemProps[]) {

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionItemSlot}>
        {items.map((item: AccordionItemProps, i: number) => (
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
