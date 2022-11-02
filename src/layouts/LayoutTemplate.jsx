import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function LayoutTemplate({ children }) {
  return (
    <>
      <header className="bg-hero bg-cover bg-no-repeat bg-custom flex flex-col h-96">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <div className="pt-6 shadow-custom bg-gray-50 rounded-tl-full rounded-tr-full">
                  <h2 className="text-3xl text-center font-bold text-purple-800">
                    What do you want to sell?
                  </h2>
                </div>
              </>
            }
          />
        </Routes>
      </header>
      <main>{children}</main>
    </>
  );
}
export default LayoutTemplate;
