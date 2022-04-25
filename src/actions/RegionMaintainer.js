import {
    ON_CHANGE_PAYLOAD,
    POST_REGISTER_REGION,
    POST_REGISTER_REGION_SUCCESS,
    PUT_REGISTER_REGION,
    PUT_REGISTER_REGION_SUCCESS,
    GET_REGISTER_REGIONBYPAISLIST,
    GET_REGISTER_REGIONBYPAISLIST_SUCCESS,
    GET_REGISTER_REGIONBYCOMUNALIST,
    GET_REGISTER_REGIONBYCOMUNALIST_SUCCESS,
    GET_REGISTER_REGIONLIST,
    GET_REGISTER_REGIONLIST_SUCCESS,
    GET_REGISTER_REGION,
    GET_REGISTER_REGION_SUCCESS,
    DELETE_REGISTER_REGION,
    DELETE_REGISTER_REGION_SUCCESS
} from 'constants/RegionMaintainer';

export const onChangePayload = (payload) => {
    return {
        type: ON_CHANGE_PAYLOAD,
        payload: payload
    };
};

export const postRegisterRegion = (payload) => {
    return {
        type: POST_REGISTER_REGION,
        payload: payload
    };
};

export const postRegisterRegionSuccess = (region) => {
    return {
        type: POST_REGISTER_REGION_SUCCESS,
    };
};

export const getRegisterRegionList = (payload) => {
    return {
        type: GET_REGISTER_REGIONLIST,
        payload: payload
    };
};

export const getRegisterRegionListSuccess = (payload) => {
    return {
        type: GET_REGISTER_REGIONLIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterRegionByComunaList = (payload) => {
    return {
        type: GET_REGISTER_REGIONBYCOMUNALIST,
        payload: payload
    };
};

export const getRegisterRegionByComunaListSuccess = (payload) => {
    return {
        type: GET_REGISTER_REGIONBYCOMUNALIST_SUCCESS,
        payload: payload
    };
};

export const getRegisterRegionByPaisList = (payload) => {
    return {
        type: GET_REGISTER_REGIONBYPAISLIST,
        payload: payload
    };
};

export const getRegisterRegionByPaisListSuccess = (payload) => {
    return {
        type: GET_REGISTER_REGIONBYPAISLIST_SUCCESS,
        payload: payload
    };
};


export const getRegisterRegion = (payload) => {
    return {
        type: GET_REGISTER_REGION,
        payload: payload
    };
};

export const getRegisterRegionSuccess = (payload) => {
    return {
        type: GET_REGISTER_REGION_SUCCESS,
        payload: payload
    };
};

export const deleteRegisterRegion = (payload) => {
    return {
        type: DELETE_REGISTER_REGION,
        payload: payload
    };
};

export const putRegisterRegion = (payload) => {
    return {
        type: PUT_REGISTER_REGION,
        payload: payload
    };
};

export const putRegisterRegionSuccess = (region) => {
    return {
        type: PUT_REGISTER_REGION_SUCCESS,
    };
};



