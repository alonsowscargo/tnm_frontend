import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_PAIS,
    POST_REGISTER_PAIS_SUCCESS,
    PUT_REGISTER_PAIS,
    PUT_REGISTER_PAIS_SUCCESS,    
    GET_REGISTER_PAISLIST,
    GET_REGISTER_PAISLIST_SUCCESS,
    GET_REGISTER_PAIS,
    GET_REGISTER_PAIS_SUCCESS,    
    DELETE_REGISTER_PAIS,
    DELETE_REGISTER_PAIS_SUCCESS
} from 'constants/PaisMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterPais = (payload) => {
    return {
        type: POST_REGISTER_PAIS,
        payload: payload
    };
};

export const postRegisterPaisSuccess = (pais) => {
    return {
        type: POST_REGISTER_PAIS_SUCCESS,
    };
};

export const getRegisterPaisList = (payload) => {
    return {
        type: GET_REGISTER_PAISLIST,
        payload: payload
    };
};

export const getRegisterPaisListSuccess = (payload) => {
    return {
        type: GET_REGISTER_PAISLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterPais = (payload) => {
    return {
        type: GET_REGISTER_PAIS,
        payload: payload
    };
};

export const getRegisterPaisSuccess = (payload) => {
    return {
        type: GET_REGISTER_PAIS_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterPais = (payload) => {
    return {
        type: DELETE_REGISTER_PAIS,
        payload: payload
    };
};

export const putRegisterPais = (payload) => {
    return {
        type: PUT_REGISTER_PAIS,
        payload: payload
    };
};

export const putRegisterPaisSuccess = (pais) => {
    return {
        type: PUT_REGISTER_PAIS_SUCCESS,
    };
};



