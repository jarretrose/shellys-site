import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
}));

const Words = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
        Words words words. Using this page to test token auth.
        {
          
        }
    </div>
  );
};

export default Words;