import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { showModalAction, hideModalAction, editImageThunk, addImageThunk } from '../store'
import MenuItem from '@material-ui/core/MenuItem';

const EditDialog = (props) => {

  if (!props.modal.modalType) return <span />

  const { closeModal, submitEditModal, submitAddModal } = props;
  const { modalProps, modalType } = props.modal

  const [values, setValues] = useState({
    id: modalType === 'EDIT_IMAGE' ? modalProps.id : '',
    name: modalType === 'EDIT_IMAGE' ? modalProps.name : '',
    category: modalType === 'EDIT_IMAGE' ? modalProps.category : '',
    imageURL: modalType === 'EDIT_IMAGE' ? modalProps.imageURL : '',
    desc: modalType === 'EDIT_IMAGE' ? modalProps.desc : '',
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleClose = () => closeModal()

  const validateForm = () => {
    const { id, name, category, imageURL, desc } = values
    if (name === '' || category === '' || imageURL === ''  || desc === '') (alert('All fields must be filled out.'))
    else modalType === 'EDIT_IMAGE' ? handleEditImage() : handleAddImage()
  }

  const handleEditImage = () => {
    const { id, name, category, imageURL, desc } = values
    submitEditModal({ id, name, category, imageURL, desc })
    closeModal()
  }

  const handleAddImage = () => {
    const { name, category, imageURL, desc } = values
    submitAddModal({ name, category, imageURL, desc })
    closeModal()
  }

  let modalTitle;
  let modalSubtitle;
  let submitButton;

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