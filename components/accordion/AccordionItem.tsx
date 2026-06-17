"use client";
import { useState } from "react";
import type { AccordionItemContent } from "./accordionItemData";
import Image from "next/image";
import styles from "./accordion.module.css";
import { clsx } from "clsx";

export default function AccordionItem({
  slug = "defualt-slug",
  title = "Default Accordion Item Title",
  content = "Default accordion item content.",
}: AccordionItemContent) {

  const [showContent, setShowContent] = useState(false);
  return (
    <div className={styles.accordionItem} role="region">
      <div
        className={styles.accordionItemWrapper}
        role="button"
        aria-expanded={showContent}
        aria-controls={slug}
        tabIndex={0}
      >
        <div
          className={styles.accordionItemButtonWrapper}
          onClick={() => setShowContent(!showContent)}
        >
          <div className={styles.accordionItemButton}>
            <div className={styles.accordionItemIcon}>
              {showContent ? (
                <Image src="/images/minus.svg" alt="" width={48} height={48} />
              ) : (
                <Image src="/images/plus.svg" alt="" width={48} height={48} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.accordionItemContent}>
          <div className={styles.accordionItemTitleWrapper}>
            <h3 className={styles.accordionItemTitle}>{title}</h3>
          </div>
          <div
            id={slug}
            className={clsx(
              styles.accordionItemCopyWrapper,
              !showContent && styles.hideContent,
            )}
            aria-hidden={!showContent}
          >
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
