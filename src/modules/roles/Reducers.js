import {
    R_SET_PAYLOADROLES,
    R_GET_ROLESLIST_SUCCESS,
    R_SHOW_MESSAGE_ROLES,
    R_HIDE_MESSAGE_ROLES,
    R_POST_ROLES_SUCCESS,
    R_PUT_ROLES_SUCCESS,
    R_SET_MESSAGE_ELIMINAR_ROLES,
    R_GET_ROLES_SUCCESS,
    EMPTY_DATA_INIT_ROLES
} from './Constants.js';

const INIT_STATE = {
    
    Alert_Message_Roles:{type:'',text:''},
    Show_Message_Roles:false,
    Message_Eliminar_Roles:false,
    R_Payload:{
        id:0, 
        nombre:'', 
    },
    R_RolesList:[],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        
        case R_SET_PAYLOADROLES: {
            return {
                ...state,
                R_Payload: action.payload
            }
        }
        case R_GET_ROLESLIST_SUCCESS: {
            return {
                ...state,
                R_RolesList: action.payload
            }
        }
        case R_SHOW_MESSAGE_ROLES: {
            return {
                ...state,
                Alert_Message_Roles: {type:action.payload.type,text:action.payload.text},
                Show_Message_Roles: true,
            }
        }
        case R_HIDE_MESSAGE_ROLES:{
            return {
                ...state,
                Alert_Message_Roles: {type:'',text:''},
                Show_Message_Roles: false,
            }
        } 
        case R_POST_ROLES_SUCCESS: {
            return {
                ...state,
                R_Payload:{
                    id:0, 
                    nombre:'', 
                },
            }
        }
        case R_PUT_ROLES_SUCCESS: {
            return {
                ...state,
                R_Payload:{
                    id:0, 
                    nombre:'', 
                },
            }
        }  
        case R_GET_ROLES_SUCCESS: {
            return {
                ...state,
                R_Payload:{
                    id:action.payload[0].id,
                    nombre:action.payload[0].nombre,
                },
            }
        }            
        case R_SET_MESSAGE_ELIMINAR_ROLES: {
            return {
                ...state,
                Message_Eliminar_Roles: action.payload,
            }
        }
        case EMPTY_DATA_INIT_ROLES:{
            return{...INIT_STATE}
        }

        default:
            return state;
    }
}