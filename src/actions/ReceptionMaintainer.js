import{
    ON_CHANGE_MODE_RECEPTION,
    ON_CHANGE_MODE_READER,
    GET_CLIENT_WITH_QR_CODE,
    GET_CLIENT_WITH_QR_CODE_SUCCESS,
    GET_CLIENT_TRACKING_SUCCESS,
    CLEAR_CLIENT_TRACKING,
    PUT_CLIENT_TRACKING_PACKAGE,
    SHOW_MESSAGE_RECEPCION,
    HIDE_MESSAGE_RECEPCION,
    EMPTY_DATA_INIT_RECEPCION,
    SEARCH_CLIENT_BY_CODE,
    SEARCH_CLIENT_BY_CODE_SUCCESS
} from 'constants/ReceptionMaintainer';

export const onChangeModeReception = (payload) => {
    return {
        type: ON_CHANGE_MODE_RECEPTION,
        payload: payload
    };
};

export const onChangeModeReader = (payload) => {
    return {
        type: ON_CHANGE_MODE_READER,
        payload: payload
    };
};

export const getClientWithQRCode = (payload)=>{
    return {
        type: GET_CLIENT_WITH_QR_CODE,
        payload: payload
    };
};

export const getClientWithQRCodeSuccess = (payload)=>{
    return {
        type: GET_CLIENT_WITH_QR_CODE_SUCCESS,
        payload: payload
    };
};

export const getClientTrackingSuccess = (payload) =>{
    return {
        type: GET_CLIENT_TRACKING_SUCCESS,
        payload: payload
    }; 
}

export const clearClientTracking = (payload)=>{
    return {
        type:CLEAR_CLIENT_TRACKING,
        payload:payload
    };
}

export const putClientTrackingPackage = (payload)=>{
    return {
        type:PUT_CLIENT_TRACKING_PACKAGE,
        payload:payload
    };
}

export const hideMessageRecepcion= () => {
    return {
        type: HIDE_MESSAGE_RECEPCION,
    };
};

export const showMessageRecepcion = (payload) => {
    return {
        type: SHOW_MESSAGE_RECEPCION,
        payload: payload
    };
};

export const emptyDataIniRecepcion = (payload) => {
    return {
        type: EMPTY_DATA_INIT_RECEPCION,
        payload: payload
    };
};

export const searchClientByCode = (payload) => {
    return {
        type: SEARCH_CLIENT_BY_CODE,
        payload: payload
    };
};

export const searchClientByCodeSuccess = (payload) => {
    return {
        type: SEARCH_CLIENT_BY_CODE_SUCCESS,
        payload: payload
    };
};






