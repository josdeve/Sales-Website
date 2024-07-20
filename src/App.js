import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/contactPage';
import EmailPage from './Pages/EmailPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import FeaturesPage from './Pages/FeaturesPage'; 
import TryitfreePage from './Pages/TryitfreePage'; 
import ScheduleDemoPage from './Pages/ScheduleDemoPage';


function App() {
  return (
    <div
      style={{
        backgroundImage: 'url("https://media.giphy.com/media/l3mZnuz4coJp8EBBm/source.gif")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Email-me" element={<EmailPage />} />
            <Route path="/Sign in" element={<SignInPage />} />
            <Route path="/Sign Up" element={<SignUpPage />} />
            <Route path="/Features" element={<FeaturesPage />} />
            <Route path="/Try it free" element={<TryitfreePage />} />
            <Route path="/Schedule a Demo" element={<ScheduleDemoPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;