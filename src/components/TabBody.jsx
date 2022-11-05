import { useContext } from "react";
import { tabsContext } from "../context/TabsCtx";

function TabBody({ children, tag }) {
  const [activeTab] = useContext(tabsContext);

  return (
    <div
      className={"w-full h-full" + (tag === activeTab ? " block" : " hidden")}
    >
      {children}
    </div>
  );
}
export default TabBody;
