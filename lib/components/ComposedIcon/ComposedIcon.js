"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizesMap = {
  'small': {
    size: 17,
    extraSize: 10
  },
  'medium': {
    size: 25,
    extraSize: 13
  },
  'large': {
    size: 25,
    extraSize: 15
  }
};

var ComposedIcon = function ComposedIcon(_ref) {
  var icon = _ref.icon,
      extraIcon = _ref.extraIcon,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'inherit' : _ref$color,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'bottom-end' : _ref$position,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'relative',
      cursor: 'default'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      lineHeight: '0px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    className: Array.isArray(icon) ? icon.join(' ') : "fa fa-".concat(icon),
    style: {
      fontSize: sizesMap[size].size,
      width: '1.25em'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      lineHeight: '0px',
      position: 'absolute',
      textShadow: '0.75px 0px 0.5px #FFF, 0px 0.75px 0.5px #FFF, -0.75px 0px 0.5px #FFF, 0px -0.75px 0.5px #FFF',
      bottom: position.includes('bottom') ? '-4px' : null,
      top: position.includes('top') ? '-4px' : null,
      left: position.includes('start') ? '-4px' : null,
      right: position.includes('end') ? '-4px' : null
    }
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    color: color,
    className: Array.isArray(extraIcon) ? extraIcon.join(' ') : "fa fa-".concat(extraIcon),
    style: {
      fontSize: sizesMap[size].extraSize,
      padding: '2px',
      color: disabled ? 'rgba(0, 0, 0, 0.35)' : null
    }
  })));
};

ComposedIcon.propTypes = {
  icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]).isRequired,
  extraIcon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]).isRequired,
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  color: _propTypes.default.string,
  position: _propTypes.default.oneOf(['top-start', 'top-end', 'bottom-start', 'bottom-end']),
  disabled: _propTypes.default.bool
};
var _default = ComposedIcon;
exports.default = _default;