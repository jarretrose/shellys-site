import React from 'react';
import { connect } from 'react-redux';
import { showModalAction, hideModalAction } from '../store'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 3000,
    paddingTop: 0,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,.75)',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 40,
      flexDirection: 'column'
    },
  },
  modalImage: {
    margin: 'auto',
    padding: 10,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  description: {
    margin: 'auto',
    padding: 10,
  },
  button: {
    padding: 0,
    height: 25,
    width: 50
  },
  fab: {
    margin: theme.spacing(1),
  },
  buttonText: {
    fontFamily: "'Satisfy', cursive",
    textTransform: 'none',
    fontSize: 18,
  },
  prettyText: {
    fontFamily: "'Satisfy', cursive",
    textTransform: 'none',
    fontSize: 24,
    color: 'rgb(255,255,255)',
    textAlign: 'left',
  },
  prettText2: {
    fontSize: 100,
  }
}))

const closeButton = {
  position: 'fixed',
  top: 0,
  right: 0,
  cursor: 'pointer'
}

const ImageModal = (props) => {

  // hacky way to make sure image info has made into the component
  if (!props.modal.modalType) return <span />

  const { closeModal } = props;
  const classes = useStyles();

  const handleClose = () => closeModal()

  // Material-UI's Dialog and Modal are nice... but not easily customized. I was wrestling with getting the modal to display larger and cleanly on mobile devices and it just wasn't cooperating because of all the internals. I went with a CSS solution instead and got more or less exactly what I wanted. 
  return (
    <div className={classes.root} onClick={handleClose}>

        <img src={props.imageURL} className={classes.modalImage} />

        <div className={classes.description}>
          <Typography className={classes.prettyText}>{props.name}</Typography>
          <Typography className={classes.prettyText}>{props.desc}</Typography>
        </div>
        <div style={closeButton}>
          <Fab size='small' color="secondary" className={classes.fab}>
            <CloseIcon />
          </Fab>
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
