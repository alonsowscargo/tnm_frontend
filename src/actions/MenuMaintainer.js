import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_MENU,
    POST_REGISTER_MENU_SUCCESS,
    PUT_REGISTER_MENU,
    PUT_REGISTER_MENU_SUCCESS,    
    GET_REGISTER_MENULIST,
    GET_REGISTER_MENULIST_SUCCESS,
    GET_REGISTER_MENU,
    GET_REGISTER_MENU_SUCCESS,    
    DELETE_REGISTER_MENU,
    DELETE_REGISTER_MENU_SUCCESS
} from 'constants/MenuMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterMenu = (payload) => {
    return {
        type: POST_REGISTER_MENU,
        payload: payload
    };
};

export const postRegisterMenuSuccess = (menu) => {
    return {
        type: POST_REGISTER_MENU_SUCCESS,
    };
};

export const getRegisterMenuList = (payload) => {
    return {
        type: GET_REGISTER_MENULIST,
        payload: payload
    };
};

export const getRegisterMenuListSuccess = (payload) => {
    return {
        type: GET_REGISTER_MENULIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterMenu = (payload) => {
    return {
        type: GET_REGISTER_MENU,
        payload: payload
    };
};

export const getRegisterMenuSuccess = (payload) => {
    return {
        type: GET_REGISTER_MENU_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterMenu = (payload) => {
    return {
        type: DELETE_REGISTER_MENU,
        payload: payload
    };
};

export const putRegisterMenu = (payload) => {
    return {
        type: PUT_REGISTER_MENU,
        payload: payload
    };
};

export const putRegisterMenuSuccess = (menu) => {
    return {
        type: PUT_REGISTER_MENU_SUCCESS,
    };
};



