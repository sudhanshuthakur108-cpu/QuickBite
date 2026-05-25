import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = ({
  setShowLogin,
  search,
  setSearch,
  darkMode,
  setDarkMode,
}) => {

  const [menu, setMenu] = useState("home");
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // STORE CONTEXT
  const { getTotalCartAmount } = useContext(StoreContext);

  // AUTH CONTEXT
  const { user, logout } = useContext(AuthContext);

  return (

    <>

      <div className="navbar">

        {/* TOP ROW */}
        <div className="navbar-top">

          {/* LOGO */}
          <Link to="/">

            <div className="logo">

              <svg width="24" height="52" viewBox="0 0 22 52" fill="none">

                <rect x="2" y="0" width="4" height="20" rx="2" fill="#E8440A" />
                <rect x="9" y="0" width="4" height="20" rx="2" fill="#E8440A" />
                <rect x="16" y="0" width="4" height="20" rx="2" fill="#E8440A" />

                <rect x="2" y="20" width="18" height="4" fill="#E8440A" />

                <rect x="8" y="24" width="6" height="28" rx="3" fill="#E8440A" />

                <polygon
                  points="14,6 8,22 13,22 8,38 16,18 11,18 16,6"
                  fill="white"
                  opacity="0.9"
                />

              </svg>

              <div>

                <span className="quickbite-text">
                  QuickBite<span className="dot">.</span>
                </span>

                <p className="admin-text">
                  Admin Panel
                </p>

              </div>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <ul className="navbar-menu">

            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              home
            </Link>

            <a
              href="#explore-menu"
              onClick={() => setMenu("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              menu
            </a>

            <a
              href="#app-download"
              onClick={() => setMenu("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              mobile-app
            </a>

            <a
              href="#footer"
              onClick={() => setMenu("contact us")}
              className={menu === "contact us" ? "active" : ""}
            >
              contact us
            </a>

          </ul>

          {/* HAMBURGER */}
          <div
            className="hamburger"
            onClick={() => setShowMenu(true)}
          >
            ☰
          </div>

        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-right">

          {/* SEARCH */}
          <div className="search-box">

            <img
              onClick={() => setShowSearch(!showSearch)}
              src={assets.search_icon}
              alt=""
            />

            {
              showSearch && (

                <input
                  type="text"
                  placeholder="Search pizza, burger, cake..."
                  value={search}

                  onChange={(e) => {

                    setSearch(e.target.value);

                    document
                      .getElementById("food-display")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      });

                  }}
                />

              )
            }

          </div>

          {/* CART */}
          <div className="navbar-search-icon">

            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>

            <div
              className={
                getTotalCartAmount() === 0
                  ? ""
                  : "dot"
              }
            >

            </div>

          </div>

          {/* DARK MODE */}
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* AUTH */}
          {
            user ? (

              <div className="navbar-user">

                <p>
                  Hi, {user.name} 👋
                </p>

                <button onClick={logout}>
                  Logout
                </button>

              </div>

            ) : (

              <button onClick={() => setShowLogin(true)}>
                sign in
              </button>

            )
          }

        </div>

      </div>

      {/* MOBILE MENU */}
      <div className={showMenu ? "mobile-menu active" : "mobile-menu"}>

        <div className="mobile-menu-top">

          <h2>
            QuickBite
          </h2>

          <span onClick={() => setShowMenu(false)}>
            ✕
          </span>

        </div>

        <Link
          to="/"
          onClick={() => {
            setMenu("home");
            setShowMenu(false);
          }}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
            setShowMenu(false);
          }}
        >
          Menu
        </a>

        <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
            setShowMenu(false);
          }}
        >
          Mobile App
        </a>

        <a
          href="#footer"
          onClick={() => {
            setMenu("contact us");
            setShowMenu(false);
          }}
        >
          Contact Us
        </a>

      </div>

    </>
  );
};

export default Navbar;