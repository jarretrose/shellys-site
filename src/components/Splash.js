import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { callbackify } from 'util';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0 0',
    backgroundImage: `url("../../images/woman-in-blue.png")`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh'
  },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },
}));

export default function Splash() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
}