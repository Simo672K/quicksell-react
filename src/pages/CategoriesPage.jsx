import TabBody from "../components/TabBody";
import TabsContainer from "../components/TabsContainer";
import TabHeader from "../components/TabHeader";
import Container from "../utils/Container";
import TabsHeaders from "../components/TabsHeaders";
import TabsBodies from "../components/TabsBodies";
import TabPageContent from "../layouts/TabPageContent";

function CategoriesPage() {
  return (
    <section className="pb-28 px-20 bg-gray-50">
      <Container>
        <TabsContainer>
          <TabsHeaders>
            <TabHeader tag="fourniture">Fourniture</TabHeader>
            <TabHeader tag="appliances">Appliances</TabHeader>
            <TabHeader tag="mobile phone">Mobile Phone</TabHeader>
            <TabHeader tag="tablet">Tablet</TabHeader>
            <TabHeader tag="laptop">Laptop</TabHeader>
            <TabHeader tag="smart watch">Smart Watch</TabHeader>
            <TabHeader tag="game console">Game Console</TabHeader>
            <TabHeader tag="bulk items">Bulk Items</TabHeader>
          </TabsHeaders>
          <TabsBodies>
            <TabBody tag="fourniture">
              <TabPageContent />
            </TabBody>
            <TabBody tag="appliances">Appliances tab</TabBody>
            <TabBody tag="mobile phone">Mobile Phone tab</TabBody>
            <TabBody tag="tablet">Tablet tab</TabBody>
            <TabBody tag="laptop">Laptop tab</TabBody>
            <TabBody tag="smart watch">Smart Watch tab</TabBody>
            <TabBody tag="game console">Game Console tab</TabBody>
            <TabBody tag="bulk items">Bulk Items tab</TabBody>
          </TabsBodies>
        </TabsContainer>
      </Container>
    </section>
  );
}
export default CategoriesPage;
