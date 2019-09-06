import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { showModalAction } from '../store';
import axios from 'axios';

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
    justifyContent: 'center'
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
  link: {
    margin: theme.spacing(1),
  },
}));

const About = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { openModal } = props;
  const EMAIL_MODAL = 'EMAIL_MODAL';

  const [aboutMeInfo, setAboutMeInfo] = useState('');
  
  useEffect(() => {
    axios.get('/api/users/aboutme')
      .then(res => setAboutMeInfo(res.data))
  })

  const handleEmailModal = (modalType, modalProps) => openModal(modalType, modalProps)

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.flexContainer}>

        <Grid item container xs={12} className={classes.gridItem} >
          <Avatar alt="Shelly's Avatar" src='/images/shellAvatar.png' className={classes.avatar} />

          <Grid container spacing={3} className={classes.iconContainer}>

            <Grid item xs={2} className={classes.gridItem}>
              <Link href='https://www.instagram.com/shellysketches/' target='_blank' rel='noreferrer'>
                <img src='/images/instagram.png' alt='Instagram' className={classes.icons} />
              </Link>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
              <Link href='https://www.deviantart.com/shellysketches' target='_blank' rel='noreferrer'>
                <img src='/images/deviant.png' alt='Deviant Art' className={classes.icons} style={{ borderRadius: 10 }} />
              </Link>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
              <Link href='https://society6.com/shellysketches' target='_blank' rel='noreferrer'>
                <img src='/images/society6.jpg' alt='Society6 Shop' className={classes.icons} style={{ borderRadius: 10 }} />
              </Link>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
              <Button color="primary" onClick={() => handleEmailModal(EMAIL_MODAL)}>
                <img src='/images/gmail.png' alt='Gmail Link' className={classes.icons} style={{ borderRadius: 10 }} />
              </Button>
            </Grid>

          </Grid>
        </Grid>

        <Grid item xs={12} >
          <Paper className={classes.paper}>
            {aboutMeInfo}
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modalType, modalProps) => dispatch(showModalAction(modalType, modalProps))
  }
}

export default connect(null, mapDispatchToProps)(About);