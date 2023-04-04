import { combineReducers } from 'redux';
import todosReducer from "./todos";
import appStateReducer from "./appState";

const rootReducer = combineReducers({
    todos: todosReducer,
    appState: appStateReducer,
});

export default rootReducer;