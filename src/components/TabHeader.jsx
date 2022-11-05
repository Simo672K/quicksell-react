import { useContext } from "react";
import { tabsContext } from "../context/TabsCtx";

function TabHeader({ children, tag }) {
  const [activeTab, setActiveTab] = useContext(tabsContext);

  return (
    <div
      onClick={() => setActiveTab(tag)}
      className={
        "px-8 py-4 border border-b-0 border-l-0 first:border-l cursor-pointer first:rounded-l-lg last:rounded-r-lg border-gray-300" +
        (tag === activeTab ? " bg-gray-50" : " bg-gray-200 text-gray-400")
      }
    >
      {children}
    </div>
  );
}
export default TabHeader;
