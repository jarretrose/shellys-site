import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux';
import { showModalAction, hideModalAction } from '../store'
import { withStyles } from '@material-ui/core/styles'
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';

const styles = {
  dialogPaper: {
    position: 'fixed',
    maxWidth: '100vw',
    maxHeight: '100vh',
    overflow: 'auto',
    // left: '0',
    // top: '0',
  },
  imageStyles: {
    margin: 'auto',
    display: 'block',
    width: '100%',
    maxWidth: '700px'
  }
}

const ImageModal = (props) => {

  // hacky way to make sure image info has made into the component
  if (!props.modal.modalType) return <span />
  console.log(props)

  const { closeModal, classes } = props;

  const handleClose = () => closeModal()


  return (

    <div aria-label="full sized image" className={classes.dialogPaper}>
      <Dialog open={props.modal.open} onClose={handleClose} overflow={'auto'}
      >
        <img src={props.imageURL} className={classes.imageStyles}  />
      </Dialog>
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