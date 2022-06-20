import {
    CREATE_DATA,
    DELETE_DATA,
    NO_DATA,
    READ_ALL_DATA,
    UPDATE_DATA
} from "../constants/CrudApi";


export const createAction = (data) => ({ type: CREATE_DATA, payload: data })
export const readAllAction = (data) => ({ type: READ_ALL_DATA, payload: data })
export const updateAction = (data) => ({ type: UPDATE_DATA, payload: data })
export const deleteAction = (id) => ({ type: DELETE_DATA, payload: id })
export const noAction = () => ({ type: NO_DATA })



// import {
//     CREATE_DATA,
//     DELETE_DATA,
//     NO_DATA,
//     READ_ALL_DATA,
//     UPDATE_DATA,
//   } from "../types";

// export const createAction = (payload) => {
//     return {
//         type: CREATE_DATA,
//         payload: payload
//     };
// };

// export const readAllAction = (payload) => {
//     return {
//         type: READ_ALL_DATA,
//         payload: payload
//     };
// };

// export const updateAction = (payload) => {
//     return {
//         type: UPDATE_DATA,
//         payload: payload
//     };
// };

// export const deleteAction = (payload) => {
//     return {
//         type: DELETE_DATA,
//         payload: payload
//     };
// };

// export const noAction = (payload) => {
//     return {
//         type: DELETE_DATA,
//         payload: payload
//     };
// };



// export const createAction = (data) => ({ type: CREATE_DATA, payload: data })
// export const readAllAction = (data) => ({ type: READ_ALL_DATA, payload: data })
// export const updateAction = (data) => ({ type: UPDATE_DATA, payload: data })
// export const deleteAction = (id) => ({ type: DELETE_DATA, payload: id })
// export const noAction = () => ({ type: NO_DATA })




