import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-copyright text-center py-3 bg-light">
      © 2020 Copyright:
      <Link to="#"> Memoryapp.com</Link>
    </footer>
  );
};
