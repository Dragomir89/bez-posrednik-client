import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../common/Input';
import { addOfferProp, getCities, getEstateTypes, getOfferTypes } from '../../actions/index';
import ButtonBlue from '../common/ButtonBlue';
import Select from '../common/Select';
import FilterManageForm from './filter-menage/FilterManageForm';
import ManageEstateProp from './ManageEstateProp'

class AddOfferProps extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        this.props.getCities();
        this.props.getEstateTypes();
        this.props.getOfferTypes();
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleButtonClick = (e) => {
        e.preventDefault();
        const offerProp = e.target.name;
        const name = this.state[offerProp];
        this.props.addOfferProp({
            offerProp,
            name
        });
    }

    handleButtonClickAddNeighborhood = (e) => {
        e.preventDefault();
        const offerProp = e.target.name;
        const { neighborhood, cityId } = this.state;

        if (!neighborhood || !cityId) {
            console.log('neighborhood = ' + neighborhood);
            console.log('cityId = ' + cityId);
            return;
        }
        this.props.addOfferProp({
            offerProp,
            name: neighborhood,
            cityId
        });
    }

    render () {

        const titleStyle = {
            textAlign: 'center',
            margin: '40px',
            textDecoration: 'underline'
        }

        return (
            <div>
                <h1 style={titleStyle}>Добавете опции за офертите</h1>

                <ManageEstateProp
                    label='Градове'
                    name='city'
                    values={this.props.cities}
                    inputVal={this.state['city']}
                    addAction={this.handleButtonClick}
                    handleChange = {this.handleChange}
                    buttonName='Добави'
                    placeholder='Добави Град'
                />

                <ManageEstateProp
                    label='Видове Имоти'
                    name='estateType'
                    inputVal={this.state['estateType']}
                    handleChange = {this.handleChange}
                    values={this.props.estateTypes}
                    addAction={this.handleButtonClick}
                    buttonName='Добави'
                    placeholder='Добави Вид Имот'
                />
                <ManageEstateProp
                    label='Вид Оферта'
                    name='offerType'
                    values={this.props.offerTypes}
                    inputVal={this.state['offerType']}
                    addAction={this.handleButtonClick}
                    handleChange = {this.handleChange}
                    buttonName='Добави'
                    placeholder='Добави Тип Оферта'
                />

                <div className="display-flex">
                    <Input
                        changeFn={this.handleChange}
                        val={this.state.neighborhood}
                        name='neighborhood'
                        type='text'
                        label='Квартал' />

                    <Select
                        changeFn={this.handleChange}
                        name='cityId'
                        label="От Град"
                        values={this.props.cities} />


                    <ButtonBlue
                        title="Добави Квартал към град"
                        name='neighborhood'
                        clickFn={this.handleButtonClickAddNeighborhood} />
                </div>

                <div>
                    <FilterManageForm />

                </div>
      
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        cities: state.cities,
        estateTypes: state.estateTypes,
        offerTypes: state.offerTypes,
        filters: state.filters
    }
}


export default connect(mapStateToProps, 
        { addOfferProp, 
            getCities, 
            getEstateTypes, 
            getOfferTypes })(AddOfferProps);