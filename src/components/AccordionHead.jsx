import { useContext } from "react";
import { accordionCtx } from "../context/AccordionCtx";

function AccordionHead({ children }) {
  const [, setAccOpen] = useContext(accordionCtx);

  return (
    <div
      onClick={() => setAccOpen((prev) => !prev)}
      className="bg-white py-2 px-6 rounded-md text-lg font-semibold border-b-4 border-gray-100"
    >
      {children}
    </div>
  );
}
export default AccordionHead;
