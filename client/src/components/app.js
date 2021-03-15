import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory,history} from 'history';
import { ScrollContext } from 'react-router-scroll-4';


import PrivateRoute from "./common/PrivateRoute.js";
//Common
import Login from './auth/Login.js';
import Register from './auth/Register.js';
import Navbar from "./layout/Navbar.js";
import NotFound from "./not-found/NotFound.js";
import Landing from "./layout/Landing.js";
import Admin from "./layout/Admin.js";
import Home from "./page/home/Home.js";
import About from "./page/about/About.js";
import Affiliate from "./page/affiliate/Affiliate.js";
import Faq from "./page/faq/Faq.js";
import Plan from "./page/plan/Plan.js";
import Contact from "./page/contacts/Contacts.js";

import { Provider } from "react-redux";
import store from "../store.js";

const browserHistory = createBrowserHistory();

export class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            ltr:true,
            divName:'RTL',
        }
    }
    ChangeRtl(divName){
        if(divName === 'RTL') {
            document.body.classList.add('rtl');
            this.setState({divName: 'LTR'});
        }else{
            document.body.classList.remove('rtl');
            this.setState({divName: 'RTL'});
        }
    }
    render() {
        return (
        <Provider store={store}>
          
        <Router history={browserHistory}>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register} />
                <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
                <Route exact path={`${process.env.PUBLIC_URL}/affiliate`}component={Affiliate} />
                <Route exact path={`${process.env.PUBLIC_URL}/faq`} component={Faq} />
                <Route exact path={`${process.env.PUBLIC_URL}/plan`} component={Plan} />
                <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />  
            <Route exact path="/not-found" component={NotFound} />
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/investments`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/investments/new`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/withdrawals`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/withdrawals/new`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/category`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/sub-category`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/product-list`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/add-product`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/profile`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/create-user`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/list-user`}  component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/create-profile`}  component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/edit-profile`} component={Admin} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/profile-list`}  component={Admin} />
            </Switch>
        </Router>
      </Provider>
    )
    }
}

export default App



                    