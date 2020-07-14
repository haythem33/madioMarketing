import React from "react";
import Home  from "../components/home/home"
import Contact from "../components/contact/contact"
import About from "../components/about/about";
import Pricing from "../components/pricing/pricing";
import {HashRouter , Route, Switch } from 'react-router-dom'
import detail from "../components/solution/detail";
import signIn from "../components/admin/signIn";
import dashboard from "../components/admin/dashboard";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
const trackingId = "UA-134999114-3"
ReactGA.initialize(trackingId);
const history = createBrowserHistory();

history.listen(location => {
    ReactGA.set({page : location.pathname});
    ReactGA.pageview(location.pathname);
})
export default class router extends React.Component {
    render() {
        return (
         <HashRouter history={history} basename="/">
             <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/home" component={Home} />
             <Route path="/contact" component={Contact} />
             <Route path="/about" component={About} />
             <Route path="/pricing" component={Pricing} />
             <Route path="/detail" component={detail} />
             <Route path={["/haythem", "/dali" , "/hama"]} component={signIn}/>
             <Route path="/dashboard" component={dashboard}/>
             </Switch>
         </HashRouter>
        )
    }
}