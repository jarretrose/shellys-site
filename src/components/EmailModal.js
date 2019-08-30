import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import { hideModalAction } from '../store';

const EmailModal = (props) => {

  const [values, setValues] = useState({
    nameField: '',
    emailField: '',
    messageField: ''
  })

  const { closeModal, modal } = props;

  const handleClose = () => closeModal()

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleCancel = () => {
    closeModal()
  }

  return (
      <Dialog
        open={modal.open} onClose={handleClose} aria-labelledby="form-dialog-title">

        <form id='contactForm' action="https://formspree.io/shellysketches@gmail.com" method="POST">
        <DialogTitle id="form-dialog-title">Contact Me!</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Please fill out the form below for all inquiries. I'll get back to you as soon as possible.
          </DialogContentText>
          <TextField
            autoFocus
            variant="outlined"
            margin="dense"
            id="nameField"
            name='name'
            label="Your Name"
            type="text"
            value={values.nameField}
            onChange={handleChange('nameField')}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="emailField"
            name='email'
            label="Your Email Address"
            type="email"
            value={values.emailField}
            onChange={handleChange('emailField')}
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            id="messageField"
            name='message'
            label="Your message"
            multiline={true}
            rows={3}
            value={values.messageField}
            onChange={handleChange('messageField')}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button type='button' onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button type='submit' form='contactForm' color="primary">
            Submit
          </Button>
        </DialogActions>
        </form>
      </Dialog>
  );
}

const mapStateToProps = ({ modal }) => ({ modal })

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(hideModalAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailModal)
