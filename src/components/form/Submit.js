import React from 'react'
import Button from '@material-ui/core/Button';

const Submit = ({ value, type, handleOne, variant, size, color, className}) => {
    return (
        <Button
            variant={variant}
            size={size}
            type={type}
            color={color}
            className={className}
            fullWidth
            onClick={() => {
                handleOne();
                // handleTwo();
            }}
        >
            {value}
        </Button>
            // <button type={type} className="btn btn-primary">{value}</button>
    )
}

            export default Submit