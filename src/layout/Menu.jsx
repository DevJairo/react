import React from 'react'
import logo from '../assets/images/logo/logo.png'
import { Link, useLocation } from "react-router-dom"
function Menu() {
 //assigning location variable
 const location = useLocation();

 //destructuring pathname from location
 const { pathname } = location;

 //Javascript split method to get the name of the path in array
 const splitLocation = pathname.split("/");

  return (
    <div id="sidebar" className="active">
      <div className="sidebar-wrapper active">
        <div className="sidebar-header">
          <div className="d-flex justify-content-between">
            <div className="logo">
              <a href="index.html"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="toggler">
              <a href="/" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle"></i></a>
            </div>
          </div>
        </div>
        <div className="sidebar-menu">
          <ul className="menu">
            {/* <li className="sidebar-title">Menu</li> */}
            <li className={splitLocation[1] === "dashboard" ? "sidebar-item active" : "sidebar-item"}>
              <Link className='sidebar-link' to="/dashboard">
                <i className="bi bi-grid fs-5"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={splitLocation[1] === "invoice" ? "sidebar-item active" : "sidebar-item"}>
              <Link className='sidebar-link' to="/invoice">
                <i className="bi bi-journal-text fs-5"></i>
                <span>Facturas</span>
              </Link>
            </li>
            <li className={splitLocation[1] === "category" ? "sidebar-item active" : "sidebar-item"}>
              <Link className='sidebar-link' to="/category">
                <i className="bi bi-folder fs-5"></i>
                <span>Categorias</span>
              </Link>
            </li>
            <li className={splitLocation[1] === "product" ? "sidebar-item active" : "sidebar-item"}>
              <Link className='sidebar-link' to="/product">
                <i className="bi bi-bag fs-5"></i>
                <span>Productos</span>
              </Link>
            </li>
            <li className={splitLocation[1] === "customer" ? "sidebar-item active" : "sidebar-item"}>
              <Link className='sidebar-link' to="/customer">
                <i className="bi bi-people fs-5"></i>
                <span>Clientes</span>
              </Link>
            </li>
          </ul>
        </div>
        <button className="sidebar-toggler btn x"><i data-feather="x"></i></button>
      </div>
    </div>
  )
}

export default Menu
