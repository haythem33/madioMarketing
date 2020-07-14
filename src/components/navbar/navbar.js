import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css"
export default class navbar extends React.Component {
  render() {
    return (
      <nav  class="navbar navbar-expand-lg navbar-dark scrolling-navbar">
      <div class="container">
      <Link class="navbar-brand" to="/home">
          <img
            src={require("./../../assets/img/madio.png")}
            alt="logo"
          />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link to="/home" class="nav-link active">
              Acceuil
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link to="/detail" class="nav-link dropdown-toggle">
              Services 
            </Link>
            <ul class="dropdown-menu">
              <li class="nav-item" style={{paddingTop : 2,paddingBottom: 2}}>
                <Link to="/detail#marketing" class="nav-link" style={{color : "black"}}>
                  Marketing Digital
                </Link>
              </li>

              <li class="nav-item" style={{paddingTop : 2,paddingBottom: 2}}>
                <Link to="/detail#web" class="nav-link" style={{color : "black"}}>
                  Dévelopement Web
                </Link>
              </li>

              <li class="nav-item" style={{paddingTop : 2,paddingBottom: 2}}>
                <Link to="/detail#mobile" class="nav-link" style={{color : "black"}}>
                  Application Mobile
                </Link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <Link to="/pricing" class="nav-link">
              Tarifs
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/about" class="nav-link">
              à propos de nous
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/contact" class="nav-link">
              Contact
            </Link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
    
    );
  }
}
 