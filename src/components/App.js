import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Nav.js';
import { Switch, Route, withRouter } from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';
import { connect } from 'react-redux';
import UserPage from './UserPage';
import Login from './Login';
import { getMeThunk, loadAllImagesThunk, hideModalAction } from '../store';
import RootModal from './RootModal'

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

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <CssBaseline />
        <RootModal />
          <div className={classes.root}>

            <Nav />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Switch>
                <Route path='/images/:category' component={Gallery} />
                <Route path='/about' component={About} />
                <Route path='/login' component={Login} />
                <Route path='/admin' component={UserPage} />
              </Switch>
            </main>
          </div>
      </Fragment>
    );
  };
};

const mapStateToProps = ({ user, images }) => ({ user, images })

const mapDispatchToProps = dispatch => {
  return {
    init() {
      dispatch(getMeThunk());
      dispatch(loadAllImagesThunk());
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App)));
