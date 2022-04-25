import {
    EMP_SET_PAYLOADEMPRESAS,
    EMP_SHOW_MESSAGE_EMPRESAS,
    EMP_SHOW_MESSAGE_EMPRESAS_SUCCESS,
    EMP_HIDE_MESSAGE_EMPRESAS,
    EMP_GET_EMPRESASLIST,
    EMP_GET_EMPRESASLIST_SUCCESS,
    EMP_POST_EMPRESAS,
    EMP_POST_EMPRESAS_SUCCESS,
    EMP_GET_EMPRESAS,
    EMP_GET_EMPRESAS_SUCCESS,    
    EMP_PUT_EMPRESAS,
    EMP_PUT_EMPRESAS_SUCCESS, 
    EMP_DELETE_EMPRESAS,
    EMP_DELETE_EMPRESAS_SUCCESS,   
    EMP_SET_MESSAGE_ELIMINAR_EMPRESAS,
    EMPTY_DATA_INIT_EMPRESAS
} from './Constants.js';

export const Emp_Set_PayloadEmpresas = (payload) => {
    return {
        type: EMP_SET_PAYLOADEMPRESAS,
        payload: payload
    };
};

export const Emp_Show_Message_Empresas = (payload) => {
    return {
        type: EMP_SHOW_MESSAGE_EMPRESAS,
        payload: payload
    };
};

export const Emp_Show_Message_Empresas_Success = (payload) => {
    return {
        type: EMP_SHOW_MESSAGE_EMPRESAS_SUCCESS,
        payload: payload
    };
};

export const Emp_Hide_Message_Empresas = (payload) => {
    return {
        type: EMP_HIDE_MESSAGE_EMPRESAS,
        payload: payload
    };
};

export const Emp_Get_EmpresasList = (payload) => {
    return {
        type: EMP_GET_EMPRESASLIST,
        payload: payload
    };
};

export const Emp_Get_EmpresasList_Success = (payload) => {
    return {
        type: EMP_GET_EMPRESASLIST_SUCCESS,
        payload: payload
    };
};

export const Emp_Post_Empresas = (payload) => {
    return {
        type: EMP_POST_EMPRESAS,
        payload: payload
    };
};

export const Emp_Post_Empresas_Success = (payload) => {
    return {
        type: EMP_POST_EMPRESAS_SUCCESS,
        payload: payload
    };
};

export const Emp_Get_Empresas = (payload) => {
    return {
        type: EMP_GET_EMPRESAS,
        payload: payload
    };
};

export const Emp_Get_Empresas_Success = (payload) => {
    return {
        type: EMP_GET_EMPRESAS_SUCCESS,
        payload: payload
    };
};

export const Emp_Put_Empresas = (payload) => {
    return {
        type: EMP_PUT_EMPRESAS,
        payload: payload
    };
};

export const Emp_Put_Empresas_Success = (payload) => {
    return {
        type: EMP_PUT_EMPRESAS_SUCCESS,
        payload: payload
    };
};

export const Emp_Delete_Empresas = (payload) => {
    return {
        type: EMP_DELETE_EMPRESAS,
        payload: payload
    };
};

export const Emp_Delete_Empresas_Success = (payload) => {
    return {
        type: EMP_DELETE_EMPRESAS_SUCCESS,
        payload: payload
    };
};

export const Emp_Set_Message_Eliminar_Empresas = (payload) => {
    return {
        type: EMP_SET_MESSAGE_ELIMINAR_EMPRESAS,
        payload: payload
    };
};

export const emptyDataInitEmpresas = (payload) => {
    return {
        type: EMPTY_DATA_INIT_EMPRESAS,
        payload: payload
    };
};



