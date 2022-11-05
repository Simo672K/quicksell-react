import { useState, createContext } from "react";

const tabsContext = createContext();

function useTabs() {
  const [activeTab, setActiveTab] = useState("fourniture");
  const value = [activeTab, setActiveTab];

  return function (props) {
    return <tabsContext.Provider value={value} {...props} />;
  };
}

export { tabsContext, useTabs };
