import React, { Component } from 'react';
import * as inputTypes from './inputTypes'

class EditFilterValue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value:props.value
        }
    }

    handleChange = (e) =>{
        this.setState({value: e.target.value});
    }

    createBtn = () => {
        if (this.props.type === inputTypes.EDIT) {
            return (<button className="btn btn-primary">Промени</button>);
        }else {
            return (<button className="btn btn-success">Добави</button>);
        }
    }

    render () {

        return (
            <div className="display-flex ">
                <input 
                    onChange={this.handleChange}
                    className="form-control" 
                    placeholder={this.props.placeholder}
                    type='text' 
                    value={this.state.value} />
                {this.createBtn()}
            </div>
        )
    }
}

export default EditFilterValue;