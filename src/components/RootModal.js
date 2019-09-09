import React from 'react'
import EditOrAddImage from './EditOrAddImage'
import ImageModal from './ImageModal'
import EmailModal from './EmailModal'
import EditInfo from './EditInfo'
import { connect } from 'react-redux'

const MODAL_COMPONENTS = {
  'EDIT_IMAGE': EditOrAddImage,
  'ADD_IMAGE': EditOrAddImage,
  'SHOW_IMAGE': ImageModal,
  'EMAIL_MODAL': EmailModal,
  'EDIT_INFO': EditInfo,
}

const RootModal = ({ modalType, modalProps }) => {
  if (!modalType) return <span />

  const SpecificModal = MODAL_COMPONENTS[modalType]

  return <SpecificModal {...modalProps} />
}

export default connect(state => state.modal)(RootModal)
