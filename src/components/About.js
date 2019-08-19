import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const About = props => {

  return (
    <Fragment>
      <CssBaseline />
      About page coming soon.
    </Fragment>
  );
};

export default About;
