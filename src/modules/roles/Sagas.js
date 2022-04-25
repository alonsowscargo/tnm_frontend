import {all, call, fork, put, takeEvery,takeLatest,spawn} from "redux-saga/effects";

import {
    R_GET_ROLESLIST,
    R_POST_ROLES,
    R_GET_ROLES,
    R_PUT_ROLES,
    R_DELETE_ROLES,

} from "./Constants.js";

import {
    R_Get_RolesList_Success,
    R_Show_Message_Roles,
    R_Post_Roles_Success,
    R_Get_Roles_Success,
    R_Put_Roles_Success,
    R_Delete_Roles_Success,
    R_Set_Message_Eliminar_Roles,

} from "./Actions.js";
/***************************************************************************/
/***************************************************************************/
import { putRequest, postRequest, getRequest, getErrorRequest, deleteRequest } from '../../util/apiFetch';
import {showAuthMessage} from "actions/Auth";
import { valueToRelative } from "@amcharts/amcharts4/.internal/core/utils/Utils";
import { RestoreTwoTone } from "@material-ui/icons";
import _extends from "@babel/runtime/helpers/esm/extends";
/***************************************************************************/
/***************************************************************************/
function* R_Get_RolesList_Execute(){ var isExecute = false; if( isExecute == false ) { isExecute = true;

    console.log("R_Get_RolesList_Execute "+Date.now());
    const response = yield call(getRequest,`roles_get_list`);
    const { error, message } = yield call(getErrorRequest,response);
    if(error){
        yield put(R_Show_Message_Roles({type:'warning',text:message}));
    }
    else {
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(R_Post_Roles_Success());
        yield put(R_Get_RolesList_Success(obj));
    }

}}
/***************************************************************************/
/***************************************************************************/
function* R_Post_Roles_Execute({payload}){ var isExecute = false; if( isExecute == false ) { isExecute = true;
    
    console.log("R_Post_Roles_Execute "+Date.now());
    const response= yield call(postRequest,'roles_post',payload);
    const { error, message } =yield call(getErrorRequest,response);
    if(error) {
        yield put(R_Show_Message_Roles({type:'warning',text:message}));
    }
    else {
        yield put(R_Show_Message_Roles({type:'success',text:'GUARDADO CORRECTAMENTE'}));
        yield put(R_Post_Roles_Success());
        yield R_Get_RolesList_Execute();
    }

}}
/***************************************************************************/
/***************************************************************************/
function* R_Put_Roles_Execute({payload}){ var isExecute = false; if( isExecute == false ) { isExecute = true;
    
    console.log("R_Put_Roles_Execute "+Date.now());
    const response= yield call(postRequest,'roles_put',payload);
    const { error, message } =yield call(getErrorRequest,response);
    if(error) {
        yield put(R_Show_Message_Roles({type:'warning',text:message}));
    }
    else {
        yield put(R_Post_Roles_Success());
        yield R_Get_RolesList_Execute();
        yield put(R_Show_Message_Roles({type:'success',text:'ACTUALIZADO CORRECTAMENTE'}));
    }

}}
/***************************************************************************/
/***************************************************************************/
function* R_Get_Roles_Execute(payload){ var isExecute = false; if( isExecute == false ) { isExecute = true;
    
    console.log("R_Get_Roles_Execute "+Date.now());
    if(typeof(payload)=='object') { var id = payload.payload; } else { var id = payload; }
    const response = yield call(getRequest,`roles_get/`+id);
    const { error, message } = yield call(getErrorRequest,response);
    if(error)
    {
        yield put(R_Show_Message_Roles({type:'warning',text:message}));
    }
    else
    {
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(R_Get_Roles_Success(obj));
    }

}}
/***************************************************************************/
/***************************************************************************/
function* R_Delete_Roles_Execute(payload) { var isExecute = false; if( isExecute == false ) { isExecute = true;
    
    console.log("R_Delete_Roles_Execute "+Date.now());
    if(typeof(payload)=='object') { var id = payload.payload; } else { var id = payload; }
    const response = yield call(getRequest,`roles_delete/`+id);
    const { error, message } =yield call(getErrorRequest,response);
    
    yield put(R_Set_Message_Eliminar_Roles(false));
    if(error)
    {
        yield put(R_Show_Message_Roles({type:'warning',text:message}));
    }
    else
    {
        yield R_Get_RolesList_Execute();
        yield put(R_Show_Message_Roles({type:'success',text:'ELIMINADO CORRECTAMENTE'}));
    }

}}
/***************************************************************************/
/***************************************************************************/
export function* R_Get_RolesList(){
    yield takeLatest(R_GET_ROLESLIST, R_Get_RolesList_Execute);
}
export function* R_Post_Roles(){
    yield takeLatest(R_POST_ROLES, R_Post_Roles_Execute);
}
export function* R_Get_Roles(){
    yield takeLatest(R_GET_ROLES, R_Get_Roles_Execute);
}
export function* R_Put_Roles(){
    yield takeLatest(R_PUT_ROLES, R_Put_Roles_Execute);
}
export function* R_Delete_Roles(){
    yield takeLatest(R_DELETE_ROLES, R_Delete_Roles_Execute);
}
/***************************************************************************/
/***************************************************************************/
export default function* rootSaga() {

    yield spawn(R_Get_RolesList);
    yield spawn(R_Post_Roles);
    yield spawn(R_Get_Roles);
    yield spawn(R_Put_Roles);
    yield spawn(R_Delete_Roles);
}