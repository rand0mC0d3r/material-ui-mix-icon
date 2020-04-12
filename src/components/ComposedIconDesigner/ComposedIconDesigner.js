import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PositionSelector from './PositionSelector/PositionSelector';

import './ComposedIconDesigner.css';

class ComposedIconDesigner extends Component {

  render() {
    const { updateComposedIcon } = this.props;

    return (
      <div className="PolySearch__container">
        <h2>Material-UI Mix Icons</h2>

        <PositionSelector updateComposedIcon={updateComposedIcon} />
      </div>
    );
  }
}

ComposedIconDesigner.propTypes = {
  updateComposedIcon: PropTypes.func.isRequired,
};

export default ComposedIconDesigner;