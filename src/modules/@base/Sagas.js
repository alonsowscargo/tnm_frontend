import {all, call, fork, put, takeEvery,takeLatest,spawn} from "redux-saga/effects";

import {
    PC_GET_LIST_PROPUESTACOMERCIAL,

} from "./Constants.js";

import {
    Pc_Get_List_PropuestaComercial_Success,
    
} from "./Actions.js";
/***************************************************************************/
/***************************************************************************/
import { putRequest, postRequest, getRequest, getErrorRequest, deleteRequest } from '../../util/apiFetch';
import {showAuthMessage} from "actions/Auth";
import { valueToRelative } from "@amcharts/amcharts4/.internal/core/utils/Utils";
import { RestoreTwoTone } from "@material-ui/icons";
import { Set_Message_Eliminar_SerAd } from "modules/propuestaComercial_old/Actions.js";
import _extends from "@babel/runtime/helpers/esm/extends";
/***************************************************************************/
/***************************************************************************/
function* Pc_Get_List_PropuestaComercial_Execute(payload){
    if(typeof(payload)=='object') { var id = payload.payload; } 
    else { var id = payload; }

    if(id==1)
    {
        yield put(Pc_Set_Titulo_Propuesta(''));
        yield put(Pc_Get_PropuestaComercial_Fail());
        yield put(Pc_Set_ServicioAdicional_Fk_Cabecera(0));
    }
    const requestURL = `propuestas_get_list_propuestascomerciales/`+id;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
        yield put(Pc_Show_Message_PropuestaComercial({type:'warning',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(Pc_Get_List_PropuestaComercial_Success(obj));
    }
}
/***************************************************************************/
/***************************************************************************/
export function* Pc_Get_List_PropuestaComercial(){
    yield takeLatest(PC_GET_LIST_PROPUESTACOMERCIAL, Pc_Get_List_PropuestaComercial_Execute);
}
/***************************************************************************/
/***************************************************************************/
export default function* rootSaga() {

    yield spawn(Pc_Get_List_PropuestaComercial);
    
}