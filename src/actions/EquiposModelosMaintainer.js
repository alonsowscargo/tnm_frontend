import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_EQUIPOSMODELOS,
    POST_REGISTER_EQUIPOSMODELOS_SUCCESS,
    PUT_REGISTER_EQUIPOSMODELOS,
    PUT_REGISTER_EQUIPOSMODELOS_SUCCESS,    
    GET_REGISTER_EQUIPOSMODELOSLIST,
    GET_REGISTER_EQUIPOSMODELOSLIST_SUCCESS,
    GET_REGISTER_EQUIPOSMODELOS,
    GET_REGISTER_EQUIPOSMODELOS_SUCCESS,    
    DELETE_REGISTER_EQUIPOSMODELOS,
    DELETE_REGISTER_EQUIPOSMODELOS_SUCCESS
} from 'constants/EquiposModelosMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterEquiposModelos = (payload) => {
    return {
        type: POST_REGISTER_EQUIPOSMODELOS,
        payload: payload
    };
};

export const postRegisterEquiposModelosSuccess = (pais) => {
    return {
        type: POST_REGISTER_EQUIPOSMODELOS_SUCCESS,
    };
};

export const getRegisterEquiposModelosList = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSMODELOSLIST,
        payload: payload
    };
};

export const getRegisterEquiposModelosListSuccess = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSMODELOSLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterEquiposModelos = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSMODELOS,
        payload: payload
    };
};

export const getRegisterEquiposModelosSuccess = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSMODELOS_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterEquiposModelos = (payload) => {
    return {
        type: DELETE_REGISTER_EQUIPOSMODELOS,
        payload: payload
    };
};

export const putRegisterEquiposModelos = (payload) => {
    return {
        type: PUT_REGISTER_EQUIPOSMODELOS,
        payload: payload
    };
};

export const putRegisterEquiposModelosSuccess = (equiposTipos) => {
    return {
        type: PUT_REGISTER_EQUIPOSMODELOS_SUCCESS,
    };
};