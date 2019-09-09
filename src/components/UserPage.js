import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutThunk, showModalAction } from '../store';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AdminImageList from './AdminImageList';
import Box from '@material-ui/core/Box';

const styles = theme => ({
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
  }
});


class UserPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allImagesIsVisible: false,
    }
    this.handleClickAddImage = this.handleClickAddImage.bind(this);
    this.handleClickListAllImages = this.handleClickListAllImages.bind(this);
    this.handleClickEditInfo = this.handleClickEditInfo.bind(this);
  }

  handleClickListAllImages() {
    const { allImagesIsVisible, addImageIsVisible } = this.state;
    this.setState({ 
      allImagesIsVisible: !allImagesIsVisible,
      addImageIsVisible: addImageIsVisible ? false : null,
    })
  }

  handleClickAddImage() {
    const { openModal } = this.props;
    const ADD_IMAGE = 'ADD_IMAGE'
    openModal(ADD_IMAGE, null)
  }

  handleClickEditInfo() {
    const { openModal, user } = this.props;
    const EDIT_INFO = 'EDIT_INFO'
    openModal(EDIT_INFO, user)
  }

  render() {
    const { classes, user, handleClickLogout } = this.props;
    const { allImagesIsVisible } = this.state;

    if (!user.id) return <Redirect to='/login' />

    return (
      <div className={classes.root}>
        <div className={classes.welcome}>
          <Typography variant="h5" gutterBottom>Welcome Back, {user.firstName}!</Typography>
          <Box display="flex" flexDirection="row">
            <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickLogout}>Logout</Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClickListAllImages}>All Images</Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClickAddImage}>Add Image</Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClickEditInfo}>Edit Info</Button>
          </Box>

        </div>
        
        <div>
          { allImagesIsVisible && <AdminImageList /> }
        </div>

      </div>
    )
  }
};

const mapStateToProps = ({ user, images }) => ({ user, images })

const mapDispatchToProps = dispatch => {
  return {
    handleClickLogout: () => (dispatch(logoutThunk())),
    openModal: (modalType, modalProps) => dispatch(showModalAction(modalType, modalProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserPage));
