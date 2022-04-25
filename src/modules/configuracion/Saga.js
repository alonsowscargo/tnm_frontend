import {all,fork,call, put,takeLatest} from "redux-saga/effects";
import {
    putRequest,
    getErrorRequest,
} from 'util/apiFetch';
import {CHANGE_PASSWORD_CONFIGURACION} from './Constants';
import {showMessageConfiguracion} from './Actions';

function* putSagaChangePasswordConfiguracionExecute(action){
    const requestURL = `cambiar-password`;
    const response= yield call(putRequest,requestURL,action.payload);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
        yield put(showMessageConfiguracion({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(showMessageConfiguracion({type:'success',text:"Password actualizado correctamente"}));
    }
}

export function* putSagaChangePasswordConfiguracion(){
    yield takeLatest(CHANGE_PASSWORD_CONFIGURACION, putSagaChangePasswordConfiguracionExecute);
}



export default function* rootSaga() {
    yield all([
        fork(putSagaChangePasswordConfiguracion),
    ]);
}