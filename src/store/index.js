import {applyMiddleware, compose, createStore} from 'redux';
import reducers from '../reducers/index';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import { createLogger } from 'redux-logger';
import config from '../envConfig';

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

let injectedSagas = new Map();


const middlewares = [sagaMiddleware, routeMiddleware];
if(config.development.reduxLogger){
    middlewares.push(createLogger());
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function createSagaInjector(runSaga, rootSaga,keynew) {
    // Create a dictionary to keep track of injected sagas
    let aux=runSaga;
   
    


    const isInjected = key => {injectedSagas.has(key)};
    const injectSaga = (keynew, saga) => {
        // We won't run saga if it is already injected
        if (isInjected(keynew)) {
            return;}

        // Sagas return task when they executed, which can be used
        // to cancel them
        const task = runSaga(saga);


        // Save the task if we want to cancel it in the future
        injectedSagas.set(keynew, task);
    };

    // Inject the root saga as it a staticlly loaded file,
    injectSaga('root', rootSaga);

    injectedSagas=injectSaga;
    return injectSaga;
}


export default function configureStore(initialState) {
    const store = createStore(reducers(history), initialState,
        composeEnhancers(applyMiddleware(...middlewares)));

        store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga,'root');
        /*if(store.injectSaga && store.injectSaga.length>1){
          delete store.injectSaga[0];
          debugger;
        }*/
        
        //sagaMiddleware.run(rootSaga);

    if (module.hot) {
     /*   module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });*/
    }
    return store;
}
/*export function* configureStore(initialState){
    const store = createStore(reducers(history),initialState,
        composeEnhancers(applyMiddleware(...middlewares)));

        store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga,'root');
        //sagaMiddleware.run(rootSaga);

    if (module.hot) {
        module.hot.accept('../reducers/index', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
const store = configureStore();
debugger;
export default store;*/
export {history};


/*import { createContext } from 'react';
import {applyMiddleware, compose, createStore} from 'redux';
import reducers from '../reducers/index';
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import { createLogger } from 'redux-logger';
import config from '../envConfig';

export const ReactReduxContext = createContext({});

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routeMiddleware];
if(config.development.reduxLogger){
  middlewares.push(createLogger());
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function configureStore(initialState) {
  const store = createStore(reducers(history), initialState,
    composeEnhancers(applyMiddleware(...middlewares)));

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/index', () => {
      const nextRootReducer = require('../reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  console.log(store);
  return store;
}
export {history};*/
