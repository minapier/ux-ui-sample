// import styles from "./page.module.css";
import Accordion from "../../../components/accordion/Accordion";
import {
  AccordionItemProps,
  accordionItemData,
} from "@/components/accordion/accordionItemData";
import styles from "../components/css/classes.css";

export default function AccordionPage() {
  const accordionItems: AccordionItemProps[] = accordionItemData;
 
  return (
    <div>
      <main>
        <div>
          <h1 className="h3">Accordion component</h1>
          <p>The Accordion component is used to display FAQ-type content. Click on the "+" icon to expand to see more information on the accordion item's topic.</p>
          <Accordion items={accordionItems} />
        </div>
      </main>
    </div>
  );
}
