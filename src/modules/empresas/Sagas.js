//import {all, call, fork, put, takeEvery,takeLatest,spawn} from "redux-saga/effects";
import {call, put,takeLatest,spawn} from "redux-saga/effects";

import {
    EMP_GET_EMPRESASLIST,
    EMP_POST_EMPRESAS,
    EMP_GET_EMPRESAS,
    EMP_PUT_EMPRESAS,
    EMP_DELETE_EMPRESAS,

} from "./Constants.js";

import {
    Emp_Get_EmpresasList_Success,
    Emp_Show_Message_Empresas,
    Emp_Post_Empresas_Success,
    Emp_Get_Empresas_Success,
    // Emp_Put_Empresas_Success,
    // Emp_Delete_Empresas_Success,
    Emp_Set_Message_Eliminar_Empresas,

} from "./Actions.js";
/***************************************************************************/
/***************************************************************************/
//import { putRequest, postRequest, getRequest, getErrorRequest, deleteRequest } from '../../util/apiFetch';
import { postRequest, getRequest, getErrorRequest, deleteRequest } from '../../util/apiFetch';
// import {showAuthMessage} from "actions/Auth";
// import { valueToRelative } from "@amcharts/amcharts4/.internal/core/utils/Utils";
// import { RestoreTwoTone } from "@material-ui/icons";
import _extends from "@babel/runtime/helpers/esm/extends";
/***************************************************************************/
/***************************************************************************/
function* Emp_Get_EmpresasList_Execute(){ var isExecute = false; if( isExecute == false ) { isExecute = true;

    console.log("Emp_Get_EmpresasList_Execute "+Date.now());
    const response = yield call(getRequest,'empresas_get_list');
    const { error, message } = yield call(getErrorRequest,response);
    if(error){
        yield put(Emp_Show_Message_Empresas({type:'warning',text:message}));
    }
    else {
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(Emp_Post_Empresas_Success());
        yield put(Emp_Get_EmpresasList_Success(obj));
    }

}}
/***************************************************************************/
/***************************************************************************/
function* Emp_Post_Empresas_Execute({payload}){ var isExecute = false; if( isExecute == false ) { isExecute = true;
    
    console.log("Emp_Post_Empresas_Execute "+Date.now());
    const response= yield call(postRequest,'empresas_post',payload);
    const { error, message } =yield call(getErrorRequest,response);
    if(error) {
        yield put(Emp_Show_Message_Empresas({type:'warning',text:message}));
    }
    else {
        yield put(Emp_Post_Empresas_Success());
        yield Emp_Get_EmpresasList_Execute();
        yield put(Emp_Show_Message_Empresas({type:'success',text:'GUARDADO CORRECTAMENTE'}));
    }

}}
/***************************************************************************/
/***************************************************************************/
function* Emp_Put_Empresas_Execute({payload}){ var isExecute = false; if( isExecute == false ) { isExecute = true;
    
    console.log("Emp_Put_Empresas_Execute "+Date.now());
    const response= yield call(postRequest,'empresas_put',payload);
    const { error, message } =yield call(getErrorRequest,response);
    if(error) {
        yield put(Emp_Show_Message_Empresas({type:'warning',text:message}));
    }
    else {
        yield put(Emp_Post_Empresas_Success());
        yield Emp_Get_EmpresasList_Execute();
        yield put(Emp_Show_Message_Empresas({type:'success',text:'ACTUALIZADO CORRECTAMENTE'}));
    }

}}
/***************************************************************************/
/***************************************************************************/
function* Emp_Get_Empresas_Execute(payload){ var isExecute = false; if( isExecute == false ) { isExecute = true;
    
    console.log("Emp_Get_Empresas_Execute "+Date.now());
    if(typeof(payload)=='object') { var id = payload.payload; } else { var id = payload; }
    const response = yield call(getRequest,'empresas_get/'+id);
    const { error, message } = yield call(getErrorRequest,response);
    if(error)
    {
        yield put(Emp_Show_Message_Empresas({type:'warning',text:message}));
    }
    else
    {
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(Emp_Get_Empresas_Success(obj));
    }

}}
/***************************************************************************/
/***************************************************************************/
function* Emp_Delete_Empresas_Execute(payload) { var isExecute = false; if( isExecute == false ) { isExecute = true;
    
    console.log("Emp_Delete_Empresas_Execute "+Date.now());
    if(typeof(payload)=='object') { var id = payload.payload; } else { var id = payload; }
    const response = yield call(getRequest,'empresas_delete/'+id);
    const { error, message } =yield call(getErrorRequest,response);
    
    yield put(Emp_Set_Message_Eliminar_Empresas(false));
    if(error)
    {
        yield put(Emp_Show_Message_Empresas({type:'warning',text:message}));
    }
    else
    {
        yield Emp_Get_EmpresasList_Execute();
        yield put(Emp_Show_Message_Empresas({type:'success',text:'ELIMINADO CORRECTAMENTE'}));
    }

}}
/***************************************************************************/
/***************************************************************************/
export function* Emp_Get_EmpresasList(){
    yield takeLatest(EMP_GET_EMPRESASLIST, Emp_Get_EmpresasList_Execute);
}
export function* Emp_Post_Empresas(){
    yield takeLatest(EMP_POST_EMPRESAS, Emp_Post_Empresas_Execute);
}
export function* Emp_Get_Empresas(){
    yield takeLatest(EMP_GET_EMPRESAS, Emp_Get_Empresas_Execute);
}
export function* Emp_Put_Empresas(){
    yield takeLatest(EMP_PUT_EMPRESAS, Emp_Put_Empresas_Execute);
}
export function* Emp_Delete_Empresas(){
    yield takeLatest(EMP_DELETE_EMPRESAS, Emp_Delete_Empresas_Execute);
}
/***************************************************************************/
/***************************************************************************/
export default function* rootSaga() {

    yield spawn(Emp_Get_EmpresasList);
    yield spawn(Emp_Post_Empresas);
    yield spawn(Emp_Get_Empresas);
    yield spawn(Emp_Put_Empresas);
    yield spawn(Emp_Delete_Empresas);
}