import React from 'react';
import '../Style/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copyright">
            <p>&copy; 2024 YUSUF RAGAB. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <ul className="social-links">
              <li><a href="#" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;