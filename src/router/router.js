import React from "react";
import Home  from "../components/home/home"
import Contact from "../components/contact/contact"
import About from "../components/about/about";
import Pricing from "../components/pricing/pricing";
import {HashRouter , Route, Switch } from 'react-router-dom'
import detail from "../components/solution/detail";
import signIn from "../components/admin/signIn";
export default class router extends React.Component {
    render() {
        return (
         <HashRouter basename="/">
             <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/home" component={Home} />
             <Route path="/contact" component={Contact} />
             <Route path="/about" component={About} />
             <Route path="/pricing" component={Pricing} />
             <Route path="/detail" component={detail} />
             <Route path={["/haythem", "/dali" , "/hama"]} component={signIn}/>
             </Switch>
         </HashRouter>
        )
    }
}