import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutThunk, showModalAction } from '../store';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AdminImageList from './AdminImageList';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  welcome: {
    marginBottom: theme.spacing(1),
  },
}));

const UserPage = props => {
  const classes = useStyles();
  const theme = useTheme();

  const [allImagesIsVisible, setAllImagesIsVisible] = useState(false)

  function handleClickListAllImages() {
    setAllImagesIsVisible(!allImagesIsVisible)
  }

  function handleClickAddImage() {
    const { openModal } = props;
    const ADD_IMAGE = 'ADD_IMAGE'
    openModal(ADD_IMAGE, null)
  }

  function handleClickEditInfo() {
    const { openModal, user } = props;
    const EDIT_INFO = 'EDIT_INFO'
    openModal(EDIT_INFO, user)
  }

  const { user, handleClickLogout } = props;

  if (!user.id) return <Redirect to='/login' />

  return (
    <div className={classes.root}>
      <div className={classes.welcome}>
        <Typography variant="h5" gutterBottom>Welcome Back, {user.firstName}!</Typography>
        <Box display="flex" flexDirection="row">
          <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleClickLogout()}>Logout</Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleClickListAllImages()}>All Images</Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleClickAddImage()}>Add Image</Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={() => handleClickEditInfo()}>Edit Info</Button>
        </Box>

      </div>

      <div>
        {allImagesIsVisible && <AdminImageList />}
      </div>

    </div>
  );
};

const mapStateToProps = ({ user, images }) => ({ user, images })

const mapDispatchToProps = dispatch => {
  return {
    handleClickLogout: () => (dispatch(logoutThunk())),
    openModal: (modalType, modalProps) => dispatch(showModalAction(modalType, modalProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
