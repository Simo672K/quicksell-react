import TabTagCard from "../components/TabTagCard";
import Grid from "../utils/Grid";
import SofaImg from "../assets/images/sofa.png";
function TabPageContent() {
  return (
    <section>
      <h2 className="text-3xl font-bold py-12 text-center">Fourniture</h2>
      <Grid className="grid-cols-4 gap-6 w-fit mx-auto">
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
        <TabTagCard tagImg={SofaImg} tagTitle="Sofa" />
      </Grid>
    </section>
  );
}
export default TabPageContent;
