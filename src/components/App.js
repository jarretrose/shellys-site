// main React file
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Nav.js';
import Content from './Content.js';

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
          <Content />
      </main>
    </div>
    </div>
  );
};

export default App;
