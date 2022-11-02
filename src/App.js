import Container from "./utils/Container";
import LayoutTemplate from "./layouts/LayoutTemplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./layouts/MainPage";

function App() {
  return (
    <BrowserRouter>
      <LayoutTemplate>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Container></Container>
      </LayoutTemplate>
    </BrowserRouter>
  );
}

export default App;
