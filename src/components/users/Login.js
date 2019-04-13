import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/index';


class Login extends React.Component {   
    constructor(props) {
        super(props);

        this.state = { email: '', password: '' }
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state)
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Login</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    onChange={this.handleInputChange} 
                                    name="email"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Your Email *" 
                                    value={this.state.email} />
                            </div>
                            <div className="form-group">
                                <input 
                                    onChange={this.handleInputChange}
                                    name="password"
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Your Password *" 
                                    value={this.state.password} />
                            </div>
                            <div className="form-group">
                                <input 
                                    onClick={this.handleSubmit}
                                    type="submit" 
                                    className="btnSubmit btn btn-primary" 
                                    value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {login})(Login)