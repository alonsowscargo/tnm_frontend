import {
    ON_CHANGE_PAYLOAD,
    ON_CHANGE_PAYLOAD_ADDRESS,
    GET_REGISTER_USERSLIST_SUCCESS,
    SHOW_MESSAGE_USER_AUX,
    HIDE_MESSAGE_USER_AUX,
    PUT_REGISTER_USER_SUCCESS,
    POST_REGISTER_USER_SUCCESS,
    CLEAN_REGISTER_USER,
    GET_ADDRESS_TYPES_SUCCESS,
    ON_LOAD_DATA_USER,
    ON_LOAD_DATA_USER_SUCCESS,
    POST_ADDRESS_USER_SUCCESS,
    ON_CHANGE_COLLAPSE,
    TOGGLE_MODAL_USER_DATA,
    UPDATE_ADDRESS_USER_SUCCESS,
    EMPTY_DATA_INIT_USERS,
    ONCHANGE_VALIDATIONS_USER,
    GET_ROLES_SUCCESS
} from './Constants';
import {UserEmpty,AddressEmpty,validationsUser} from 'models';
import lodash from 'lodash';

const INIT_STATE = {
    loader: false,
    payload:UserEmpty,
    usersList:[],
    addressTypes:[],
    contactTypes:[],
    roles:[],
    showMessage:false,
    alertMessage:{type:'',text:''},
    payloadAddress:AddressEmpty,
    addressUserList:[],
    collapsed:{
        address:false
    },
    validations:validationsUser,
    openModal:false,
    modalUserId:0
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case ON_CHANGE_PAYLOAD: {
            return {
                ...state,
                payload: action.payload
            }
        }
        case ON_CHANGE_PAYLOAD_ADDRESS: {
            return {
                ...state,
                payloadAddress: action.payload
            }
        }
        case GET_REGISTER_USERSLIST_SUCCESS: {
            if(action.payload && action.payload.length>0){
                action.payload.map(function(item){
                    if(item.estado){
                        item.estado_nombre='ACTIVO';
                    }else{
                        item.estado_nombre='BLOQUEADO';
                    }
                })
            }
            return {
                ...state,
                usersList: action.payload,
                reload:false
            }
        }
        case HIDE_MESSAGE_USER_AUX: {
            return {
                ...state,
                alertMessage: {type:'',text:''},
                showMessage: false,
                loader: false
            }
        }
        case SHOW_MESSAGE_USER_AUX: {
            return {
                ...state,
                alertMessage: {type:action.payload.type,text:action.payload.text},
                showMessage: true,
                loader: false
            }
        }
        case PUT_REGISTER_USER_SUCCESS: {
            return {
                ...state,
                payload:UserEmpty
            } 
        }
        case POST_REGISTER_USER_SUCCESS:{
            return {
                ...state,
                payload:UserEmpty
            } 
        }
        case CLEAN_REGISTER_USER:{
            return {
                ...state,
                payload:UserEmpty
            } 
        }
        case GET_ADDRESS_TYPES_SUCCESS:{
            return {
                ...state,
                addressTypes:action.payload
            } 
        }
        case ON_LOAD_DATA_USER:{
            return {
                ...state,
                payloadAddress:{
                    ...state.payloadAddress,
                    usuario_id:action.payload.id
                }
            }
        }
        case ON_LOAD_DATA_USER_SUCCESS:{
            if(action.payload.addressUser && action.payload.addressUser.length > 0 && state.addressTypes && state.addressTypes.length>0){
                action.payload.addressUser.map((item,index)=>{
                    const find=state.addressTypes.find(x=>x.id === item.direccion_tipo_id);
                    if(find){
                        item.direccion_tipo_nombre=find.nombre;
                    }
                });
            }
            return {
                ...state,
                addressUserList:action.payload.addressUser
            }
        }
        case POST_ADDRESS_USER_SUCCESS:{
            const id=lodash.cloneDeep(state.payloadAddress.usuario_id);
            return {
                ...state,
                payloadAddress:{...AddressEmpty,usuario_id:id}
            } 
        }
        case ON_CHANGE_COLLAPSE:{
            return {
                ...state,
                collapsed:{
                    ...state.collapsed,
                    [action.payload.name]:action.payload.value
                }
            }
        }
        case TOGGLE_MODAL_USER_DATA:{
            let obj={};
            if(state.openModal===true){
                obj={
                    ...state,
                    openModal:!state.openModal,
                    modalUserId:0
                }
            }else{
                obj={
                    ...state,
                    openModal:!state.openModal,
                    modalUserId:action.payload.usuario_id
                }
            }
            return obj;
        }
        case UPDATE_ADDRESS_USER_SUCCESS:{
            const id=lodash.cloneDeep(state.payloadAddress.usuario_id);
            return {
                ...state,
                payloadAddress:{...AddressEmpty,usuario_id:id}
            }
        }
        case EMPTY_DATA_INIT_USERS:{
            return{
                ...INIT_STATE
            }
        }
        case ONCHANGE_VALIDATIONS_USER:{
            return{
                ...state,
                validations:action.payload
            }
        }
        case GET_ROLES_SUCCESS:{
            return{
                ...state,
                roles:action.payload
            }
        }
        default:
            return state;
    }
}