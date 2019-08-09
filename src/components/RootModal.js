import React from 'react'
import EditDialog from './EditDialog'
import ImageModal from './ImageModal'
import { connect } from 'react-redux'

const MODAL_COMPONENTS = {
  'EDIT_IMAGE': EditDialog,
  'ADD_IMAGE': EditDialog,
  'SHOW_IMAGE': ImageModal,
}

const RootModal = ({ modalType, modalProps }) => {
  if (!modalType) return <span />

  const SpecificModal = MODAL_COMPONENTS[modalType]

  return <SpecificModal {...modalProps} />
}

export default connect(state => state.modal)(RootModal)
