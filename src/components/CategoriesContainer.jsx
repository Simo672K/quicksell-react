import Container from "../utils/Container";

function CategoriesContainer({ children }) {
  return (
    <section className="bg-gray-50 rounded-br-[3rem] rounded-bl-[3rem] shadow-lg py-4">
      <Container>{children}</Container>
    </section>
  );
}
export default CategoriesContainer;
