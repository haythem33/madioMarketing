import React, { Component } from "react";
import "./dashboard.css";
import { compose } from "recompose";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";

class dashboardPage extends Component {
    state = {
        allMessage : null
    }
    componentDidMount() {
        if(this.props.firebase.getUserConnected() !== null) {
            this.props.firebase.getMessage().then((messages) => {
                this.setState({allMessage : messages})
            })
        } else {
           this.props.history.push("/home")
        } 
    }
    signOut() {
        this.props.firebase.doSignOut().then(() => {
            this.props.history.push("/home");
        }).catch(err => {
            throw err;
        })
    }
  render() {
    let messages;
    if(this.state.allMessage !== null && this.state.allMessage.length > 0) {
        messages = this.state.allMessage.map(mess => {
            return(
                <div class="col-lg-4 col-md-6">
                <div class="single-blog-post">
                  <div class="image">
                    <a href="single-blog-1.html" class="d-block">
                      <img src={require("./../../assets/img/madioBack.png")} alt=""/></a>
                    </div>
                    <div class="content">
                      <h3>
                        <a href="single-blog-1.html">
                          {mess.message}
                        </a>
                      </h3>
                      <div class="d-flex align-items-center">
                        <img src={require("./../../assets/img/userDefault.png")} alt=""/>
                          <div class="info">
                            <h5>{mess.email}</h5>
                            <span>{mess.name}</span>
                            <span>{mess.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
            )
        }) 
    } else {
         messages = (
             <div class="col-lg-12">
                 <h1>NO DATA</h1>
             </div>
         )
    }
    return (
    <section class="blog-area bg-f9f9f9 ptb-100">
        <div class="container-fluid">
             <button onClick={() => this.signOut()} class="btn btn-outline-danger float-lg-right">LOG OUt</button>
            <h1 class="text-center">MESSAGES</h1>
            <div class="row">
            {messages}
            </div>
        </div>
    </section>
    );
  }
}
const dashboard = compose(
    withRouter,
    withFirebase
)(dashboardPage)

export default dashboard
