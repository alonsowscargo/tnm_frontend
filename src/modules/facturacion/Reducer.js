
import {
    SHOW_MESSAGE_DASHBOARD,
    HIDE_MESSAGE_DASHBOARD,
    SET_SHOW_LIST_CLIENTES_SRLD_DASHBOARD,
    GET_DASHBOARD_CLIENTES_SIN_REPRESENTANTE_LEGAL_DOCUMENTACION_SUCCESS,
    SHOW_MODAL_EDITAR_CLIENTE_DASHBOARD,
    CLOSE_MODAL_EDITAR_CLIENTE_DASHBOARD,
    GET_REPORTE_PROPUESTAS_DASHBOARD_SUCCESS,
    GET_REPORTE_CLIENTES_CREADOS_DASHBOARD_SUCCESS,
    GET_REPORTE_TRACKINGS_CREADOS_DASHBOARD_SUCCESS,
    SET_LOADER_DASHBOARD
} from './Constants';
const INIT_STATE = {
    loader:false,
    showMessage:false,
    activeList:false,
    alertMessage:{type:'',text:''},
    clientNotifications:[],
    modalEditarCliente:{
        open:false,
        cliente:null,
    },
    reportePropuestas:[],
    reporteClientesCreados:[],
    reporteTrackingsCreados:[]
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        
       case SHOW_MESSAGE_DASHBOARD:{
           return{
               ...state,
               alertMessage:action.payload,
               showMessage:true
           }
       }

       case HIDE_MESSAGE_DASHBOARD:{
            return{
                ...state,
                alertMessage:{type:'',text:''},
                showMessage:false
            }
        }
        
       case GET_DASHBOARD_CLIENTES_SIN_REPRESENTANTE_LEGAL_DOCUMENTACION_SUCCESS: {
            return {
                ...state,
                clientNotifications: action.payload
            }
        }

        case SET_SHOW_LIST_CLIENTES_SRLD_DASHBOARD:{
            return{
                ...state,
                activeList:action.payload
            }
        }
        case SHOW_MODAL_EDITAR_CLIENTE_DASHBOARD:{
            return{
                ...state,
                modalEditarCliente:{
                    open:true,
                    cliente:action.payload
                }
            }
        }
        case CLOSE_MODAL_EDITAR_CLIENTE_DASHBOARD:{
            return{
                ...state,
                modalEditarCliente:{
                    open:false,
                    cliente:null
                }
            }
        }
        case GET_REPORTE_PROPUESTAS_DASHBOARD_SUCCESS:{ 
            return{
                ...state,
                loader:false,
                reportePropuestas:action.payload
            }
        }
        case GET_REPORTE_CLIENTES_CREADOS_DASHBOARD_SUCCESS:{
            return{
                ...state,
                loader:false,
                reporteClientesCreados:action.payload
            }
        }
        case GET_REPORTE_TRACKINGS_CREADOS_DASHBOARD_SUCCESS:{
            return{
                ...state,
                loader:false,
                reporteTrackingsCreados:action.payload
            }
        }
        case SET_LOADER_DASHBOARD:{
            return{
                ...state,
                loader:action.payload
            }
        }
        default:
            return state;
    }
}