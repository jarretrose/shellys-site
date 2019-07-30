import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../store';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
  actions: {

  }
}));


const UserPage = (props) => {
  const { user, handleClick } = props;
  const classes = useStyles();
  const theme = useTheme();

  if (!user.id) return <Redirect to='/login' />

  return (
    <div className={classes.root}>
      <div className={classes.welcome}>
        <Typography variant="h2" gutterBottom>Welcome Back, {user.firstName}!</Typography>
        <Button variant="contained" color="secondary" onClick={handleClick}>Logout</Button>
      </div>
      <div className={classes.actions}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      </div>
    </div>
  )
};

const mapStateToProps = ({ user, images }) => ({ user, images })

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => (dispatch(logout()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
