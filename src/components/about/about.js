import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

export default class about extends React.Component {
  render() {
    return (
      <div>
        <div class="navbar-area navbar-color-white">
          <div class="dibiz-responsive-nav">
            <div class="container">
              <div class="dibiz-responsive-menu">
                <div class="logo">
                  <Link to="/home">
                    <img src={require("./../../assets/img/madio.png")} alt="logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div class="dibiz-nav">
            <div class="container">
              <nav class="navbar navbar-expand-md navbar-light">
                <Link class="navbar-brand" to="/home">
                  <img src={require("./../../assets/img/madio.png")} alt="logo" />
                </Link>

                <div class="collapse navbar-collapse mean-menu">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <Link to="/home" class="nav-link">
                        Home
                      </Link>
                    </li>

                    <li class="nav-item">
                      <Link to="#" class="nav-link">
                        Services <i class="bx bx-chevron-down"></i>
                      </Link>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <Link to="/" class="nav-link">
                            Marketing Digital
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
                      <Link to="/about" class="nav-link active">
                        About Us
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
        <section class="page-title-area page-title-style-two">
            <div class="container">
                <div class="page-title-content">
                    <h1>About Us</h1>
                </div>
            </div>

            <div class="shape2"><img src={require("./../../assets/img/shape/shape2.png")} alt="image"/></div>
            <div class="shape3"><img src={require("./../../assets/img/shape/shape3.png")} alt="image"/></div>
            <div class="shape5"><img src={require("./../../assets/img/shape/shape5.png")} alt="image"/></div>
            <div class="shape6"><img src={require("./../../assets/img/shape/shape6.png")} alt="image"/></div>
            <div class="shape7"><img src={require("./../../assets/img/shape/shape7.png")} alt="image"/></div>
            <div class="shape8"><img src={require("./../../assets/img/shape/shape8.png")} alt="image"/></div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
        <section class="about-area ptb-100">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-img">
                            <img src={require("./../../assets/img/about-img2.png")} alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="about-content">
                            <div class="text">
                                <span class="sub-title">About Us</span>
                                <h2>Enjoy Full-Service Digital Marketing Expertise</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <ul class="features-list">
                                    <li><i class="flaticon-speed"></i> Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz.</li>
                                    <li><i class="flaticon-speed"></i> Over 300,000 people have already gained this qualification, and are using it to develop and improve their careers.</li>
                                    <li><i class="flaticon-speed"></i> In this introduction to Analytics, we'll show you how to collect and analyse user data and turn it into actionable insights.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="history-area ptb-100 bg-f9f9f9">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Our History</span>
                    <h2>History Begins In 2010</h2>
                </div>

                <ol class="timeline history-timeline">
                    <li class="timeline-block">
                        <div class="timeline-date">
                            <span>2010</span>
                            February 20
                            <sup>th</sup>
                        </div>

                        <div class="timeline-icon">
                            <span class="dot-badge"></span>
                        </div>

                        <div class="timeline-content">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-12">
                                    <div class="content">
                                        <h3>Founded</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div class="col-lg-5 col-md-12">
                                    <div class="image">
                                        <img src={require("./../../assets/img/history/history-img1.jpg")} alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="timeline-block">
                        <div class="timeline-date">
                            <span>2013</span>
                            January 14
                            <sup>th</sup>
                        </div>

                        <div class="timeline-icon">
                            <span class="dot-badge"></span>
                        </div>

                        <div class="timeline-content">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-12">
                                    <div class="content">
                                        <h3>Global Success</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div class="col-lg-5 col-md-12">
                                    <div class="image">
                                        <img src={require("./../../assets/img/history/history-img2.jpg")} alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="timeline-block">
                        <div class="timeline-date">
                            <span>2016</span>
                            March 25
                            <sup>th</sup>
                        </div>

                        <div class="timeline-icon">
                            <span class="dot-badge"></span>
                        </div>

                        <div class="timeline-content">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-12">
                                    <div class="content">
                                        <h3>Founded Data Office</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div class="col-lg-5 col-md-12">
                                    <div class="image">
                                        <img src={require("./../../assets/img/history/history-img3.jpg")} alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li class="timeline-block">
                        <div class="timeline-date">
                            <span>2020</span>
                            December 10
                            <sup>th</sup>
                        </div>

                        <div class="timeline-icon">
                            <span class="dot-badge"></span>
                        </div>

                        <div class="timeline-content">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-12">
                                    <div class="content">
                                        <h3>International Award</h3>
                                        <p>Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.</p>
                                    </div>
                                </div>

                                <div class="col-lg-5 col-md-12">
                                    <div class="image">
                                        <img src={require("./../../assets/img/history/history-img4.jpg")} alt="image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ol>
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
