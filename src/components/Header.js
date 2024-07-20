import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/Header.css'

const Header = () => {
  const navigate = useNavigate();

  const laptopImageUrl = 'https://th.bing.com/th/id/R.6fb43360a8431c4081f948f47b573bfe?rik=xTveVRZ3ecmwIQ&riu=http%3a%2f%2fwww.designbolts.com%2fwp-content%2fuploads%2f2015%2f12%2fgiphy.gif&ehk=3Wi4s2KXk2oGqwOcpGfKj2IlgofH5ecg%2bVIpfpa%2fnc4%3d&risl=&pid=ImgRaw&r=0'; // URL of the laptop illustration

  return (
    <header 
      className="header" 
      style={{
        backgroundImage: 'url(https://i.stack.imgur.com/J5xAl.gif',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '5vh',
      }}
    >
      <div className="container">
        <div className="logo-container" style={{ float: 'left', marginLeft: 20 }}>
          <Link to="/">
            <img src={laptopImageUrl} alt="Laptop" className="laptop-icon" style={{ width: 80, height: 70, borderRadius: '50%', border: '2px solid #fff' }} />
          </Link>
        </div>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0, margin: 0 }}>
            <li>
              <Link to="/email-me" className="nav-link" style={{ textDecoration: 'none', color: '#ffff', fontSize: 18, fontWeight: 500, marginRight: 20 }}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/features" className="nav-link" style={{ textDecoration: 'none', color: '#ffff', fontSize: 18, fontWeight: 500, marginRight: 20 }}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" style={{ textDecoration: 'none', color: '#ffff', fontSize: 18, fontWeight: 500, marginRight: 20 }}>
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="actions" style={{ float: 'right', marginRight: 20 }}>
          <button className="btn btn-primary" onClick={() => navigate('/sign in')} style={{ backgroundColor: '#337ab7', color: '#fff', padding: 10, borderRadius: 5, border: 'none', cursor: 'pointer' }}>
            Sign In
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/try it free')} style={{ backgroundColor: '#4CAF50', color: '#fff', padding: 10, borderRadius: 5, border: 'none', cursor: 'pointer', marginLeft: 10 }}>
            Try it Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;