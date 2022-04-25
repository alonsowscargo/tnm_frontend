import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_MONEDAS,
    POST_REGISTER_MONEDAS_SUCCESS,
    PUT_REGISTER_MONEDAS,
    PUT_REGISTER_MONEDAS_SUCCESS,
    GET_REGISTER_MONEDASLIST,
    GET_REGISTER_MONEDASLIST_SUCCESS,
    GET_REGISTER_MONEDAS,
    GET_REGISTER_MONEDAS_SUCCESS,
    DELETE_REGISTER_MONEDAS,
    DELETE_REGISTER_MONEDAS_SUCCESS
} from 'constants/MonedasMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterMonedas = (payload) => {
    return {
        type: POST_REGISTER_MONEDAS,
        payload: payload
    };
};

export const postRegisterMonedasSuccess = (pais) => {
    return {
        type: POST_REGISTER_MONEDAS_SUCCESS,
    };
};

export const getRegisterMonedasList = (payload) => {
    return {
        type: GET_REGISTER_MONEDASLIST,
        payload: payload
    };
};

export const getRegisterMonedasListSuccess = (payload) => {
    return {
        type: GET_REGISTER_MONEDASLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterMonedas = (payload) => {
    return {
        type: GET_REGISTER_MONEDAS,
        payload: payload
    };
};

export const getRegisterMonedasSuccess = (payload) => {
    return {
        type: GET_REGISTER_MONEDAS_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterMonedas = (payload) => {
    return {
        type: DELETE_REGISTER_MONEDAS,
        payload: payload
    };
};

export const putRegisterMonedas = (payload) => {
    return {
        type: PUT_REGISTER_MONEDAS,
        payload: payload
    };
};

export const putRegisterMonedasSuccess = (equiposTipos) => {
    return {
        type: PUT_REGISTER_MONEDAS_SUCCESS,
    };
};