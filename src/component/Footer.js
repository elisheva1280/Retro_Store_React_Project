import React from 'react';
import './Footer.css';
import fax from '../icons/fax.png'; // Import the fax icon
import Emaile from '../icons/Emaile.png'; // Import the email icon
import phone from '../icons/phone.png'; // Import the phone icon
import location from '../icons/location.png'; // Import the location icon

function Footer() {
  return (
    <footer className="footer bg-light shadow-sm">
      <div className="footer-container">
        <div className="footer-section">
          <h4>פרטי התקשרות:</h4>
          <div className="footer-icons">
            <div className="footer-item">
              <img src={location} alt="מיקום" style={{ width: '30px', height: '30px' }} />
              <p>החרש 8 רמת השרון</p>
            </div>
            <div className="footer-item">
              <img src={fax} alt="פקס" style={{ width: '30px', height: '30px' }} />
              <p>פקס: 072-3322110</p>
            </div>
            <div className="footer-item">
              <img src={phone} alt="טלפון" style={{ width: '30px', height: '30px' }} />
              <p>טלפון1: 03-5402231</p>
              <p>טלפון2: 03-5475660</p>
            </div>
            <div className="footer-item">
              <img src={Emaile} alt="מייל" style={{ width: '30px', height: '30px' }} />
              <p>דוא"ל: sh4164116@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-section">
          <h4>שעות פתיחה:</h4>
          <p>יום א - 9:00-17:00</p>
          <p>יום ב - 9:00-17:00</p>
          <p>יום ג - 9:00-17:00</p>
          <p>יום ד - 9:00-17:00</p>
          <p>יום ה - 9:00-19:00</p>
          <p>יום ו - 9:00-14:00</p>
        </div>

        <div className="footer-section">
          <h4>קישורים נבחרים:</h4>
          <p><a href="#">אודות</a></p>
          <p><a href="#">גיפטקארד</a></p>
          <p><a href="#">תשלום מאובטח</a></p>
          <p><a href="#">שמרו על קשר</a></p>
          <p><a href="#">משלוחים והחזרות</a></p>
          <p><a href="#">תקנון אתר</a></p>
          <p><a href="#">הצהרת נגישות</a></p>
        </div>

        <div className="footer-section">
          <h4>פוסטים אחרונים:</h4>
          <p>כשרוצים להפתיע באמת:</p>
          <p>כשרוצים לרגש, לחוש את העבר</p>
          <p>בואו נעשה את זה!!!</p>
          <p> אספנו לכם כמה טיפים מנצחים לרכישה</p>
          <a href="#">לקרוא עוד →</a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
