// main React file
import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Nav.js';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Gallery from './Gallery';
import About from './About';
import Contact from './Contact';
import Admin from './Admin';
import store, { loadImagesThunk } from '../store';
import { connect } from 'react-redux';

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
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('App did mount')
  }

  componentDidUpdate() {
    console.log('App did update')
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
              <Route path='/admin' component={Admin} />

            </Switch>
          </main>
        </div>
      </div>
    );
  };
};

export default withStyles(styles)(App);
