import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddCount, AddPrice, AddShoppingCart } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Product() {
  const product = useSelector(state => state.SelectedProduct.selected);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const togglePopup = () => {
    dispatch(AddShoppingCart(product));
    dispatch(AddCount());
    dispatch(AddPrice(product));
    setSelectedItem(product);
    setIsOpen(!isOpen);
  };

  if (!product) return <div className="text-center mt-5">לא נבחר מוצר</div>;

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '50px 20px' }}>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row w-100" style={{ maxWidth: '1000px' }}>
          <div className="col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="fw-bold mb-3">{product.name}</h2>
            <p className="mb-2">{product.txt}</p>
            <p className="mb-2">{product.describe}</p>
            <p className="mb-1"><strong>מחיר:</strong> {product.price} ₪</p>
            <p className="mb-4"><strong>משלוח:</strong> {product.send}</p>
            {product.ifExist && (
              <button
                onClick={togglePopup}
                style={{
                  backgroundColor: '#ca9991',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '12px 20px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#4e342e',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'; // צבע שוקולד
                  e.currentTarget.style.border = '0.7px solid #ca9991'; // מסגרת ורודה-חומה
                }}
                // onMouseOver={e => e.currentTarget.style.backgroundColor = 'transparent'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ' #ca9991'}
              >
                הוסף לסל 🛒
              </button>
            )}
          </div>
        </div>
      </div>

      {isOpen && selectedItem && (
        <div className="modal show" style={{
          display: 'block',
          position: 'fixed',
          left: '0', top: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: '1000'
        }}>
          <div className="modal-dialog" style={{ maxWidth: '400px', margin: 'auto', marginTop: '10%' }}>
            <div className="modal-content" style={{
              border: '2px solid #8b5a2b',
              borderRadius: '15px',
              backgroundColor: '#f8f0e3'
            }}>
              <div className="modal-header">
                <h5 className="modal-title" style={{ fontFamily: 'Georgia, serif', color: '#4b3d25' }}>
                  הוספת {selectedItem.name} לעגלה!
                </h5>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="img-fluid"
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-secondary" onClick={() => navigate("/Products")}>המשך בקניה</button>
                <button
                  className="btn btn-success"
                  onClick={() => navigate("/ShoppingCart")}
                  style={{ backgroundColor: '#ca9991', borderColor: '#ca9991' }} // Set both background and border color
                >
                  לעגלת הקניות
                </button>              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Product;