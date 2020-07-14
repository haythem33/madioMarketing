import React, { Component } from "react";
import "./signIn.css";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import { compose } from "recompose"

class signInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }
  componentDidMount() {
    if(this.props.firebase.getUserConnected() !== null) {
      this.props.history.push("/dashboard");
    }
  }
  onSubmit = event => {
      const {email , password} = this.state;
      this.props.firebase.ConnectUserWithEmail(email,password).then(() => {
          this.setState({
              email : "",
              password : "",
              error : null
          })
          this.props.history.push("/dashboard")
      }).catch(error => {
        this.setState({ error })
    })
    event.preventDefault();
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
      const {email , password, error} = this.state;
      const isInvalid = password === "" || email === "";
    return (
      <section id="auth" class="profile-authentication-area ptb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 col-md-12">
              <div class="login-form">
                <h2 class="text-center">Login</h2>
                <form onSubmit={this.onSubmit}>
                  <div class="form-group">
                    <label>email</label>
                    <input
                      name="email"
                      value={email}
                      onChange={this.onChange}
                      type="text"
                      class="form-control"
                      placeholder="email"
                    />
                  </div>

                  <div class="form-group">
                    <label>Password</label>
                    <input
                      name="password"
                      value={password}
                      onChange={this.onChange}
                      type="password"
                      class="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div class="row align-items-center">
                    <div class="col-lg-12 col-md-6 col-sm-6 lost-your-password-wrap">
                      <a href="dqs" class="lost-your-password">
                        Lost your password?
                      </a>
                    </div>
                  </div>
                  <button disabled={isInvalid} type="submit">Log In</button>
                  {error && <p>error.message</p>}
                </form>
              </div>
            </div>
            <div class="col-lg-2"></div>
          </div>
        </div>
      </section>
    );
  }
}

const signIn = compose(
    withRouter,
    withFirebase,
)(signInForm)

export default signIn;