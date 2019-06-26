import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  stuff: {
    minWidth: 100,
    height: 'auto'
  },
}));

const Original = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.stuff}>
        
        asdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaaasdfaaaa
        
      </div>
    </div>
  );
};

export default Original;