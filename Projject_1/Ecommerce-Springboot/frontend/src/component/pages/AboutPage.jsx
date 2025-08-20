import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page">
      <main className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1>About Electrohub</h1>
          <p className="tagline">
            Your one-stop shop for quality electronics, gadgets, and accessories since 2024
          </p>
        </section>

        {/* About Description */}
        <section className="about-description">
          <p>
            At Electrohub, we’re passionate about bringing the latest innovations in technology 
            directly to your doorstep. From smartphones and laptops to gaming gear and home 
            automation devices, we source high-quality products from trusted brands to ensure 
            you get the best value for your money.
          </p>

          <p>
            Our journey began with a simple mission: make technology accessible to everyone, 
            no matter where they live. Today, we’ve grown into a trusted name for tech enthusiasts, 
            students, professionals, and everyday users looking for reliable electronics.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="about-why">
          <h2>Why Choose Electrohub?</h2>
          <ul>
            <li><strong>Wide Product Range:</strong> From basic accessories to high-end gadgets.</li>
            <li><strong>Affordable Prices:</strong> Competitive rates with regular deals & discounts.</li>
            <li><strong>Fast Shipping:</strong> Quick and safe delivery to your doorstep.</li>
            <li><strong>Trusted Quality:</strong> Products from verified brands and suppliers.</li>
            <li><strong>Excellent Support:</strong> Friendly and responsive customer service team.</li>
          </ul>
        </section>

        {/* Our Vision */}
        <section className="about-vision">
          <h2>Our Vision</h2>
          <p>
            We aim to be the go-to destination for all things tech — where people can discover 
            the latest innovations, enjoy seamless shopping experiences, and get the support 
            they need long after their purchase.
          </p>
        </section>

        {/* Main Content */}
        <div className="about-sections">
          {/* Quick Links */}
          <section className="links-section">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </section>

          {/* Customer Service */}
          <section className="service-section">
            <h2>Customer Service</h2>
            <ul>
              <li><Link to="/shipping">Shipping Policy</Link></li>
              <li><Link to="/returns">Returns</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
