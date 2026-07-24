import { Routes, Route } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;