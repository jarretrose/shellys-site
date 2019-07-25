import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
}));

const Gallery = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { images, width } = props;

  // number of columns in the gallery
  const getNumberOfColumns = () => {
    if (isWidthUp('xl', width)) { return 4 }
    if (isWidthUp('lg', width)) { return 3 }
    if (isWidthUp('md', width)) { return 2 }
    if (isWidthDown('sm', width)) { return 1 }
  };

  // how many columns the image spans
  const getImgColSpan = (idx) => {
    if (isWidthUp('xl', width)) {
      if (idx === 0 || idx % 7 === 0) return 2;
      else return 1;
    };
    if (isWidthUp('lg', width)) {
      let lastDigit = parseInt(idx.toString().split('').pop())
      if (lastDigit === 0 || lastDigit === 6) return 2;
      else return 1;
    };
    if (isWidthUp('md', width)) {
      if (idx === 0 || idx % 3 === 0) return 2;
      else return 1;
    };
    return 1;
  };

  return (

    // if the images haven't loaded, do nothing
    !images.length ? <span>No images to load.</span> :

      <div className={classes.root}>
        <GridList cellHeight={180} spacing={8} className={classes.gridList} cols={getNumberOfColumns()}>
          {images.map((img, idx) => (
            <GridListTile style={{ background: 'rgba(0,0,0,.5' }} key={img.name} cols={getImgColSpan(idx)} rows={2}>
              <img src={img.imageURL} alt={img.name} />
            </GridListTile>
          ))}
        </GridList>
      </div>
  )
}

const mapStateToProps = ({ images }) => ({ images })

export default withWidth()(connect(mapStateToProps)(Gallery));
