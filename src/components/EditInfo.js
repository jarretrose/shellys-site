import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { showModalAction, hideModalAction, editUserThunk } from '../store'

const EditInfo = props => {

  if (!props.modal.modalType) return <span />

  const { closeModal, submitEditModal } = props;
  const { modalProps } = props.modal

  const [values, setValues] = useState({
    firstName: modalProps.firstName,
    lastName: modalProps.lastName,
    email: modalProps.email,
    about: modalProps.about
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleClose = () => closeModal()

  const handleEditInfo = () => {
    const { firstName, lastName, email, about } = values;
    const { id } = modalProps
    submitEditModal({ id, firstName, lastName, email, about })
    closeModal()
  }

  return (
    <Dialog
      open={props.modal.open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >

      <DialogTitle id="form-dialog-title">Edit your personal info!</DialogTitle>
      <DialogContent>


        <TextField
          id="firstName"
          margin="dense"
          label="First Name"
          value={values.firstName}
          onChange={handleChange('firstName')}
          fullWidth
        />

        <TextField
          id="lastName"
          margin="dense"
          label="Last Name"
          value={values.lastName}
          onChange={handleChange('lastName')}
          fullWidth
        />

        <TextField
          id="email"
          margin="dense"
          label="Email"
          value={values.email}
          onChange={handleChange('email')}
          fullWidth
        />

        <TextField
          id="desc"
          margin="dense"
          label="About Me"
          multiline={true}
          rows={3}
          value={values.about}
          onChange={handleChange('about')}
          fullWidth
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
          </Button>

        <Button onClick={handleEditInfo} color="primary">
          Update
        </Button>

      </DialogActions>



    </Dialog>
  )

}

const mapStateToProps = ({ user, modal }) => ({ user, modal })


const mapDispatchToProps = dispatch => {
  return {
    openModal: () => dispatch(showModalAction()),
    closeModal: () => dispatch(hideModalAction()),
    submitEditModal: (user) => dispatch(editUserThunk(user)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo)