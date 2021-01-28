import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

import App from './components/App/App';





//reducers






//generator functions
function* fetchGif() {
    try {
        console.log('fetch the GIF')

        const response = yield axios.get('/api/favorite')
        yield put({ type:'', payload: response.data })
    } catch (error) {
        console.log('error in getting the GIF')
    }
}; //end fetchGif

function* postGif(action) {
    try {
        console.log('post the GIF')

        const newGif = action.payload;
        yield axios.post('/api/favorite', newGif)
        yield put({ type: 'FETCH_GIF' })
    } catch (error) {
        console.log('error in post')
    }
}; //end postGif






//saga watcher
function* watcherSaga() {
    yield takeEvery('FETCH_GIF', fetchGif);
    yield takeEvery('POST_GIF', postGif);

}; //end watcherSaga




// middleware and storeInstance
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({


    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
