import React from "react";
import "./about.css";
import Navbar from "./../navbar/navbar";
import Footer from "./../footer/footer";
import {Helmet} from "react-helmet";
export default class about extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>à propos de nous</title>
            <meta name="title" content="agence marketing digital , tunisie"/>
            <meta name="description" content="agence de marketing digital installée en tunisie , 
            mais nous travaillons avec des clients du monde entier,
            notre objectif c'est de faire connaitre 
            les petites et les nouvelles entreprises 
            ainsi que les idées innovantes,créativité innovation c'est notre marque"/>
        </Helmet>
        <Navbar/>
        <section class="page-title-area page-title-style-two">
            <div class="container">
                <div class="page-title-content">
                    <h1>A Propos de Nous</h1>
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
        <section class="about-area ptb-100">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="about-img">
                            <img src={require("./../../assets/img/about-img2.png")} alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div id="text" class="about-content">
                            <div class="text">
                                <h2>Profitez d'une expertise en digital à service complet</h2>
                                <p>Nos experts en  Digital vous accompagnent dans votre stratégie de visibilité et de notoriété sur le Web afin d’attirer une audience ciblée convertible en prospects. Confiez votre présence digitale à MadioMarketing !</p>
                                <p>Chez MadioMarketing chaque client est UNIQUE. Notre agence de marketing digital s’investit à fond avec vous pour bien comprendre vos besoins et déterminer les traits de communication digitale les plus efficaces. Quel que soit votre projet, notre priorité est de définir ensemble des objectifs précis et mesurables.</p>
                                <ul class="features-list">
                                    <li><i class="flaticon-speed"></i> MadioMarketing conjugue l’ensemble des compétences nécessaires afin de vous accompagner dans l’élaboration et la réalisation de votre stratégie de marketing digital.</li>
                                    <li><i class="flaticon-speed"></i> Une équipe impliquée, créative, génératrice de solutions et prête à relever les défis. Chaque projet est appréhendé de la même façon : passion, rigueur et satisfaction client.</li>
                                    <li><i class="flaticon-speed"></i> L'imagination n’a pas de limite chez Nous et la créativité est l’essence de notre quotidien.</li>
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
                    <span class="sub-title">Notre Histoire</span>
                    <h2>L'histoire commence en 2019</h2>
                </div>

                <ol class="timeline history-timeline">
                    <li class="timeline-block">
                        <div class="timeline-date">
                            <span>2019</span>
                            juin 19
                            <sup>th</sup>
                        </div>

                        <div class="timeline-icon">
                            <span class="dot-badge"></span>
                        </div>

                        <div class="timeline-content">
                            <div class="row align-items-center">
                                <div class="col-lg-7 col-md-12">
                                    <div class="content">
                                        <h3>fondation</h3>
                                        <p>Depuis la fondation de notre entreprise, des qualités telles que la force, la confiance, la conviction et bien d'autres ont toujours été la marque de MadioMarketing.</p>
                                    </div>
                                </div>

                                <div class="col-lg-5 col-md-12">
                                    <div class="image">
                                        <img src={require("./../../assets/img/history/history-img1.jpg")} alt=""/>
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
