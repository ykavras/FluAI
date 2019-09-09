import React from 'react';
import styles from './styles';
import DatePicker from 'react-native-datepicker';

function DatePickerInput(props) {
  const {date, placeholder, onDateChange} = props;
  return (
    <DatePicker
      style={styles.date}
      date={date}
      mode="date"
      placeholder={placeholder}
      format="DD-MM-YYYY"
      minDate="01-1-1930"
      maxDate="01-1-2010"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyles={{dateIcon: {display: 'none'}, dateInput: {...styles.input}}}
      onDateChange={onDateChange}
    />
  );
}

DatePickerInput.defaultProps = {};

export default DatePickerInput;
