import React from "react";
import { Link } from "react-router-dom";

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
                  Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida.
                </p>

                <ul class="social-link">
                  <li>
                    <a href="#" class="d-block" target="_blank">
                      <i class="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="d-block" target="_blank">
                      <i class="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="d-block" target="_blank">
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="d-block" target="_blank">
                      <i class="bx bxl-linkedin"></i>
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
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="portfolio-1.html">Portfolio</a>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 col-sm-6">
              <div class="single-footer-widget pl-2">
                <h3>Resources</h3>

                <ul class="footer-links-list">
                  <li>
                    <a href="team-1.html">Team</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="services-1.html">Services</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="blog-1.html">Blog</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-footer-widget">
                <h3>Address</h3>

                <ul class="footer-contact-info">
                  <li>
                    <i class="bx bx-map"></i>175 5th Ave Premium Area, New York,
                    NY 10010, United States
                  </li>
                  <li>
                    <i class="bx bx-phone-call"></i>
                    <a href="tel:+11234567890">+1 (123) 456 7890</a>
                  </li>
                  <li>
                    <i class="bx bx-envelope"></i>
                    <a href="mailto:hello@dibiz.com">hello@dibiz.com</a>
                  </li>
                  <li>
                    <i class="bx bxs-inbox"></i>
                    <a href="tel:+557854578964">+55 785 4578964</a>
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
                  <a target="_blank" href="https://envytheme.com/">
                    EnvyTheme
                  </a>
                </p>
              </div>

              <div class="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="terms-of-service.html">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="shape16">
          <img
            src={require("./../../assets/img/shape/shape16.png")}
            alt="image"
          />
        </div>
      </footer>
    );
  }
}
