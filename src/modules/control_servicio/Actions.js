import {
    CREATE_DATA,
    DELETE_DATA,
    NO_DATA,
    READ_ALL_DATA,
    UPDATE_DATA
} from "./Constants";


export const createAction = (payload) => {
    return {
        type: CREATE_DATA,
        payload: payload
    };
};

export const readAllAction = (payload) => {
    return {
        type: READ_ALL_DATA,
        payload: payload
    };
};

export const updateAction = (payload) => {
    return {
        type: UPDATE_DATA,
        payload: payload
    };
};

export const deleteAction = (payload) => {
    return {
        type: DELETE_DATA,
        payload: payload
    };
};

export const noAction = (payload) => {
    return {
        type: NO_DATA,
        payload: payload
    };
};












