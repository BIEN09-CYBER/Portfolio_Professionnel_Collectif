import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayout />}>
          
          <Route index element={<Home />} />

          <Route path="equipe" element={<Equipe />} />

          <Route path="projets" element={<Projects />} />

          <Route 
            path="projets/:id" 
            element={<ProjectDetails />} 
          />

          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;