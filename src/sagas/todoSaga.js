import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `http://localhost:3001/data`;
function getApi() {
    return fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => {throw error})
}

function saveApi(action) {
    console.log(action)
    return fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {
            'Content-Type': 'application/json',

        }
    }).then(response => response.json())
        .catch((error) => {throw error})
}

function* fetchTodos() {
    yield put({type: 'appState/setLoading', payload: true});
    try {
        const todos = yield call(getApi);

        yield put({type: 'todos/getAllSuccess', payload: todos});
    } catch (e) {
        yield put({type: 'todos/getAllFailed', message: e.message});
    } finally {
        yield put({type: 'appState/setLoading', payload: false});
    }
}

function* saveTodos(action) {
    try {
        console.log(action)
        const todos = yield call(saveApi, action);
        console.log(todos)
        // yield put({type: 'todos/getAllSuccess'});
    } catch (e) {
        console.log(e)
        // yield put({type: 'todos/getAllFailed', message: e.message});
    }
}

function* todoSaga() {
    yield takeEvery('todos/getAll', fetchTodos);
    yield takeEvery('todos/save', saveTodos);
}

export default todoSaga;