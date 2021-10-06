import React from "react";

const InputField = ({ name, type, placeholder, value, onChange }) => {
    return (
        <div className="formGroup">
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
};

export default InputField;
