import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import store, { showModalAction, hideModalAction, editImageThunk } from '../store'
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const EditDialog = (props) => {

  // hacky way to make sure image info has made into the component
  if (!props.modal.image.id ) return <span>{''}</span>

  // playing with React Hooks for the form
  const [values, setValues] = useState({
    id: props.modal.image.id,
    name: props.modal.image.name, 
    category: props.modal.image.category, 
    imageURL: props.modal.image.imageURL, 
    desc: props.modal.image.desc, 
  })

  const classes = useStyles();
  const theme = useTheme();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  // using a reducer for modal, for fun
  const { openModal, closeModal, submitModal } = props;

  // const handleClickOpen = () => openModal()
  const handleClose = () => closeModal()
  const handleSubmit = () => {
    const {id, name, category, imageURL, desc } = values
    submitModal({id, name, category, imageURL, desc})
    closeModal()
  }


  return (
    <div>
      <Dialog 
        open={props.modal.open} 
        onClose={handleClose} 
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Image Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the information you want to change.
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
          <Button onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = ({ modal }) => ({ modal })

const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(showModalAction()),
    closeModal: () => dispatch(hideModalAction()),
    submitModal: (image) => dispatch(editImageThunk(image))   
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditDialog)