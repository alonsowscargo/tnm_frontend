import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_CUENTASBANCARIAS,
    POST_REGISTER_CUENTASBANCARIAS_SUCCESS,
    PUT_REGISTER_CUENTASBANCARIAS,
    PUT_REGISTER_CUENTASBANCARIAS_SUCCESS,    
    GET_REGISTER_CUENTASBANCARIASLIST,
    GET_REGISTER_CUENTASBANCARIASLIST_SUCCESS,
    GET_REGISTER_CUENTASBANCARIAS,
    GET_REGISTER_CUENTASBANCARIAS_SUCCESS,    
    DELETE_REGISTER_CUENTASBANCARIAS,
    DELETE_REGISTER_CUENTASBANCARIAS_SUCCESS
} from 'constants/CuentasBancariasMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterCuentasBancarias = (payload) => {
    return {
        type: POST_REGISTER_CUENTASBANCARIAS,
        payload: payload
    };
};

export const postRegisterCuentasBancariasSuccess = (pais) => {
    return {
        type: POST_REGISTER_CUENTASBANCARIAS_SUCCESS,
    };
};

export const getRegisterCuentasBancariasList = (payload) => {
    return {
        type: GET_REGISTER_CUENTASBANCARIASLIST,
        payload: payload
    };
};

export const getRegisterCuentasBancariasListSuccess = (payload) => {
    return {
        type: GET_REGISTER_CUENTASBANCARIASLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterCuentasBancarias = (payload) => {
    return {
        type: GET_REGISTER_CUENTASBANCARIAS,
        payload: payload
    };
};

export const getRegisterCuentasBancariasSuccess = (payload) => {
    return {
        type: GET_REGISTER_CUENTASBANCARIAS_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterCuentasBancarias = (payload) => {
    return {
        type: DELETE_REGISTER_CUENTASBANCARIAS,
        payload: payload
    };
};

export const putRegisterCuentasBancarias = (payload) => {
    return {
        type: PUT_REGISTER_CUENTASBANCARIAS,
        payload: payload
    };
};

export const putRegisterCuentasBancariasSuccess = (cuentasBancarias) => {
    return {
        type: PUT_REGISTER_CUENTASBANCARIAS_SUCCESS,
    };
};