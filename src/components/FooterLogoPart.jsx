import LogoImg from "../assets/icons/logo.svg";

function FooterLogoPart() {
  return (
    <div className="pr-16">
      <h3 className="text-xl font-semibold flex items-center mb-4">
        <img src={LogoImg} alt="logo in footer" />
        <span className="ml-2">Quicksell</span>
      </h3>
      <p className="text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ipsa,
        molestias ut quo consequatur commodi facilis sequi ratione temporibus?
        Esse unde adipisci soluta facilis accusamus amet saepe fugit hic vitae.
      </p>
    </div>
  );
}
export default FooterLogoPart;
