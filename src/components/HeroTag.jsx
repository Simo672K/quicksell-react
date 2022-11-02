import Flex from "../utils/Flex";

function HeroTag({ icon, label }) {
  return (
    <div className="rounded-full w-fit bg-white px-5 py-1 mr-5 shadow-md">
      <Flex className="items-center">
        <img className="w-8 h-8" src={icon} alt="icon" />
        <span className="ml-2 font-semibold text-sky-600">{label}</span>
      </Flex>
    </div>
  );
}
export default HeroTag;
