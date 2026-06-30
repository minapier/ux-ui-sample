import Accordion from "../../../components/accordion/Accordion";
import accordionContent from "./accordionContent.json"

export default function AccordionPage() {
  /* accordionItems is the array of accordion item content objects. */
  const accordionItems = accordionContent.items;
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
