import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
           &copy;  <span style={{color: 'red'}}>SP Production</span>
            <ul className="social-network social-circle">
                <li><a href="https://www.facebook.com/SP_Hungama-104103321326010" target="_blank" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/sp_hungama/" target="_blank" className="icoLinkedin" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCR5QZ7drjNhEU2gjE3xdnFQ" target="_blank" className="icoLinkedin" title="Youtube"><i className="fab fa-youtube"></i></a></li>
            </ul>
        </div>
    )
}

export default Footer;