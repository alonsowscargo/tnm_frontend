import {applyMiddleware, compose, createStore,combineReducers} from 'redux';
import reducers from '../reducers/index';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import { createLogger } from 'redux-logger';
import config from '../envConfig';
import { persistReducer, persistStore } from 'redux-persist';
import localForage from 'localforage';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();



const middlewares = [sagaMiddleware, routeMiddleware];
if(config.development.reduxLogger){
    middlewares.push(createLogger());
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function createSagaInjector(runSaga, rootSaga,keynew) {
    // Create a dictionary to keep track of injected sagas
    const injectedSagas = new Map();

    const isInjected = key => injectedSagas.has(key);


    const injectSaga = (keynew, saga) => {
        // We won't run saga if it is already injected
        if (isInjected(keynew)) {
          debugger;
            return;
          }
debugger;
        // Sagas return task when they executed, which can be used
        // to cancel them
        const task = runSaga(saga);

        // Save the task if we want to cancel it in the future
        injectedSagas.set(keynew, task);
    };

    // Inject the root saga as it a staticlly loaded file,
    injectSaga('rootSaga', rootSaga);

    return injectSaga;
}


const blackListStore = [
    'router',
    'Cli_ServiciosSeguimientos_Maintainer',
    'ClientePerfil_Maintainer',
    'BodegasUbicaciones_Maintainer',
    'Bodegas_Maintainer',
    'Empresas_Maintainer',
    'settings',
    'auth',
    'common',
    'usersMaintainer',
    'menuMaintainer',
    'Pais_Maintainer',
    'DireccionesTipos_Maintainer',
    'Naves_Maintainer',
    'Puertos_Maintainer',
    'EquiposTipos_Maintainer',
    'EquiposMarcas_Maintainer',
    'EquiposModelos_Maintainer',
    'Equipos_Maintainer',
    'Bancos_Maintainer',
    'CuentasBancarias_Maintainer',
    'Monedas_Maintainer',
    'Impuestos_Maintainer',
    'FormasDePago_Maintainer',
    'Giros_Maintainer',
    'FamiliasArancelarias_Maintainer',
    'SubFamiliasArancelarias_Maintainer',
    'SubFamiliasComerciales_Maintainer',
    'FamiliasComerciales_Maintainer',
    'Region_Maintainer',
    'Comuna_Maintainer',
    'Maintainer_Proveedores',
    'userContacts',
    'userBankAccounts',
    'reception',
    'trackingManual',
    'trackingManualVisor',
    'userNotes',
    'searchProvider',
    'Roles_Maintainer',
    'ContactosTipos_Maintainer',
    'Clientes_Maintainer',
    'trackingFullEdition',
    'searchClient',
    'visorGlobal',
    'contenedores',
    'ClientesDirecciones_Maintainer',
    'ClientesContactos_Maintainer',
    'ClientesUsuarios_Maintainer',
    'cargacontenedores',
    'consolidadoView',
    'gcg_RegistroContactosMaintainer',
    'Maintainer_PropuestaComercial',
    'consolidados',
    'viajes',
    'ZonasTarifarias_Maintainer',
    'LineasNavieras',
    'ContenedorProforma',
    'RecepcionPuerto',
    'GestionDeCargas',
    'Configuracion',
    'PlanifDesconsolidado',
    'RecepcionCarga',
    'Configuracion',
    'OrdenesTransporte',
    'Kardex',
    'GestionDescargaComercial'
  ];
/****CODIGO NUEVO ******/
  const enhancers = [applyMiddleware(...middlewares)];
  const persistConfig = {
    key: 'rootSaga',
    storage: localForage,
    blacklist: blackListStore
  };
  const pReducer = persistReducer(persistConfig, reducers(history));

  export default function configureStore(initialState) {
    const store = createStore(pReducer, initialState, composeEnhancers(...enhancers));
    store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga,'rootSaga');

    if (module.hot) {
     //  module.hot.accept('../reducers/index', () => {
       //     const nextRootReducer = require('../reducers/index');
         //   store.replaceReducer(nextRootReducer);
        //});
    }
    const persistor = persistStore(store);
    return store;
}

/****CODIGO NUEVO ******/

/*
export default function configureStore(initialState) {
    const store = createStore(reducers(history), initialState,
        composeEnhancers(applyMiddleware(...middlewares)));

        store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga,'root');
        //sagaMiddleware.run(rootSaga);

    if (module.hot) {
     //  module.hot.accept('../reducers/index', () => {
       //     const nextRootReducer = require('../reducers/index');
         //   store.replaceReducer(nextRootReducer);
        //});
    }
    return store;
}*/

export {history};