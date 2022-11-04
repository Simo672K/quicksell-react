import Container from "../utils/Container";
import Flex from "../utils/Flex";

function AboutContent() {
  return (
    <div>
      <Container>
        <Flex>
          <article className="basis-1/2 pr-16">
            <h3 className="text-4xl font-bold mb-4">Why Quicksell ?</h3>
            <p className="leading-9 text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              natus veniam quam mollitia quae autem rerum provident, repellat
              porro dolores voluptas nemo facere. Cumque ab quos enim,
              dignissimos praesentium neque ea nisi sed laborum aspernatur iste
              nesciunt voluptatibus inventore est culpa sunt fugiat at atque
              obcaecati similique necessitatibus, excepturi veritatis! Neque,
              amet fugiat ullam in voluptatem repellat itaque corporis expedita
              ducimus atque voluptates voluptas, dignissimos vel harum aliquam
              eaque, consequuntur vero reiciendis ipsum possimus labore quam
              corrupti quaerat.
            </p>
          </article>
        </Flex>
      </Container>
    </div>
  );
}
export default AboutContent;
