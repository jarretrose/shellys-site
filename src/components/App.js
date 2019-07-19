// main React file
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Nav.js';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Copywork from './Copywork';
import Posts from './Posts';
import Words from './Words';
import Coloring from './Coloring';
import About from './About';
import Contact from './Contact';
import Signin from './Signin';

const drawerWidth = 160;

const useStyles = makeStyles(theme => ({
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
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div className={classes.root}>
        <CssBaseline />
        <Nav />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
            <Switch>

              <Route path='/images/:category' component={Gallery} />

              {/* <Route path='/words' component={Words} /> */}
              {/* <Route path='/coloring' component={Coloring} /> */}
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/signin' component={Signin} />

            </Switch>
        </main>
      </div>
    </div>
  );
};

export default App;
