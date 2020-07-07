import React from "react"
import { Link } from 'react-router-dom'
import "./home.css"
export default class home extends React.Component {
    render() {
        return(
          <div>
            <div class="navbar-area navbar-color-white">
              <div class="dibiz-responsive-nav">
                <div class="container-fluid">
                    <div class="dibiz-responsive-menu">
                        <div class="logo">
                            <Link to="/home">
                                <img src={require("./../../assets/img/madio.png")} alt="logo"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
              <div class="dibiz-nav">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <Link class="navbar-brand" to="index-2.html">
                            <img src={require("./../../assets/img/madio.png")} alt="logo"/>
                        </Link>

                        <div class="collapse navbar-collapse mean-menu">
                            <ul class="navbar-nav">
                                <li class="nav-item"><Link to="/home" class="nav-link active">Home</Link></li>
                                <li class="nav-item"><a href="#" class="nav-link">Services <i class='bx bx-chevron-down'></i></a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><Link to="/" class="nav-link">Digital Marketing</Link></li>

                                        <li class="nav-item"><Link to="/" class="nav-link">Web Developement</Link></li>

                                        <li class="nav-item"><Link to="/" class="nav-link">Mobile Application</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><Link to="/" class="nav-link">Pricing</Link></li>
                                <li class="nav-item"><Link to="/" class="nav-link">About Us</Link></li>
                                <li class="nav-item"><Link to="/contact" class="nav-link">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            </div>
            <section class="home-wrapper-area">
            <div class="container-fluid">
                <div class="home-slides">
                    <div class="single-banner-item">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12">
                                <div class="banner-content">
                                    <span class="sub-title">Growth Your Business</span>
                                    <h1>We Provide Best Digital Marketing Solutions</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                    <div class="btn-box">
                                        <div class="d-flex align-items-center">
                                            <Link to="contact" class="default-btn">Get Started</Link>
                                            <a href="https://www.youtube.com/watch?v=Y5KCDWi7h9o" target="blank" class="video-btn popup-youtube"><i class="flaticon-play-button"></i> Watch Video</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="banner-image">
                                    <img src={require("./../../assets/img/banner-img2.jpg")} alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape1"><img src={require("./../../assets/img/shape/shape1.png")} alt="image"/></div>
            <div class="shape2"><img src={require("./../../assets/img/shape/shape2.png")} alt="image"/></div>
            <div class="shape3"><img src={require("./../../assets/img/shape/shape3.png")} alt="image"/></div>
            <div class="shape4"><img src={require("./../../assets/img/shape/shape4.png")} alt="image"/></div>
            <div class="shape5"><img src={require("./../../assets/img/shape/shape5.png")} alt="image"/></div>
            <div class="shape6"><img src={require("./../../assets/img/shape/shape6.png")} alt="image"/></div>
            <div class="shape7"><img src={require("./../../assets/img/shape/shape7.png")} alt="image"/></div>
            <div class="shape8"><img src={require("./../../assets/img/shape/shape8.png")} alt="image"/></div>
            <div class="shape13"><img src={require("./../../assets/img/shape/shape13.png")} alt="image"/></div>
            <div class="shape14"><img src={require("./../../assets/img/shape/shape14.png")} alt="image"/></div>
        </section>
            <section class="boxes-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-boxes-box">
                            <div class="icon">
                                <i class="flaticon-research"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Marketing Analysis</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-boxes-box">
                            <div class="icon">
                                <i class="flaticon-speed"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Website Optimization</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div class="single-boxes-box">
                            <div class="icon">
                                <i class="flaticon-email-marketing"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Email Marketing</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section class="about-area pb-100">
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
                                <a href="about-us-2.html" class="default-btn">More About Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape15"><img src={require("./../../assets/img/shape/shape15.png")} alt="image"/></div>
        </section>
            <section class="services-area bg-f9f9f9 pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Services</span>
                    <h2>Let’s Check Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i class="flaticon-megaphone"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Social Media Marketing</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i class="flaticon-keywords"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Keyward Research</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i class="flaticon-content-management"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Content Marketing</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i class="flaticon-ppc"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">PPC Advertising</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i class="flaticon-competitor"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Competitor Research</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i class="flaticon-startup"></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Skyrocketing Growth</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="single-services.html" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Learn More <i class="right-icon flaticon-next-button"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section class="what-we-do-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="what-we-do-content">
                            <span class="sub-title">What We Do</span>
                            <h2>We Help to Website Growth With Next Level Visitor</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            <div class="skills-item">
                                <div class="skills-header">
                                    <h4 class="skills-title">Digital Marketing & SEO</h4>
                                    <div class="skills-percentage">
                                        <div class="count-box">95%</div>
                                    </div>
                                </div>
                                <div class="skills-bar">
                                    <div class="bar-inner"><div class="bar progress-line" data-width="95"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="what-we-do-content-accordion">
                            <ul class="accordion">
                                <li class="accordion-item">
                                    <a class="accordion-title active" href="javascript:void(0)">
                                        <i class="flaticon-plus"></i>
                                        Social Media Optimization
                                    </a>
    
                                    <div class="accordion-content show">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </li>

                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="flaticon-plus"></i>
                                        Content Generation
                                    </a>
    
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </li>
                                <li class="accordion-item">
                                    <a class="accordion-title" href="javascript:void(0)">
                                        <i class="flaticon-plus"></i>
                                        Pay Per Click Services
                                    </a>
    
                                    <div class="accordion-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section class="feedback-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="feedback-image">
                            <img src={require("./../../assets/img/feedback-img1.jpg")} alt="image"/>
                            <img src={require("./../../assets/img/feedback-img2.jpg")} alt="image"/>
                            <img src={require("./../../assets/img/feedback-img3.jpg")} alt="image"/>
                            <img src={require("./../../assets/img/feedback-img4.jpg")} alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="feedback-content">
                            <span class="sub-title">Feedback</span>
                            <h2>What Our Clients Are Saying?</h2>

                            <div class="feedback-slides owl-carousel owl-theme">
                                <div class="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div class="client-info">
                                        <div class="d-flex align-items-center">
                                            <img src={require("./../../assets/img/user1.jpg")} alt="image"/>
                                            <div class="title">
                                                <h3>John Smith</h3>
                                                <span>Python Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div class="client-info">
                                        <div class="d-flex align-items-center">
                                            <img src={require("./../../assets/img/user2.jpg")} alt="image"/>
                                            <div class="title">
                                                <h3>Sarah Taylor</h3>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div class="client-info">
                                        <div class="d-flex align-items-center">
                                            <img src={require("./../../assets/img/user3.jpg")} alt="image"/>
                                            <div class="title">
                                                <h3>James Anderson</h3>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape16"><img src={require("./../../assets/img/shape/shape16.png")} alt="image"/></div>
        </section>
            <section class="pricing-area bg-f9f9f9 pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Pricing</span>
                    <h2>Our Flexible Pricing Plan</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="pricing-header">
                                <div class="icon">
                                    <i class="flaticon-paper-plane"></i>
                                    <div class="circles-box">
                                        <div class="circle-one"></div>
                                    </div>
                                </div>
                                <h3>Starter Plan</h3>
                            </div>

                            <div class="pricing-features">
                                <ul>
                                    <li>10GB Bandwidth Internet</li>
                                    <li>Business & Financ Analysing</li>
                                    <li>25 Social Media Reviews</li>
                                    <li>Customer Managemet</li>
                                    <li>24/7 Support</li>
                                </ul>
                            </div>

                            <div class="price">
                                $49.99
                                <span>Per Month</span>
                            </div>

                            <a href="#" class="default-btn">Book Now</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-pricing-box">
                            <div class="pricing-header">
                                <div class="icon">
                                    <i class="flaticon-jigsaw"></i>
                                    <div class="circles-box">
                                        <div class="circle-one"></div>
                                    </div>
                                </div>
                                <h3>Advance Plan</h3>
                            </div>

                            <div class="pricing-features">
                                <ul>
                                    <li>15GB Bandwidth Internet</li>
                                    <li>Business & Financ Analysing</li>
                                    <li>30 Social Media Reviews</li>
                                    <li>Customer Managemet</li>
                                    <li>24/7 Support</li>
                                </ul>
                            </div>

                            <div class="price">
                                $69.99
                                <span>Per Month</span>
                            </div>

                            <a href="#" class="default-btn">Book Now</a>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div class="single-pricing-box">
                            <div class="pricing-header">
                                <div class="icon">
                                    <i class="flaticon-diamond"></i>
                                    <div class="circles-box">
                                        <div class="circle-one"></div>
                                    </div>
                                </div>
                                <h3>Premium Plan</h3>
                            </div>

                            <div class="pricing-features">
                                <ul>
                                    <li>50GB Bandwidth Internet</li>
                                    <li>Business & Financ Analysing</li>
                                    <li>35 Social Media Reviews</li>
                                    <li>Customer Managemet</li>
                                    <li>24/7 Support</li>
                                </ul>
                            </div>

                            <div class="price">
                                $99.99
                                <span>Per Month</span>
                            </div>

                            <a href="#" class="default-btn">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section class="project-start-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="project-start-image">
                            <img src={require("./../../assets/img/project-start1.png")} alt="image"/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="project-start-content">
                            <span class="sub-title">Get Started</span>
                            <h2>We Like to Start Your Project With Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            <a href="contact.html" class="default-btn">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape2"><img src={require("./../../assets/img/shape/shape2.png")} alt="image"/></div>
            <div class="shape3"><img src={require("./../../assets/img/shape/shape3.png")} alt="image"/></div>
            <div class="shape5"><img src={require("./../../assets/img/shape/shape5.png")} alt="image"/></div>
            <div class="shape6"><img src={require("./../../assets/img/shape/shape6.png")} alt="image"/></div>
            <div class="shape7"><img src={require("./../../assets/img/shape/shape7.png")} alt="image"/></div>
            <div class="shape13"><img src={require("./../../assets/img/shape/shape13.png")} alt="image"/></div>
        </section>
            <footer class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <a href="index-2.html" class="logo">
                                <img src={require("./../../assets/img/madio.png")} alt="logo"/>
                            </a>
                            <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                            <ul class="social-link">
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-facebook'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-twitter'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-instagram'></i></a></li>
                                <li><a href="#" class="d-block" target="_blank"><i class='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget pl-5">
                            <h3>Explore</h3>

                            <ul class="footer-links-list">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us-1.html">About</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="portfolio-1.html">Portfolio</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 col-sm-6">
                        <div class="single-footer-widget pl-2">
                            <h3>Resources</h3>

                            <ul class="footer-links-list">
                                <li><a href="team-1.html">Team</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="services-1.html">Services</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="blog-1.html">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-footer-widget">
                            <h3>Address</h3>

                            <ul class="footer-contact-info">
                                <li><i class='bx bx-map'></i>175 5th Ave Premium Area, New York, NY 10010, United States</li>
                                <li><i class='bx bx-phone-call'></i><a href="tel:+11234567890">+1 (123) 456 7890</a></li>
                                <li><i class='bx bx-envelope'></i><a href="mailto:hello@dibiz.com">hello@dibiz.com</a></li>
                                <li><i class='bx bxs-inbox'></i><a href="tel:+557854578964">+55 785 4578964</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom-area">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <p><i class='bx bx-copyright'></i>2020 <strong>Dibiz</strong> is Proudly Powered by <a target="_blank" href="https://envytheme.com/">EnvyTheme</a></p>
                        </div>

                        <div class="col-lg-6 col-md-6">
                            <ul>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-of-service.html">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape16"><img src={require("./../../assets/img/shape/shape16.png")} alt="image"/></div>
        </footer>
          </div>
        ) 
    }
};