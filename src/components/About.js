import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
}));

const About = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
        About Me Page and Stuff
    </div>
  );
};

export default About;