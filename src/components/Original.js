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
      .then(images => this.setState({ images: images }))
  };

  render() {

    const { classes, width } = this.props;
    const { images } = this.state;

    const getNumberOfColumns = () => {
      if (isWidthUp('xl', width)) { return 4 }
      if (isWidthUp('lg', width)) { return 3 }
      if (isWidthUp('md', width)) { return 2 }
      if (isWidthDown('sm', width)) { return 1 }
    };

    const getImgColSpan = (id) => {
      if (isWidthUp('xl', width)) {
        if (id === 1 || id === 9 || id === 17 || id === 22) return 2;
        else return 1;
      };
      if (isWidthUp('lg', width)) { 
        if (id === 1 || id === 7 || id === 11 || id === 17) return 2;
        else return 1;
      };
      return 1;
    };

    return (

      !images.length ? null :

        <div className={classes.root}>
          <GridList cellHeight={180} spacing={10} className={classes.gridList} cols={getNumberOfColumns()}>
            {images.map(img => (
              <GridListTile style={{background: 'rgba(0,0,0,.5' }} key={img.name} cols={getImgColSpan(img.id)} rows={2}>
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
