import {all,call,fork, put,takeLatest,spawn} from "redux-saga/effects";
import {
    getRequest,
    postRequest,
    getErrorRequest,
    uploadFilesRequest
} from 'util/apiFetch';
import {
    GET_CLIENTS_LIST_BY_TEXT_RECEPCION_NEW,
    GET_CLIENTS_LIST_BY_ID_RECEPCION_NEW,
    GET_CLIENT_TRACKING_RECEPCION_NEW,
    POST_TRACKING_RECEPCION_NEW,
    GET_UBICACIONES_LIST_RECEPCION_NEW,
    GET_CURRIER_LIST_RECEPCION_NEW,
    GET_CLIENTS_LIST_WITHOUT_TRACKING_RECEPCION_NEW,
    SEND_EMAILS_TRACKINGS_RECEPCION_NEW
} from './Constants';

import {
    showMessageRecepcionNew,
    getClientsListByTextRecepcionNewSuccess,
    getClientTrackingSuccessRecepcionNew,
    setStepperRecepcionNew,
    setClienteRecepcionNew,
    setContentHeaderRecepcionNew,
    getUbicacionesListRecepcionNewSuccess,
    getCurrierListRecepcionNewSuccess,
    getClientsListWithoutTrackingRecepcionNewSuccess,
    setIdClientPayloadRecepcionNew,
    postTrackingSuccessRecepcionNew,
    hideLoadingRecepcionNew
} from './Actions';

import {
    prepareImagesDetail,
    matchTrackingsWithImagesDetail,
    prepareDocsTracking,
    matchTrackingsWithDocs
} from 'util/functions';
import { database } from "firebase";



