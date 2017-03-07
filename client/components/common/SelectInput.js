import React from 'react';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
    


     return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    onChange={onChange}
                    className="form-control">
                    <option value="">{defaultOption}</option>
                    {options.map((author, i) => {
                        let selected = (value === author.get('Id') ? 
                        <option key={i} value={author.get('Id')} selected >{author.get('firstName') + ' ' + author.get('lastName') }</option> : 
                        <option key={i} value={author.get('Id')} >{author.get('firstName') + ' ' + author.get('lastName') }</option>);

                        return selected;                      
                    })
                }
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

export default SelectInput;