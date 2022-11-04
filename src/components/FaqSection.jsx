import Container from "../utils/Container";
import AccordionContainer from "./AccordionContainer";

function FaqSection() {
  return (
    <section className="bg-sky-600 pt-12 pb-16">
      <div className="bg-faqs bg-no-repeat py-16 px-20">
        <Container>
          <div className="mb-8">
            <h3 className="text-white text-4xl font-bold mb-6">FAQ's</h3>
            <p className="text-white text-lg font-semibold">
              Get answers to your queries.
            </p>
          </div>
          <AccordionContainer />
        </Container>
      </div>
    </section>
  );
}
export default FaqSection;
