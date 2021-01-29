import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

import App from './components/App/App';

//reducers

//-- Search reducer

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SEARCH':
      return action.payload;
    default:
      return state;
  }
};

//-- Fav reducer

const favoriteReducer = (state = [], action) => {
  switch (action.type) {
    case 'FAVORITE_GIF':
      return action.payload;
    default:
      return state;
  }
};

//-- Category reducer

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case 'WHERE_DOES_THIS_GO':
      return action.payload;
    default:
      return state;
  }
};

// Sagas

function* getCategories(){
    try {
        const response = yield axios.get('/api/category');
        console.log('Getting categories', response.data);
        
        yield put({ type: 'WHERE_DOES_THIS_GO', payload: response.data });
        
    } catch (err) {
        console.log('error in getting the categories',err);
    }
}


function* fetchGif() {
  try {
    console.log('fetch the GIF');

    const response = yield axios.get('/api/favorite');
    console.log('fetchGif response:', response);

    yield put({ type: 'FAVORITE_GIF', payload: response.data });
  } catch (error) {
    console.log('error in getting the GIF', error);
  }
} //end fetchGif

function* postGif(action) {
  try {
    console.log('post the GIF');

    const newGif = action.payload;
    yield axios.post('/api/favorite', newGif);
    yield put({ type: 'FETCH_GIF' });
  } catch (error) {
    console.log('error in postGif', error);
  }
} //end postGif

function* postSearch(action) {
  try {
    console.log('post Search');

    const newSearch = action.payload;
    const response = yield axios.post('/api/giphy', { newSearch });
    yield put({ type: 'FETCH_SEARCH', payload: response.data.data });
  } catch (error) {
    console.log('error in postSearch', error);
  }
} //end postSearch

function* postCategory(action) {
  try {
    console.log('post Category');
    const newCat = action.payload;
    yield axios.post('/api/category', { newCategoryName: newCat });
    yield put({ type: 'FETCH_SEARCH' });
  } catch (error) {
    console.log('error in postCategory', error);
  }
} //end postCategory

function* putGif(action) {
  try {
    const gifId = action.payload.id;
    const categoryId = action.payload.categoryId;
    yield axios.put(`/api/favorite/${gifId}`, { categoryId });
    yield put({ type: 'FETCH_GIF' });
  } catch (error) {
    console.log('error in put', error);
  }
} //end putGif

function* deleteFav(action) {
  try {
    const favId = action.payload;
    yield axios.delete(`/api/favorite/${favId}`);
    yield put({ type: 'FETCH_GIF' });
  } catch (error) {
    console.log('error in deleting gif', error);
  }
}

//saga watcher
function* watcherSaga() {
  yield takeEvery('FETCH_GIF', fetchGif);
  yield takeEvery('POST_GIF', postGif);
  yield takeEvery('POST_SEARCH', postSearch);
  yield takeEvery('POST_CATEGORY', postCategory);
  yield takeEvery('PUT_GIF', putGif);
  yield takeEvery('DELETE_FAV', deleteFav);
  yield takeEvery('GET_CATEGORIES', getCategories);
} //end watcherSaga

// middleware and storeInstance
const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    searchReducer,
    favoriteReducer,
    categoryReducer,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
