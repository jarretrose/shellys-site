import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { loginThunk } from '../store';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  );
}

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: 'rgba(250,250,250, .90)',
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

// using a class in order to use local state for form
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '', // using email address for login
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;

    login({ email, password });

    this.setState({
      email: '',
      password: '',
    })
  };

  render() {

    const { classes, user } = this.props;

    // DEFENSIVE CODING, MAKES SURE LOGGED IN USER IS REDIRECTED TO USER PAGE UPON REFRESH
    if (user.id) return <Redirect to='/admin' />

    return (
      <div className={classes.root}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin Sign in
          </Typography>
            <form onSubmit={this.handleSubmit} className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Admin Sign In
            </Button>

            </form>
            <Box mt={5} >
              <MadeWithLove />
            </Box>
          </div>
        </Container>
      </div>
    )};
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = ({ user }) => ({ user })

const mapDispatchToProps = (dispatch, ownProps) => {
  const history = ownProps.history;
  return {
    login: (email, password) => {
      dispatch(loginThunk(email, password))
        .then(() => history.push('/admin'))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login)));
