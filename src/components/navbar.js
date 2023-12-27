import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { NavLink } from "react-router-dom";
export default function Navbar() {
        
    return(
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-5 text-uppercase" >
            <div className="container-fluid">
            <NavLink className="navbar-brand" to ="/">
            <div className="display-6">FC</div>
            </NavLink>
            <button 
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className='collapse navbar-collapse' id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to ="/blog">
                        Blog
                    </NavLink>
                    </li>
                    < li className="nav-item">
                        <NavLink className="nav-link" to="/logIn"/* à modifier lors de notre authentificateur final*/>
                            Log in
                        </NavLink>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
    );
    
};