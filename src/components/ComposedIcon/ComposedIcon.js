import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { palette } from '@material-ui/system';
import Icon from '@material-ui/core/Icon';

import './ComposedIcon.css';

class ComposedIcon extends Component {

  render() {
    const { icon, size, color, extraIcon, disabled, props } = this.props;

    const sizes = {
      'small': 17,
      'large': 25,
      'medium': 22,
    }

    return (
      <div
        className="ComposedIcon__wrapper"
        >
        <div className="ComposedIcon__icon">
          <Icon
            className={`fa fa-${icon}`}
            style={{ fontSize: sizes[size] }}
          />
        </div>
        {palette.color}
        <div className={`ComposedIcon__extraIcon ComposedIcon__position__${props.position}`}>
          <Icon
           {...{
             disabled: disabled || null
           }}
            color={color}
            className={`fa fa-${extraIcon} ComposedIcon__extraIcon__detail`}
            style={{ fontSize: sizes[size] / 1.75 }}
          />
        </div>
      </div>
    );
  }
}

ComposedIcon.propTypes = {
  icon: PropTypes.any.isRequired,
  extraIcon: PropTypes.any.isRequired,
  size: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
};

export default ComposedIcon;