import Container from "../utils/Container";

function CategoriesContainer({ children }) {
  return (
    <article>
      <Container>{children}</Container>
    </article>
  );
}
export default CategoriesContainer;
