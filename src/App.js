import Container from "./utils/Container";
import LayoutTemplate from "./layouts/LayoutTemplate";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <LayoutTemplate>
        <Container>
          <h1 className="text-3xl font-bold">Hello, there!</h1>
        </Container>
      </LayoutTemplate>
    </BrowserRouter>
  );
}

export default App;
