import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
export default class navbar extends React.Component {
  render() {
    return (
      <div class="navbar-area navbar-color-white">
        <div class="dibiz-responsive-nav">
          <div class="container-fluid">
            <div class="dibiz-responsive-menu">
              <div class="logo">
                <Link to="/home">
                  <img
                    src={require("./../../assets/img/madio.png")}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="dibiz-nav">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-md navbar-light">
              <Link class="navbar-brand" to="/home">
                <img src={require("./../../assets/img/madio.png")} alt="logo" />
              </Link>

              <div class="collapse navbar-collapse mean-menu">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/home" class="nav-link active">
                      Acceuil
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/detail" class="nav-link">
                      Services <i class="bx bx-chevron-down"></i>
                    </Link>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <Link to="/detail#marketing" class="nav-link">
                          Marketing Digital
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/detail#web" class="nav-link">
                          Dévelopement Web
                        </Link>
                      </li>

                      <li class="nav-item">
                        <Link to="/detail#mobile" class="nav-link">
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
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
