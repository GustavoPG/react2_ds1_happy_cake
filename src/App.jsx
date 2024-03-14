import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Contacto from './views/Contacto'
import NotFound from './views/NotFound'
import './App.css'

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/contacto"
          element={<Contacto />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </>
  );
};

export default App
