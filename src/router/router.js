import React from "react";
import Home  from "../components/home/home"
import Contact from "../components/contact/contact"
import About from "../components/about/about";
import Pricing from "../components/pricing/pricing";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import detail from "../components/solution/detail";
export default class router extends React.Component {
    render() {
        return (
         <Router>
             <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/home" component={Home} />
             <Route path="/contact" component={Contact} />
             <Route path="/about" component={About} />
             <Route path="/pricing" component={Pricing} />
             <Route path="/detail" component={detail} />
             </Switch>
         </Router>
        )
    }
}