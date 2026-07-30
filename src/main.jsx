import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<h1>Accueil</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;