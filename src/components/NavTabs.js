import React from "react";
import { FaRegIdCard, FaRegImages, FaObjectGroup, FaRegUserCircle } from "react-icons/fa";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About JZ <FaRegUserCircle size={20} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Project"
          onClick={() => props.handlePageChange("Project")}
          className={props.currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Project <FaObjectGroup size={20} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => props.handlePageChange("Blog")}
          className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Blog <FaRegImages size={20} />
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact <FaRegIdCard size={20} />
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
