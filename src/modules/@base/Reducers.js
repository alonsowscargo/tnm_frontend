import {
    PC_GET_LIST_PROPUESTACOMERCIAL_SUCCESS,

} from './Constants.js';

const INIT_STATE = {
    Alert_Message_PropuestaComercial:{type:'',text:''},
    Show_Message_PropuestaComercial:false,
    Message_Eliminar_PropuestaComercial:false,
    Message_Eliminar_ServicioAdicional:false,
    Message_Eliminar_Tarifa:false,
    List_PropuestaComercial:[],
    Pay_ReporteFechas:{
        fechaDesde: '',
        fechaHasta: '',
    },
    Payload_PropuestaComercial:{
        id:0, 
        estado:0, 
        fk_cliente:0,
        fk_direccion:0,
        nombreCliente:'', 
        atencionA:'',
        fk_tipoDeServicio:1, 
        volumenEstimado:0, 
        pesoEstimado:0, 
        fk_zonaDespacho:0, 
        direccion:'', 
        fk_formaDePago:0, 
        cantProveedores:0,
        fechaValidez:'', 
        diasValidez:0,
    },
    Payload_Tarifas:{
        id:0, 
        estado:true, 
        fk_cabecera:0,
        tipoDeCarga:'', 
        volumenEstimado:0, 
        pesoEstimado:0, 
        fk_zonaOrigen:0, 
        fk_zonaAlmacenaje:0, 
        fk_zonaDestino:1, 
        cmbPeso:0, 
        unidadesACobrar:0, 
        valorUnitarioUsd:0, 
        valorBaseUsd:0,
        tarifaUsd:0, 
        Pb_cmbPeso:0, 
        Pb_unidadesACobrar:0, 
        Pb_valorUnitarioUsd:0, 
        Pb_valorBaseUsd:0, 

    },    
    Titulo_Propuesta: '',
    List_Clientes:[],
    List_Direcciones:[],
    List_TiposDeServicios:[],
    List_ZonasTarifarias:[],
    List_FormasDePago:[],
    List_Tarifas:[],
    Payload_ServicioAdicional:{
        id:0, 
        fk_cabecera:0, 
        fk_tipoServicio:0, 
        fk_zonaOrigen:0, 
        fk_zonaDestino:0, 
        tarifa:0, 
    },   
    List_ServiciosAdicionales:[],
    PropuestaPdf_Cab:[],
    PropuestaPdf_SerAd:[],
    PropuestaPdf_Tar:[],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        
        case PC_ON_CHANGE_PAYLOAD_PROPUESTACOMERCIAL: {
            return {
                ...state,
                Payload_PropuestaComercial: action.payload
            }
        }  
        case PC_ON_CHANGE_PAYLOAD_SERVICIOADICIONAL: {
            return {
                ...state,
                Payload_ServicioAdicional: action.payload
            }
        } 
        case PC_ON_CHANGE_PAY_REPORTEFECHAS: {
            return {
                ...state,
                Pay_ReporteFechas: action.payload
            }
        }                  
        case PC_SHOW_MESSAGE_PROPUESTACOMERCIAL: {
            return {
                ...state,
                Alert_Message_PropuestaComercial: {type:action.payload.type,text:action.payload.text},
                Show_Message_PropuestaComercial: true,
            }
        }
        case PC_HIDE_MESSAGE_PROPUESTACOMERCIAL:{
            return {
                ...state,
                Alert_Message_PropuestaComercial: {type:'',text:''},
                Show_Message_PropuestaComercial: false,
            }
        } 
        case PC_GET_LIST_PROPUESTACOMERCIAL_SUCCESS: {
            return {
                ...state,
                List_PropuestaComercial: action.payload
            }
        } 
        case PC_GET_PROPUESTACOMERCIAL_SUCCESS: {
            return {
                ...state,
                Payload_PropuestaComercial:{
                    id:action.payload[0].id,
                    estado:action.payload[0].estado,
                    fk_cliente:action.payload[0].fk_cliente,
                    fk_direccion:action.payload[0].fk_direccion,
                    nombreCliente:action.payload[0].nombrecliente,
                    atencionA:action.payload[0].atenciona,
                    fk_tipoDeServicio:action.payload[0].fk_tipodeservicio,
                    fk_zonaDespacho:action.payload[0].fk_zonadespacho,
                    direccion:action.payload[0].direccion,
                    fk_formaDePago:action.payload[0].fk_formadepago,
                    cantProveedores:action.payload[0].cantproveedores,
                    fechaValidez:action.payload[0].fechavalidez,
                    diasValidez:action.payload[0].diasvalidez,
                },
            }
        } 
        case PC_ACTUALIZARESTADO_SUCCESS: {
            return {
                ...state,
                Payload_PropuestaComercial:{
                    ...state.Payload_PropuestaComercial, 
                    estado:action.payload[0].estado,
                },
            }
        }  
        case PC_GET_PROPUESTACOMERCIAL_FAIL: {
            return {
                ...state,
                Payload_PropuestaComercial:{
                    id:0, 
                    estado:0,
                    fk_cliente:0,
                    fk_direccion:0,
                    nombreCliente:'', 
                    atencionA:'',
                    fk_tipoDeServicio:1, 
                    fk_zonaDespacho:0, 
                    direccion:'', 
                    fk_formaDePago:0, 
                    cantProveedores:0,
                    fechaValidez:'', 
                    diasValidez:0,
                },
            }
        }              
        case PC_SET_MESSAGE_ELIMINAR_PROPUESTACOMERCIAL:{
            return {
                ...state,
                Message_Eliminar_PropuestaComercial: action.payload,
            }
        } 
        case PC_SET_MESSAGE_ELIMINAR_TARIFA:{
            return {
                ...state,
                Message_Eliminar_Tarifa: action.payload,
            }
        }           
        case PC_SET_TITULO_PROPUESTA: {
            return {
                ...state,
                Titulo_Propuesta: action.payload
            }
        }  
        case PC_GET_LIST_CLIENTES_SUCCESS: {
            return {
                ...state,
                List_Clientes: action.payload
            }
        } 
        case PC_GET_LIST_DIRECCIONES_SUCCESS: {
            return {
                ...state,
                List_Direcciones: action.payload
            }
        } 
        case PC_GET_LIST_FORMASDEPAGO_SUCCESS: {
            return {
                ...state,
                List_FormasDePago: action.payload
            }
        } 
        case PC_GET_LIST_ZONASTARIFARIAS_SUCCESS: {
            return {
                ...state,
                List_ZonasTarifarias: action.payload
            }
        } 
        case PC_GET_LIST_TIPOSDESERVICIOS_SUCCESS: {
            return {
                ...state,
                List_TiposDeServicios: action.payload
            }
        } 
        case PC_POST_PROPUESTACOMERCIAL_SUCCESS: {
            return {
                ...state,
                Payload_PropuestaComercial:{
                    id:action.payload[0].id,
                    estado:action.payload[0].estado,
                    fk_cliente:action.payload[0].fk_cliente,
                    fk_direccion:action.payload[0].fk_direccion,
                    nombreCliente:action.payload[0].nombrecliente,
                    atencionA:action.payload[0].atenciona,
                    fk_tipoDeServicio:action.payload[0].fk_tipodeservicio,
                    fk_zonaDespacho:action.payload[0].fk_zonadespacho,
                    direccion:action.payload[0].direccion,
                    fk_formaDePago:action.payload[0].fk_formadepago,
                    cantProveedores:action.payload[0].cantproveedores,
                    fechaValidez:action.payload[0].fechavalidez,
                    diasValidez:action.payload[0].diasvalidez,

                },
            }
        }  
        case PC_POST_SERVICIOADICIONAL_SUCCESS: {
            return {
                ...state,
                Payload_ServicioAdicional:{
                    id:0, 
                    fk_cabecera:action.payload[0].fk_cabecera,
                    fk_tipoServicio:0, 
                    fk_zonaOrigen:0, 
                    fk_zonaDestino:0, 
                    tarifa:0, 
                },
            }
        } 
        case PC_SET_SERVICIOADICIONAL_FK_CABECERA: {
            return {
                ...state,
                Payload_ServicioAdicional:{
                    id:0, 
                    fk_cabecera:action.payload,
                    fk_tipoServicio:0, 
                    fk_zonaOrigen:0, 
                    fk_zonaDestino:0, 
                    tarifa:0, 
                },
            }
        }       
        case PC_GET_LIST_SERVICIOSADICIONALES_SUCCESS: {
            return {
                ...state,
                List_ServiciosAdicionales: action.payload
            }
        } 
        case PC_SET_MESSAGE_ELIMINAR_SERVICIOADICIONAL:{
            return {
                ...state,
                Message_Eliminar_ServicioAdicional: action.payload,
            }
        }       
        case PC_GET_PROPUESTAPDF_CAB_SUCCESS: {
            return {
                ...state,
                PropuestaPdf_Cab: action.payload
            }
        } 
        case PC_GET_PROPUESTAPDF_TAR_SUCCESS: {
            return {
                ...state,
                PropuestaPdf_Tar: action.payload
            }
        }         
        case PC_GET_PROPUESTAPDF_SERAD_SUCCESS: {
            return {
                ...state,
                PropuestaPdf_SerAd: action.payload
            }
        }    
        case PC_GET_LIST_TARIFAS_SUCCESS: {
            return {
                ...state,
                List_Tarifas: action.payload
            }
        }            
        case PC_GET_DIASVALIDEZ_SUCCESS: {
            return {
                ...state,
                Payload_PropuestaComercial:{
                    id:0, 
                    estado:0,
                    fk_cliente:0,
                    fk_direccion:0,
                    nombreCliente:'', 
                    atencionA:'',
                    fk_tipoDeServicio:1, 
                    fk_zonaDespacho:0, 
                    direccion:'', 
                    fk_formaDePago:0, 
                    cantProveedores:0,
                    fechaValidez:'', 
                    diasValidez:action.payload[0].diasvalidez,
                },
            }
        }       
        case PC_ON_CHANGE_PAYLOAD_TARIFAS: {
            return {
                ...state,
                Payload_Tarifas: action.payload
            }
        }         
        case PC_SET_TARIFAS_FK_CABECERA: {
            return {
                ...state,
                Payload_Tarifas:{
                    id:0, 
                    estado:true, 
                    tipoDeCarga:'', 
                    volumenEstimado:0, 
                    pesoEstimado:0, 
                    fk_zonaOrigen:0, 
                    fk_zonaAlmacenaje:0, 
                    fk_zonaDestino:1, 
                    cmbPeso:0,
                    unidadesACobrar:0, 
                    valorUnitarioUsd:0, 
                    valorBaseUsd:0,
                    tarifaUsd:0, 
                    Pb_cmbPeso:0,
                    Pb_unidadesACobrar:0,
                    Pb_valorUnitarioUsd:0,
                    Pb_valorBaseUsd:0,
                    fk_cabecera:action.payload,
                },
            }
        }    
        case PC_GET_PROPUESTABASE_FAIL: {
            return {
                ...state,
                Payload_Tarifas:{
                    id:0, 
                    estado:true, 
                    tipoDeCarga:'', 
                    volumenEstimado:0, 
                    pesoEstimado:0, 
                    fk_zonaOrigen:0, 
                    fk_zonaAlmacenaje:0, 
                    fk_zonaDestino:1, 
                    cmbPeso:0,
                    unidadesACobrar:0, 
                    valorUnitarioUsd:0, 
                    valorBaseUsd:0,
                    tarifaUsd:0, 
                    Pb_cmbPeso:action.payload[0].cmbPeso,
                    Pb_unidadesACobrar:action.payload[0].unidadesacobrar,
                    Pb_valorUnitarioUsd:action.payload[0].valorunitariousd,
                    Pb_valorBaseUsd:action.payload[0].valorbaseusd,
                },
            }
        }      
        case PC_POST_TARIFAS_SUCCESS: {
            return {
                ...state,
                Payload_Tarifas:{
                    ...state.Payload_Tarifas, 
                    id:0, 
                    estado:true, 
                    tipoDeCarga:'', 
                    volumenEstimado:0, 
                    pesoEstimado:0, 
                    fk_zonaOrigen:0, 
                    fk_zonaAlmacenaje:0, 
                    fk_zonaDestino:1, 
                    cmbPeso:0,
                    unidadesACobrar:0, 
                    valorUnitarioUsd:0, 
                    valorBaseUsd:0,
                    tarifaUsd:0, 
                    Pb_cmbPeso:0,
                    Pb_unidadesACobrar:0,
                    Pb_valorUnitarioUsd:0,
                    Pb_valorBaseUsd:0,
                },
            }               
        }    
        case PC_GET_PROPUESTABASE_SUCCESS: {
            return {
                ...state,
                Payload_Tarifas:{
                    ...state.Payload_Tarifas, 
                    id:0, 
                    estado:true, 
                    tipoDeCarga:'', 
                    cmbPeso:action.payload[0].cmbPeso,
                    valorUnitarioUsd:action.payload[0].valorUnitarioUsd,
                    valorBaseUsd:action.payload[0].valorBaseUsd,
                    unidadesACobrar:0, 
                    tarifaUsd:0, 
                    Pb_cmbPeso:action.payload[0].cmbPeso,
                    Pb_unidadesACobrar:action.payload[0].unidadesACobrar,
                    Pb_valorUnitarioUsd:action.payload[0].valorUnitarioUsd,
                    Pb_valorBaseUsd:action.payload[0].valorBaseUsd,
                },
            }
        }                  
        default:
            return state;
    }
}