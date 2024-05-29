import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Para from './Components/Paragraph/Para';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Service from './Components/Service/Service';

function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path='/' ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/update/:id' element={<Service></Service>} ></Route>
      </Routes>
    </BrowserRouter>
    <Para></Para>
    <Footer></Footer>
    </>
  );
}

export default App;
