import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import myLogo from '../assets/imgs/logoBorder.jpg';


export const Navbar = () => {

    const [menuIsOpen, toggleMenu] = useState(false);


    return (
        <div className="navbar" style={{ color: 'blue' }}>

            <img src={myLogo} className="logo" width="100px" height="100px"></img>
            <button className="menu-btn-mobile" onClick={() => toggleMenu(!menuIsOpen)}><i className={menuIsOpen ? "fa fa-close" : "fa fa-align-justify"} style={{ fontSize: "20px", color: 'rgb(218 165 32 / 73%' }}></i></button>


            <div id="menu" onClick={() => toggleMenu(!menuIsOpen)} className={menuIsOpen ? "right-nav open" : "right-nav"}>
                {menuIsOpen && <div>
                    <Link to='/'><span>ראשי</span></Link>
                    <Link to='/menu'><span>תפריט</span></Link>
                    <Link to='/about'><span>מי אנחנו</span></Link>
                    <Link to='/'><span>שאלות נפוצות</span></Link>
                    <Link to='/'><span>צרו קשר</span></Link>
                </div>}
            </div>
        </div>
    )

}