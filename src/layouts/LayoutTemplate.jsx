import Navbar from "../components/Navbar";
import Container from "../utils/Container";

function LayoutTemplate({ children }) {
  return (
    <>
      <header className="bg-hero bg-cover bg-no-repeat bg-custom h-96">
        <Navbar />
        <Container>
          <h2 className="text-6xl text-bold">this is hero</h2>
        </Container>
      </header>
      <main>{children}</main>
    </>
  );
}
export default LayoutTemplate;
