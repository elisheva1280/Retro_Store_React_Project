import React, { useState } from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CookieConsent from 'react-cookie-consent';
import Slider from "react-slick";
import a from '../img/slice/a.jpg'
import b from '../img/slice/b.jpg'
import c from '../img/slice/c.jpg'
import d from '../img/slice/d.jpg'
import f from '../img/slice/f.jpg'
import g from '../img/slice/g.jpg'
import e from '../img/slice/e.png'
import h from '../img/slice/h.png'
import i from '../img/slice/i.png'
import logo4 from '../img/logo4.jpg';
import './Home.css';


function Home() {

    const [messageSent, setMessageSent] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setMessageSent(true); // Set message state to true
    };
    const togglePopup = () => {

    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rtl: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <>

            <div className="slider-container">

                <Slider {...settings}>

                    <div>

                        <img src={a} alt="Slide A" />

                    </div>
                    <div>

                        <img src={f} alt="Slide D" />

                    </div>
                    <div>

                        <img src={b} alt="Slide B" />

                    </div>
                    <div>

                        <img src={d} alt="Slide D" />

                    </div>
                    <div>

                        <img src={h} alt="Slide D" />

                    </div>
                    <div>
                        <img src={g} alt="Slide D" />
                    </div>
                    <div>
                        <img src={c} alt="Slide C" />
                    </div>
                    <div>
                        <img src={i} alt="Slide D" />

                    </div>
                    <div>

                        <img src={e} alt="Slide D" />

                    </div>
                </Slider></div>
            <div>
                <p> </p>
            </div>
            <img src={logo4} alt="Logo" height="70" className="center-text" />
            <p className="center-text"><br />עם ותק של 20 שנה בתחום העתיקות,אנו מתמחים ברכישה והערכת פרטי אספנות, אמנות, כלי כסף, יודאיקה, תכשיטים, וינטג', ירושות, עזבונות ועוד.<br /> מגיעים לכל מקום בארץ ומציעים תשלום מיידי במזומן או בהעברה בנקאית.אנו מחויבים לאמינות מוחלטת ושקיפות מלאה בכל עסקה</p>
            <p className="center-text rtl-text">אנו רוכשים מגוון רחב של עתיקות, ביניהם:<br />

                יודאיקה: חנוכיות, סידורי תפילה, כתובות, מגילות, ועוד.<br />
                כלי כסף: קנדלברות, כלי קודש, כלי אוכל, ועוד.<br />
                שעוני יד ישנים: מותגים ידועים, שעונים נדירים, שעוני כיס, ועוד.<br />
                תכשיטים ישנים: טבעות, עגילים, שרשראות, צמידים, ועוד.<br />
                מטבעות: מטבעות עתיקים, מטבעות נדירים, אסימונים, ועוד.<br />
                מדליות: מדליות היסטוריות, מדליות ספורט, מדליות זיכרון, ועוד.<br />
                חפצי אמנות: ציורים, פסלים, הדפסים, כלי קרמיקה, ועוד.<br />
                ספרים עתיקים: ספרים נדירים, ספרים בעלי ערך היסטורי, כתבי יד, ועוד.<br />
            </p>
            <br />

            <CookieConsent
                buttonStyle={{
                    background: 'hsl(0, 17%, 43%)', // Darker burgundy color closer to btn-danger
                    color: 'white',
                    borderRadius: '5px', // Adds rounded corners to the button
                    padding: '9px 10px', // Padding for the button
                    fontSize: '15px' // Optional: Reduce font size further
                }}
                buttonText="Agree"
                debug
                style={{
                    background: '#2c2c2c', // Dark gray background
                    color: 'white', // White text for better contrast
                    borderRadius: '4px', // Adds rounded corners to the consent box
                    padding: '2px 10px', // Reduced padding for a smaller height
                    lineHeight: '0.1', // Decrease line height for less overall height
                    fontSize: '16px' // Optional: Adjust font size
                }}
            >
                We use cookies to improve your experience.
            </CookieConsent>
            {!messageSent ? (
                <form className="form-container" onSubmit={handleSubmit}>
                    <input type="submit" value="שליחה" className="submit-button" />
                    <label htmlFor="phone" className="label"></label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="טלפון"
                        required
                        className="input-field"
                    />
                    <label htmlFor="fname" className="label"></label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="שם"
                        required
                        className="input-field"
                    />
                </form>
            ) : (
                <p className="success-message center-text">✅הודעתך התקבלה בהצלחה! נחזור אליך בהקדם האפשרי.</p>
            )}
            <br />
            <br />
            <br />
        </>
    );
}
export default Home;