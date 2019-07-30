// main React file
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Nav.js';
import { Switch, Route, withRouter } from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import { connect } from 'react-redux';
import UserPage from './UserPage';
import Login from './Login';
import store, { getMe, loadAllImagesThunk } from '../store';

const drawerWidth = 160;

const styles = theme => ({
  root: {
    flexGrow: 0,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
});

class App extends Component {
  constructor() {
    super()
  };

  componentDidMount() {
    const { init } = this.props;
    init()
  }

  componentDidUpdate() {
    console.log('APP UPDATED!!!')
  }
  
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <div className={classes.root}>
          <CssBaseline />
          <Nav />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>

              <Route path='/images/:category' component={Gallery} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Login} />
              <Route path='/admin' component={UserPage} />
            </Switch>
          </main>
        </div>
      </div>
    );
  };
};

const mapStateToProps = ({ user, images }) => ({ user, images })

const mapDispatchToProps = dispatch => {
  return {
    init() {
      dispatch(getMe());
      dispatch(loadAllImagesThunk());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App)));
