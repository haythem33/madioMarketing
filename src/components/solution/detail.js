import React from "react";
import "./solution.css";
import Navbar from "./../navbar/navbar";
import Footer from "./../footer/footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default class detail extends React.Component {
  render() {
    return (
      <div>
          <Helmet>
              <meta charSet="utf-8"/>
              <title>services</title>
              <meta name="title" content="agence marketing digital , tunisie"/>
              <meta name="description" content="on propose des services divers, on assure la création et le sponsoring des pages Facebook et instagram ainsi que la création des sites web et leur référencement , et on crée aussi des applications mobiles personnalisées , notre équipe qualifée prend en charge la mise en place des solutions créatives "/>
          </Helmet>
        <Navbar />
        <section class="page-title-area">
          <div class="container">
            <div class="page-title-content">
              <h1>Services Details</h1>
            </div>
          </div>

          <div class="shape2">
            <img
              src={require("./../../assets/img/shape/shape2.png")}
              alt=""
            />
          </div>
          <div class="shape3">
            <img
              src={require("./../../assets/img/shape/shape3.png")}
              alt=""
            />
          </div>
          <div class="shape5">
            <img
              src={require("./../../assets/img/shape/shape5.png")}
              alt=""
            />
          </div>
          <div class="shape6">
            <img
              src={require("./../../assets/img/shape/shape6.png")}
              alt=""
            />
          </div>
          <div class="shape7">
            <img
              src={require("./../../assets/img/shape/shape7.png")}
              alt=""
            />
          </div>
          <div class="shape8">
            <img
              src={require("./../../assets/img/shape/shape8.png")}
              alt=""
            />
          </div>
          <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </section>
        <section class="overview-area ptb-100">
            <div class="container">
                <div class="overview-box">
                    <div class="overview-content">
                        <div id="marketing" class="content">
                            <span class="sub-title">Marketing Digital</span>
                            <h2>Solutions créatives, résultats créatifs</h2>
                            <p>Nous pensons que l'interaction avec la marque est la clé de la communication. De vraies innovations et une expérience client positive sont au cœur d'une communication réussie.</p>
                            <div  class="features-text">
                                <h4>Les réseaux sociaux</h4>
                                <p>Les réseaux sociaux deviennent une tendance incontournable pour les entreprises. Ils manifestent une importance indéniable dans le succès de l’entreprise en matière de prospection de client. Particulièrement pour Facebook, les entreprises ne peuvent pas s’en passer. Bien que cette plateforme soit fréquemment utilisée par les entreprises, peu d’entre elles arrivent à comprendre les avantages procurés par l’un des plus importants réseaux sociaux dans le monde.</p>
                            </div>
                            <ul class="features-list">
                                <li><span><i class='bx bx-check'></i> Création page Facebook</span></li>
                                <li><span><i class='bx bx-check'></i> Sponsoring page Facebook</span></li>
                                <li><span><i class='bx bx-check'></i> Publicité Youtube</span></li>
                                <li><span><i class='bx bx-check'></i> Identité Visuelle</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="overview-image">
                        <div class="image">
                        <img src={require("./../../assets/img/services/services-img1.png")} alt=""/>
                        </div>
                    </div>
                </div>

                <div class="overview-box">
                    <div class="overview-image">
                        <div class="image">
                            
                            <img src={require("./../../assets/img/seo-analysis.png")} alt=""/>
                        </div>
                    </div>
                    
                    <div class="overview-content">
                        <div id="web" class="content right-content">
                            <span class="sub-title">Développement Web</span>
                            <h2>Résoudre les problèmes, construire des marques</h2>
                            <p>Avoir un site web est de nos jours est un « must » pour les entreprises. En effet, il permet à ces dernières de lancer une immense campagne publicitaire sur internet qui reste fonctionnelle 24 h/24 et 7jours/7 et qui utilise tous les supports possibles : textes, images, sons, vidéos. Ces caractéristiques sont uniques au site web, qui représente le vecteur de communication web le plus efficace et qui présente le meilleur retour sur investissement.</p>
                            <ul class="features-list">
                                <li><span><i class='bx bx-check'></i> Création de Site Web</span></li>
                                <li><span><i class='bx bx-check'></i> Référencement Organique</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="overview-box">
                    <div class="overview-content">
                        <div id="mobile" class="content">
                            <span class="sub-title">Développement Mobile</span>
                            <h2>L'innovation distingue le leader du suiveur</h2>
                            <p>Les usages mobiles ont évolués et l'application s'impose c omme élément incontournable dans la réponse au besoin des utilisateurs d'avoir accès à n'importe quel moment à n'importe quel contenu. L'application mobile vous permet de développer vos ventes grâce à un nouveau canal de communication fortement plébiscité.</p>
                            <ul class="features-list">
                                <li><span><i class='bx bx-check'></i> Création application android</span></li>
                                <li><span><i class='bx bx-check'></i> Création application ios</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="overview-image">
                        <div class="image">
                        <img src={require("./../../assets/img/services/services-img2.png")} alt=""/>
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
                            <img src={require("./../../assets/img/madioBack.png")} alt=""/>
                            <img src={require("./../../assets/img/services/markIcon.png")} alt=""/>
                            <img src={require("./../../assets/img/services/webIcon.png")} alt=""/>
                            <img src={require("./../../assets/img/services/iconMobile.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape16"><img src={require("./../../assets/img/shape/shape16.png")} alt=""/></div>
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
                            <Link to="/contact#begin" class="default-btn">Commencer</Link>
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
        <Footer />
      </div>
    );
  }
}
