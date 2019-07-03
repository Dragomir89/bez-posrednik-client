import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { getUser } from '../actions/index';
import { connect } from 'react-redux';
import history from '../history';
import Login from '../components/users/Login';
import Register from './users/Register';
import Header from './Header'
import Home from './home/Home';
import AddOfferProps from './offers/AddOfferProps';
import AddOffer from './offers/AddOffer';
import FindEstate from './offers/FindEstate';
import EstateDetails from './offers/EstateDetails';


class App extends Component {
  
  componentDidMount() {
    if(this.props.user.token && !this.props.user.email) { this.props.getUser() } 
  }

  render() {
    return (
       
            <div className="container">
       
              <Router history={history}>
                <Header/>
                <Route path="/" exact component={Home}/>
                <Route path="/users/login" exact component={Login}/>
                <Route path="/users/register" exact component={Register}/>
                <Route path="/offer/add-offer-props" exact component={AddOfferProps}/>
                <Route path="/offer/add-offer" component={AddOffer}/>
                <Route path="/offer/find-offer" component={FindEstate}/>
                <Route path="/offer/details/:id" exact component={EstateDetails}/>
              </Router>
            </div>
       );
  }
}

function mapStateToProps(state) {
  const user = state.user;
  return { user }
}


export default connect(mapStateToProps, {getUser})(App);