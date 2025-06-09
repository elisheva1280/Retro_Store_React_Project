import './App.css';
import Nav from './component/Nav';
import Home from './component/Home';
import ShoppingCart from './component/ShoppingCart';
import Products from './component/Products';
import Payment from './component/Payment';
import Product from './component/Product';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Footer from './component/Footer';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Nav />   

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </Router>
      <Footer />
    </Provider>
    </>
  );
}

export default App;
