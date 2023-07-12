import React from "react";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  return (
    <div className="navbar">
      <article className="navbar_art">
        {/* brand name */}
        <section className="brandSec">
          <div className="brand_div">
            <img src="assets/shake logo.png" alt="logo image" />
          </div>
        </section>

        {/* all nav menus */}
        <section className="navMenuSec">
          <div className="navMenu_div">
            <span>Home</span>
            <span>About</span>
            <span>Gallery</span>
            <span>Menu</span>
            <span>Store Locations</span>
            <span>Contact</span>
          </div>
        </section>

        {/* search icon */}
        <section className="navSearchSec">
          <div className="navSearch_div">
            <FaSearch />
            <span className="biIcon">
              <BiMenu />
            </span>
          </div>
        </section>
      </article>
    </div>
  );
};

export default NavBar;
