import createSagaMiddleware from 'redux-saga';
import { legacy_createStore } from 'redux'; 
import {composeWithDevTools} from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { compose } from 'redux';
import { applyMiddleware } from 'redux';

import {watcherSaga} from '../sagas/sagas';

export const createAppStore = () => {
    let store = legacy_createStore(rootReducer, composeWithDevTools());

    return store;
}
export const createAppAsyncStore = () => {
     const sagaMiddleware = createSagaMiddleware();

    let store = legacy_createStore(
        rootReducer,
        compose(
            applyMiddleware (sagaMiddleware), composeWithDevTools() 
            )
        );

    // We init the Watcher Saga
    sagaMiddleware.run(watcherSaga);

    return store;
}