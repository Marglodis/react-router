import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home.jsx";
import Contacto from "./views/Contacto.jsx";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>        
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
