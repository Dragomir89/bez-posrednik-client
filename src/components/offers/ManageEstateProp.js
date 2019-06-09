import React, { Component } from 'react';
import Select from '../common/Select';
import Input from '../common/Input';
import ButtonBlue from '../common/ButtonBlue';


class ManageEstateProp extends Component {
   

    render () {
        const { label, name, values, buttonName, addAction, placeholder, handleChange, inputVal } = this.props;
        // const btnStyle = {
        //     height: '37px',
        //     marginTop: '33px'
        // }
        return (
            <div className='display-flex' style={{ width: '475px' }}>
                <Select label={label}  name={name} values={values} />
                <div style={{marginLeft:'10px'}} className='display-flex'>
                    <Input
                        type='text'
                        name={name}
                        changeFn={handleChange}
                        label={placeholder}
                        val={inputVal} />

                    <ButtonBlue clickFn={addAction} name={name} title={buttonName}/>

                </div>
            </div>
        )
    }
}

export default ManageEstateProp;
