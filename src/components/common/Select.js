import React from 'react';

const Select = ({ label, name, values, changeFn }) => {
    const defaultValue = -1;
    values = values || []
    let options = values.map((e) => {
        return <option key={e._id} value={e._id}>{e.name}</option>
    });

    options.unshift((<option key={defaultValue} value={defaultValue}>-- избери --</option>))
    

    return (
        <div>
            <label>{label}</label>
            <select 
                defaultValue={defaultValue}
                onChange={changeFn} 
                name={name} 
                className="browser-default custom-select">
                {options}
            </select>
        </div>
    )
};

export default Select;