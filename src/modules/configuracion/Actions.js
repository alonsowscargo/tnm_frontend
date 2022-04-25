import {
    CHANGE_PASSWORD_CONFIGURACION,
    SHOW_MESSAGE_CONFIGURACION,
    HIDE_MESSAGE_CONFIGURACION
} from './Constants';


export const changePasswordConfiguracion = (payload) => {
    return {
        type: CHANGE_PASSWORD_CONFIGURACION,
        payload: payload
    };
};

export const showMessageConfiguracion = (payload) => {
    return {
        type: SHOW_MESSAGE_CONFIGURACION,
        payload: payload
    };
};


export const hideMessageConfiguracion = (payload) => {
    return {
        type: HIDE_MESSAGE_CONFIGURACION,
        payload: payload
    };
};
