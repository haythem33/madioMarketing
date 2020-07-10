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
                    <h1>tarifs</h1>
                </div>
            </div>
            <div class="shape2"><img src={require("./../../assets/img/shape/shape2.png")} alt=""/></div>
            <div class="shape3"><img src={require("./../../assets/img/shape/shape3.png")} alt=""/></div>
            <div class="shape5"><img src={require("./../../assets/img/shape/shape5.png")} alt=""/></div>
            <div class="shape6"><img src={require("./../../assets/img/shape/shape6.png")} alt=""/></div>
            <div class="shape7"><img src={require("./../../assets/img/shape/shape7.png")} alt=""/></div>
            <div class="shape8"><img src={require("./../../assets/img/shape/shape8.png")} alt=""/></div>
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </section>
        <section id="priceBegin" class="boxes-area pb-70">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-boxes-box">
                            <div class="icon">
                                <i><img src={require("./../../assets/img/services/iconWeb.png")} alt=""/></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Développement Web</a></h3>
                            <p>Que ce soit un site élémentaire ou plus raffiné, nous développons une plateforme web qui vous garantit visibilité, performance et ROI.</p>
                            <Link to="/contact#begin" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Contactez nous <i class="right-icon flaticon-next-button"></i></Link>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6"></div>
                    <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div class="single-boxes-box">
                            <div class="icon">
                                <i><img src={require("./../../assets/img/services/mobileIcon.png")} alt=""/></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                </div>
                            </div>
                            <h3><a href="single-services.html">Développement Mobile</a></h3>
                            <p>Madio Marketing vous propose de développer vos applications mobiles sur mesure afin que, vous profitiez de ce marché.</p>
                            <Link to="/conctact#begin" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Contactez Nous <i class="right-icon flaticon-next-button"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="pricing-area bg-f9f9f9 pt-100 pb-70">
            <div class="container">
            <div class="section-title">
                    <span class="sub-title">tarifs</span>
                    <h2>Marketing Digital</h2>
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
                                <h3>Plan de démarrage</h3>
                            </div>

                            <div class="pricing-features">
                                <ul>
                                    <li>Création page Facebook</li>
                                    <li>+1000 j'aime</li>
                                    <li>filtrage des abonnés</li>
                                    <li>Création publication sponsorisée</li>
                                </ul>
                            </div>

                            <div class="price">
                                  99DT
                                <span>pendant 5 jours</span>
                            </div>

                            <Link to="/contact#begin" class="default-btn">Contactez Nous</Link>
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
                                <h3>Plan d'avance</h3>
                            </div>

                            <div class="pricing-features">
                                <ul>
                                    <li>Création page Facebook</li>
                                    <li>+2000 j'aime</li>
                                    <li>filtrage des abonnés</li>
                                    <li>Création publication sponsorisée</li>
                                </ul>
                            </div>

                            <div class="price">
                                 199DT
                                <span>pendant 7 jours</span>
                            </div>

                            <Link to="/contact#begin" class="default-btn">Contactez Nous</Link>
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
                                <h3>Plan Premium</h3>
                            </div>

                            <div class="pricing-features">
                                <ul>
                                    <li>Création page Facebook</li>
                                    <li>a partir de 4000 j'aime</li>
                                    <li>filtrage des abonnés</li>
                                    <li>Création publication sponsorisée</li>
                                </ul>
                            </div>

                            <div class="price">
                                 350DT
                                <span>a partir de 15 jours</span>
                            </div>

                            <Link to="/contact#begin" class="default-btn">Contactez Nous</Link>
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
                            <img src={require("./../../assets/img/project-start1.png")} alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="project-start-content">
                            <h2>Nous aimons démarrer votre projet avec nous</h2>
                            <p>En quoi pouvons-nous vous aider ?</p>
                            <Link to="/contact#begin" class="default-btn">Commancer</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape2"><img src={require("./../../assets/img/shape/shape2.png")} alt=""/></div>
            <div class="shape3"><img src={require("./../../assets/img/shape/shape3.png")} alt=""/></div>
            <div class="shape5"><img src={require("./../../assets/img/shape/shape5.png")} alt=""/></div>
            <div class="shape6"><img src={require("./../../assets/img/shape/shape6.png")} alt=""/></div>
            <div class="shape7"><img src={require("./../../assets/img/shape/shape7.png")} alt=""/></div>
            <div class="shape13"><img src={require("./../../assets/img/shape/shape13.png")} alt=""/></div>
        </section>
        <Footer/>
      </div>
    );
  }
}
