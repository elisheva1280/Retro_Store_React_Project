

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // אייקון של סל קניות
import logo from '../img/logo.jpg'; // שים כאן את הלוגו שלך
import SearchComponent from './Search';



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
      <div className="container">
        {/* לוגו ושם */}
        <Link className="navbar-brand d-flex align-items-center" to="/home">
          <img src={logo} alt="Logo" height="32" className="me-2" />
          <span className="fw-bold " style={{ fontSize: '1.2rem' , color: 'hsl(0, 17%, 43%)' }}>Once Upon A Time</span>
        </Link>
        <SearchComponent></SearchComponent>


        {/* טוגל למובייל */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* קישורים */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {/* <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/home">Home</Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark" to="/payment">Payment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-dark d-flex align-items-center" to="/shoppingcart">
                <FaShoppingCart className="me-1" />
                {/* Cart */}
              </Link>
            </li>
            {/* כפתור מיוחד */}
            <li className="nav-item ms-3">
              <Link to="/Home" className="btn btn-danger rounded-pill px-4" style={{ backgroundColor: 'hsl(0, 17%, 43%)', color: 'white' ,border: '2px solid  hsl(0, 27%, 33%)'}}>
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;