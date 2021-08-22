import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../form/Form";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light pl-5 arm-nav">
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav arm-menu ">
            <li className="nav-item active">
              <Link className="nav-link" to="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                Ceeate a post
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="#">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* modal  */}

      <Form />
    </>
  );
};