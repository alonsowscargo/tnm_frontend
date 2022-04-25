import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_EQUIPOSMARCAS,
    POST_REGISTER_EQUIPOSMARCAS_SUCCESS,
    PUT_REGISTER_EQUIPOSMARCAS,
    PUT_REGISTER_EQUIPOSMARCAS_SUCCESS,    
    GET_REGISTER_EQUIPOSMARCASLIST,
    GET_REGISTER_EQUIPOSMARCASLIST_SUCCESS,
    GET_REGISTER_EQUIPOSMARCAS,
    GET_REGISTER_EQUIPOSMARCAS_SUCCESS,    
    DELETE_REGISTER_EQUIPOSMARCAS,
    DELETE_REGISTER_EQUIPOSMARCAS_SUCCESS
} from 'constants/EquiposMarcasMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterEquiposMarcas = (payload) => {
    return {
        type: POST_REGISTER_EQUIPOSMARCAS,
        payload: payload
    };
};

export const postRegisterEquiposMarcasSuccess = (pais) => {
    return {
        type: POST_REGISTER_EQUIPOSMARCAS_SUCCESS,
    };
};

export const getRegisterEquiposMarcasList = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSMARCASLIST,
        payload: payload
    };
};

export const getRegisterEquiposMarcasListSuccess = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSMARCASLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterEquiposMarcas = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSMARCAS,
        payload: payload
    };
};

export const getRegisterEquiposMarcasSuccess = (payload) => {
    return {
        type: GET_REGISTER_EQUIPOSMARCAS_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterEquiposMarcas = (payload) => {
    return {
        type: DELETE_REGISTER_EQUIPOSMARCAS,
        payload: payload
    };
};

export const putRegisterEquiposMarcas = (payload) => {
    return {
        type: PUT_REGISTER_EQUIPOSMARCAS,
        payload: payload
    };
};

export const putRegisterEquiposMarcasSuccess = (equiposTipos) => {
    return {
        type: PUT_REGISTER_EQUIPOSMARCAS_SUCCESS,
    };
};