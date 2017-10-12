import React, { Component } from 'react';
import styles from './App.css';
import PropTypes from 'prop-types';
import FormattedNumber from 'react-formatted-number';

console.log('styles', styles);

const isVisa = number => number[0] === '4';
const isAmex = number => number.slice(0, 2) === '34';
const isMasterCard = number => number.slice(0, 2) === '51';
const isInternationalNumber = '';


function MyInputComponent(props) {
  const { getInputProps } = props;

  return (
    <input {...getInputProps()}/>
  );
}

MyInputComponent.propTypes = {
  getInputProps: PropTypes.func.isRequired,
};


class App extends Component {
  render() {
    return (
      <div>
        <FormattedNumber type="tel" format="(###) ###-####">
          <MyInputComponent />
        </FormattedNumber>
        {/* <FormattedNumber
            type="tel"
            format={{
            }}
            /> */}
        {/* <FormattedNumber
            type="credit-card"
            format={{
            '#### #### #### ####': isVisa,
            '#### ###### #####': isAmex,
            '#### #### #### ####': isMasterCard,
            }}
            /> */}
        {/* <FormattedNumber
            type="currency"
            format={{
            prefix: '',
            suffix: '',
            thousands: ',',
            decimal: '.',
            precision: 2,
            }}
            /> */}
      </div>
    );
  }
}

export default App;
