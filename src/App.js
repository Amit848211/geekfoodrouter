import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Quote from './component/Quote';
import Contact from './component/Contact';
import Foods from './component/Foods';




function App() {
  
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Header />}/>
          <Route path='/quote' element={<Quote />}/>
          <Route path='/resturants' element={<Home />}/>
          <Route path='/contacts' element={<Contact />}/>
          <Route path='/foods' element={<Foods />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </>
  );
}

export default App;
