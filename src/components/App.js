// main React file
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './Nav.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0 0',
    backgroundImage: `url("../../images/girl-in-pink.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100vw',
    height: '100vh'
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Nav />
    </div>
  );
};

export default App;
