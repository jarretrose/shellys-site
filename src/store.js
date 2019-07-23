import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';


// *********** IMAGE ACTION TYPES
const LOAD_IMAGES = 'LOAD_IMAGES';

// *********** IMAGE ACTION CREATORS
const loadImagesAction = (images) => ({ type: LOAD_IMAGES, images });

// *********** IMAGE THUNKS
const loadImagesThunk = (category) => {
  return (dispatch) => {
    axios.get(`/api/images/${category}`)
      .then(response => response.data)
      .then(images => dispatch(loadImagesAction(images)))
      .catch(console.error.bind(console))
  };
};

// *********** IMAGE REDUCERS
const imageReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_IMAGES:
      return action.images;
    default: 
      return state;
  };
};

// *********** AUTH ACTION TYPES
const GET_USER = 'GET_USER';
const GOT_ME = 'GOT_ME';

// *********** AUTH ACTION CREATORS
const getUser = (user) => ({ type: GET_USER, user})

// *********** AUTH THUNKS
const loginThunk = (userInfo) => {
  return(dispatch) => {
    axios.put(`/api/auth/login`, userInfo)
      .then(response => response.data)
      .then(user => dispatch(getUser(user)))
      .catch(console.error.bind(console))
  };
};

const getMeThunk = () => {
  return(dispatch) => {
    axios.get('api/auth/me')
      .then(response => response.data)
      .then(user => dispatch(getUser(user)))
      .catch(console.error.bind(console))
  };
};

// *********** AUTH REDUCERS

const authReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_USER: 
      return action.user;
    default:
      return state;
  };
};

// *********** COMBINE REDUCERS
const reducer = combineReducers({
  images: imageReducer,
  auth: authReducer,
});

// *********** STORE
const store = createStore(reducer, applyMiddleware(logger, thunk));


// *********** SELECTORS / HELPERS


// *********** EXPORTS
export default store;

export { 
  loadImagesThunk,
  loginThunk,
  getMeThunk
};



