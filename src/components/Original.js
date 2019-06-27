import React, { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { callbackify } from 'util';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  gridList: {
    width: 'calc(100vw - 160px)',
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
  }

  render() {

    const { classes } = this.props;
    const { images } = this.state;

    return (

      !images.length ? null :

        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={1}>
            {images.map(img => (
              <GridListTile style={{background: 'rgba(0,0,0,.5' }} key={img.name} cols={1}>
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

export default withStyles(styles)(Original);
