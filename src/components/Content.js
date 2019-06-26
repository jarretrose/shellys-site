import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Original from './Original';
import Copywork from './Copywork';
import Posts from './Posts';
import Random from './Random';
import Words from './Words';
import Coloring from './Coloring';
import About from './About';
import Contact from './Contact';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  }
}));

const Content = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HashRouter>
        <Switch>
          <Route path='/original' component={Original} />
          <Route path='/copywork' component={Copywork} />
          <Route path='/post-its' component={Posts} />
          <Route path='/random' component={Random} />
          <Route path='/words' component={Words} />
          <Route path='/coloring' component={Coloring} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default Content;