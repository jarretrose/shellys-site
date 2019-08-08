import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import store, { showModalAction, hideModalAction, editImageThunk, addImageThunk } from '../store'
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const EditDialog = (props) => {

  // hacky way to make sure image info has made into the component
  if (!props.modal.modalType) return <span />

  console.log(props)

  const { closeModal, submitEditModal, submitAddModal } = props;
  const { modalProps, modalType } = props.modal

  // playing with React Hooks for the form
  const [values, setValues] = useState({
    id: modalType === 'EDIT_IMAGE' ? modalProps.id : '',
    name: modalType === 'EDIT_IMAGE' ? modalProps.name : '',
    category: modalType === 'EDIT_IMAGE' ? modalProps.category : '',
    imageURL: modalType === 'EDIT_IMAGE' ? modalProps.imageURL : '',
    thumbnailURL: modalType === 'EDIT_IMAGE' ? modalProps.thumbnailURL : '',
    desc: modalType === 'EDIT_IMAGE' ? modalProps.desc : '',
  })

  const classes = useStyles();
  const theme = useTheme();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleClose = () => closeModal()

  const validateForm = () => {
    const { modalType } = props.modal
    const { id, name, category, imageURL, thumbnailURL, desc } = values
    if (name === '' || category === '' || imageURL === ''  || thumbnailURL === ''  || desc === '') (alert('All fields must be filled out.'))
    else modalType === 'EDIT_IMAGE' ? handleEditImage() : handleAddImage()
  }

  const handleEditImage = () => {
    const { id, name, category, imageURL, thumbnailURL, desc } = values
    submitEditModal({ id, name, category, imageURL, thumbnailURL, desc })
    closeModal()
  }

  const handleAddImage = () => {
    const { name, category, imageURL, thumbnailURL, desc } = values
    submitAddModal({ name, category, imageURL, thumbnailURL, desc })
    closeModal()
  }

  let modalTitle;
  let modalSubtitle;
  let submitButton;
  // let handleSubmit;

  if (modalType === 'EDIT_IMAGE') {
    modalTitle = 'Edit Image Information'
    modalSubtitle = 'Select the information you want to change.'
    submitButton = 'Update'
  } else if (modalType === 'ADD_IMAGE') {
    modalTitle = 'Add Image Information'
    modalSubtitle = 'Please fill out all of the following fields.'
    submitButton = 'Add Image'
  }

  return (
    <div>
      <Dialog
        open={props.modal.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{modalTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {modalSubtitle}
          </DialogContentText>

          <TextField
            id="name"
            margin="dense"
            label="Image Name"
            value={values.name}
            onChange={handleChange('name')}
            fullWidth
          />

          <TextField
            id="imageURL"
            margin="dense"
            label="Image URL"
            value={values.imageURL}
            onChange={handleChange('imageURL')}
            fullWidth
          />

          <TextField
            id="thumbnailURL"
            margin="dense"
            label="Thumbnail URL"
            value={values.thumbnailURL}
            onChange={handleChange('thumbnailURL')}
            fullWidth
          />

          <TextField
            id="desc"
            margin="dense"
            label="Short Description"
            value={values.desc}
            onChange={handleChange('desc')}
            fullWidth
          />

          <TextField
            select
            fullWidth
            margin="dense"
            id="category"
            label="Category"
            value={values.category}
            onChange={handleChange('category')}
          >
            <MenuItem key='catoriginals' value='originals'>Originals</MenuItem>
            <MenuItem key='catcopywork' value='copywork'>Copywork</MenuItem>
            <MenuItem key='catpostits' value='postits'>Post Its</MenuItem>
          </TextField>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          {/* <Button onClick={modalType === 'editImageModal' ? handleEditImage : handleAddImage} color="primary"> */}

          <Button onClick={validateForm} color="primary">

            {submitButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = ({ images, modal }) => ({ images, modal })

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(showModalAction()),
    closeModal: () => dispatch(hideModalAction()),
    submitEditModal: (image) => dispatch(editImageThunk(image)),
    submitAddModal: (image) => dispatch(addImageThunk(image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog)