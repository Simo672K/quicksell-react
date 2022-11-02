import CategoriesContainer from "../components/CategoriesContainer";
import CategoryCard from "../components/CategoryCard";
import FournitureImg from "../assets/images/fourniturelight.png";
import Grid from "../utils/Grid";

function MainPage() {
  return (
    <>
      <CategoriesContainer>
        <Grid className="grid-cols-4 gap-4 w-fit mx-auto mt-4">
          <CategoryCard catImg={FournitureImg} catTitle="Fourniture" />
          <CategoryCard catImg={FournitureImg} catTitle="Fourniture" />
          <CategoryCard catImg={FournitureImg} catTitle="Fourniture" />
          <CategoryCard catImg={FournitureImg} catTitle="Fourniture" />
          <CategoryCard catImg={FournitureImg} catTitle="Fourniture" />
          <CategoryCard catImg={FournitureImg} catTitle="Fourniture" />
          <CategoryCard catImg={FournitureImg} catTitle="Fourniture" />
          <CategoryCard catImg={FournitureImg} catTitle="Fourniture" />
        </Grid>
      </CategoriesContainer>
    </>
  );
}
export default MainPage;
