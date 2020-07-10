import React from "react";
import "./about.css";
import Navbar from "./../navbar/navbar";
import Footer from "./../footer/footer";
export default class about extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
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
        <Footer/>
      </div>
    );
  }
}
