import Container from "./utils/Container";
import LayoutTemplate from "./layouts/LayoutTemplate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <BrowserRouter>
      <LayoutTemplate>
        <Routes>
          <Route path="/">
            <Route index element={<MainPage />} />
            <Route path="categories">
              <Route index element={<CategoriesPage />} />
              <Route path=":catName" element={<FormPage />} />
            </Route>
          </Route>
        </Routes>
        <Container></Container>
      </LayoutTemplate>
    </BrowserRouter>
  );
}

export default App;
