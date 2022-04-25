import{

    SHOW_BUTTON_STEPPER,
    HIDDEN_BUTTON_STEPPER,
    LIST_USER_MOSTRAR,
    LIST_USER_OCULTAR
} from './Constants';

const INIT_STATE = {

    controlShow: false,
    controlMostar: false,
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SHOW_BUTTON_STEPPER:{
            return{
                ...state,
                controlShow: true
            }
        }
        case HIDDEN_BUTTON_STEPPER:{
            return{
                ...state,
                controlShow: false
            }
        }

        case LIST_USER_MOSTRAR:{
            return{
                ...state,
                controlMostar: true
            }
        }
        case LIST_USER_OCULTAR:{
            return{
                ...state,
                controlMostar: false
            }
        }
        default:
            return state;
    }
}