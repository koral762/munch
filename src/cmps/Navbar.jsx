import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [menuIsOpen, toggleMenu] = useState(false);


    return (
        <div className="navbar" style={{ color: 'blue' }}>

            <div id="menu" onClick={() => toggleMenu(!menuIsOpen)} className={menuIsOpen ? "right-nav open" : "right-nav"}>
             <button className="menu-btn-mobile" onClick={() => toggleMenu(!menuIsOpen)}><i className={menuIsOpen ? "fa fa-close" : "fa fa-align-justify"} style={{ fontSize: "20px" }}></i></button>
             {menuIsOpen && <div>
             <Link to='/'><span>ראשי</span></Link>
             <Link to='/'><span>תפריט</span></Link>
             <Link to='/about'><span>מי אנחנו</span></Link>
             <Link to='/'><span>שאלות נפוצות</span></Link>
             <Link to='/'><span>צרו קשר</span></Link>
             </div>}
            </div>
        </div>
    )

}