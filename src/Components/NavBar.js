import React from "react";
import { Link } from "react-router-dom";
import logopng from "./logopng.png";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar  fixed-top navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
              src={logopng}
              alt=""
              style={{ width: "190px", margin: "0px 25px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            style={{ margin: "0px 200px" }}
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ fontSize: "18px" }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
          
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search The News"
                aria-label="Search"
              />
            </form>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
