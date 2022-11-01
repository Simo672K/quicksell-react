import Container from "../utils/Container";
import Flex from "../utils/Flex";
import NavbarBrand from "./NavbarBrand";
import NavbarCollapse from "./NavbarCollapse";
import NavbarNav from "./NavbarNav";
import NavbarItem from "./NavbarItem";
import NavbarLink from "./NavbarLink";
import NavbarButton from "./NavbarButton";
import Logo from "../assets/icons/logoWhiteV.svg";
import BagImg from "../assets/icons/bag.svg";

function Navbar() {
  return (
    <nav className="bg-purple-700">
      <Container className="py-2">
        <Flex className="items-center">
          <NavbarBrand brandImg={Logo} brandName="Quicksell" />
          <NavbarCollapse>
            <NavbarNav>
              <NavbarItem>
                <NavbarLink>Home</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>How it works</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>Why Quicksell</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>FAQ's</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarLink>Testimonials</NavbarLink>
              </NavbarItem>
              <NavbarItem>
                <NavbarButton img={BagImg} />
              </NavbarItem>
            </NavbarNav>
          </NavbarCollapse>
        </Flex>
      </Container>
    </nav>
  );
}
export default Navbar;
