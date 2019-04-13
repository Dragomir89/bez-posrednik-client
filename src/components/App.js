import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Login from '../components/users/Login';
import Register from './users/Register';
import Home from './home/Home';

class App extends Component {
  
  render() {
    return (
      <div className="container jumbotron">
            <Router history={history}>
                {/* <Header/> */}
                <Route path="/" exact component={Home}/>
                <Route path="/users/login" exact component={Login}/>
                <Route path="/users/register" exact component={Register}/>
            </Router>
        </div>
    );
  }
}

export default App;
