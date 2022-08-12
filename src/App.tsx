import { Routes, Route } from "react-router-dom";
import VG from "./vrg/VG";
import VideogameDetail from "./vrg/components/VideogameDetail";
import Landing from "./vrg/components/Landing";

import "./App.css";
import VGProvider from "./vrg/context/VGProvider";
import Home from "./vrg/components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <VGProvider>
              <Landing />
            </VGProvider>
          }
        />
        <Route
          path="/home"
          element={
            <VGProvider>
              <Home/>
            </VGProvider>
          }
        />
        <Route
          path="/:id"
          element={
            <VGProvider>
              <VideogameDetail />
            </VGProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
