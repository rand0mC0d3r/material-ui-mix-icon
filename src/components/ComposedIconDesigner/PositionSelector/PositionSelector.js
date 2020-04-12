import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import './PositionSelector.css';

class PositionSelector extends Component {

  updatePosition = (position) => {
    const { updateComposedIcon } = this.props;
    updateComposedIcon('position', position);
  }

  _generateBlock = (direction) => {
    const range = ['start', '', 'end'];

    return ['top', 'bottom'].includes(direction) ?
      this._generateBlockHorizontal(direction, range) :
      this._generateBlockVertical(direction, range);
  }

  _generateBlockHorizontal = (direction, range) => {
    return (
      <Grid item>
        {range.map(rangeItem => (
          <React.Fragment key={rangeItem}>
            {this._buttonBlock(direction, rangeItem)}
          </React.Fragment>
        ))}
      </Grid>
    )
  }

  _generateBlockVertical = (direction, range) => {
    return (
      <React.Fragment>
        {range.map(rangeItem => (
          <Grid item key={rangeItem}>
            {this._buttonBlock(direction, rangeItem)}
          </Grid>
        ))}
      </React.Fragment>
    )
  }

  _buttonBlock = (direction, rangeItem) => {
    const composedDirection = `${direction}${rangeItem.length > 0 ? `-${rangeItem}` : ''}`;
    return (
      <Button onClick={() => this.updatePosition(composedDirection)}>{composedDirection}</Button>
    )
  }

  render() {
    return (
      <div>
        <Grid container justify="center">
          {this._generateBlock('top')}
        </Grid>
        {/* <Grid container justify="center">
          <Grid item xs={6}>
           {this._generateBlock('left')}
          </Grid>
          <Grid item container xs={6} alignItems="flex-end" direction="column">
            {this._generateBlock('right')}
          </Grid>
        </Grid> */}
        <Grid container justify="center">
          {this._generateBlock('bottom')}
        </Grid>
      </div>
    );
  }
}

PositionSelector.propTypes = {
  updateComposedIcon: PropTypes.func.isRequired,
};

export default PositionSelector;