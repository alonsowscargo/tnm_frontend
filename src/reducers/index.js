import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import Settings from './Settings';
import Auth from './Auth';
import Common from "./Common";
import UsuariosRdc from '../modules/usuarios/Reducer';

import Roles_Rdc from '../modules/roles/Reducers.js';
import Empresas_Rdc from '../modules/empresas/Reducers.js';
import ConfiguracionRdc from 'modules/configuracion/Reducer';
import DashboardRdc from 'modules/dashboard/Reducer';
// import CotizadorRdc from 'modules/atrina/cotizador/Reducer';
import { crudReducer } from './crudReducer';
import crudTo from '../modules/control_servicio/Reducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    Empresas_Maintainer:Empresas_Rdc,
    settings: Settings,
    auth: Auth,
    common: Common,
    usersMaintainer:UsuariosRdc,
    Roles_Maintainer:Roles_Rdc,
    Configuracion:ConfiguracionRdc,
    Dashboard:DashboardRdc,
    // Cotizador:CotizadorRdc,
    crud:crudReducer,
    crudT:crudTo,
});
