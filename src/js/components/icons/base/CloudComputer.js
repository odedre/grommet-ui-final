/** 
 * @description CloudComputer SVG Icon. 
 * @property {string} a11yTitle - Accessibility Title. If not set uses the default title of the status icon.
 * @property {string} colorIndex - The color identifier to use for the stroke color.
 * If not specified, this component will default to muiTheme.palette.textColor.
 * @property {xsmall|small|medium|large|xlarge|huge} size	- The icon size. Defaults to small.
 * @property {boolean} responsive  - Allows you to redefine what the coordinates. 
 * @example 
 * <svg width="24" height="24" ><path d="M6,6 L6,5 C6,2 7.5,1 10,1 L14,1 C16.5,1 18,2.5 18,5 L18,6 C21,6 23,8 23,11 C23,14 21,16 18,16 M14,6 L6,6 C3,6 1,7.5 1,11 C1,14.5 3,16 6,16 M8,19 L16,19 L16,12 L8,12 L8,19 Z M12,19 L12,23 L12,19 Z M9,23 L15,23 L9,23 Z"/></svg> 
 */
// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSClassnames from '../../../utils/CSSClassnames';
import Intl from '../../../utils/Intl';
import Props from '../../../utils/Props';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-cloud-computer`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'cloud-computer');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}><path fill="none" stroke="#000" strokeWidth="2" d="M6,6 L6,5 C6,2 7.5,1 10,1 L14,1 C16.5,1 18,2.5 18,5 L18,6 C21,6 23,8 23,11 C23,14 21,16 18,16 M14,6 L6,6 C3,6 1,7.5 1,11 C1,14.5 3,16 6,16 M8,19 L16,19 L16,12 L8,12 L8,19 Z M12,19 L12,23 L12,19 Z M9,23 L15,23 L9,23 Z"/></svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'CloudComputer';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};

