import React, { Component } from "react";
import Navbar from "./../navbar/navbar";
import Footer from "./../footer/footer";
import "./contact.css";
import { compose } from "recompose";
import { withFirebase } from "../firebase";
import { Helmet } from "react-helmet";
class contactForm extends Component {
  state = {
    name : "",
    email : "",
    phone : "",
    message : ""
  }
  onSubmit = event => {
    this.props.firebase.addMessage(this.state).then(() => {
      this.setState({
        name : "",
        email : "",
        phone : "",
        message : ""
      })
      alert("the message was sent")
    }).catch(error => {
      alert(error);
    })
    event.preventDefault();
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    const {name,email,phone,message} = this.state;
    const isInvalid = name === "" || email === "" || phone === "" || message === "";
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8"/>
          <title>contactez nous</title>
          <meta name="title" content="agence marketing digital , tunisie"/>
          <meta name="description" content="contactez nous par Facebook Instagram Email ou par téléphone 
            où à partir du site internet"/>
        </Helmet>
        <Navbar/>
        <section class="page-title-area">
          <div class="container">
            <div class="page-title-content">
              <h1>Contactez Nous</h1>
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
                  <h3>Notre Adresse</h3>
                  <p>Rue des jardin ,Chotrana 2 ,Soukra , Ariana</p>
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
                    Mobile: <a href="tel:+44457895789">(+216) 21056602 - 28403760</a>
                  </p>
                  <p>
                    E-mail: <a href="mailto:madiomarketing@gmail.com">madiomarketing@gmail.com</a>
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
                  <h3>Horaire</h3>
                  <p>Lundi - Samedi: 09:00 - 22:00</p>
                  <p>Dimanche: 10:30 - 20:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="contact-area pb-100">
          <div class="container">
            <div class="section-title">
              <span id="begin" class="sub-title">Entrer en contact</span>
              <h2>
              Prêtes à commencer?<span class="overlay"></span>
              </h2>
              <p>
              Votre adresse email ne sera pas publiée.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="contact-image" data-tilt>
                  <img
                    src={require("./../../assets/img/contact.png")}
                    alt=""
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
                            value={name}
                            onChange={this.onChange}
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
                            value={email}
                            onChange={this.onChange}
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
                            name="phone"
                            value={phone}
                            class="form-control"
                            id="phone_number"
                            onChange={this.onChange}
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
                            value={message}
                            onChange={this.onChange}
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
                        <button disabled={isInvalid} onClick={this.onSubmit} type="submit" class="default-btn">
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
        <Footer/>
      </div>
    );
  }
}
const contact = compose(
  withFirebase
)(contactForm)

export default contact;