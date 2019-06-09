import React from 'react'


const ButtonBlue = (props)=>{

    return(
        <button
            onClick={props.clickFn} 
            name={props.name} 
            className='blue-button align-self-center'>
            {props.title}
        </button>
    )

}

export default ButtonBlue