import {
    R_SET_PAYLOADROLES,
    R_SHOW_MESSAGE_ROLES,
    R_SHOW_MESSAGE_ROLES_SUCCESS,
    R_HIDE_MESSAGE_ROLES,
    R_GET_ROLESLIST,
    R_GET_ROLESLIST_SUCCESS,
    R_POST_ROLES,
    R_POST_ROLES_SUCCESS,
    R_GET_ROLES,
    R_GET_ROLES_SUCCESS,    
    R_PUT_ROLES,
    R_PUT_ROLES_SUCCESS, 
    R_DELETE_ROLES,
    R_DELETE_ROLES_SUCCESS,   
    R_SET_MESSAGE_ELIMINAR_ROLES,
    EMPTY_DATA_INIT_ROLES
} from './Constants.js';

export const R_Set_PayloadRoles = (payload) => {
    return {
        type: R_SET_PAYLOADROLES,
        payload: payload
    };
};

export const R_Show_Message_Roles = (payload) => {
    return {
        type: R_SHOW_MESSAGE_ROLES,
        payload: payload
    };
};

export const R_Show_Message_Roles_Success = (payload) => {
    return {
        type: R_SHOW_MESSAGE_ROLES_SUCCESS,
        payload: payload
    };
};

export const R_Hide_Message_Roles = (payload) => {
    return {
        type: R_HIDE_MESSAGE_ROLES,
        payload: payload
    };
};

export const R_Get_RolesList = (payload) => {
    return {
        type: R_GET_ROLESLIST,
        payload: payload
    };
};

export const R_Get_RolesList_Success = (payload) => {
    return {
        type: R_GET_ROLESLIST_SUCCESS,
        payload: payload
    };
};

export const R_Post_Roles = (payload) => {
    return {
        type: R_POST_ROLES,
        payload: payload
    };
};

export const R_Post_Roles_Success = (payload) => {
    return {
        type: R_POST_ROLES_SUCCESS,
        payload: payload
    };
};

export const R_Get_Roles = (payload) => {
    return {
        type: R_GET_ROLES,
        payload: payload
    };
};

export const R_Get_Roles_Success = (payload) => {
    return {
        type: R_GET_ROLES_SUCCESS,
        payload: payload
    };
};

export const R_Put_Roles = (payload) => {
    return {
        type: R_PUT_ROLES,
        payload: payload
    };
};

export const R_Put_Roles_Success = (payload) => {
    return {
        type: R_PUT_ROLES_SUCCESS,
        payload: payload
    };
};

export const R_Delete_Roles = (payload) => {
    return {
        type: R_DELETE_ROLES,
        payload: payload
    };
};

export const R_Delete_Roles_Success = (payload) => {
    return {
        type: R_DELETE_ROLES_SUCCESS,
        payload: payload
    };
};

export const R_Set_Message_Eliminar_Roles = (payload) => {
    return {
        type: R_SET_MESSAGE_ELIMINAR_ROLES,
        payload: payload
    };
};

export const emptyDataInitRoles = (payload) => {
    return {
        type: EMPTY_DATA_INIT_ROLES,
        payload: payload
    };
};



