import { useContext } from "react";
import { accordionCtx } from "../context/AccordionCtx";

function AccordionBody({ children }) {
  const [accOpen] = useContext(accordionCtx);

  return (
    <div
      className={
        "bg-white rounded-md mt-1 overflow-hidden font-semibold" +
        (accOpen ? " h-fit px-6 py-2" : " h-0")
      }
    >
      {children}
    </div>
  );
}
export default AccordionBody;
