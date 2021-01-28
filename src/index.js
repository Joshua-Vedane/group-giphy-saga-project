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
    {image_url: https://media.giphy.com/media/HgtCxKvJZ7Wi4/giphy.gif}
]



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
        return action.payload
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







//saga watcher
function* watcherSaga() {

}; //end watcherSaga




// middleware and storeInstance
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
    combineReducers({


    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={storeInstance}> <App /></Provider>, document.getElementById('root'));
