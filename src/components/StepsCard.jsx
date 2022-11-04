import Flex from "../utils/Flex";

function StepsCard({ num, image, title, subtitle }) {
  return (
    <Flex className="flex-col">
      <Flex className="justify-center">
        <img src={image} alt={title} />
      </Flex>
      <Flex className="justify-center items-center">
        <div className="mr-5">
          <span className="h-16 w-16 rounded-full bg-white shadow flex items-center justify-center text-4xl font-bold text-sky-600">
            {num}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-md text-gray-700">{subtitle}</p>
        </div>
      </Flex>
    </Flex>
  );
}

export default StepsCard;
