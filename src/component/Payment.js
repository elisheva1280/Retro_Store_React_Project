import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        city: '',
        zipCode: '',
        street: '',
        buildingNumber: '',
        apartmentNumber: '',
        phone: '',
        creditCardNumber: '',
        cvv: '',
        expirationDate: '',
        idNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(true);
        console.log('Submitting payment data:', formData);
    };

    const navigate = useNavigate();

    return (
        <div className="position-relative">
            {!isOpen && (
                <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                    <div className="card p-3 shadow-lg" style={{ maxWidth: '600px', width: '100%' }}>
                        <h2 className="text-center mb-3">טופס תשלום</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label className="form-label">שם:</label>
                                <input type="text" className="form-control form-control-sm" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">משפחה:</label>
                                <input type="text" className="form-control form-control-sm" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">טלפון:</label>
                                <input type="tel" className="form-control form-control-sm" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">כתובת:</label>
                                <div className="row g-1">
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="עיר" name="city" value={formData.city} onChange={handleChange} required />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="מיקוד" name="zipCode" value={formData.zipCode} onChange={handleChange} />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="רחוב" name="street" value={formData.street} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="row g-1 mt-1">
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="מספר בניין" name="buildingNumber" value={formData.buildingNumber} onChange={handleChange} required />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="מספר דירה" name="apartmentNumber" value={formData.apartmentNumber} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label className="form-label">פרטי תשלום:</label>
                                <div className="row g-1">
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="מספר אשראי" name="creditCardNumber" value={formData.creditCardNumber} onChange={handleChange} required />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="תוקף (MM/YY)" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="CVV" name="cvv" value={formData.cvv} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="row g-1 mt-1">
                                    <div className="col">
                                        <input type="text" className="form-control form-control-sm" placeholder="תעודת זהות" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary w-100 mt-2"
                                style={{
                                    backgroundColor: '#ca9991', // Background color
                                    border: '1px solid #ca9991' // Border color matching the background
                                }}
                            >
                                לתשלום
                            </button>                        </form>
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1050 }}>
                    <div className="bg-white p-5 rounded shadow-lg text-center" style={{ maxWidth: '400px', width: '90%' }}>
                        <h3 className="mb-3">תודה על ההזמנה!</h3>
                        <p>{formData.firstName} הזמנתך התקבלה בהצלחה.</p>
                        <button className="btn btn-success mt-3" onClick={() => navigate('/')}>חזרה לדף הבית</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;