import React from "react";
import Home from "../Home/Home";
import { Link } from "react-router-dom";
import "./NabbarSty.css";
function Navbar() {
  return (
    // preevious navbar
    // <nav
    //   className="navbar navbar-expand-lg navbar-light "
    //   style={{  fontSize: "18px" }}
    // >
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/home" style={{ fontSize: "23px" }}>
    //       E'Tax-Consultancy
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div
    //       className="collapse navbar-collapse"
    //       style={{ marginLeft: "2px" }}
    //       id="navbarNav"
    //     >
    //       <ul
    //         className="navbar-nav"
    //         style={{ marginLeft: "2px", marginRight: "2px" }}
    //       >
    //         <li className="nav-item">
    //           <Link className="nav-link " aria-current="page" to="/itr">
    //             ITR
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/gst">
    //             GST
    //           </Link>
    //         </li>
    //         {/* making dropdown service */}
    //         {/* <li className="nav-item">
    //           <Link className="nav-link" to="/services">
    //             Services
    //           </Link>
    //         </li>  */}
    //         <li className="nav-item">
    //           <div className="main">
    //             <Link className="nav-link" to="#">Services</Link>
    //             <div className="menu">
    //               <a href="#">first</a>
    //               <a href="#">second</a>
    //               <a href="#">third</a>
    //               <a href="#">fourt</a>
    //             </div>
    //           </div>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/contact">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    // new navbar
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'gray'}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{fontSize:'25px'}}>
          E'Tax-Consultancy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link style={{fontSize:'18px'}} className="nav-link " aria-current="page" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link style={{fontSize:'18px'}} className="nav-link" to="/itr">
                  ITR
                </Link>
              </li>
              <li className="nav-item">
                <Link  style={{fontSize:'18px'}} className="nav-link" to="/gst">
                  GST
                </Link>
              </li>
              <li className="nav-item">
                <Link  style={{fontSize:'18px'}} className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a style={{fontSize:'18px'}}
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Service
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      GST Registration
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      Income Tax Return
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      TDS Returns
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      Tax Consultancy
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      Compliance Audit
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                      Book keeping
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                    Corparate Registration
                    </Link>
                  </li>
                  <li>
                    <Link style={{fontSize:'15px'}} className="dropdown-item" to="/contact">
                    All others Accounting Service
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
