import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_EQUIPOSTIPOS,
    POST_REGISTER_EQUIPOSTIPOS_SUCCESS,
    PUT_REGISTER_EQUIPOSTIPOS,
    PUT_REGISTER_EQUIPOSTIPOS_SUCCESS,    
    GET_REGISTER_EQUIPOSTIPOSLIST,
    GET_REGISTER_EQUIPOSTIPOSLIST_SUCCESS,
    GET_REGISTER_EQUIPOSTIPOS,
    GET_REGISTER_EQUIPOSTIPOS_SUCCESS,    
    DELETE_REGISTER_EQUIPOSTIPOS,
    DELETE_REGISTER_EQUIPOSTIPOS_SUCCESS
} from 'constants/EquiposTiposMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterEquiposTipos = (payload) => {
    return {
        type: POST_REGISTER_EQUIPOSTIPOS,
        payload: payload
    };
};

export const postRegisterEquiposTiposSuccess = (pais) => {
    return {
        type: POST_REGISTER_EQUIPOSTIPOS_SUCCESS,
    };
};

export const getRegisterEquiposTiposList = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSTIPOSLIST,
        payload: payload
    };
};

export const getRegisterEquiposTiposListSuccess = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSTIPOSLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterEquiposTipos = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSTIPOS,
        payload: payload
    };
};

export const getRegisterEquiposTiposSuccess = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSTIPOS_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterEquiposTipos = (payload) => {
    return {
        type: DELETE_REGISTER_EQUIPOSTIPOS,
        payload: payload
    };
};

export const putRegisterEquiposTipos = (payload) => {
    return {
        type: PUT_REGISTER_EQUIPOSTIPOS,
        payload: payload
    };
};

export const putRegisterEquiposTiposSuccess = (equiposTipos) => {
    return {
        type: PUT_REGISTER_EQUIPOSTIPOS_SUCCESS,
    };
};



