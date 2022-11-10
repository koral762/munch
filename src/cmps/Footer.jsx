import React from 'react';

export const Footer = () => {

    return (
        <div className="footer">
            <div className="icon-container">

                <a className="a-icon i-facebook" href="https://www.facebook.com/profile.php?id=100049172207456" target="_blank" rel="noreferrer noopener">
                    <i class="fa fa-facebook-square" style={{ fontSize: "xx-large" }} aria-hidden="true"></i>
                </a>
                <li></li>
                <a className="a-icon i-whatsapp" href="https://wa.me/972552643155" target="_blank" rel="noreferrer noopener">
                    <i className="fa fa-whatsapp btn" style={{ fontSize: "xx-large" }}></i>
                </a>
                <li></li>
                <a className="a-icon i-instagram" href="https://www.instagram.com/munch_knafa" target="_blank" rel="noreferrer noopener" >
                    <i className="fa fa-instagram" style={{ fontSize: "xx-large" }}></i>
                </a>
            </div>
            <div>
                <p id="imgCradit"><a href="https://www.freepik.com/free-photo/grey-marble-background-concept_11381891.htm#query=food%20background&position=14&from_view=keyword"></a></p>
            </div>

        </div>
    )


}