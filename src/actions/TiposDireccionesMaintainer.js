import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_TIPOSDIRECCIONES,
    POST_REGISTER_TIPOSDIRECCIONES_SUCCESS,
    PUT_REGISTER_TIPOSDIRECCIONES,
    PUT_REGISTER_TIPOSDIRECCIONES_SUCCESS,    
    GET_REGISTER_TIPOSDIRECCIONESLIST,
    GET_REGISTER_TIPOSDIRECCIONESLIST_SUCCESS,
    GET_REGISTER_TIPOSDIRECCIONES,
    GET_REGISTER_TIPOSDIRECCIONES_SUCCESS,    
    DELETE_REGISTER_TIPOSDIRECCIONES,
    DELETE_REGISTER_TIPOSDIRECCIONES_SUCCESS
} from 'constants/TiposDireccionesMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterTiposDirecciones = (payload) => {
    return {
        type: POST_REGISTER_TIPOSDIRECCIONES,
        payload: payload
    };
};

export const postRegisterTiposDireccionesSuccess = (tiposDirecciones) => {
    return {
        type: POST_REGISTER_TIPOSDIRECCIONES_SUCCESS,
    };
};

export const getRegisterTiposDireccionesList = (payload) => {
    return {
        type: GET_REGISTER_TIPOSDIRECCIONESLIST,
        payload: payload
    };
};

export const getRegisterTiposDireccionesListSuccess = (payload) => {
    return {
        type: GET_REGISTER_TIPOSDIRECCIONESLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterTiposDirecciones = (payload) => {
    return {
        type: GET_REGISTER_TIPOSDIRECCIONES,
        payload: payload
    };
};

export const getRegisterTiposDireccionesSuccess = (payload) => {
    return {
        type: GET_REGISTER_TIPOSDIRECCIONES_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterTiposDirecciones = (payload) => {
    return {
        type: DELETE_REGISTER_TIPOSDIRECCIONES,
        payload: payload
    };
};

export const putRegisterTiposDirecciones = (payload) => {
    return {
        type: PUT_REGISTER_TIPOSDIRECCIONES,
        payload: payload
    };
};

export const putRegisterTiposDireccionesSuccess = (tiposDirecciones) => {
    return {
        type: PUT_REGISTER_TIPOSDIRECCIONES_SUCCESS,
    };
};



