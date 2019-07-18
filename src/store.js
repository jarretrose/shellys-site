import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';

// *********** ACTION TYPES
const LOAD_IMAGES = 'LOAD_IMAGES'

// *********** ACTION CREATORS
const loadImagesAction = (images) => ({ type: LOAD_IMAGES, images })

// *********** THUNKS
const loadImagesThunk = () => {
  return (dispatch) => {
    axios.get('/api/images')
      .then(response => response.data)
      .then(images => dispatch(loadImagesAction(images)))
  }
}


// *********** REDUCERS
const imageReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_IMAGES:
      return state = action.images;
  };
  return state;
};

// *********** COMBINE REDUCERS
const reducer = combineReducers({
  images: imageReducer
});

// *********** STORE
const store = createStore(reducer, applyMiddleware(logger, thunk));


// *********** SELECTORS / HELPERS


// *********** EXPORTS
export default store;

export { loadImagesThunk };



