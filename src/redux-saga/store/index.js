import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import mySaga from '../saga';

const sagaMiddleware = createSagaMiddleware();


const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// const store = createStore(reducer);

sagaMiddleware.run(mySaga);

export default store;
