import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_BANCOS,
    POST_REGISTER_BANCOS_SUCCESS,
    PUT_REGISTER_BANCOS,
    PUT_REGISTER_BANCOS_SUCCESS,    
    GET_REGISTER_BANCOSLIST,
    GET_REGISTER_BANCOSLIST_SUCCESS,
    GET_REGISTER_BANCOS,
    GET_REGISTER_BANCOS_SUCCESS,    
    DELETE_REGISTER_BANCOS,
    DELETE_REGISTER_BANCOS_SUCCESS
} from 'constants/BancosMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterBancos = (payload) => {
    return {
        type: POST_REGISTER_BANCOS,
        payload: payload
    };
};

export const postRegisterBancosSuccess = (pais) => {
    return {
        type: POST_REGISTER_BANCOS_SUCCESS,
    };
};

export const getRegisterBancosList = (payload) => {
    return {
        type: GET_REGISTER_BANCOSLIST,
        payload: payload
    };
};

export const getRegisterBancosListSuccess = (payload) => {
    return {
        type: GET_REGISTER_BANCOSLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterBancos = (payload) => {
    return {
        type: GET_REGISTER_BANCOS,
        payload: payload
    };
};

export const getRegisterBancosSuccess = (payload) => {
    return {
        type: GET_REGISTER_BANCOS_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterBancos = (payload) => {
    return {
        type: DELETE_REGISTER_BANCOS,
        payload: payload
    };
};

export const putRegisterBancos = (payload) => {
    return {
        type: PUT_REGISTER_BANCOS,
        payload: payload
    };
};

export const putRegisterBancosSuccess = (equiposTipos) => {
    return {
        type: PUT_REGISTER_BANCOS_SUCCESS,
    };
};