import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getEstateFilters } from '../../../actions/index'
import EditFilterValue from './EditFilterValue';
import * as inputTypes from './inputTypes';
import Select from '../../common/Select'

class FilterManageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {}

    }

    componentDidMount () {
        this.props.getEstateFilters()
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
    }

    createSelect = () => {
        const filterProps = this.props.filters;

        const selects = filterProps.map((filter)=>{
            return(
                <div className='margin-1' key={filter._id}>
                    <Select 
                        label={filter.name} 
                        name={filter.name}
                        values={filter.filterValues}
                        changeFn={this.handleChange}
                    />
                    <EditFilterValue 
                        id={filter._id} 
                        key={-1} 
                        value='' 
                        type={inputTypes.ADD} 
                        placeholder='нов тип' />
                </div>
            )
        })
        return selects;
    }

    createFilters () {
        const filterProps = this.props.filters;

        return filterProps.map ((filter)=>{
            
            const inputs = filter.filterValues.map((value)=>{
                return (<EditFilterValue key={value._id}
                    id={value._id} 
                    value={value.name} 
                    type={inputTypes.EDIT} />)
            });

            inputs.push(
                (<EditFilterValue 
                    id={-1} 
                    key={-1} 
                    value='' 
                    type={inputTypes.ADD} 
                    placeholder='нов тип' />)
            );

            return(
                <div className='margin-1' key={filter._id}>
                    <h3>{filter.name}</h3>
                   {inputs}
                </div>
            );
        }); 
    }

    render () {
        
        return (
            <div >
                <div>
                    <h1 className='center-text'>Фиилтри</h1>
                    <div className=' display-flex justify-content-center'>

                      {/* {this.createFilters()} */}
                      {this.createSelect()}
                    </div>
                </div>


            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps, { getEstateFilters })(FilterManageForm);