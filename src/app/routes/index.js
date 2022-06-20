import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';
import TaskForm from '../../components/Task/TaskForm';

const Routes = ({match}) =>
    <Switch>
        <Route path={`${match.url}/inicio`} component={asyncComponent(() => import('../../modules/dashboard/Routes'))} exact/>
        <Route path={`${match.url}/mantenedor-usuarios`} component={asyncComponent(() => import('../../modules/usuarios/Routes.js'))} exact/>
        <Route path={`${match.url}/reportes`} component={asyncComponent(() => import('../../modules/reportes/Routes.js'))} exact/>
        <Route path={`${match.url}/facturacion`} component={asyncComponent(() => import('../../modules/facturacion/Routes.js'))} exact/>
        <Route path={`${match.url}/control-servicio-cliente/`} component={asyncComponent(() => import('../../modules/control_servicio/index'))} exact/>
        <Route path={`${match.url}/documentacion`} component={asyncComponent(() => import('../../modules/documentacion/Index.js'))} exact/>
        <Route path={`${match.url}/documentacion/agregar`} component={TaskForm} exact/>
        <Route path={`${match.url}/documentacion/:id/editar`} component={TaskForm} exact/>
        {/* //<Route path='/signup' component={SignUp}/> */}

    </Switch>;

export default withRouter(Routes);

