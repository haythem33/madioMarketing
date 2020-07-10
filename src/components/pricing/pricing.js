import React from "react";
import "./pricing.css";
import Navbar from "./../navbar/navbar";
import Footer from "./../footer/footer";
import { Link } from "react-router-dom";
export default class pricing extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <section class="page-title-area">
            <div class="container">
                <div class="page-title-content">
                    <h1>Pricing</h1>
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
        <section class="pricing-area bg-f9f9f9 pt-100 pb-70">
            <div class="container">
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
                            <Link to="/contact" class="default-btn">Get Started</Link>
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
        <Footer/>
      </div>
    );
  }
}
