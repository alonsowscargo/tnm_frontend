//import {all,fork,call, put,takeLatest,spawn} from "redux-saga/effects";
import {all,fork,call, put,takeLatest} from "redux-saga/effects";

import {
    POST_REGISTER_USER,
    GET_REGISTER_USERSLIST,
    DELETE_REGISTER_USER,
    PUT_REGISTER_USER,
    GET_ADDRESS_TYPES,
    POST_ADDRESS_USER,
    ON_LOAD_DATA_USER,
    DELETE_ADDRESS_USER,
    UPDATE_ADDRESS_USER,
    GET_ROLES
} from "./Constants";

import {postRegisterUserSuccess,
    getRegisterUsersListSuccess,
    putRegisterUserSuccess,
    getAddressTypesSuccess,
    postAddressUserSuccess,
    getLoadDataUserSuccess,
    updateAddressUserSuccess,
    getRolesSuccess,
    showMessageUserAux} from "./Actions";
import {
    postRequest,
    getRequest,
    getErrorRequest,
    deleteRequest,
    putRequest
} from 'util/apiFetch';

function* postRegisterUserExecute({payload}) {
    const requestURL = `usuario`;

    const response= yield call(postRequest,requestURL,payload);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
        yield put(showMessageUserAux({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield getRegistersListExecute({});
        yield put(showMessageUserAux({type:'success',text:'Usuario creado correctamente'}));
        yield put(postRegisterUserSuccess()); 
    }
}

function* getRegistersListExecute({payload}){
    const requestURL = `usuario`;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);

    if(error){
        yield put(showMessageUserAux({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(getRegisterUsersListSuccess(obj));
    }
}

function* deleteRegisterUserExecute({payload}){
    const requestURL = `usuario/${payload.id}`;
    const response= yield call(deleteRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);

    if(error){
        yield put(showMessageUserAux({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(showMessageUserAux({type:'info',text:'Usuario eliminado correctamente'}));
        yield getRegistersListExecute({});
    }
}

function* putRegisterUserExecute({payload}) {
    if(payload.id){
        const requestURL = `usuario/${payload.id}`;
        const response= yield call(putRequest,requestURL,payload);
        const { error, message } =yield call(getErrorRequest,response);

        if(error){
            yield put(showMessageUserAux({type:'error',text:message}));
        }else{
            const respTxt=yield response.text();
            const obj=JSON.parse(respTxt);
            yield getRegistersListExecute({});
            yield put(showMessageUserAux({type:'info',text:'Usuario actualizado correctamente'}));
            yield put(putRegisterUserSuccess());
        }
    }
    
}

function* getAddressTypesExecute(){
    const requestURL = `tipoDireccion`;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);

    if(error){
        yield put(showMessageUserAux({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(getAddressTypesSuccess(obj));
    }
}

function* postAddressUserExecute(action){
    const requestURL = `usuarioDirecciones`;

    const response= yield call(postRequest,requestURL,action.payload);
    const { error, message } =yield call(getErrorRequest,response);

    if(error){
        yield put(showMessageUserAux({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(showMessageUserAux({type:'success',text:'Dirección del usuario creada correctamente'}));
        yield put(postAddressUserSuccess()); 
        yield getLoadDataUserExecute({payload:{id:action.payload.usuario_id}});
    }
}

function* getLoadDataUserExecute(action){
    const requestURL1 = `usuarioDirecciones/${action.payload.id}`;
    const response1= yield call(getRequest,requestURL1);
    const { error, message } =yield call(getErrorRequest,response1);
    if(error){
        yield put(showMessageUserAux({type:'error',text:message}));
    }else{
        const respTxt1=yield response1.text();
        const obj1=JSON.parse(respTxt1);
        yield put(getLoadDataUserSuccess({
            addressUser:obj1
        }));
    }
}

function* deleteAddressUserExecute(action){
    const requestURL = `usuarioDirecciones/${action.payload.id}`;
    const response= yield call(deleteRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);

    if(error){
        yield put(showMessageUserAux({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(showMessageUserAux({type:'info',text:'Dirección del Usuario eliminado correctamente'}));
        yield getLoadDataUserExecute({payload:{id:action.payload.usuario_id}});
    }
}

function* updateAddressUserExecute(action){
    if(action.payload.id){
        const requestURL = `usuarioDirecciones/${action.payload.id}`;
        const response= yield call(putRequest,requestURL,action.payload);
        const { error, message } =yield call(getErrorRequest,response);

        if(error){
            yield put(showMessageUserAux({type:'error',text:message}));
        }else{
            const respTxt=yield response.text();
            const obj=JSON.parse(respTxt);
            yield put(showMessageUserAux({type:'info',text:'Dirección del usuario actualizada correctamente'}));
            yield put(updateAddressUserSuccess());
            yield getLoadDataUserExecute({payload:{id:action.payload.usuario_id}});
        }
    }
}

function* getSagaRolesExecute(action){
    const requestURL = `roles`;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);

    if(error){
        yield put(showMessageUserAux({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(getRolesSuccess(obj));
    }
}

export function* postSagaRegisterUser() {
    yield takeLatest(POST_REGISTER_USER, postRegisterUserExecute);
}

export function* getSagaRegistersList(){
    yield takeLatest(GET_REGISTER_USERSLIST, getRegistersListExecute);
    
}

export function* deleteSagaRegisterUser(){
    yield takeLatest(DELETE_REGISTER_USER,deleteRegisterUserExecute);
}

export function* putSagaRegisterUser(){
    yield takeLatest(PUT_REGISTER_USER, putRegisterUserExecute);
}

export function* getSagaAddressTypes(){
    yield takeLatest(GET_ADDRESS_TYPES, getAddressTypesExecute);
}

export function* postSagaAddressUser(){
    yield takeLatest(POST_ADDRESS_USER, postAddressUserExecute);
}

export function* getSagaLoadDataUser(){
    yield takeLatest(ON_LOAD_DATA_USER, getLoadDataUserExecute);
}

export function* deleteSagaAddressUser(){
    yield takeLatest(DELETE_ADDRESS_USER, deleteAddressUserExecute);
}

export function* updateSagaAddressUser(){
    yield takeLatest(UPDATE_ADDRESS_USER, updateAddressUserExecute);
}

export function* getSagaRoles(){
    yield takeLatest(GET_ROLES, getSagaRolesExecute);
}

export default function* rootSaga() {
    yield all([
        fork(postSagaRegisterUser),
        fork(getSagaRegistersList),
        fork(deleteSagaRegisterUser),
        fork(putSagaRegisterUser),
        fork(getSagaAddressTypes),
        fork(postSagaAddressUser),
        fork(getSagaLoadDataUser),
        fork(deleteSagaAddressUser),
        fork(updateSagaAddressUser),
        fork(getSagaRoles)
    ]);
   /*yield spawn(postRegisterUser);
    yield spawn(getRegistersList);
    yield spawn(deleteRegisterUser);
    yield spawn(putRegisterUser);
    yield spawn(getAddressTypes);
    yield spawn(postAddressUser);
    yield spawn(getLoadDataUser);
    yield spawn(deleteAddressUser);
    yield spawn(updateAddressUser);
    yield spawn(getSagaRoles);*/
}