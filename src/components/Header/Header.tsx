import React, { useState } from "react";

const Header = (props: Props) => {
  const { currentItem } = props;
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <div className="site-branding d-flex align-items-center">
                <a className="d-block" href="/" rel="home">
                  <img
                    className="d-block"
                    src="static/images/logo.png"
                    alt="logo"
                    style={{ height: "47px" }}
                  />
                </a>
              </div>

              <nav
                className={`site-navigation d-flex justify-content-end align-items-center ${
                  showHamburgerMenu ? "show" : ""
                }`}
              >
                <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                  <li
                    className={
                      currentItem === "home" ? "current-menu-item" : ""
                    }
                  >
                    <a href="/">Home</a>
                  </li>
                  <li
                    className={
                      currentItem === "about" ? "current-menu-item" : ""
                    }
                  >
                    <a href="about">About us</a>
                  </li>
                  <li
                    className={
                      currentItem === "events" ? "current-menu-item" : ""
                    }
                  >
                    <a href="events">Events</a>
                  </li>
                  <li
                    className={
                      currentItem === "contact" ? "current-menu-item" : ""
                    }
                  >
                    <a href="contact">Contact</a>
                  </li>
                </ul>
              </nav>

              <div
                className={`hamburger-menu d-lg-none ${
                  showHamburgerMenu ? "open" : ""
                }`}
                onClick={() => {
                  setShowHamburgerMenu(!showHamburgerMenu);
                }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

type Props = {
  currentItem: "home" | "about" | "events" | "contact";
};
