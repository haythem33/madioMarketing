import React from "react";
import { Link } from 'react-router-dom'
import "./contact.css";
export default class contact extends React.Component {
  render() {
    return (
      <div>
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
                  <img
                    src={require("./../../assets/img/madio.png")}
                    alt="logo"
                  />
                </Link>

                <div class="collapse navbar-collapse mean-menu">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/home" class="nav-link">
                        Home
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/" class="nav-link">
                        Services <i class="bx bx-chevron-down"></i>
                      </Link>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <Link to="/" class="nav-link">
                            Digital Marketing
                          </Link>
                        </li>

                        <li class="nav-item">
                          <Link to="/" class="nav-link">
                            Web Developement
                          </Link>
                        </li>

                        <li class="nav-item">
                          <Link to="/" class="nav-link">
                            Mobile Application
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <Link to="/" class="nav-link">
                        Pricing
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/" class="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to="/contact" class="nav-link active">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <section class="page-title-area">
          <div class="container">
            <div class="page-title-content">
              <h1>Contact Us</h1>
            </div>
          </div>

          <div class="shape2">
            <img
              src={require("./../../assets/img/shape/shape2.png")}
              alt="image"
            />
          </div>
          <div class="shape3">
            <img
              src={require("./../../assets/img/shape/shape3.png")}
              alt="image"
            />
          </div>
          <div class="shape5">
            <img
              src={require("./../../assets/img/shape/shape5.png")}
              alt="image"
            />
          </div>
          <div class="shape6">
            <img
              src={require("./../../assets/img/shape/shape6.png")}
              alt="image"
            />
          </div>
          <div class="shape7">
            <img
              src={require("./../../assets/img/shape/shape7.png")}
              alt="image"
            />
          </div>
          <div class="shape8">
            <img
              src={require("./../../assets/img/shape/shape8.png")}
              alt="image"
            />
          </div>
          <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </section>
        <section class="contact-info-area pt-100 pb-70">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="contact-info-box">
                  <div class="back-icon">
                    <i class="bx bx-map"></i>
                  </div>
                  <div class="icon">
                    <i class="bx bx-map"></i>
                  </div>
                  <h3>Our Address</h3>
                  <p>175 5th Ave, New York, NY 10010, United States</p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="contact-info-box">
                  <div class="back-icon">
                    <i class="bx bx-phone-call"></i>
                  </div>
                  <div class="icon">
                    <i class="bx bx-phone-call"></i>
                  </div>
                  <h3>Contact</h3>
                  <p>
                    Mobile: <a href="tel:+44457895789">(+44) - 45789 - 5789</a>
                  </p>
                  <p>
                    E-mail: <a href="mailto:hello@dibiz.com">hello@dibiz.com</a>
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                <div class="contact-info-box">
                  <div class="back-icon">
                    <i class="bx bx-time-five"></i>
                  </div>
                  <div class="icon">
                    <i class="bx bx-time-five"></i>
                  </div>
                  <h3>Hours of Operation</h3>
                  <p>Monday - Friday: 09:00 - 20:00</p>
                  <p>Sunday & Saturday: 10:30 - 22:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="contact-area pb-100">
          <div class="container">
            <div class="section-title">
              <span class="sub-title">Get in Touch</span>
              <h2>
                Ready to Get Started?<span class="overlay"></span>
              </h2>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
            </div>

            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="contact-image" data-tilt>
                  <img
                    src={require("./../../assets/img/contact.png")}
                    alt="image"
                  />
                </div>
              </div>

              <div class="col-lg-6 col-md-12">
                <div class="contact-form">
                  <form id="contactForm">
                    <div class="row">
                      <div class="col-lg-12 col-md-6">
                        <div class="form-group">
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            id="name"
                            required
                            data-error="Please enter your name"
                            placeholder="Your name"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-6">
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            id="email"
                            required
                            data-error="Please enter your email"
                            placeholder="Your email address"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            name="phone_number"
                            class="form-control"
                            id="phone_number"
                            required
                            data-error="Please enter your phone number"
                            placeholder="Your phone number"
                          />
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <div class="form-group">
                          <textarea
                            name="message"
                            id="message"
                            class="form-control"
                            cols="30"
                            rows="6"
                            required
                            data-error="Please enter your message"
                            placeholder="Write your message..."
                          ></textarea>
                          <div class="help-block with-errors"></div>
                        </div>
                      </div>

                      <div class="col-lg-12 col-md-12">
                        <button type="submit" class="default-btn">
                          Send Message
                        </button>
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="single-footer-widget">
                  <Link to="/home" class="logo">
                    <img
                      src={require("./../../assets/img/madio.png")}
                      alt="logo"
                    />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Quis
                    ipsum suspendisse ultrices gravida.
                  </p>

                  <ul class="social-link">
                    <li>
                      <a href="https://www.facebook.com/madiomarketing/" class="d-block" target="_blank">
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
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about-us-1.html">About</a>
                    </li>
                    <li>
                      <a href="pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="portfolio-1.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
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
                      <i class="bx bx-map"></i>175 5th Ave Premium Area, New
                      York, NY 10010, United States
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
                    <i class="bx bx-copyright"></i>2020 <strong>Dibiz</strong>{" "}
                    is Proudly Powered by{" "}
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
      </div>
    );
  }
}
