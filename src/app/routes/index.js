import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const Routes = ({match}) =>
    <Switch>
        <Route path={`${match.url}/inicio`} component={asyncComponent(() => import('../../modules/dashboard/Routes'))} exact/>
        <Route path={`${match.url}/mantenedor-usuarios`} component={asyncComponent(() => import('../../modules/usuarios/Routes.js'))} exact/>
        <Route path={`${match.url}/atrina-seguimiento`} component={asyncComponent(() => import('../../modules/atrina/seguimiento/Routes.js'))} exact/>
        <Route path={`${match.url}/atrina-recepcion`} component={asyncComponent(() => import('../../modules/atrina/recepcion/Routes.js'))} exact/>
        <Route path={`${match.url}/atrina-perfil`} component={asyncComponent(() => import('../../modules/atrina/perfil/Routes.js'))} exact/>
        <Route path={`${match.url}/atrina-gestion`} component={asyncComponent(() => import('../../modules/atrina/gestion_documental/Routes.js'))} exact/>
        <Route path={`${match.url}/atrina-procesodocumental`} component={asyncComponent(() => import('../../modules/atrina/proceso_documental/Routes.js'))} exact/>
        <Route path={`${match.url}/atrina-loading`} component={asyncComponent(() => import('../../modules/atrina/loading/Routes.js'))} exact/>
        <Route path={`${match.url}/atrina-prueba`} component={asyncComponent(() => import('../../modules/atrina/prueba/Routes.js'))} exact/>
        <Route path={`${match.url}/atrina-cotizador`} component={asyncComponent(() => import('../../modules/atrina/cotizador/Routes.js'))} exact/>
        {/* TNM */}
        <Route path={`${match.url}/reportes`} component={asyncComponent(() => import('../../modules/reportes/Routes.js'))} exact/>
        <Route path={`${match.url}/documentacion`} component={asyncComponent(() => import('../../modules/documentacion/Routes.js'))} exact/>
        <Route path={`${match.url}/facturacion`} component={asyncComponent(() => import('../../modules/facturacion/Routes.js'))} exact/>
    </Switch>;

export default withRouter(Routes);

