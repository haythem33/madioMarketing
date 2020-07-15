import React from "react"
import { HashLink as Link } from 'react-router-hash-link';
import "./home.css"
import Navbar from "./../navbar/navbar";
import Footer from "./../footer/footer";
import { Helmet } from "react-helmet";
export default class home extends React.Component {
    render() {
        return(
          <div>
            <Helmet>
               <meta charSet="utf-8"/>
               <title>Acceuil</title>
               <meta name="title" content="agence marketing digital , tunisie"/>
               <meta name="description" content="l'agence de marketing la plus innovante en tunisie 
                avec les prix les plus bas on assure toutes les solution pour l'evolution de votre entreprise 
                a partir de la création et le sponsoring de votre page Facebook ou instagram jusqu'a la création et le référencement de votre site internet ou application mobile , on vous accompagne pendant la promotion de votre entreprise ou idée "/>
            </Helmet>
            <Navbar/>
            <section class="home-wrapper-area">
            <div id="homeBegin" class="container-fluid">
                <div class="home-slides">
                    <div class="single-banner-item">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-12">
                                <div class="banner-content">
                                    <span class="sub-title">Faites connaitre votre entreprise</span>
                                    <h1>Nous fournissons</h1>
                                    <h1>les  meilleures solutions de marketing digital</h1>
                                    <div class="btn-box">
                                        <div class="d-flex align-items-center">
                                            <Link to="contact" class="default-btn">Démmarrer</Link>
                                            <a href="https://www.youtube.com/watch?v=WliiXqISY-w" target="blank" class="video-btn popup-youtube"><i class="flaticon-play-button"></i> Watch Video</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="banner-image">
                                    <img src={require("./../../assets/img/test1.jpg")} alt="test"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape1"><img src={require("./../../assets/img/shape/shape1.png")} alt="shape"/></div>
            <div class="shape2"><img src={require("./../../assets/img/shape/shape2.png")} alt="shape"/></div>
            <div class="shape3"><img src={require("./../../assets/img/shape/shape3.png")} alt="shape"/></div>
            <div class="shape4"><img src={require("./../../assets/img/shape/shape4.png")} alt="shape"/></div>
            <div class="shape5"><img src={require("./../../assets/img/shape/shape5.png")} alt="shape"/></div>
            <div class="shape6"><img src={require("./../../assets/img/shape/shape6.png")} alt="shape"/></div>
            <div class="shape7"><img src={require("./../../assets/img/shape/shape7.png")} alt="shape"/></div>
            <div class="shape8"><img src={require("./../../assets/img/shape/shape8.png")} alt="shape"/></div>
            <div class="shape13"><img src={require("./../../assets/img/shape/shape13.png")} alt="shape"/></div>
            <div class="shape14"><img src={require("./../../assets/img/shape/shape14.png")} alt="shape"/></div>
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
                            <h3><a href="single-services.html">Marketing Digital</a></h3>
                            <p>Nous faisons tout pour que les marques évoluent, et aidons les entreprises à établir des liens forts avec leurs publics.</p>
                            <Link to="/detail#marketing" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> En Savoir Plus <i class="right-icon flaticon-next-button"></i></Link>
                        </div>
                    </div>

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
                            <Link to="/detail#web" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> En Savoir Plus <i class="right-icon flaticon-next-button"></i></Link>
                        </div>
                    </div>

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
                            <Link to="/detail#mobile" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> En Savoir Plus <i class="right-icon flaticon-next-button"></i></Link>
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
                            <img src={require("./../../assets/img/about-img2.png")} alt=""/>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="about-content">
                            <div class="text">
                                <h2>Développement et marketing digital sans limites</h2>
                                <p>Chez MadioMarketing, nous croyons fortement à la puissance de la pensée. Nous sommes basés à Tunis, mais nous travaillons avec des clients du monde entier.</p>
                                <Link to="/about#text" class="default-btn">En Savoir Plus</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape15"><img src={require("./../../assets/img/shape/shape15.png")} alt=""/></div>
        </section>
            <section class="services-area bg-f9f9f9 pt-100 pb-70">
            <div class="container">
                <div class="section-title">
                    <span class="sub-title">Services</span>
                    <h2>Vérifions nos services</h2>
                </div>

                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i><img src={require("./../../assets/img/services/facebookIcon.png")} alt="facebookIcon"/></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><Link to="detail#marketing">Création page facebook</Link></h3>
                            <p>Facebook continue d’être le plus puissant réseau social pour mettre en place une présence entreprise. La question ne se pose pas, il est incontournable pour une entreprise d’être présente sur ce réseau social.</p>
                            <Link to="/contact#begin" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Contactez Nous <i class="right-icon flaticon-next-button"></i></Link>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i><img src={require("./../../assets/img/services/youtubeIcon.png")} alt="youtubeIcon"/></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><Link to="/detail#marketing">Publicité Youtube</Link></h3>
                            <p>Utilisez les annonces YouTube pour atteindre des clients potentiels et les amener à agir lorsqu'ils regardent ou recherchent des vidéos sur YouTube. Vous ne paierez que s'ils manifestent un intérêt pour votre annonce.</p>
                            <Link to="/contact#begin" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Contactez Nous <i class="right-icon flaticon-next-button"></i></Link>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i><img src={require("./../../assets/img/services/spoIcon.png")} alt="sponsoringIcon"/></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><Link to="/detail#marketing">Sponsoring</Link></h3>
                            <p>La publicité sur les réseaux sociaux est aujourd’hui indispensable. pour bénéficier d’une plus grande notoriété et pour toucher une large cible qualifiée. En utilisant les différentes régies intégrées à chaque réseau social.</p>
                            <Link to="/contact#begin" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Contactez Nous <i class="right-icon flaticon-next-button"></i></Link>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i><img src={require("./../../assets/img/services/designIcon.png")} alt="designIcon"/></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><Link to="/detail#marketing">identité visuelle</Link></h3>
                            <p>Votre logo incarne votre image et représente le socle de votre identité visuelle. L'objectif principal est d'amener le public à mémoriser rapidement et efficacement cette image graphique symbolisant votre entreprise.</p>
                            <Link to="/contact#begin" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Contactez Nous <i class="right-icon flaticon-next-button"></i></Link>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-6">
                        <div class="single-services-box">
                            <div class="icon">
                                <i><img src={require("./../../assets/img/services/siteIcon.png")} alt=""/></i>
                                <div class="circles-box">
                                    <div class="circle-one"></div>
                                    <div class="circle-two"></div>
                                </div>
                            </div>
                            <h3><Link to="/detail#web">Site Web</Link></h3>
                            <p>Un vrai espace de communication ! Il est important d'avoir un site internet dans la mesure où il apporte un facteur de crédibilité. Avoir une vitrine sur le web bien tenu, facile à visiter rend votre produit très crédible.</p>
                            <Link to="/contact#begin" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Contactez Nous <i class="right-icon flaticon-next-button"></i></Link>
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
                            <h3><Link to="/detail#web">Référencement Organique</Link></h3>
                            <p>Le SEO est utile pour tout type de business Quelle que soit la taille de l'entreprise,petite ou grande, quel que soit le secteur, le SEO permet à une entreprise d'optimiser les pages de son site afin qu'elle soit visible par les internautes.</p>
                            <Link to="/contact#begin" class="learn-more-btn"><i class="left-icon flaticon-next-button"></i> Contactez Nous <i class="right-icon flaticon-next-button"></i></Link>
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

                    <div class="col-lg-6 col-md-12">
                        <div class="feedback-content">
                            
                            <h2>Faites connaitre votre marque avec MadioMarketing</h2>
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
            <Footer/>
          </div>
        ) 
    }
};