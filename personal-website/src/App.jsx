import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;