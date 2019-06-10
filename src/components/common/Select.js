import React from 'react';

const Select = ({ label, name, values, changeFn, wrapperClass }) => {
    const defaultValue = -1;
    values = values || [];
    wrapperClass=wrapperClass|| '';
    let options = values.map((e) => {
        return <option key={e._id} value={e._id}>{e.name}</option>
    });

    options.unshift((<option key={defaultValue} value={defaultValue}>-- избери --</option>))
    

    return (
        <div className={wrapperClass}>
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