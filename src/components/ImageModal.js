import React from 'react';
import { connect } from 'react-redux';
import { showModalAction, hideModalAction } from '../store'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const styles = {
const useStyles = makeStyles(theme => ({
  modal: {
    position: 'fixed',
    zIndex: 3000,
    paddingTop: 10,
    paddingBottom: 50,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 50,
      paddingBottom: 50
    },
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
    padding: 0,
    height: 25,
    width: 50
  },
  buttonText: {
    fontFamily: "'Satisfy', cursive",
    textTransform: 'none',
    fontSize: 16,
  },
  prettyText: {
    fontFamily: "'Satisfy', cursive",
    textTransform: 'none',
    fontSize: 'calc(16px + 12 * ((100vw - 320px) / 960))',
    color: 'rgb(255,255,255)',
    textAlign: 'center',
  },
  imageContainer: {
    position: 'relative',
  }
}))

const closeButton = {
  position: 'absolute',
  bottom: -30,
  right: 100,
  cursor: 'pointer'
}

const ImageModal = (props) => {

  // hacky way to make sure image info has made into the component
  if (!props.modal.modalType) return <span />

  const { closeModal } = props;
  const classes = useStyles();

  const handleClose = () => closeModal()

  // Material-UI's Dialog and Modal are nice... but not easily customized. I was wrestling with getting the modal to display larger and cleanly on mobile devices and it just wasn't cooperating because of all the internals. I went with a simple CSS solution instead and got more or less exactly what I wanted. 
  return (
    <div className={classes.modal}>

      <div className={classes.imageContainer}>
        <Typography className={classes.prettyText}>
          {props.name}
        </Typography>
        <img src={props.imageURL} className={classes.modalImage} />
        <div style={closeButton}>
          <Button className={classes.button} variant="contained" color="secondary" onClick={handleClose}>
            <Typography className={classes.buttonText}>Close</Typography>
          </Button>
        </div>
      </div>

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

export default (connect(mapStateToProps, mapDispatchToProps)(ImageModal))