import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {
    InputLabel,
    FormHelperText
} from '@material-ui/core';

const Textarea = ({ label, value, onChange, name, className, handleBlur, validations, placeholder, fullWidth }) => {
    return (
        <>
            {label ? <InputLabel>{label}</InputLabel> : ''}

            <TextareaAutosize
                placeholder={placeholder}
                name={name}
                value={value}
                // fullWidth={fullWidth}
                onChange={onChange}
                onBlur={handleBlur}
                // error={validations && true}
                className={` ${validations ? "error": ""}`} 
            />

            <FormHelperText >
                {validations && validations}
            </FormHelperText>
        </>
    );
};

export default Textarea;
