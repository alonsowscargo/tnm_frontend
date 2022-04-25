import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';

/* new template */
import Seguimiento from './Seguimiento';
import '../style.scss'

const Form = () => {
    return(
        <div class="template">
            <Seguimiento />
        </div>

    )
};

export default Form;