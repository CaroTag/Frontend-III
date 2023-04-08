import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./component/Layout/Navbar/Navbar";
import Home from "./pages/Home/home";
import Favs from "./pages/Favs/Favs.container";
import Contact from "./pages/Contact/Contact";
import Dentist from "./pages/DentistDetail/DentistDetail.container";
import Footer from "./component/Layout/Footer/Footer";
import GlobalContextProvider from "./contexts/GlobalContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route exact path="/home" element={<Home />} />
              <Route path="/dentist/:id" element={<Dentist />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}
export default App;
