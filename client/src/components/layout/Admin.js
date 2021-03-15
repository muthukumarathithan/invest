import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory,history} from 'history';
import Sidebar from '../common/sidebar_components/sidebar';
import Right_sidebar from '../common/right-sidebar';
import Footer from '../common/footer';
import Header from '../common/header_components/header';
import { ScrollContext } from 'react-router-scroll-4';

// Components
//import Dashboard from '../dashboard';

import Dashboard from "../dashboard/Dashboard.js";
//Private Route
import PrivateRoute from "../common/PrivateRoute.js";

//Pages

// Products physical
import Investment from '../investments/list';
import AddInvestment from '../investments/add';
import Withdrawal from '../withdrawals/list';
import AddWithdrawal from '../withdrawals/add';
import Sub_category from '../products/physical/sub-category';
import Product_list from '../products/physical/product-list';
import Add_product from '../products/physical/add-product';
import Product_detail from '../products/physical/product-detail';

//Product Digital
import Digital_category from '../products/digital/digital-category';
import Digital_sub_category from '../products/digital/digital-sub-category';
import Digital_pro_list from '../products/digital/digital-pro-list';
import Digital_add_pro from '../products/digital/digital-add-pro';

//Sales
import Orders from '../sales/orders';
import Transactions_sales from '../sales/transactions-sales';
//Coupons
import ListCoupons from '../coupons/list-coupons';
import Create_coupons from '../coupons/create-coupons';

//Pages
import ListPages from '../pages/list-page';
import Create_page from '../pages/create-page';
import Media from '../media/media';
import List_menu from '../menus/list-menu';
import Create_menu from '../menus/create-menu';
import List_user from '../users/list-user';
import Create_user from '../users/create-user';
import List_vendors from '../vendors/list-vendors';
import Create_vendors from '../vendors/create.vendors';
import Translations from '../localization/translations';
import Rates from '../localization/rates';
import Taxes from '../localization/taxes';
import Profile from '../settings/profile';
import Reports from '../reports/report';
import Invoice from '../invoice';
import Datatable from '../common/datatable'

//Common
import NotFound from "../not-found/NotFound.js";
import Login from '../auth/Login';
import Register from '../auth/Register.js';
import CreateProfile from "../create-profile/CreateProfile.js";
import EditProfile from "../edit-profile/EditProfile.js";
import ProfileList from "../profile-list/ProfileList.js";

import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "../../actions/authActions.js";
import { clearCurrentProfile } from "../../actions/profileActions.js";
import { Provider } from "react-redux";
import store from "../../store.js";
import api from "../../utils/setAuthToken.js";


const browserHistory = createBrowserHistory();

if (localStorage.jwtToken) {
  api.setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    window.location.href = (`${process.env.PUBLIC_URL}/login`);
  }
}

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
          <div className="App">
           <div className="page-wrapper" >
             <Header />
                 <div className="page-body-wrapper">
                        <Sidebar />
                        <Right_sidebar />
                         <div className="page-body">
                             <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/dashboard`} component={Dashboard} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/investments`} component={Investment} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/investments/new`} component={AddInvestment} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/withdrawals`} component={Withdrawal} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/withdrawals/new`} component={AddWithdrawal} />
            </Switch>
            
            
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/product-list`} component={Product_list} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/add-product`} component={Add_product} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/profile`} component={Profile} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/create-user`} component={Create_user} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/list-user`}  component={List_user} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/create-profile`}  component={CreateProfile} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/edit-profile`} component={EditProfile} />
            </Switch>
            <Switch>
            <PrivateRoute exact path={`${process.env.PUBLIC_URL}/profile-list`}  component={ProfileList} />
            </Switch>
                            <Route exact path="/not-found" component={NotFound} />
                        </div>
             
            <Footer />
           </div>
            <div className="btn-light custom-theme" onClick={ () => this.ChangeRtl(this.state.divName)}>{this.state.divName}</div>
          </div>
          </div>
        </Router>
      </Provider>
    )
    }
}

export default App



                    