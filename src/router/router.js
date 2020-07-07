import React from "react";
import  Home  from "../components/home/home"
import  Contact  from "../components/contact/contact"
import { Route, BrowserRouter as Router } from 'react-router-dom'
export default class router extends React.Component {
    render() {
        return (
         <Router>
             <Route exact path="/" component={Home} />
             <Route path="/home" component={Home} />
             <Route path="/contact" component={Contact} />
         </Router>
        )
    }
}