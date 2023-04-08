import { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Dentists from "./Components/Pages/Dentists/Dentists";
import Contact from "./Components/Pages/Contact/Form/Contact";
import Favs from "./Components/Pages/Favs/Favs.container";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import DentistsContainer from "./Components/Pages/Dentists/Dentists.container";
import DentistDetailContainer from "./Components/Pages/DentistDetail/DentistDetail.container";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Footer />}>
            <Route path="/" element={<Home />} />
            <Route element={<Navbar />}>
              <Route path="/Dentistas" element={<DentistsContainer />} />
              <Route
                path="/DentistDetail/:id"
                element={<DentistDetailContainer />}
              />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
