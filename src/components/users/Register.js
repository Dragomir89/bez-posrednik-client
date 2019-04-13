import React from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/index'


class Register extends React.Component {   
    constructor(props) {
        super(props);

        this.state = { firstName: '', lastName: '', email: '', password: '' }
    }

    handleInputChange = (e) => {
        
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.register(this.state)
    }

    render() {
        return (
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Register</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    onChange={this.handleInputChange} 
                                    name="firstName"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="First Name *" 
                                    value={this.state.firstName} />
                            </div>
                            <div className="form-group">
                                <input
                                    onChange={this.handleInputChange} 
                                    name="lastName"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Last Name *" 
                                    value={this.state.lastName} />
                            </div>
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

export default connect( null, { register })(Register);