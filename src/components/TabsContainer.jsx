import { useTabs } from "../context/TabsCtx";

function TabContainer({ children }) {
  const TabsProvider = useTabs();
  return (
    <TabsProvider>
      <div className="relative">{children}</div>
    </TabsProvider>
  );
}
export default TabContainer;
