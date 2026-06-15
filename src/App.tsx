import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import About from "./pages/Home/About/about";
import Services from "./pages/Services/services";
import Contact from "./pages/contact/contact";
import Clients from "./pages/clients/clients";
import ClientDetails from "./pages/clients/clientdetails/clientdetails";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <BrowserRouter>
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route
  path="/client/:id"
  element={<ClientDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;