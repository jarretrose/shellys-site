import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const AdminImageList = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Fragment>
      <CssBaseline />
      Admin Image List.
    </Fragment>
  );
};

export default AdminImageList;