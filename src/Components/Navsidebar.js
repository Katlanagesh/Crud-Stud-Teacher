import React from "react";
import { Link } from "react-router-dom";

function Navsidebar() {
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
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        <hr className="sidebar-divider my-0" />
           {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/Dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link" to="/Student">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Student</span>
        </Link>
      </li>

      <li className="nav-item active">
        <Link className="nav-link" to="/Teacher">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Teacher</span>
        </Link>
      </li>


      

        <hr className="sidebar-divider" />

       

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        <div className="sidebar-card">
          <img
            className="sidebar-card-illustration mb-2"
            src="https://cdn.pixabay.com/photo/2014/04/03/11/58/rocket-312767_640.png"
            alt="Rocket"
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
  );
}

export default Navsidebar;
