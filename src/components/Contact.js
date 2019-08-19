import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Fragment>
      Contact page coming soon.
    </Fragment>
  );
};

export default Contact;
