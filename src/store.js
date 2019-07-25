import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';

// IMAGE REDUX
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


// AUTH REDUX
// *********** AUTH ACTION TYPES
const GET_USER = 'GET_USER';

// *********** AUTH ACTION CREATORS
const gotUser = (user) => ({ type: GET_USER, user})

// *********** AUTH THUNKS
const loginThunk = (userInfo) => {
  return(dispatch) => {
    return axios.put('/api/auth/login', userInfo)
      .then(response => response.data)
      .then(user => dispatch(gotUser(user)))
      .catch(console.error.bind(console))
  };
};

const getMe = () => {
  return(dispatch) => {
    return axios.get('api/auth/me')
      .then(res => res.data)
      .then(user => dispatch(gotUser(user)))
      .catch(console.error.bind(console))
  }
}

const deletedUser = {};

const logout = () => {
  return(dispatch) => {
    return axios.delete('api/auth/logout')
      .then(() => dispatch(gotUser(deletedUser)))
      .catch(console.error.bind(console))
  }
}

// *********** AUTH REDUCERS

const authReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_USER: 
      return action.user;
    default:
      return state;
  };
};

// COMBINE REDUCERS & STORE
// *********** COMBINE REDUCERS
const reducer = combineReducers({
  images: imageReducer,
  user: authReducer,
});

// *********** STORE
const store = createStore(reducer, applyMiddleware(thunk, logger));


// *********** SELECTORS / HELPERS


// *********** EXPORTS
export default store;

export { 
  loadImagesThunk,
  loginThunk,
  getMe,
  logout
};