function* getSagaClientsListByTextRecepcionNewExecute(action){
    const requestURL = `clientes/search-text/${action.payload.text}`;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
       yield put(showMessageRecepcionNew({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(getClientsListByTextRecepcionNewSuccess(obj));
    }
}

function* getSagaClientsListByIdRecepcionNewExecute(action){
    const requestURL = `clientes/search-qr-id/${action.payload.id}`;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
       yield put(showMessageRecepcionNew({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield getSagaClientTrackingRecepcionNewExecute({payload:{id:action.payload.id}})
        yield put(setClienteRecepcionNew({id:obj[0].id,
            codigo:obj[0].codigo,
            razonSocial:obj[0].razonSocial,
            rut:obj[0].rut}));
        yield put(setContentHeaderRecepcionNew({titulo1:obj[0].razonSocial,titulo2:`ID : ${obj[0].id} / ${obj[0].rut} `}));
        yield put(setIdClientPayloadRecepcionNew({id:obj[0].id}));
        //yield put(getClientsListByTextRecepcionNewSuccess(obj));
    }
}


function* getSagaClientTrackingRecepcionNewExecute(action){
    const requestURL = `tracking/cliente/`+action.payload.id;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);

    if(error){
        yield put(showMessageRecepcionNew({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        yield put(getClientTrackingSuccessRecepcionNew(obj));
        yield put(setStepperRecepcionNew(2));
    }
}

function* postSagaTrackingRecepcionNewExecute(action){
    const PackingInvoiceDocs=yield prepareDocsTracking(action.payload.trackings);
    const ImagesDetail= yield prepareImagesDetail(action.payload.trackings);
    const requestURL = `tracking/multiple`;
    const response= yield call(postRequest,requestURL,action.payload);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
         yield put(showMessageRecepcionNew({type:'error',text:message}));
         yield put(hideLoadingRecepcionNew());
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        if(ImagesDetail && ImagesDetail.length>0){
            const ImagesDetailFinal=yield matchTrackingsWithImagesDetail(ImagesDetail,obj);
            yield all(ImagesDetailFinal.map(item=>call(uploadImagesDetailRecepcionNew,item)));
        }

        if(PackingInvoiceDocs && PackingInvoiceDocs.length>0){
           const PackingInvoiceDocsFinal=yield matchTrackingsWithDocs(PackingInvoiceDocs,obj);
         yield all(PackingInvoiceDocsFinal.map(item=>call(uploadTrackingDocsRecepcionNew,item)));
        }
        yield postSagaSendEmailsTrackingsRecepcionNewExecute(obj);
        yield put(showMessageRecepcionNew({type:'success',text:'El tracking ha sido ingresado correctamente'}));
        yield put(postTrackingSuccessRecepcionNew());
    }
}

function* uploadImagesDetailRecepcionNew(obj){
    if(obj){
            const fd=new FormData();
            if(obj.foto1 && obj.foto1!==null){
                fd.append('foto1',obj.foto1,obj.foto1.name);
            }
            if(obj.foto2 && obj.foto2!==null){
                fd.append('foto2',obj.foto2,obj.foto2.name);
            }
            if(obj.foto3 && obj.foto3!==null){
                fd.append('foto3',obj.foto3,obj.foto3.name);
            }

            const requestURL = `trackingDetalle/tracking/${obj.id}/upload/${obj.upload_id}`;
            const response= yield call(uploadFilesRequest,requestURL,fd);
            const { error, message } =yield call(getErrorRequest,response);
            if(error){
                yield put(showMessageRecepcionNew({type:'error',text:message}));
            }else{
                console.log(`FOTOS SUBIDAS TRACKING N° ${obj.id} UPLOAD_ID ${obj.upload_id}`);
                //alert('OK');
            }
    }
}

function* uploadTrackingDocsRecepcionNew(item){
    if(item){
        const fd=new FormData();

        if(item.packingList1){
            fd.append('packingList1',item.packingList1,item.packingList1.name);
        }

        if(item.packingList2){
            fd.append('packingList2',item.packingList1,item.packingList2.name);
        }

        if(item.invoice1){
            fd.append('invoice1',item.invoice1,item.invoice1.name);
        }

        if(item.invoice2){
            fd.append('invoice2',item.invoice2,item.invoice2.name);
        }
        
        const requestURL = `tracking/uploadFiles/packingList/invoice/${item.id}`;
        const response= yield call(uploadFilesRequest,requestURL,fd);
        const { error, message } =yield call(getErrorRequest,response);
        if(error){
           // yield put(showMessageTrackingFullEdicion({type:'error',text:message}));
        }else{
           // alert('Archivos subidos correctamente');
            //yield getTrackingManualDataExecute({flagModal:true,id:action.payload.id});
        }
    }
}



function* getSagaUbicacionesListRecepcionNewExecute(action){
    const requestURL = `bodegas_ubicaciones`;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
        yield put(showMessageRecepcionNew({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
         yield put(getUbicacionesListRecepcionNewSuccess(obj));
    }
}

function* getSagaCurrierListRecepcionNewExecute(action){
    const requestURL = `currier`;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
        yield put(showMessageRecepcionNew({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
         yield put(getCurrierListRecepcionNewSuccess(obj));
    }
}

function* getSagaClientsListWithoutTrackingRecepcionNewExecute(action){
    const requestURL = `cliente/without_tracking/${action.payload.fk_cliente}`;
    const response= yield call(getRequest,requestURL);
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
        yield put(showMessageRecepcionNew({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
         yield put(getClientsListWithoutTrackingRecepcionNewSuccess(obj));
    }
}

function* postSagaSendEmailsTrackingsRecepcionNewExecute(data){
    const requestURL = `tracking/send_email`;
    const response= yield call(postRequest,requestURL,{trackings:data});
    const { error, message } =yield call(getErrorRequest,response);
    if(error){
        yield put(showMessageRecepcionNew({type:'error',text:message}));
    }else{
        const respTxt=yield response.text();
        const obj=JSON.parse(respTxt);
        // yield put(getClientsListWithoutTrackingRecepcionNewSuccess(obj));
    }
}

export function* getSagaClientsListByTextRecepcionNew(){
    yield takeLatest(GET_CLIENTS_LIST_BY_TEXT_RECEPCION_NEW, getSagaClientsListByTextRecepcionNewExecute);
}

export function* getSagaClientsListByIdRecepcionNew(){
    yield takeLatest(GET_CLIENTS_LIST_BY_ID_RECEPCION_NEW, getSagaClientsListByIdRecepcionNewExecute);
}

export function* getSagaClientTrackingRecepcionNew(){
    yield takeLatest(GET_CLIENT_TRACKING_RECEPCION_NEW, getSagaClientTrackingRecepcionNewExecute);
}

export function* postSagaTrackingRecepcionNew(){
    yield takeLatest(POST_TRACKING_RECEPCION_NEW, postSagaTrackingRecepcionNewExecute);
}

export function* getSagaUbicacionesListRecepcionNew(){
    yield takeLatest(GET_UBICACIONES_LIST_RECEPCION_NEW, getSagaUbicacionesListRecepcionNewExecute);
}

export function* getSagaCurrierListRecepcionNew(){
    yield takeLatest(GET_CURRIER_LIST_RECEPCION_NEW, getSagaCurrierListRecepcionNewExecute);
}

export function* getSagaClientsListWithoutTrackingRecepcionNew(){
    yield takeLatest(GET_CLIENTS_LIST_WITHOUT_TRACKING_RECEPCION_NEW, getSagaClientsListWithoutTrackingRecepcionNewExecute);
}

export function* postSagaSendEmailsTrackingsRecepcionNew(){
    yield takeLatest(SEND_EMAILS_TRACKINGS_RECEPCION_NEW, postSagaSendEmailsTrackingsRecepcionNewExecute);
}





    
export default function* rootSaga() {
    yield all([
       fork(getSagaClientsListByTextRecepcionNew),
       fork(getSagaClientsListByIdRecepcionNew),
       fork(getSagaClientTrackingRecepcionNew),
       fork(postSagaTrackingRecepcionNew),
       fork(getSagaUbicacionesListRecepcionNew),
       fork(getSagaCurrierListRecepcionNew),
       fork(getSagaClientsListWithoutTrackingRecepcionNew),
       fork(postSagaSendEmailsTrackingsRecepcionNew)
    ]);

}