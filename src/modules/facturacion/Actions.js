import {
    SHOW_MESSAGE_DASHBOARD,
    HIDE_MESSAGE_DASHBOARD,
    SET_SHOW_LIST_CLIENTES_SRLD_DASHBOARD,
    GET_DASHBOARD_CLIENTES_SIN_REPRESENTANTE_LEGAL_DOCUMENTACION,
    GET_DASHBOARD_CLIENTES_SIN_REPRESENTANTE_LEGAL_DOCUMENTACION_SUCCESS,
    SHOW_MODAL_EDITAR_CLIENTE_DASHBOARD,
    CLOSE_MODAL_EDITAR_CLIENTE_DASHBOARD,
    GET_REPORTE_PROPUESTAS_DASHBOARD,
    GET_REPORTE_PROPUESTAS_DASHBOARD_SUCCESS,
    GET_REPORTE_CLIENTES_CREADOS_DASHBOARD,
    GET_REPORTE_CLIENTES_CREADOS_DASHBOARD_SUCCESS,
    GET_REPORTE_TRACKINGS_CREADOS_DASHBOARD,
    GET_REPORTE_TRACKINGS_CREADOS_DASHBOARD_SUCCESS,
    SET_LOADER_DASHBOARD
} from './Constants';

export const showMessageDashboard= (payload) => {
    return {
        type: SHOW_MESSAGE_DASHBOARD,
        payload: payload
    };
};

export const hideMessageDashboard= (payload) => {
    return {
        type: HIDE_MESSAGE_DASHBOARD,
        payload: payload
    };
};


export const getDashboardClientesSinRepresentanteLegalDocumentacion= (payload) => {
    return {
        type: GET_DASHBOARD_CLIENTES_SIN_REPRESENTANTE_LEGAL_DOCUMENTACION,
        payload: payload
    };
};

export const getDashboardClientesSinRepresentanteLegalDocumentacionSuccess= (payload) => {
    return {
        type: GET_DASHBOARD_CLIENTES_SIN_REPRESENTANTE_LEGAL_DOCUMENTACION_SUCCESS,
        payload: payload
    };
};

export const setShowListClientesSrldDashboard= (payload) => {
    return {
        type: SET_SHOW_LIST_CLIENTES_SRLD_DASHBOARD,
        payload: payload
    };
};


export const showModalEditarClienteDashboard= (payload) => {
    return {
        type: SHOW_MODAL_EDITAR_CLIENTE_DASHBOARD,
        payload: payload
    };
};


export const closeModalEditarClienteDashboard= (payload) => {
    return {
        type: CLOSE_MODAL_EDITAR_CLIENTE_DASHBOARD,
        payload: payload
    };
};

export const getReportePropuestasDashboard= (payload) => {
    return {
        type: GET_REPORTE_PROPUESTAS_DASHBOARD,
        payload: payload
    };
};

export const getReportePropuestasDashboardSuccess= (payload) => {
    return {
        type: GET_REPORTE_PROPUESTAS_DASHBOARD_SUCCESS,
        payload: payload
    };
};

export const getReporteClientesCreadosDashboard= (payload) => {
    return {
        type: GET_REPORTE_CLIENTES_CREADOS_DASHBOARD,
        payload: payload
    };
};

export const getReporteClientesCreadosDashboardSuccess= (payload) => {
    return {
        type: GET_REPORTE_CLIENTES_CREADOS_DASHBOARD_SUCCESS,
        payload: payload
    };
};

export const getReporteTrackingsCreadosDashboard= (payload) => {
    return {
        type: GET_REPORTE_TRACKINGS_CREADOS_DASHBOARD,
        payload: payload
    };
};

export const getReporteTrackingsCreadosDashboardSuccess= (payload) => {
    return {
        type: GET_REPORTE_TRACKINGS_CREADOS_DASHBOARD_SUCCESS,
        payload: payload
    };
};


export const setLoaderDashboard= (payload) => {
    return {
        type: SET_LOADER_DASHBOARD,
        payload: payload
    };
};













