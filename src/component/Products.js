
import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Judaica, SelectedProduct, music, Furniture, Earthenware, Watches, AddShoppingCart, AddCount, AddPrice } from '../redux/action';
import { Link, useNavigate } from 'react-router-dom';
import icon1 from '../icons/icon1.png';
import logo4 from '../img/logo4.jpg'; // לוגו
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Stack } from '@mui/material';
import './Products.css';

function Products() {
  const arr = useSelector(state => state.Category.arr);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  const togglePopup = (item) => {
    dispatch(AddShoppingCart(item));
    dispatch(AddCount());
    dispatch(AddPrice(item));
    setSelectedItem(item);
    setIsOpen(true);
  };

  return (
    <div className="page-wrapper" id='productBudy'>
      <div className="container text-center">
        {/* לוגו במקום טקסט */}
        <div className="mb-4">
          <img src={logo4} alt="Logo" style={{ height: '80px' }} />
          <hr style={{ border: '1px solid hsl(0, 17%, 43%)', width: '100%', margin: '10px 0' }} />
        </div>

        {/* כפתורי קטגוריה מעוצבים עם MUI */}
        <Stack direction="row" spacing={1} justifyContent="center" className="mb-5 flex-wrap">
          <Button variant="outlined" color="inherit" onClick={() => dispatch(Judaica())}  sx={{ borderColor: 'hsl(0, 17%, 43%)' }}>Judaica</Button>
          <Button variant="outlined" color="inherit" onClick={() => dispatch(music())} sx={{ borderColor: 'hsl(0, 17%, 43%)' }}>Music</Button>
          <Button variant="outlined" color="inherit" onClick={() => dispatch(Furniture())}sx={{ borderColor: 'hsl(0, 17%, 43%)' }}>Furniture</Button>
          <Button variant="outlined" color="inherit" onClick={() => dispatch(Earthenware())}sx={{ borderColor: 'hsl(0, 17%, 43%)' }}>Earthenware</Button>
          <Button variant="outlined" color="inherit" onClick={() => dispatch(Watches())}sx={{ borderColor: 'hsl(0, 17%, 43%)' }}>Watches</Button>
        </Stack>

        <div className="row justify-content-center">
  {arr.map((item, index) => (
    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="elegant-card">
        <Link
          to="/Product"
          onClick={() => dispatch(SelectedProduct(item))}
          className="product-link"
        >
          <img
            src={item.image}
            alt={item.name}
            className="img-fluid product-image"
          />
        </Link>

        <div className="text-start">
        <hr style={{ border: '1px solid hsl(0, 17%, 43%)', width: '100%', margin: '10px 0' }} />
          <h6 className="fw-bold mb-1">{item.name}</h6>
          <p className="mb-2 description-text">{item.txt}</p>
          <p>{item.describe}</p>
          <p className="mb-1"><strong>מחיר:</strong> {item.price} $</p>
          <p><strong>משלוח:</strong> {item.send}</p>

          
        </div>

        <div className="text-center mt-2">
          {item.ifExist ? (
            <img
              src={icon1}
              alt="הוסף לסל"
              title="הוסף לעגלה"
              className="cart-icon"
              onClick={() => togglePopup(item)}
            />
          ) : (
            <p className="text-danger out-of-stock">המוצר אזל מהמלאי</p>
          )
          }
          <button className="options-button" onClick={() => {
            dispatch(SelectedProduct(item));
            navigate("/product");
          }}>פרטי המוצר</button>
        </div>
      </div>
    </div>
  ))}
</div>




        {selectedItem && (
          <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <DialogTitle className="popup-header">
              הוספת {selectedItem.name} לעגלה
            </DialogTitle>
            <DialogContent className="popup-content">
              <div className="text-center">
                <img src={selectedItem.image} alt={selectedItem.name} className="img-fluid" style={{ maxHeight: '200px' }} />
              </div>
            </DialogContent>
            <DialogActions className="popup-actions">
              <Button onClick={() => setIsOpen(false)} variant="outlined">המשך בקניה</Button>
              <Button onClick={() => navigate("/ShoppingCart")} variant="contained" color="primary">לעגלת הקניות</Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    </div>
  );
}

export default Products;
