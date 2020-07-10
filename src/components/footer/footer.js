import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

export default class footer extends React.Component {
  render() {
    return (
      <footer class="footer-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <a href="index-2.html" class="logo">
                  <img
                    src={require("./../../assets/img/madio.png")}
                    alt="logo"
                  />
                </a>
                <p>
                  Suivez nous sur les réseaux sociaux
                </p>

                <ul class="social-link">
                  <li>
                    <a href="https://www.facebook.com/madiomarketing/" class="d-block" rel="noopener noreferrer" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/madiomarketing/" class="d-block" rel="noopener noreferrer" target="_blank">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="single-footer-widget pl-5">
                <h3>Explore</h3>

                <ul class="footer-links-list">
                  <li>
                    <Link to="/home#homeBegin">Acceuil</Link>
                  </li>
                  <li>
                    <Link to="/about#text">à propos de nous</Link>
                  </li>
                  <li>
                    <Link to="/pricing#priceBegin">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/contact#begin">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h3>Addresse</h3>

                <ul class="footer-contact-info">
                  <li>
                    <i class="bx bx-map"></i>Rue des jardin ,Chotrana 2 ,Soukra , Ariana
                  </li>
                  <li>
                    <i class="bx bx-phone-call"></i>
                    <a href="tel:+11234567890">(+216) 21056602 - 28403760</a>
                  </li>
                  <li>
                    <i class="bx bx-envelope"></i>
                    <a href="mailto:madiomarketing@gmail.com">madiomarketing@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="footer-bottom-area">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <p>
                  <i class="bx bx-copyright"></i>2020 <strong>Dibiz</strong> is
                  Proudly Powered by{" "}
                  <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/madiomarketing/">
                    madioMarketing
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="shape16">
          <img
            src={require("./../../assets/img/shape/shape16.png")}
            alt="shape"
          />
        </div>
      </footer>
    );
  }
}
