import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Login from '../components/users/Login';
import Register from './users/Register';
import Header from './Header'
import Home from './home/Home';
import AddOfferProps from './offers/AddOfferProps';

import { connect } from 'react-redux';
import { getUser } from '../actions/index';
import AddOffer from './offers/AddOffer';


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