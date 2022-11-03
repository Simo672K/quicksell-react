import CategoriesContainer from "./CategoriesContainer";
import CategoryCard from "./CategoryCard";
import Grid from "../utils/Grid";
import FournitureImg from "../assets/images/fourniturelight.png";
import ApplianceImg from "../assets/images/appliancelight.png";
import MobileImg from "../assets/images/mobilelight.png";
import TabletImg from "../assets/images/tabletlight.png";
import LaptopImg from "../assets/images/laptoplight.png";
import SmartWatchImg from "../assets/images/smartwatchlight.png";
import GameConsoleImg from "../assets/images/gameconsolelight.png";
import BulkItemsImg from "../assets/images/bulkitemslight.png";
import StepsContainer from "./StepsContainer";
import Container from "../utils/Container";
import StepsDivider from "./StepsDivider";

function MainTopSection() {
  const categories = [
    {
      catId: 0,
      catTitle: "Fourniture",
      catImg: FournitureImg
    },
    {
      catId: 1,
      catTitle: "Appliance",
      catImg: ApplianceImg
    },
    {
      catId: 2,
      catTitle: "Mobile Phone",
      catImg: MobileImg
    },
    {
      catId: 3,
      catTitle: "Tablet",
      catImg: TabletImg
    },
    {
      catId: 4,
      catTitle: "Laptop",
      catImg: LaptopImg
    },
    {
      catId: 5,
      catTitle: "mart Watch",
      catImg: SmartWatchImg
    },
    {
      catId: 6,
      catTitle: "Game Console",
      catImg: GameConsoleImg
    },
    {
      catId: 7,
      catTitle: "Bulk Items",
      catImg: BulkItemsImg
    },
  ]
  return (
    <section className="bg-gray-50 rounded-br-[3rem] rounded-bl-[3rem] shadow-lg pt-4 pb-16 mb-8">
      <CategoriesContainer>
        <Grid className="grid-cols-4 gap-4 w-fit mx-auto mt-10">
          {
            categories.map(cat =>
              <CategoryCard key={cat.catId} catImg={cat.catImg} catTitle={cat.catTitle} />
            )
          }
        </Grid>
      </CategoriesContainer>
      <div className="bg-steps bg-center bg-no-repeat h-40 mt-10">
        <Container className="h-full flex items-end justify-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-10">Selling in 3 easy steps</h2>
        </Container>
      </div>
      <StepsContainer>
        <StepsDivider />
      </StepsContainer>
    </section>
  )
}

export default MainTopSection