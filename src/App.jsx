import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SocialManager from "./pages/SocialManager";
import Manegerpage from "./pages/Manegerpage";
import Sellers from "./pages/Sellers";
import Appdesktop from "./pages/Appdesktop";

function App() {
  const [primery, setPrimery] = useState("#171010");
  const [secudary, setSecudary] = useState("#ED1C07");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home primery={primery} secudary={secudary} />}
          />
          <Route
            path="/Login"
            element={<Login primery={primery} secudary={secudary} />}
          />
          <Route
            path="/AppDesktops"
            element={<Appdesktop primery={primery} secudary={secudary} />}
          />
          <Route
            path="/SocialManager"
            element={<SocialManager primery={primery} secudary={secudary} />}
          />
          <Route
            path="/Sellers"
            element={<Sellers primery={primery} secudary={secudary} />}
          />
          <Route
            path="/Manegerpage"
            element={<Manegerpage primery={primery} secudary={secudary} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
