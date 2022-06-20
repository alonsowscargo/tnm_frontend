import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
    TextField,
    InputLabel,
} from '@material-ui/core';

const AutoComplete = ({label,data, placeholder}) => {
    return (
        <>
            <InputLabel>{label}</InputLabel>
            <Autocomplete
                options={data}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} placeholder={placeholder} />}
                noOptionsText={'No hay resultado...'}
            />
        </>
    )
}

export default AutoComplete