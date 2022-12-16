import React from 'react'
import "./style.css";
import logo from "../../images/logo.png";
import search from "../../images/search.png";

export default function Nav() {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Special</li>
        <li>Menu</li>
        <li>Blogs</li>
        <li>
          <img src={search} alt="search-icon" />
        </li>
      </ul>
      <button className="BookBtn">Book Now</button>
    </nav>
  );
}
