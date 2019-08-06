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

  const { openModal, closeModal, submitEditModal, submitAddModal } = props;
  const { modalProps, modalType } = props.modal

  // playing with React Hooks for the form
  const [values, setValues] = useState({
    id: modalType === 'editImageModal' ? modalProps.id : '',
    name: modalType === 'editImageModal' ? modalProps.name : '', 
    category: modalType === 'editImageModal' ? modalProps.category : '', 
    imageURL: modalType === 'editImageModal' ? modalProps.imageURL : '', 
    desc: modalType === 'editImageModal' ? modalProps.desc : '', 
  })

  const classes = useStyles();
  const theme = useTheme();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  // const handleClickOpen = () => openModal()
  const handleClose = () => closeModal()

  const handleEditImage = () => {
    const {id, name, category, imageURL, desc } = values
    submitEditModal({id, name, category, imageURL, desc})
    closeModal()
  }

  const handleAddImage = () => {
    const {name, category, imageURL, desc } = values
    submitAddModal({name, category, imageURL, desc})
    closeModal()
  }

  let modalTitle;
  let modalSubtitle;
  let submitButton;
  let handleSubmit;

  if (modalType === 'editImageModal') {
    modalTitle = 'Edit Image Information'
    modalSubtitle = 'Select the information you want to change.'
    submitButton = 'Update'
  } else if (modalType === 'addImageModal') {
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
          <Button onClick={modalType === 'editImageModal' ? handleEditImage : handleAddImage}     color="primary">
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