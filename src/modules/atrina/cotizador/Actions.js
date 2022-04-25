
import{

    SHOW_BUTTON_STEPPER,
    HIDDEN_BUTTON_STEPPER,
    LIST_USER_OCULTAR,
    LIST_USER_MOSTRAR
} from './Constants';

export const showBtnStepper = (payload) => {
    return {
        type: SHOW_BUTTON_STEPPER,
        payload:payload
    };
};

export const hiddenBtnStepper  = (payload) => {
    return {
        type: HIDDEN_BUTTON_STEPPER,
        payload:payload
    };
};

export const mostrarFormUser = (payload) => {
    return {
        type: LIST_USER_MOSTRAR,
        payload:payload
    };
};

export const ocultarFormUser  = (payload) => {
    return {
        type: LIST_USER_OCULTAR,
        payload:payload
    };
};



























