import logo from './logo.svg';
import './App.css';
import Component from './components/ComponenetLibrary.jsx'
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
import GreenBox from './components/GreenBox';
import Product from './components/Product';
import Radio from './components/Radio';
import About from './components/about';
import SensorReport from './components/sensorReport';
import CustomerStories from './components/CustomerStories';
import Header from './components/Header.jsx';
import ConnectHome from './components/ConnectHome';
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
      <Route path="/cl" element={<Component />} />
      <Route path="/greenBox" element={<GreenBox />} />
      <Route path="/product" element={<Product />} />
      <Route path="/radio" element={<Radio />} />
      <Route path="/about" element={<About />} />
      <Route path="/sensorreport" element={<SensorReport />} />
      <Route path="/cs"  element={<CustomerStories />} />
      <Route path="/header" element={<Header />} />
      <Route path='/connectHome' element={<ConnectHome />} />

       </Routes>
      
       
    </BrowserRouter>
      
  );
}

export default App;
