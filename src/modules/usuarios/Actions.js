import {
    ON_CHANGE_PAYLOAD,
    ON_CHANGE_PAYLOAD_ADDRESS,
    POST_REGISTER_USER,
    POST_REGISTER_USER_SUCCESS,
    GET_REGISTER_USERSLIST,
    GET_REGISTER_USERSLIST_SUCCESS,
    DELETE_REGISTER_USER,
    SHOW_MESSAGE_USER_AUX,
    HIDE_MESSAGE_USER_AUX,
    PUT_REGISTER_USER,
    PUT_REGISTER_USER_SUCCESS,
    CLEAN_REGISTER_USER,
    GET_ADDRESS_TYPES,
    GET_ADDRESS_TYPES_SUCCESS,
    ON_LOAD_DATA_USER,
    ON_LOAD_DATA_USER_SUCCESS,
    POST_ADDRESS_USER,
    POST_ADDRESS_USER_SUCCESS,
    ON_CHANGE_COLLAPSE,
    TOGGLE_MODAL_USER_DATA,
    UPDATE_ADDRESS_USER,
    UPDATE_ADDRESS_USER_SUCCESS,
    DELETE_ADDRESS_USER,
    EMPTY_DATA_INIT_USERS,
    ONCHANGE_VALIDATIONS_USER,
    GET_ROLES,
    GET_ROLES_SUCCESS
} from './Constants';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const onChangePayloadAddress = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD_ADDRESS,
        payload: payload
    };
};

export const postRegisterUser = (payload) => {
    return {
        type: POST_REGISTER_USER,
        payload: payload
    };
};

export const postRegisterUserSuccess = (user) => {
    return {
        type: POST_REGISTER_USER_SUCCESS,
    };
};

export const getRegisterUsersList = (payload) => {
    return {
        type: GET_REGISTER_USERSLIST,
        payload: payload
    };
};


export const getRegisterUsersListSuccess = (payload) => {
    return {
        type: GET_REGISTER_USERSLIST_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterUser = (payload) => {
    return {
        type: DELETE_REGISTER_USER,
        payload: payload
    };
};

export const hideMessageUserAux= () => {
    return {
        type: HIDE_MESSAGE_USER_AUX,
    };
};

export const showMessageUserAux = (payload) => {
    return {
        type: SHOW_MESSAGE_USER_AUX,
        payload: payload
    };
};

export const putRegisterUser = (payload) => {
    return {
        type: PUT_REGISTER_USER,
        payload: payload
    };
};

export const putRegisterUserSuccess = (user) => {
    return {
        type: PUT_REGISTER_USER_SUCCESS,
    };
};

export const cleanRegisterUser = () => {
    return {
        type: CLEAN_REGISTER_USER,
    };
};

export const getAddressTypes = () => {
    return {
        type: GET_ADDRESS_TYPES
    };
};

export const getAddressTypesSuccess = (payload) => {
    return {
        type: GET_ADDRESS_TYPES_SUCCESS,
        payload:payload
    };
};

export const getLoadDataUser = (payload) =>{
    return {
        type: ON_LOAD_DATA_USER,
        payload:payload
    };
};

export const getLoadDataUserSuccess = (payload) =>{
    return {
        type: ON_LOAD_DATA_USER_SUCCESS,
        payload:payload
    };
};

export const postAddressUser = (payload) => {
    return {
        type: POST_ADDRESS_USER,
        payload: payload
    };
};

export const postAddressUserSuccess = (user) => {
    return {
        type: POST_ADDRESS_USER_SUCCESS,
    };
};

export const onChangeCollapse = (payload) =>{
    return {
        type:ON_CHANGE_COLLAPSE,
        payload:payload
    }
};

export const onToggleModalUserData =(payload)=>{
    return {
        type:TOGGLE_MODAL_USER_DATA,
        payload:payload
    }
};

export const deleteAddressUser = (payload) => {
    return {
        type: DELETE_ADDRESS_USER,
        payload: payload
    };
};

export const updateAddressUser = (payload) => {
    return {
        type: UPDATE_ADDRESS_USER,
        payload: payload
    };
};

export const updateAddressUserSuccess = (user) => {
    return {
        type: UPDATE_ADDRESS_USER_SUCCESS,
    };
};

export const emptyDataInitUsers = (user) => {
    return {
        type: EMPTY_DATA_INIT_USERS,
    };
};

export const onChangeValidationsUser = (payload) => {
    return {
        type: ONCHANGE_VALIDATIONS_USER,
        payload:payload
    };
};

export const getRoles = (payload) => {
    return {
        type: GET_ROLES,
        payload:payload
    };
};

export const getRolesSuccess = (payload) => {
    return {
        type: GET_ROLES_SUCCESS,
        payload:payload
    };
};













