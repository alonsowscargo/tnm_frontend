import {
    ON_CHANGE_MODE_RECEPTION,
    ON_CHANGE_MODE_READER,
    GET_CLIENT_WITH_QR_CODE_SUCCESS,
    GET_CLIENT_WITH_QR_CODE,
    GET_CLIENT_TRACKING_SUCCESS,
    CLEAR_CLIENT_TRACKING,
    SHOW_MESSAGE_RECEPCION,
    HIDE_MESSAGE_RECEPCION,
    EMPTY_DATA_INIT_RECEPCION,
    SEARCH_CLIENT_BY_CODE_SUCCESS
} from 'constants/ReceptionMaintainer';

import moment from 'moment';

const INIT_STATE = {
    loader: false,
    mode:'',
    reader:{
        qr:true,
        barcode:false
    },
    client:null,
    clientTracking:[],
    showMessage:false,
    alertMessage:{type:'',text:''}
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ON_CHANGE_MODE_RECEPTION: {
            return {
                ...state,
                mode: action.payload,
                clientTracking:[],
                client:null,
                reader:{
                    qr:true,
                    barcode:false
                },
            }
        }
        case GET_CLIENT_WITH_QR_CODE:{
            return {
                ...state,
                reader: {
                    ...state.reader,
                    qr:false
                }
            } 
        }
        case ON_CHANGE_MODE_READER: {
            let obj={};
            if(action.payload.key==='qr' && action.payload.value===true){
                obj={
                    ...state.reader,
                    barcode:false,
                    [action.payload.key]:action.payload.value
                }
            }else if (action.payload.key==='barcode' && action.payload.value===true){
                obj={
                    ...state.reader,
                    qr:false,
                    [action.payload.key]:action.payload.value
                }
            }else if(action.payload.key==='qr' && action.payload.value===false){
                obj={
                    ...state.reader,
                    [action.payload.key]:action.payload.value,
                    barcode:false
                }
            }
            return {
                ...state,
                reader: obj
            }
        }
        case GET_CLIENT_WITH_QR_CODE_SUCCESS: {
            return {
                ...state,
                client: action.payload[0]
            }
        }
        case GET_CLIENT_TRACKING_SUCCESS:{
            if(action.payload && action.payload.length>0){
                action.payload.map(function(item,index){
                    item.fecha_creacion_formateada=moment(item.fecha_creacion).format('DD-MM-YYYY HH:mm:ss');
                    if(item.estado===0){
                        item.estado_nombre='Creado';
                    }
                    if(item.tipo==0){
                        item.tipo_nombre='Manual';
                    }else if(item.tipo==1){
                        item.tipo_nombre='Automatico';
                    }else if(item.tipo==2){
                        item.tipo_nombre='Packing List';
                    }
                    item.cantidad_bultos=item.cantidad_bultos;//item.tracking_detalle.length;
                })
            }
            action.payload.sort((a, b) => b.id - a.id);
            return{
                ...state,
                clientTracking:action.payload
            }
        }
        case CLEAR_CLIENT_TRACKING:{
            return {
                ...state,
                client:null,
                clientTracking:[]
            }
        }
        case HIDE_MESSAGE_RECEPCION: {
            return {
                ...state,
                alertMessage: {type:'',text:''},
                showMessage: false,
                loader: false
            }
        }
        case SHOW_MESSAGE_RECEPCION: {
            return {
                ...state,
                alertMessage: {type:action.payload.type,text:action.payload.text},
                showMessage: true,
                loader: false
            }
        }
        case EMPTY_DATA_INIT_RECEPCION:{
            return{
                ...INIT_STATE
            }
        }
        case SEARCH_CLIENT_BY_CODE_SUCCESS: {
            return {
                ...state,
                client: action.payload[0]
            }
        }
        default:
            return state;
    }
}