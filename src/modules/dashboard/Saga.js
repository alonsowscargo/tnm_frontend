import {all, call, fork, put, takeEvery,takeLatest,spawn} from "redux-saga/effects";
import { putRequest, postRequest, getRequest, getErrorRequest, deleteRequest } from '../../util/apiFetch';
import {
   GET_DASHBOARD_CLIENTES_SIN_REPRESENTANTE_LEGAL_DOCUMENTACION,
   GET_REPORTE_PROPUESTAS_DASHBOARD,
   GET_REPORTE_CLIENTES_CREADOS_DASHBOARD,
   GET_REPORTE_TRACKINGS_CREADOS_DASHBOARD
} from './Constants';

import {
   showMessageDashboard,
   getDashboardClientesSinRepresentanteLegalDocumentacionSuccess,
   getReportePropuestasDashboardSuccess,
   getReporteClientesCreadosDashboardSuccess,
   getReporteTrackingsCreadosDashboardSuccess
} from './Actions';


function* getDashboardClientesSinRepLegalDocumentacionExecute(action){
   const requestURL = `dashboard/get_list_clients_pendings_replegal_doc`;
   const response= yield call(getRequest,requestURL);
   const { error, message } =yield call(getErrorRequest,response);
   if(error){
       yield put(showMessageDashboard({type:'error',text:message}));
   }else{
       const respTxt=yield response.text();
       const obj=JSON.parse(respTxt);
       yield put(getDashboardClientesSinRepresentanteLegalDocumentacionSuccess(obj));
   }
}

function* getSagaReportePropuestasDashboardExecute(action){
   const requestURL = `dashboard/get_report_propuestas_comerciales/${action.payload.fecha}`;
   const response= yield call(getRequest,requestURL);
   const { error, message } =yield call(getErrorRequest,response);
   if(error){
       yield put(showMessageDashboard({type:'error',text:message}));
   }else{
       const respTxt=yield response.text();
       const obj=JSON.parse(respTxt);
       yield put(getReportePropuestasDashboardSuccess(obj));
   }
}

function* getSagaReporteClientesCreadosDashboardExecute(action){
   const requestURL = `dashboard/get_report_clientes_creados/${action.payload.fecha}`;
   const response= yield call(getRequest,requestURL);
   const { error, message } =yield call(getErrorRequest,response);
   if(error){
       yield put(showMessageDashboard({type:'error',text:message}));
   }else{
       const respTxt=yield response.text();
       const obj=JSON.parse(respTxt);
       yield put(getReporteClientesCreadosDashboardSuccess(obj));
   }
}

function* getSagaReporteTrackingsCreadosDashboardExecute(action){
   const requestURL = `dashboard/get_report_trackings_creados/${action.payload.fecha}`;
   const response= yield call(getRequest,requestURL);
   const { error, message } =yield call(getErrorRequest,response);
   if(error){
       yield put(showMessageDashboard({type:'error',text:message}));
   }else{
       const respTxt=yield response.text();
       const obj=JSON.parse(respTxt);
       yield put(getReporteTrackingsCreadosDashboardSuccess(obj));
   }
}


export function* getDashboardClientesSinRepLegalDocumentacion(){
   yield takeLatest(GET_DASHBOARD_CLIENTES_SIN_REPRESENTANTE_LEGAL_DOCUMENTACION, getDashboardClientesSinRepLegalDocumentacionExecute);
}

export function* getSagaReportePropuestasDashboard(){
   yield takeLatest(GET_REPORTE_PROPUESTAS_DASHBOARD, getSagaReportePropuestasDashboardExecute);
}

export function* getSagaReporteClientesCreadosDashboard(){
   yield takeLatest(GET_REPORTE_CLIENTES_CREADOS_DASHBOARD, getSagaReporteClientesCreadosDashboardExecute);
}

export function* getSagaReporteTrackingsCreadosDashboard(){
   yield takeLatest(GET_REPORTE_TRACKINGS_CREADOS_DASHBOARD, getSagaReporteTrackingsCreadosDashboardExecute);
}



export default function* rootSaga() {
   yield spawn(getDashboardClientesSinRepLegalDocumentacion);
   yield spawn(getSagaReportePropuestasDashboard);
   yield spawn(getSagaReporteClientesCreadosDashboard);
   yield spawn(getSagaReporteTrackingsCreadosDashboard);
}