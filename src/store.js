import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';

// IMAGE REDUX
// *********** IMAGE ACTION TYPES
const LOAD_ALL_IMAGES = 'LOAD_ALL_IMAGES';
const LOAD_IMAGES_BY_CATEGORY = 'LOAD_IMAGES_BY_CATEGORY';
const DELETE_IMAGE = 'DELETE_IMAGE';
const EDIT_IMAGE = 'EDIT_IMAGE';
const ADD_IMAGE = 'ADD_IMAGE';

// *********** IMAGE ACTION CREATORS
const loadAllImagesAction = (images) => ({ type: LOAD_ALL_IMAGES, images });
const loadImagesByCategoryAction = (images) => ({ type: LOAD_IMAGES_BY_CATEGORY, images });
const deleteImageAction = (imageID) => ({ type: DELETE_IMAGE, imageID });
const editImageAction = (image) => ({ type: EDIT_IMAGE, image });
const addImageAction = (image) => ({ type: ADD_IMAGE, image });

// *********** IMAGE THUNKS
const loadAllImagesThunk = () => {
  return (dispatch) => {
    axios.get('/api/images')
      .then(response => response.data)
      .then(images => dispatch(loadAllImagesAction(images)))
      .catch(err => console.log(err))
  }
}

const loadImagesByCategoryThunk = (category) => {
  return (dispatch) => {
    axios.get(`/api/images/${category}`)
      .then(response => response.data)
      .then(images => dispatch(loadImagesByCategoryAction(images)))
      .catch(err => console.log(err))
  };
};

const deleteImageThunk = (imageID) => {
  return (dispatch) => {
    const id = parseInt(imageID)
    axios.delete(`/api/images/${id}`)
      .then(response => response.data)
      .then(() => dispatch(deleteImageAction(imageID)))
      .then(() => alert('Image deleted successfully!'))
      .catch(err => alert('Something went wrong.'))
  }
}

const editImageThunk = (image) => {
  return (dispatch) => {
    axios.put(`/api/images/${image.id}`, image)
      .then(response => response.data)
      .then(image => dispatch(editImageAction(image)))
      .then(() => alert('Image edited successfully!'))
      .catch(err => alert('Something went wrong.'))
  }
}

const addImageThunk = (image) => {
  return (dispatch) => {
    axios.post('/api/images/', image)
      .then(response => response.data)
      .then(image => dispatch(addImageAction(image)))
      .then(() => alert('Image added successfully!'))
      .catch(err => alert('Something went wrong.'))
  }
}

// mini helper to sort images consistently
const sorting = (returnedState) => returnedState.sort((a,b) => a.createdAt - b.createdAt)

// *********** IMAGE REDUCER
const imageReducer = (state = [], action) => {
  switch(action.type) {
    case LOAD_ALL_IMAGES:
      return sorting(action.images)
    case LOAD_IMAGES_BY_CATEGORY:
      return sorting(action.images)
    case DELETE_IMAGE:
      return sorting(state.filter(img => img.id !== action.imageID))
    case ADD_IMAGE:
      return [...state, action.image]
    case EDIT_IMAGE:
      return state.map(img => {
        if (img.id === action.image.id) {
          return action.image
        } else {
          return img
        }
      })
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
    return axios.post('/api/auth/login', userInfo)
      .then(response => response.data)
      .then(user => dispatch(gotUser(user)))
      .catch(err => err.response.status === 401 ? alert('Bad Username or Password') : null)
  };
};

const getMeThunk = () => {
  return(dispatch) => {
    return axios.get('api/auth/me')
      .then(res => res.data)
      .then(user => dispatch(gotUser(user)))
      .catch(err => {})
  }
}

const noUser = {};

const logoutThunk = () => {
  return(dispatch) => {
    return axios.delete('api/auth/logout')
      .then(() => dispatch(gotUser(noUser)))
      .catch(err => alert('Something went wrong.'))
  }
}

// *********** AUTH REDUCER
const authReducer = (state = {}, action) => {
  switch(action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  };
};

// *********** MODAL ACTION TYPES
const SHOW_MODAL = 'SHOW_MODAL'
const HIDE_MODAL = 'HIDE_MODAL'

// *********** MODAL ACTION CREATORS
const showModalAction = (modalType, modalProps) => ({ type: SHOW_MODAL, modalType, modalProps })
const hideModalAction = () => ({ type: HIDE_MODAL })

// *********** MODAL THUNKS

// *********** MODAL OPEN/CLOSE REDUCER
const modalInitialState = { 
  open: false,
  modalType: null,
  modalProps: {},
 }

const modalReducer = (state = modalInitialState, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return { 
        open: true,
        modalType: action.modalType,
        modalProps: action.modalProps,
      }
    case HIDE_MODAL:
      return modalInitialState
    default:
      return state
  }
}

// COMBINE REDUCERS & STORE
// *********** COMBINE REDUCERS
const reducer = combineReducers({
  images: imageReducer,
  user: authReducer,
  modal: modalReducer
});

// *********** STORE
let mw = process.env.NODE_ENV !== 'production' ? [thunk, logger] : [thunk]

const store = createStore(reducer, applyMiddleware(...mw));


// *********** SELECTORS / HELPERS


// *********** EXPORTS
export default store;

export {
  loadAllImagesThunk,
  loadImagesByCategoryThunk,
  deleteImageThunk,
  loginThunk,
  getMeThunk,
  logoutThunk,
  showModalAction,
  hideModalAction,
  editImageThunk,
  addImageThunk
};



