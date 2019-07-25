import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import store, { loadImagesThunk } from '../store';

const drawerWidth = 160;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  titleFont: {
    fontFamily: "'Satisfy', cursive",
    textDecoration: 'none',
    color: 'black',
  },
  navStyles: {
    fontFamily: "'Satisfy', cursive",
    fontSize: "1.25rem"
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'rgba(247,231,206,1)',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'rgba(0,0,0,0)',
      border: 'none',
    },
  },
}));

const Nav = (props) => {
  const { container, triggerDispatch } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function isMobileOpen () {
    mobileOpen ? handleDrawerToggle : null
  }

  function clickEvent(event) {
    if (mobileOpen) handleDrawerToggle();
    triggerDispatch('originals')
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>

        <ListItem button component={Link} to={'/images/originals'}
          onClick={() => {
            mobileOpen ? handleDrawerToggle() : null;            
            triggerDispatch('originals');
          }}>
          <ListItemText classes={{ primary: classes.navStyles }} primary='Originals' />
        </ListItem>

        <ListItem button component={Link} to={'/images/copywork'}
          onClick={() => {
            mobileOpen ? handleDrawerToggle() : null;            
            triggerDispatch('copywork');
          }}>
          <ListItemText classes={{ primary: classes.navStyles }} primary='Copywork' />
        </ListItem>

        <ListItem button component={Link} to={'/images/postits'}
          onClick={() => {
            mobileOpen ? handleDrawerToggle() : null;
            triggerDispatch('postits');
          }}>
          <ListItemText classes={{ primary: classes.navStyles }} primary='Post Its' />
        </ListItem>

        <ListItem button component={Link} to={'/about'}
          onClick={mobileOpen ? handleDrawerToggle : null}>
          <ListItemText classes={{ primary: classes.navStyles }} primary='About Me' />
        </ListItem>

        <ListItem button component={Link} to={'/contact'}
          onClick={mobileOpen ? handleDrawerToggle : null}>
          <ListItemText classes={{ primary: classes.navStyles }} primary='Contact' />
        </ListItem>

        <ListItem button component={Link} to={'/admin'}
          onClick={mobileOpen ? handleDrawerToggle : null}>
          <ListItemText classes={{ primary: classes.navStyles }} primary='Admin' />
        </ListItem>

      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography component={Link} to={'/'} className={classes.titleFont} variant="h4" noWrap>
            Shelly Sketches
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="site navigation">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>

    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerDispatch: (cat) => dispatch(loadImagesThunk(cat))
  }
}

export default connect(null, mapDispatchToProps)(Nav);