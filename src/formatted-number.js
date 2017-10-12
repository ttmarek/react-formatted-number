import React, { Component } from 'react';
import PropTypes from 'prop-types';

import formatNumber from './format-number';
import stripFormatting from './strip-formatting';

class FormattedNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

  onChange = (event) => {
    console.log('event.target.value', event.target.value);
    this.setState({
      inputValue: stripFormatting(event.target.value),
    });
  }

  getInputProps = (otherProps) => {
    return {
      ...otherProps,
      value: formatNumber(this.props.format, this.state.inputValue),
      onChange: this.onChange,
    };
  }

  render() {
    const { formattedNumber } = this.state;
    const { children } = this.props;

    return React.cloneElement(children, {
      getInputProps: this.getInputProps,
    });
  }
}


FormattedNumber.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FormattedNumber;
