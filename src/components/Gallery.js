import React, { Fragment } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { showModalAction } from '../store'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
  },
  gridItem: {
    margin: 1,
    alignSelf: 'center',
    cursor: 'pointer',
  },
  image: {
    margin: 2,
    maxWidth: 200,
    maxHeight: 200,
  },
  type: {
    fontFamily: "'Satisfy', cursive",
    fontSize: 22,
    marginBottom: theme.spacing(1)
  },
}));

const Gallery = (props) => {
  const { images, openModal } = props;
  const classes = useStyles();
  const imageCategory = props.match.params.category;
  const SHOW_IMAGE = 'SHOW_IMAGE'

  const handleImageClick = (modalType, modalProps) => openModal(modalType, modalProps)

  // if the images haven't loaded, do nothing
  if (!images.length) return <span>No images to load.</span>

  return (
    <Fragment>

      <Typography className={classes.type}>
        Click on any image to increase size.
      </Typography>

        <Grid container className={classes.root}>

          {images.filter(image => image.category === imageCategory)
            .map((img, idx) => (
              <Grid item className={classes.gridItem} key={img.name} onClick={() => handleImageClick(SHOW_IMAGE, img)}>
                <span>
                  <img className={classes.image} src={img.imageURL} alt={img.name} />
                </span>
              </Grid>
            ))}

        </Grid>

    </Fragment>
  )
}

const mapStateToProps = ({ images }) => ({ images })

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modalType, modalProps) => dispatch(showModalAction(modalType, modalProps))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
