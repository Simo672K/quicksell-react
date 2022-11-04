import { createContext, useState } from "react";

const accordionCtx = createContext();
const useAccordion = () => {
  const [accordion, setAccordion] = useState(false);
  const value = [accordion, setAccordion];
  const accordionCtxProvider = (props) => {
    return <accordionCtx.Provider value={value} {...props} />;
  };

  return accordionCtxProvider;
};

export { accordionCtx, useAccordion };
