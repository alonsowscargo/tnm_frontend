import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_COMUNAS,
    POST_REGISTER_COMUNAS_SUCCESS,
    PUT_REGISTER_COMUNAS,
    PUT_REGISTER_COMUNAS_SUCCESS,
    GET_REGISTER_COMUNASLIST,
    GET_REGISTER_COMUNASLIST_SUCCESS,
    GET_REGISTER_COMUNAS,
    GET_REGISTER_COMUNAS_SUCCESS,
    DELETE_REGISTER_COMUNAS,
    DELETE_REGISTER_COMUNAS_SUCCESS
} from 'constants/ComunasMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterComunas = (payload) => {
    return {
        type: POST_REGISTER_COMUNAS,
        payload: payload
    };
};

export const postRegisterComunasSuccess = (comunas) => {
    return {
        type: POST_REGISTER_COMUNAS_SUCCESS,
    };
};

export const getRegisterComunasList = (payload) => {
    return {
        type: GET_REGISTER_COMUNASLIST,
        payload: payload
    };
};

export const getRegisterComunasListSuccess = (payload) => {
    return {
        type: GET_REGISTER_COMUNASLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterComunas = (payload) => {
    return {
        type: GET_REGISTER_COMUNAS,
        payload: payload
    };
};

export const getRegisterComunasSuccess = (payload) => {
    return {
        type: GET_REGISTER_COMUNAS_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterComunas = (payload) => {
    return {
        type: DELETE_REGISTER_COMUNAS,
        payload: payload
    };
};

export const putRegisterComunas = (payload) => {
    return {
        type: PUT_REGISTER_COMUNAS,
        payload: payload
    };
};

export const putRegisterComunasSuccess = (comunas) => {
    return {
        type: PUT_REGISTER_COMUNAS_SUCCESS,
    };
};



