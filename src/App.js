import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import More from "./pages/More";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence >
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="More" element={<More />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
export default App;
