import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Convocatorias from "./modules/convocatorias/Convocatorias";
import Encuestas360 from "./modules/encuestas360/Encuestas360";
import Prueba2 from "./modules/prueba2/Prueba2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="convocatorias" element={<Convocatorias />} />
          <Route path="encuestas360" element={<Encuestas360 />} />
           <Route path="prueba2" element={<Prueba2 />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
