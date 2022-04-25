import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_NAVES,
    POST_REGISTER_NAVES_SUCCESS,
    PUT_REGISTER_NAVES,
    PUT_REGISTER_NAVES_SUCCESS,    
    GET_REGISTER_NAVESLIST,
    GET_REGISTER_NAVESLIST_SUCCESS,
    GET_REGISTER_NAVES,
    GET_REGISTER_NAVES_SUCCESS,    
    DELETE_REGISTER_NAVES,
    DELETE_REGISTER_NAVES_SUCCESS
} from 'constants/NavesMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterNaves = (payload) => {
    return {
        type: POST_REGISTER_NAVES,
        payload: payload
    };
};

export const postRegisterNavesSuccess = (naves) => {
    return {
        type: POST_REGISTER_NAVES_SUCCESS,
    };
};

export const getRegisterNavesList = (payload) => {
    return {
        type: GET_REGISTER_NAVESLIST,
        payload: payload
    };
};

export const getRegisterNavesListSuccess = (payload) => {
    return {
        type: GET_REGISTER_NAVESLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterNaves = (payload) => {
    return {
        type: GET_REGISTER_NAVES,
        payload: payload
    };
};

export const getRegisterNavesSuccess = (payload) => {
    return {
        type: GET_REGISTER_NAVES_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterNaves = (payload) => {
    return {
        type: DELETE_REGISTER_NAVES,
        payload: payload
    };
};

export const putRegisterNaves = (payload) => {
    return {
        type: PUT_REGISTER_NAVES,
        payload: payload
    };
};

export const putRegisterNavesSuccess = (naves) => {
    return {
        type: PUT_REGISTER_NAVES_SUCCESS,
    };
};