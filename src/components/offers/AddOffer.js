import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addPicture,
    getNeighborhoodsForCity,
    getOfferTypes,
    getCities,
    getEstateTypes,
    getFiltersForEstate,
    clearFilters
} from '../../actions/index';
import Select from '../common/Select';
import Input from '../common/Input';
import TextArea from '../common/TextArea';


class AddOffer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        this.props.getCities();
        this.props.getOfferTypes();
        this.props.getEstateTypes();
    }

    handleChangeCity = (e) => {
        const cityId = e.target.value;
        const { cities } = this.props
        this.props.getNeighborhoodsForCity(cityId, cities);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleChangeEstateType = (e) => {
        const estateTypeId = e.target.value;
        if (estateTypeId === '-1') {
            this.props.clearFilters();
            this.setState({ [e.target.name]: null });
        } else {
            this.setState({ [e.target.name]: e.target.value });
            this.setState({ hasAdditionalFilters: true });
            this.props.getFiltersForEstate(estateTypeId);
        }
    }

    handleChangeNeighborhood = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    createAdditionalFilters = () => {
        return this.props.filters.map((filter,i) => {
            return (
                <Select
                    key={i}
                    values={filter.filterValues}
                    name={filter.estateProp}
                    label={filter.name}
                    changeFn={this.handleChange} />)
        });
    }

    onChangeImage = (e) => {
        this.setState({ file: e.target.files[0] });
    }

    saveOffer = (e) => {
        e.preventDefault();
        console.log(this.state)
        // this.props.addPicture({ file: this.state.file });
        this.props.addPicture({
            file: this.state.file,
            ...this.state
        });
        console.log(this.state.file);
    }

    render () {
        return (
            <div>
                <h1>Добави твоята оферта</h1>
                <form className='display-flex'>
                    <div className='margin-1'>
                        <Select
                            label='Вид Имот'
                            name='estateType'
                            values={this.props.estateTypes}
                            changeFn={this.handleChangeEstateType} />
                        <Select
                            label='Тип Обява'
                            name='offerType'
                            values={this.props.offerTypes}
                            changeFn={this.handleChange} />
                        <Select
                            label='Град'
                            name='city'
                            values={this.props.cities}
                            changeFn={this.handleChangeCity} />
                        <Select
                            label='Квартал'
                            name='neighborhood'
                            values={this.props.neighborhoods}
                            changeFn={this.handleChangeNeighborhood} />

                        <Input
                            label='Цена'
                            name='price'
                            type='number'
                            val={this.state['price']}
                            changeFn={this.handleChange} />
                        <Input
                            label='Квадратура'
                            name='area'
                            type='number'
                            val={this.state['area']}
                            changeFn={this.handleChange} />
                        <Input
                            label='Кратко описание'
                            name='shortDescription'
                            type='text'
                            val={this.state['shortDescription']}
                            changeFn={this.handleChange}
                        />
                        <TextArea
                            label='Описание'
                            name='description'
                            val={this.state['description']}
                            rows={6}
                            changeFn={this.handleChange}
                        />
                        <Input
                            label='Снимка'
                            name='file'
                            type='file'
                            changeFn={this.onChangeImage}
                        />

                    </div>
                    <div className='margin-1'>

                        {
                            this.props.filters.length > 0 ?
                                (<div>{this.createAdditionalFilters()}</div>) :
                                null
                        }
                    </div>
                </form>
                <button onClick={this.saveOffer} className='btn btn-success'>Запази Обявата</button>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        cities: state.cities,
        offerOptions: state.offerOptions,
        neighborhoods: state.neighborhoodsForCity,
        offerTypes: state.offerTypes,
        estateTypes: state.estateTypes,
        filters: state.filters
    }
}
const actions = {
    getNeighborhoodsForCity,
    getOfferTypes,
    getCities,
    getEstateTypes,
    getFiltersForEstate,
    clearFilters,
    addPicture
}

export default connect(mapStateToProps, actions)(AddOffer);
