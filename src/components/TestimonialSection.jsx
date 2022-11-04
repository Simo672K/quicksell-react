import Container from "../utils/Container";
import SwiperContainer from "./SwiperContainer";

function TestimonialSection() {
  return (
    <section className="py-36">
      <Container>
        <h3 className="text-3xl font-bold w-80">
          Check what our clients say about us
        </h3>
        <SwiperContainer />
      </Container>
    </section>
  );
}
export default TestimonialSection;
