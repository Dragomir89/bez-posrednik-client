import React from 'react'

const TextArea = (props) => {

    return (

        <div className="form-group">
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <textarea
                onChange={props.changeFn}
                className="form-control"
                value={props.val || ''}
                rows={props.rows || 5}
                name={props.name}
                id={props.name}
                placeholder={props.label}>
            </textarea>
        </div>
    )
}

export default TextArea;
