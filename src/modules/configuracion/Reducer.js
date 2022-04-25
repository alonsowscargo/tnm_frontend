import {
    SHOW_MESSAGE_CONFIGURACION,
    HIDE_MESSAGE_CONFIGURACION
} from './Constants';


const INIT_STATE = {
    showMessage:false,
    alertMessage:{type:'',text:''},
};


export default (state = INIT_STATE, action) => {
    switch (action.type) {
        
        case SHOW_MESSAGE_CONFIGURACION: {
            return {
                ...state,
                showMessage:true,
                alertMessage: action.payload
            }
        }

        case HIDE_MESSAGE_CONFIGURACION: {
            return {
                ...state,
                showMessage:false,
                alertMessage: {type:'',text:''},
            }
        }

        default:
            return state;
    }
}