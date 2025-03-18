import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, NotFound, Projects, Single, VirtualTours } from "./pages";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/virtual-tours" element={<VirtualTours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path={"projects/:id"} element={<Single />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
