import Container from "../utils/Container";
import Flex from "../utils/Flex";
import HeroTag from "./HeroTag";
import HeroText from "./HeroText";
import ClockIcon from "../assets/icons/fast-time.svg";
import BestPriceIcon from "../assets/icons/best-price.svg";
import OpenDoorIcon from "../assets/icons/open-door.svg";

function Hero() {
  return (
    <Container className="flex-grow px-20">
      <Flex className="items-end h-full">
        <article className="z-10 mb-5">
          <HeroText />
          <Flex className="mt-4">
            <HeroTag icon={ClockIcon} label="Fastest selling service in town" />
            <HeroTag icon={BestPriceIcon} label="Best price guranteed" />
            <HeroTag icon={OpenDoorIcon} label="At your doorstep" />
          </Flex>
        </article>
      </Flex>
    </Container>
  );
}
export default Hero;
