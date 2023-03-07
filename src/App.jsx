import React, { lazy, Suspense } from "react";
//import { PokeList } from "./components/PokeList";
import "./index.css";
import Menu from "./components/Menu";
import { Routes, Route } from "react-router-dom";

//const Header = lazy(() => import("./components/header/Header"));
// const Home = lazy(() => import("./pages/home/Home"));
const PokeList = lazy(() => import("./pages/List"));
const PokeDetail = lazy(() => import("./pages/Detail"));
// const Pdp = lazy(() => import("./pages/pdp/Pdp"));
// const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <>
      <Menu></Menu>

      <Suspense fallback={<div>Cargando</div>}> 
        <Routes>
          <Route path="/" element={<>Daniel Blanco rut: 266644620</>} />
          <Route path="/pokemon" element={<PokeList />} />
          <Route path="/pokemon/:id" element={<PokeDetail />} />
          {/* <Route path="/pokemon/:id" element={<Pdp />} />*/}
          <Route path="*" element={<>Error</>} /> 
        </Routes>
      </Suspense>

      {/* <Routes>
        <Route path="/" element={<>Inicio</>} />
        <Route
          path="/detaill"
          element={
            <>
              <PokeList></PokeList>
            </>
          }
        />
        <Route path="/show" element={<>Vista</>} />
      </Routes> */}

      {/* <p>Hello am app</p>
  <PokeList/></PokeList> */}
    </>
  );
}

export default App;
