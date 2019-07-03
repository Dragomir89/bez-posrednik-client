import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getCities,
    getNeighborhoodsForCity,
    getEstateTypes,
    getOfferTypes,
    getFiltersForEstate,
    getEstateFilters,
    clearFilters,
    getEstates
} from '../../actions';
import Select from '../common/Select';
import Input from '../common/Input';
import EstateList from './EstateList'

class FindEstate extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount () {

        this.props.getOfferTypes();
        this.props.getCities();
        this.props.getEstateTypes();
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChangeEstateType = (e) => {
        const estateTypeId = e.target.value;
        if (estateTypeId === '-1') {
            this.props.clearFilters();
            this.setState({ [e.target.name]: null });
        } else {
            this.setState({ [e.target.name]: e.target.value });
            this.props.getFiltersForEstate(estateTypeId);
        }
    }

    createAdditionalInputs = (estateTypeId) => {
        if (estateTypeId === '5cf0dc58a53ff751e4db3c3b') {
            return (
                <div className='find-filter-header'>
                    <Input

                        wrapperClass={'find-filter-header'}
                        key='floorFrom'
                        label='Етаж От'
                        type='number'
                        name='floorFrom'
                        val={this.state['floorFrom']}
                        changeFn={this.handleChange} />

                    <Input

                        wrapperClass={'find-filter-header'}
                        key='floorTo'
                        label='Етаж До'
                        type='number'
                        name='floorTo'
                        val={this.state['floorTo']}
                        changeFn={this.handleChange} />
                </div>
            )
        } else if (estateTypeId === '5cefe1d0db8bc8472852247a') {
            return (<div className='find-filter-header'>
                <Input

                    wrapperClass={'find-filter-header'}
                    key='numberOfFloorsFrom'
                    label='Квадратура на двора От'
                    type='number'
                    name='numberOfFloorsFrom'
                    val={this.state['floorFrom']}
                    changeFn={this.handleChange} />

                <Input

                    wrapperClass={'find-filter-header'}
                    key='numberOfFloorsTo'
                    label='Квадратура на двора До'
                    type='numberOfFloorsTo'
                    name='floorTo'
                    val={this.state['floorTo']}
                    changeFn={this.handleChange} />
            </div>)
        }
    }

    createAdditionalFilters = () => {

        return this.props.filters.map((filter, i) => {
            return (
                <Select
                    wrapperClass={'find-filter-header'}
                    key={filter._id}
                    values={filter.filterValues}
                    name={filter.estateProp}
                    label={filter.name}
                    changeFn={this.handleChange} />)
        });
    }

    handleChangeCity = (e) => {
        const cityId = e.target.value;
        const { cities } = this.props;
        this.props.getNeighborhoodsForCity(cityId, cities);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleChangeNeighborhood = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSearchClick = (e) => {
        e.preventDefault();
        this.props.getEstates(this.state);
    }

    render () {
        return (
            <div>
                <h1>Търсене</h1>
                <div className=''>
                    <div className='margin-1'>
                        <div className='display-flex '>
                            <Select
                                label='Град'
                                wrapperClass='find-filter-header'
                                name='city'
                                values={this.props.cities}
                                changeFn={this.handleChangeCity} />
                            <Select
                                wrapperClass='find-filter-header'
                                label='Квартал'
                                name='neighborhood'
                                values={this.props.neighborhoodsForCity}
                                changeFn={this.handleChangeNeighborhood} />
                            <Select
                                wrapperClass='find-filter-header'
                                label='Тип Обява'
                                name='offerType'
                                values={this.props.offerTypes}
                                changeFn={this.handleChange} />
                            <Select
                                wrapperClass='find-filter-header'
                                label='Вид Имот'
                                name='estateType'
                                values={this.props.estateTypes}
                                changeFn={this.handleChangeEstateType} />

                        </div>

                        <div className='display-flex'>
                            <div className='find-filter-header'>
                                <Input
                                    wrapperClass={'find-filter-header'}
                                    label='Цена От'
                                    name='priceFrom'
                                    type='number'
                                    val={this.state['priceFrom']}
                                    changeFn={this.handleChange} />

                                <Input
                                    wrapperClass={'find-filter-header'}
                                    label='Цена До'
                                    name='priceTo'
                                    type='number'
                                    val={this.state['priceTo']}
                                    changeFn={this.handleChange} />
                            
                            </div>
                            <div className='find-filter-header'>
                                <Input
                                    wrapperClass={'find-filter-header'}
                                    label='Квадратура От'
                                    name='areaFrom'
                                    type='number'
                                    val={this.state['areaFrom']}
                                    changeFn={this.handleChange} />

                                <Input
                                    wrapperClass={'find-filter-header'}
                                    label='Квадратура До'
                                    name='areaTo'
                                    type='number'
                                    val={this.state['areaTo']}
                                    changeFn={this.handleChange} />
                            </div>
                            {this.createAdditionalInputs(this.state['estateType'])}
                        </div>

                    </div>
                    <div className='margin-1'>

                        {
                            this.props.filters.length > 0 ?
                                (<div className='display-flex'>{this.createAdditionalFilters()}</div>) :
                                null
                        }
                    </div>
                    <div className='margin-1'>
                        <button
                            onClick={this.handleSearchClick}
                            className='btn btn-primary'>
                            Търси
                        </button>
                    </div>
                </div>
                {/* <i class="fa fa-location-arrow"></i>
            <i className="fa fa-allergies"></i>
            <i className="fa fa-angle-double-left"></i> */}
            
            {/* <i className="fa fa-trash"></i> */}
                <EstateList estates={this.props.estates}></EstateList>
            </div>
        )e
    }
}

function mapStateToProps (state) {
    const { cities, neighborhoodsForCity, estateTypes, offerTypes, filters, estates } = state;
    return { cities, neighborhoodsForCity, estateTypes, offerTypes, filters, estates }
}

const actions = {
    getCities,
    getNeighborhoodsForCity,
    getEstateTypes,
    getOfferTypes,
    getFiltersForEstate,
    getEstateFilters,
    clearFilters,
    getEstates
};

export default connect(mapStateToProps, actions)(FindEstate);
