import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {takeEvery, put} from 'redux-saga/effects';
import axios from 'axios';

import App from './components/App/App';

const startingFav = [
    {image_url: "https://media.giphy.com/media/HgtCxKvJZ7Wi4/giphy.gif"},
    {image_url: "https://media.giphy.com/media/3JgtnXdRhSflK/giphy.gif"}
    ];



//reducers

//-- Search reducer

const searchReducer = (state = [], action) => {
    switch (action.type) {
      case 'SEARCH_GIPHY' :
        return action.payload
      default:
        return state;
    }
  };

//-- Fav reducer
//  '/api/favorite'
const favoriteReducer = (state = startingFav, action) => {
    switch (action.type) {
      case 'FAVORITE_GIF' :
        return [...state, action.payload]
      default:
        return state;
    }
  };

//-- Category reducer
//  '/api/category'

const categoryReducer = (state = [], action) => {
    switch (action.type) {
      case 'WHERE_DOES_THIS_GO' :
        return action.payload
      default:
        return state;
    }
  };



//generator functions
function* fetchGif() {
    try {
        console.log('fetch the GIF')

        const response = yield axios.get('/api/favorite')
        yield put({ type:'FAVORITE_GIF', payload: response.data })
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

function* putGif(action) {
    try {
        const gifId = action.payload.id
        const category = action.payload.category
        yield axios.put(`/api/favorite/${gifId}`, {category: category})
        yield put({ type: 'FETCH_GIF'})

    } catch (error) {
        console.log('error in put')
    }
}






//saga watcher
function* watcherSaga() {
    yield takeEvery('FETCH_GIF', fetchGif);
    yield takeEvery('POST_GIF', postGif);

}; //end watcherSaga




// middleware and storeInstance
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({
        searchReducer,
        favoriteReducer,
        categoryReducer

    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
