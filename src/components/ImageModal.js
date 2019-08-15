import React from 'react';
import { connect } from 'react-redux';
import { showModalAction, hideModalAction } from '../store'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  modal: {
    position: 'fixed',
    zIndex: 3000,
    paddingTop: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,.75)'
  },
  modalImage: {
    margin: 'auto',
    display: 'block',
    maxWidth: '90%',
    maxHeight: '90%',
  },
  button: {
    padding: 0
  },
  buttonText: {
    fontFamily: "'Satisfy', cursive",
    textTransform: 'none',
    fontSize: 16,
  }
}

const closeButton = {
    position: 'absolute',
    bottom: 100,
    right: 35,
    cursor: 'pointer'
}

const ImageModal = (props) => {

  // hacky way to make sure image info has made into the component
  if (!props.modal.modalType) return <span />

  const { closeModal, classes } = props;
  const handleClose = () => closeModal()

  // Material-UI's Dialog and Modal are nice... but not easily customized. I was wrestling with getting the modal to display larger and cleanly on mobile devices and it just wasn't cooperating because of all the internals. I went with a simple CSS solution instead and got more or less exactly what I wanted. 
  return (
    <div className={classes.modal}>
      <span style={closeButton}>
        <Button className={classes.button} variant="contained" color="secondary" onClick={handleClose}>
          <Typography className={classes.buttonText}>Close</Typography>
        </Button>
      </span>
      <img src={props.imageURL} className={classes.modalImage}/>
     </div> 
  )
}

const mapStateToProps = ({ images, modal }) => ({ images, modal })

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modalType, modalProps) => dispatch(showModalAction(modalType, modalProps)),
    closeModal: () => dispatch(hideModalAction()),
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ImageModal))