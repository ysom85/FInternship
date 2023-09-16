import logo from './logo.svg';
import './App.css';
 
  import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home  from './components/Home';
import Login from './components/login';
import Contact from './components/Contact';
import OTPvarification from './components/OTPvarification';
import Motorpannel from './components/Motorpannel';
import Temp from './components/Temp';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/otpvarify" element={<OTPvarification />} />
      <Route path="/motorpannel" element={<Motorpannel />} />
      <Route path="/temp" element={<Temp />} />
      </Routes>
      
       
    </BrowserRouter>
      
  );
}

export default App;
