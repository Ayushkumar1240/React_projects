import React from "react";

export const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>Your Feet Deserves The Best</h1>
        <p>
          Nike has been around for over 20 years, pushing the boundaries of
          what's possible in sneakers. Our team of experts and passionate
          designers have created something truly unique and groundbreaking. We
          believe in creating products that not only look amazing but also feel
          amazing.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">Also Available On</div>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon logo" />
          <img src="/images/flipkart.png"  alt="flipkart logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoes5.jpg" alt="shoe" />
      </div>
    </main>
  );
};
