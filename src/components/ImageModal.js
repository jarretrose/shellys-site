import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { connect } from 'react-redux';
import { showModalAction, hideModalAction } from '../store'
import { useTheme } from '@material-ui/core/styles';


const ImageModal = (props) => {

  // hacky way to make sure image info has made into the component
  if (!props.modal.modalType) return <span />

  const { closeModal } = props;

  const theme = useTheme();

  const handleClose = () => closeModal()

  return (

    <div aria-label="full sized image">
      <Dialog open={props.modal.open} onClose={handleClose} overflow={'auto'} >
        <img style={{ margin: 'auto', display: 'block', width: '100%' }}
          src={props.imageURL} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ImageModal)