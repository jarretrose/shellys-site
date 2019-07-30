import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../store';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AdminImageList from './AdminImageList';
import AdminAddImage from './AdminAddImage';

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   welcome: {
//     marginBottom: theme.spacing(2),
//   },
//   actionArea: {

//   }
// }));


// const UserPage = (props) => {
//   const { user, handleClickLogout } = props;
//   const classes = useStyles();
//   const theme = useTheme();
//   let allImagesIsVisible = false;
//   let addImageIsVisible = false;

//   const handleClickListAllImages = () => {
//     console.log('handle click list all images')
//     allImagesIsVisible ? allImagesIsVisible = false : allImagesIsVisible = true;
//   }

//   const handleClickAddImage = () => {
//     console.log('handle click add image')
//   }


//   if (!user.id) return <Redirect to='/login' />

//   return (
//     <div className={classes.root}>
//       <div className={classes.welcome}>
//         <Typography variant="h2" gutterBottom>Welcome Back, {user.firstName}!</Typography>

//         <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickLogout}>Logout</Button>
//         <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickListAllImages}>List All Images</Button>
//         <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickAddImage}>Add Image</Button>

//       </div>
//       <div className={classes.actionArea}>
//         { allImagesIsVisible && <AdminImageList /> }
//         { addImageIsVisible ? <AdminAddImage /> : null }
//       </div>
//     </div>
//   )
// };

// const mapStateToProps = ({ user, images }) => ({ user, images })

// const mapDispatchToProps = dispatch => {
//   return {
//     handleClickLogout: () => (dispatch(logout()))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

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
    marginBottom: theme.spacing(2),
  },
  actionArea: {

  }
});


class UserPage extends Component {
  constructor() {
    super()
    this.state = {
      allImagesIsVisible: false,
      addImageIsVisible: false,
    }
    this.handleClickAddImage = this.handleClickAddImage.bind(this);
    this.handleClickListAllImages = this.handleClickListAllImages.bind(this);
  }

  handleClickListAllImages() {
    const { allImagesIsVisible, addImageIsVisible } = this.state;
    this.setState({ 
      allImagesIsVisible: !allImagesIsVisible,
      addImageIsVisible: addImageIsVisible ? false : null,
    })
  }

  handleClickAddImage() {
    const { addImageIsVisible, allImagesIsVisible } = this.state;
    this.setState({ 
      addImageIsVisible: !addImageIsVisible,
      allImagesIsVisible: allImagesIsVisible ? false : null,
    })
  }

  render() {
    const { classes, user, handleClickLogout } = this.props;
    const { allImagesIsVisible, addImageIsVisible } = this.state;

    if (!user.id) return <Redirect to='/login' />

    return (
      <div className={classes.root}>
        <div className={classes.welcome}>
          <Typography variant="h2" gutterBottom>Welcome Back, {user.firstName}!</Typography>

          <Button variant="contained" color="secondary" className={classes.button} onClick={handleClickLogout}>Logout</Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClickListAllImages}>List All Images</Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleClickAddImage}>Add Image</Button>

        </div>
        <div className={classes.actionArea}>
          { allImagesIsVisible && <AdminImageList /> }
          { addImageIsVisible && <AdminAddImage /> }
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ user, images }) => ({ user, images })

const mapDispatchToProps = dispatch => {
  return {
    handleClickLogout: () => (dispatch(logout()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserPage));
