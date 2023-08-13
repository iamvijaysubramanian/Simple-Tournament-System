import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">WELCOME ALL</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link to={"/portal/dashboard"} className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>
            <b>Dashboard</b>
          </span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item">
        <Link
          to={"/portal/users"}
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Participants</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"tournaments"}
          className="nav-link collapsed"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Tournaments</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
