import './App.css';
import Home from './Pages/Home';
import React from 'react';
import Login from './logging_modules/Login';
import { Route, Routes } from 'react-router-dom';
import Registration from './logging_modules/Register';
import Header from './components/Header';
// import ProductListingPage from './Pages/ProductList';
import SellItems from './Pages/SellItems';
import Footer from './components/Footer';
import Contact from './Pages/Contact';
import SellerLogin from './logging_modules/sellerLogin';
import Checkout from './Pages/Checkout';
import Services from './Pages/Services';
import About from './Pages/About';
import Features from './Pages/Feature';
import SellerForm from './Pages/Product';
import Jazzcash from './Pages/Jazzcash';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
        <Route path='contact' element={<Contact />} />
        <Route path='/sellItems' element={<SellItems />} />
        <Route path='/sellerlogin' element={<SellerLogin />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/services' element={<Services />} />
        <Route path='about' element={<About />} />
        <Route path='feature' element={<Features />} />
        <Route path='product' element={<SellerForm />} />
        <Route path='/jazzcash' element={<Jazzcash />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
