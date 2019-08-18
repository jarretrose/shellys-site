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
      flexDirection: 'column',
      justifyContent: 'center'
    },
  },
  gridItem: {
    margin: 1,
    alignSelf: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
  },
  image: {
    margin: 2,
    maxWidth: 200,
    maxHeight: 200,
    webkitfilter: 'grayscale(100%)',
    filter: 'grayscale(100%)',
    transition: 'transform .2s',
    '&:hover': {
      webkitfilter: 'grayscale(0%)',
      filter: 'grayscale(0%)',
      transform: 'scale(1.5)',
    },
  },
  type: {
    fontFamily: "'Satisfy', cursive",
    fontSize: 'calc(20px + 12 * ((100vw - 320px) / 680))',
    marginBottom: theme.spacing(1)
  },
}));

const Gallery = (props) => {
  const { images, openModal } = props;
  const classes = useStyles();
  const imageCategory = props.match.params.category;
  const SHOW_IMAGE = 'SHOW_IMAGE'
  let galleryImages = []

  const handleImageClick = (modalType, modalProps) => openModal(modalType, modalProps)
  galleryImages = images.filter(image => image.category === imageCategory)
  
  // if the images haven't loaded, do nothing
  if (!galleryImages.length) return (
    <span>
      <Typography className={classes.type}>
        No images to load at this time. Please check back later.
      </Typography>
    </span>
  )

  return (
    <Fragment>

      <Typography className={classes.type}>
        Click on any image to increase size.
      </Typography>

      <Grid container className={classes.root}>

        {/* {images.filter(image => image.category === imageCategory) */}
        {galleryImages.map((img, idx) => (
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
