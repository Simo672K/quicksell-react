import { useAccordion } from "../context/AccordionCtx";

function Accordion({ children }) {
  const AccCtxProvider = useAccordion();

  return (
    <AccCtxProvider>
      <div className="mt-3">{children}</div>
    </AccCtxProvider>
  );
}
export default Accordion;
