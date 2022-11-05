import Container from "../utils/Container";
import Grid from "../utils/Grid";
import FooterLogoPart from "./FooterLogoPart";
import FooterNavigation from "./FooterNavigation";
import FooterSocials from "./FooterSocials";
import FooterTerms from "./FooterTerms";

function Footer() {
  return (
    <div className="px-20 rounded-t-[5rem] shadow-top">
      <Container className="pt-12">
        <Grid className="grid-cols-4 divide-x mb-16">
          <FooterLogoPart />
          <FooterNavigation />
          <FooterTerms />
          <FooterSocials />
        </Grid>
      </Container>
      <div className="bg-gray-100 text-gray-500 py-1">
        <Container>
          <ul className="flex">
            <li>&copy; All Rights Reserved</li>
            <li className="ml-4">Quicksell</li>
            <li className="ml-auto">2022</li>
          </ul>
        </Container>
      </div>
    </div>
  );
}
export default Footer;
