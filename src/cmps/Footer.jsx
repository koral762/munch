import React from 'react';

export const Footer = () => {

    return (
        <div className="footer">
            <div className="icon-container">
                <a className="a-icon i-whatsapp" href="https://wa.me/972524499904" target="_blank" rel="noreferrer noopener">
                    <i className="fa fa-whatsapp btn" style={{ fontSize: "xx-large" }}></i>
                </a>
                <li></li>
                <a className="a-icon i-instagram" href="https://instagram.com/shato_kinneret?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer noopener" >
                    <i className="fa fa-instagram" style={{ fontSize: "xx-large" }}></i>
                </a>
                <li></li>
                <a className="a-icon i-facebook" href="" target="_blank" rel="noreferrer noopener">
                    <i class="fa fa-facebook-square" style={{ fontSize: "xx-large" }} aria-hidden="true"></i>
                </a>
            </div>
            <p id="imgCradit">Image by <a href="https://www.freepik.com/free-photo/grey-marble-background-concept_11381891.htm#query=food%20background&position=14&from_view=keyword">Freepik</a></p>

        </div>
    )


}