import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SocialManager from './pages/SocialManager';
import Manegerpage from './pages/Manegerpage';
import Sellers from './pages/Sellers';

function App() {
  const [primery, setPrimery] = useState('#171010')
  const [secudary, setSecudary] = useState('#ED1C07')

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home primery={primery} secudary={secudary} />}  />
          <Route path="/Login" element={<Login primery={primery} secudary={secudary} />}  />
          <Route path="/SocialManager/:socket" element={<SocialManager primery={primery} secudary={secudary} />}  />
          <Route path="/Sellers/:socket" element={<Sellers primery={primery} secudary={secudary} />}  />
          <Route path="/Manegerpage/:socket" element={<Manegerpage primery={primery} secudary={secudary} />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
