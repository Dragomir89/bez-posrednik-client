import React from 'react';
import { Link } from 'react-router-dom'


export default ({ estates }) => {

    const priceWrapper = {
        position: 'absolute',
        right: '3px',
    }

    const detailsWrapper = {
        marginLeft: '15px',
    }

    const descWrapper = {
        color: '#0098d0',
        fontSize: '21px',
    }

    const locationWrapper = {
        position: 'absolute',
        bottom: '10px'
    }

    const licationIcon = {
        paddingTop: '5px',
        fontSize: '18px',
        marginRight: '5px',
        color: 'orange'
    }

    const estatesList = estates.map((e, i) => {
        return (

            <div key={i} className='display-flex estate-list-item' >
                <div>
                    <Link to={'/offer/details/' + e._id}>
                        <img width='190px' height='140px' src={'http://localhost:5000/' + e.images[0]} />
                    </Link>
                </div>
                <div style={detailsWrapper}>
                    <div>
                        <Link to={'/offer/details/' + e._id}>
                            <p style={descWrapper}><strong>{e.shortDescription}</strong></p>
                        </Link>
                    </div>
                    <div style={locationWrapper}>
                        <p>Площ: {e.area} кв.м.</p>
                        <div className='display-flex'>
                            <i style={licationIcon} className="fa fa-location-arrow"></i>
                            <p>{e.city.name}, {e.neighborhood.name}</p>
                        </div>
                    </div>

                </div>
                <div style={priceWrapper}>
                    <h3>Цена: {e.price} лв.</h3>
                </div>
            </div>
        );
    });



    return (
        <div>
            {estatesList}
        </div>
    )
}