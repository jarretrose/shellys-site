import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import store, { showModalAction, deleteImageThunk } from '../store'
import EditDialog from './EditDialog';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  avatar: {
    margin: 10,
  },
  // avatar: {
  //   margin: 10,
  //   width: 60,
  //   height: 60,
  // },
  bgImageList: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 5,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const AdminImageList = props => {
  const classes = useStyles();
  const theme = useTheme();
  const { images, deleteImage, openModal } = props;
  const EDIT_IMAGE = 'EDIT_IMAGE'

  const handleDelete = (id) => deleteImage(id);
  const handleEdit = (modalType, modalProps) => openModal(modalType, modalProps)

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.noImages}>
            All Images
          </Typography>

          <Box boxShadow={1} className={classes.bgImageList}>

            <List>
              {
                !images.length ? (
                  <Typography variant="h6" align="center">
                    No images to display.
                  </Typography>
                ) :

                  images.map(img =>
                    <div key={img.name + Date.now()}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar alt={img.name} src={img.imageURL} className={classes.avatar} />
                        </ListItemAvatar>
                        <ListItemText primary={img.name} />
                        <ListItemSecondaryAction>

                          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(img.id)} >
                            <DeleteIcon />
                          </IconButton>

                          <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(EDIT_IMAGE, img)}>
                            <EditIcon />
                          </IconButton>

                        </ListItemSecondaryAction>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </div>,
                  )}
            </List>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ images, modal }) => ({ images, modal })

const mapDispatchToProps = (dispatch) => {
  return {
    deleteImage: (imageID) => dispatch(deleteImageThunk(imageID)),
    openModal: (modalType, modalProps) => dispatch(showModalAction(modalType, modalProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminImageList);
