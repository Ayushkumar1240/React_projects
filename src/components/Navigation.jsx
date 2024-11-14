import React from "react";

export const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/nikelogo2.png" alt="logo"></img>
        </div>
        <ul>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  );
};
