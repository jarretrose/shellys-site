import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthDown, isWidthUp } from '@material-ui/core/withWidth';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
});

class Original extends Component {
  constructor() {
    super()
    this.state = {
      images: []
    };
  };

  componentDidMount() {
    axios.get('/api/images')
      .then(images => images.data)
      .then(images => this.setState({ images }))
  };

  render() {

    const { classes, width } = this.props;
    const { images } = this.state;

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
        if (idx === 0 || idx%7 === 0) return 2;
        else return 1;
      };
      if (isWidthUp('lg', width)) {
        let lastDigit = parseInt(idx.toString().split('').pop())
        if (lastDigit === 0 || lastDigit === 6) return 2;
        else return 1;
      };
      if (isWidthUp('md', width)) { 
        if (idx === 0 || idx%3 === 0) return 2;
        else return 1;
      };
      return 1;
    };

    return (

      // if the images haven't loaded, do nothing
      !images.length ? null :

        <div className={classes.root}>
          <GridList cellHeight={180} spacing={8} className={classes.gridList} cols={getNumberOfColumns()}>
            {images.map((img, idx) => (
              <GridListTile style={{background: 'rgba(0,0,0,.5' }} key={img.name} cols={getImgColSpan(idx)} rows={2}>
                <img src={img.imageURL} alt={img.name} />
              </GridListTile>
            ))}
          </GridList>

        </div>
    )
  };
};

Original.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(Original));
