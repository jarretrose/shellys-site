// main React file
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Nav from './Nav.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0',
    backgroundColor: '#000',
    [theme.breakpoints.down('sm')]: {
      backgroundImage: `url("../../images/girl-in-pink-small.png")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center right',
      width: '100vw',
      height: '100vh',
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url("../../images/girl-in-pink-test.png")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center left',
      width: '100vw',
      height: '100vh',
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Nav />
    </div>
  );
};

export default App;
