import React from 'react';

import { connect } from 'react-redux';
import { getUser } from '../../actions/index';


class Home extends React.Component {


    render() {
        if(this.props.user.token && this.props.user.email) {
            return (
            <div>
               <h1> Hi { this.props.user.firstName } !</h1>
            </div>)
        } 

        return (
            <h1>Home Page</h1>
        )
    }
}

function mapStateToProps(state) {
    const user = state.user;
    return { user }
}

export default connect(mapStateToProps, {getUser})(Home);