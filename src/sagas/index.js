import {all,spawn,fork} from 'redux-saga/effects';
import authSagas from './Auth';
import userMaintainer from '../modules/usuarios/Saga';
import Empresas_Maintainer from '../modules/empresas/Sagas.js'
import Roles_Maintainer from '../modules/roles/Sagas.js'
import Configuracion from 'modules/configuracion/Saga';
import DashboardSaga from 'modules/dashboard/Saga';

export default function* rootSaga(getState) {
        yield all([
                fork(Empresas_Maintainer),
                fork(authSagas),
                fork(userMaintainer),
                fork(Roles_Maintainer),
                fork(Configuracion),
                fork(DashboardSaga)
        ])
}
