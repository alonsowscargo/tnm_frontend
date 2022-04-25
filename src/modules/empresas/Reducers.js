import {
    EMP_SET_PAYLOADEMPRESAS,
    EMP_GET_EMPRESASLIST_SUCCESS,
    EMP_SHOW_MESSAGE_EMPRESAS,
    EMP_HIDE_MESSAGE_EMPRESAS,
    EMP_POST_EMPRESAS_SUCCESS,
    EMP_PUT_EMPRESAS_SUCCESS,
    EMP_SET_MESSAGE_ELIMINAR_EMPRESAS,
    EMP_GET_EMPRESAS_SUCCESS,
    EMPTY_DATA_INIT_EMPRESAS
} from './Constants.js';

const INIT_STATE = {
    
    Alert_Message_Empresas:{type:'',text:''},
    Show_Message_Empresas:false,
    Message_Eliminar_Empresas:false,
    Emp_Payload:{
        id:0, 
        nombre:'', 
    },
    Emp_EmpresasList:[],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        
        case EMP_SET_PAYLOADEMPRESAS: {
            return {
                ...state,
                Emp_Payload: action.payload
            }
        }
        case EMP_GET_EMPRESASLIST_SUCCESS: {
            return {
                ...state,
                Emp_EmpresasList: action.payload
            }
        }
        case EMP_SHOW_MESSAGE_EMPRESAS: {
            return {
                ...state,
                Alert_Message_Empresas: {type:action.payload.type,text:action.payload.text},
                Show_Message_Empresas: true,
            }
        }
        case EMP_HIDE_MESSAGE_EMPRESAS:{
            return {
                ...state,
                Alert_Message_Empresas: {type:'',text:''},
                Show_Message_Empresas: false,
            }
        } 
        case EMP_POST_EMPRESAS_SUCCESS: {
            return {
                ...state,
                Emp_Payload:{
                    id:0, 
                    nombre:'', 
                },
            }
        }
        case EMP_PUT_EMPRESAS_SUCCESS: {
            return {
                ...state,
                Emp_Payload:{
                    id:0, 
                    nombre:'', 
                },
            }
        }  
        case EMP_GET_EMPRESAS_SUCCESS: {
            return {
                ...state,
                Emp_Payload:{
                    id:action.payload[0].id,
                    nombre:action.payload[0].nombre,
                },
            }
        }            
        case EMP_SET_MESSAGE_ELIMINAR_EMPRESAS: {
            return {
                ...state,
                Message_Eliminar_Empresas: action.payload,
            }
        }
        case EMPTY_DATA_INIT_EMPRESAS:{
            return{...INIT_STATE}
        }
        default:
            return state;
    }
}