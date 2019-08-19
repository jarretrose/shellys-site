import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
    padding: 0,
    width: 250,
    height: 250,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  icons: {
    width: 'calc(30px + 30 * ((100vw - 320px) / 960))',
    height: 'calc(30px + 30 * ((100vw - 320px) / 960))',
  },
}));

const About = props => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.flexContainer}>

        <Grid item container xs={12} className={classes.gridItem} >
          <Avatar alt="Shelly" src="/images/shellAvatar.png" className={classes.avatar} />

          <Grid container spacing={3} className={classes.iconContainer}>
            <Grid item xs={2} className={classes.gridItem}>
              <img src='/images/twitter.png' alt='Twitter Icon' className={classes.icons} />
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
              <img src='/images/instagram.png' alt='Instagram' className={classes.icons} />
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
              <img src='/images/deviant.png' alt='Deviant Art' className={classes.icons} style={{ borderRadius: 10 }} />
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
              <img src='/images/gmail.png' alt='Gmail' className={classes.icons} style={{ borderRadius: 10 }} />
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
              <img src='/images/society6.jpg' alt='Society6' className={classes.icons} style={{ borderRadius: 10 }} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>

        {/* <Grid item xs={12} md={6} >
          <Paper className={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>

        <Grid item xs={12} md={6} >
          <Paper className={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>

        <Grid item xs={12} md={6} >
          <Paper className={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid> */}

      </Grid>
    </div>
  );
};

export default About;
