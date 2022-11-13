import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/imgs/logoBorder.jpg';


export const Navbar = () => {

    const [menuIsOpen, toggleMenu] = useState(false);


    return (
        <div className="navbar" style={{ color: 'blue' }}>

            <img src={myLogo} className="logo" width="100px" height="100px"></img>

            <p style={{ fontSize: '22px', alignSelf: 'center',textAlign: 'center', margin: '0px', color: 'white', width: '100%' }}>
                <span style={{ fontSize:'25px', fontFamily: 'system-ui',color: 'rgb(255, 79, 79)'}}> !!!משלוחים בלבד  </span>
                <tr></tr>
                <span>גבעתיים</span>
                <tr></tr>
                <span>גבול רמת גן-גבעתיים</span>
                <tr></tr>
                <span>גבול תל-אביב-גבעתיים </span>

            </p>

            <button className="menu-btn-mobile" onClick={() => toggleMenu(!menuIsOpen)}><i className={menuIsOpen ? "fa fa-close" : "fa fa-align-justify"} style={{ fontSize: "20px", color: 'rgb(218 165 32 / 73%' }}></i></button>


            <div id="menu" onClick={() => toggleMenu(!menuIsOpen)} className={menuIsOpen ? "right-nav open" : "right-nav"}>
                {menuIsOpen && <div>
                    <Link to='/'><span>ראשי</span></Link>
                    <Link to='/menu'><span>תפריט</span></Link>
                    <Link to='/about'><span>מי אנחנו</span></Link>
                    <Link to='/keepInTouch'><span>צרו קשר</span></Link>
                </div>}
            </div>
        </div >
    )

}