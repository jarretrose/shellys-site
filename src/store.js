import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';

// IMAGE REDUX
// *********** IMAGE ACTION TYPES
const LOAD_ALL_IMAGES = 'LOAD_ALL_IMAGES';
const LOAD_IMAGES_BY_CATEGORY = 'LOAD_IMAGES_BY_CATEGORY';

// *********** IMAGE ACTION CREATORS
const loadAllImagesAction = (images) => ({ type: LOAD_ALL_IMAGES, images });
const loadImagesByCategoryAction = (images) => ({ type: LOAD_IMAGES_BY_CATEGORY, images });

// *********** IMAGE THUNKS
const loadAllImagesThunk = () => {
  return (dispatch) => {
    axios.get('/api/images')
      .then(response => response.data)
      .then(images => dispatch(loadAllImagesAction(images)))
      .catch(console.error.bind(console))
  }
}

const loadImagesByCategoryThunk = (category) => {
  return (dispatch) => {
    axios.get(`/api/images/${category}`)
      .then(response => response.data)
      .then(images => dispatch(loadImagesByCategoryAction(images)))
      .catch(console.error.bind(console))
  };
};

// *********** IMAGE REDUCERS
const imageReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_ALL_IMAGES:
      return action.images;
    case LOAD_IMAGES_BY_CATEGORY:
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
  loadAllImagesThunk,
  loadImagesByCategoryThunk,
  loginThunk,
  getMe,
  logout
};



