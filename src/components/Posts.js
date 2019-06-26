import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
}));

const Posts = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
        Post-It Art
    </div>
  );
};

export default Posts;