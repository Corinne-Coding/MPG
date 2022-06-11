import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

// Function
import sortByNames from '../utils/functions/sortByNames';
import sortByNumbers from '../utils/functions/sortByNumbers';
import sortByPosition from '../utils/functions/sortByPosition';

const SearchInput = ({
  activeButtonName,
  activePositionButtonName,
  setDataFunction,
  handleInputValueFunction,
  placeholder,
  data,
  value,
}) => {
  // Function to update players data if input field is filled
  const updateData = text => {
    handleInputValueFunction(text);

    let tab = [];

    if (data) {
      for (const element of data) {
        if (element.lastName?.includes(text)) {
          tab.push(element);
        }
      }

      if (
        activeButtonName === 'sort-name-asc' ||
        activeButtonName === 'sort-name-desc'
      ) {
        tab = sortByNames(tab, ['lastName'], activeButtonName);
      }

      if (
        activeButtonName === 'sort-num-asc' ||
        activeButtonName === 'sort-num-desc'
      ) {
        tab = sortByNumbers(tab, ['stats', 'averageRating'], activeButtonName);
      }

      if (
        activeButtonName === 'sort-goal-asc' ||
        activeButtonName === 'sort-goal-desc'
      ) {
        tab = sortByNumbers(tab, ['stats', 'totalGoals'], activeButtonName);
      }

      if (activePositionButtonName && activePositionButtonName !== 'all') {
        tab = sortByPosition(tab, ['ultraPosition'], activePositionButtonName);
      }

      setDataFunction(tab);
      return;
    }

    setDataFunction(null);
  };

  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={text => updateData(text)}
      value={value}
    />
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input: {
    marginLeft: 5,
    width: '80%',
    marginRight: 20,
    marginLeft: 10,
  },
});
