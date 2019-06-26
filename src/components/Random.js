import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
}));

const Random = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
        Random Stuff
    </div>
  );
};

export default Random;