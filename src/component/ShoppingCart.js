import React, { useEffect } from 'react';
import { RemoveCount, RemovePrice, RemoveShoppingCart } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function ShoppingCart() {
    const ShoppingCartArr = useSelector(state => state.ShoppingCart.ShoppingCartArr);
    const Count = useSelector(state => state.ShoppingCart.count);
    const Price = useSelector(state => state.ShoppingCart.price);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Shopping Cart Updated:", ShoppingCartArr);
    }, [ShoppingCartArr]);

    const togglePopup = (item) => {
        dispatch(RemoveShoppingCart(item));
        dispatch(RemoveCount(item));
        dispatch(RemovePrice(item));
    };

    return (
        <>
            <div className="container my-5" style={{ backgroundColor: 'white' }}>
                <h2 className="mb-4 text-center">🛒 סל קניות ({Count})</h2>

                {ShoppingCartArr.length === 0 ? (
                    <div className="alert text-center mt-5" style={{ backgroundColor: '#ca9991', color: 'white' }}>
                        אין מוצרים בעגלה. תחזור להוסיף מוצרים!
                    </div>
                ) : (
                    <div className="row" style={{ backgroundColor: 'white' }}>
                        {/* מוצרים - שמאל */}
                        <div className="col-md-8">
                            {ShoppingCartArr.map((item, index) => (
                                <div key={index} className="card mb-4 shadow-sm">
                                    <div className="row g-0 align-items-center p-3">
                                        <div className="col-md-2 text-center">
                                            <img src={item.image} alt={item.name} className="img-fluid rounded" style={{ maxHeight: '150px', objectFit: 'cover' }} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="d-flex justify-content-between align-items-center flex-wrap">
                                                <div className="text-center w-100 mb-3">
                                                    <h5 className="mb-1">{item.name}</h5>
                                                    <p className="mb-1">מק"ט: {item.code}</p>
                                                    <p className="mb-1">מלאי: {item.ifExist}</p>
                                                    <p className="fw-bold">₪ {item.price}</p>
                                                </div>

                                                <div className="text-end w-100">
                                                    <button
                                                        className="btn"
                                                        onClick={() => togglePopup(item)}
                                                        style={{
                                                            backgroundColor: '#ca9991', // Set the background color
                                                            borderColor: '#ca9991', // Set the border color
                                                            color: 'white' // Set the text color for contrast
                                                        }}
                                                    >
                                                        הסר מוצר
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* סיכום תשלום - ימין */}
                        <div className="col-md-4">
                            <div className="p-3 position-sticky" style={{ top: '80px' }}>
                                <h5 className="mb-3">סיכום הזמנה</h5>
                                <p><strong>סה"כ מוצרים:</strong> {Count}</p>
                                <p><strong>לתשלום:</strong> ₪ {Price}</p>
                                <p className="text-muted">משלוח חינם (ברירת מחדל)</p>
                                <button className="btn btn-teal text-white w-100" style={{ backgroundColor: ' #ca9991' }} onClick={() => {
                                    navigate("/Payment");
                                }}>
                                    לקופה
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div
                className="position-fixed bottom-0 start-0 w-100 border-top py-2 text-center"
                style={{ backgroundColor: ' #ca9991', marginBottom: '20px', zIndex: 1050 }}

            >
                <div className="container d-flex justify-content-center align-items-center">
                    <span className="fw-bold ms-2">משלוח תוך 4–7 ימי עבודה </span>
                    {/* <img
                        src="../img/TRUCK.png"
                        alt="משלוח"
                        style={{ width: '24px', height: '24px', filter: 'grayscale(100%) brightness(0)' }}
                    /> */}
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;
