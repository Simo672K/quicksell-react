import Flex from "../utils/Flex";

function NavbarBrand({ brandImg, brandName }) {
  return (
    <Flex className="items-center">
      <img className="w-10 h-10 mr-3" src={brandImg} alt={brandName} />
      <span className="text-2xl text-white font-semibold">{brandName}</span>
    </Flex>
  );
}
export default NavbarBrand;
