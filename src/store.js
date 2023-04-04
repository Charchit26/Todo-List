import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = compose(composeWithDevTools(
    applyMiddleware(sagaMiddleware),
))(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;