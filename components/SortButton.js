import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// Colors
import colors from '../utils/colors';

// Components
import VectorIcons from '../components/VectorIcon';

// Function
import sortByNames from '../utils/functions/sortByNames';
import sortByNumbers from '../utils/functions/sortByNumbers';
import sortByPosition from '../utils/functions/sortByPosition';

/**
 *
 * @param {*} param0
 * @returns
 */
const SortButton = ({
  activeButtonName,
  activePositionButtonName,
  buttonName,
  buttonPositionName,
  data,
  iconColor,
  iconName,
  iconSize,
  iconType,
  inputValue,
  setActiveButtomName,
  setActivePositionButtomName,
  setDataFunction,
  title,
}) => {
  // Function to sort or filter data
  const handleData = () => {
    buttonName && setActiveButtomName(buttonName);
    buttonPositionName && setActivePositionButtomName(buttonPositionName);

    let newData = null;

    let tab = [];
    if (inputValue) {
      for (const element of data) {
        if (element.lastName?.includes(inputValue)) {
          tab.push(element);
        }
      }
      newData = tab;
    }

    if (buttonPositionName === 'all') {
      newData = data;
    }

    if (
      (buttonPositionName === 'A' ||
        activePositionButtonName === 'A' ||
        buttonPositionName === 'D' ||
        activePositionButtonName === 'D' ||
        buttonPositionName === 'G' ||
        activePositionButtonName === 'G' ||
        buttonPositionName === 'L' ||
        activePositionButtonName === 'L' ||
        buttonPositionName === 'MD' ||
        activePositionButtonName === 'MD' ||
        buttonPositionName === 'MO' ||
        activePositionButtonName === 'MO') &&
      buttonPositionName !== 'all'
    ) {
      newData = sortByPosition(
        newData ? newData : data,
        ['ultraPosition'],
        buttonPositionName ? buttonPositionName : activePositionButtonName,
      );
    }

    if (
      buttonName === 'sort-name-asc' ||
      buttonName === 'sort-name-desc' ||
      activeButtonName === 'sort-name-asc' ||
      activeButtonName === 'sort-name-desc'
    ) {
      newData = sortByNames(
        newData ? newData : data,
        ['lastName'],
        buttonName ? buttonName : activeButtonName,
      );
    }

    if (
      buttonName === 'sort-num-asc' ||
      buttonName === 'sort-num-desc' ||
      activeButtonName === 'sort-num-asc' ||
      activeButtonName === 'sort-num-desc'
    ) {
      newData = sortByNumbers(
        newData ? newData : data,
        ['stats', 'averageRating'],
        buttonName ? buttonName : activeButtonName,
      );
    }

    if (
      buttonName === 'sort-goal-asc' ||
      buttonName === 'sort-goal-desc' ||
      activeButtonName === 'sort-goal-asc' ||
      activeButtonName === 'sort-goal-desc'
    ) {
      newData = sortByNumbers(
        newData ? newData : data,
        ['stats', 'totalGoals'],
        buttonName ? buttonName : activeButtonName,
      );
    }

    setDataFunction(newData);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleData}
      style={[
        styles.button,
        (buttonName === activeButtonName ||
          buttonPositionName === activePositionButtonName) && {
          backgroundColor: colors.blueMPG,
        },
      ]}>
      {iconName && (
        <VectorIcons
          color={
            buttonName === activeButtonName ||
            buttonPositionName === activePositionButtonName
              ? 'white'
              : iconColor
          }
          name={iconName}
          size={iconSize}
          type={iconType}
        />
      )}
      <Text
        style={[
          styles.text,
          iconName ? {marginLeft: 5} : {marginLeft: 0},
          (buttonName === activeButtonName ||
            buttonPositionName === activePositionButtonName) && {
            color: 'white',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SortButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  text: {
    fontWeight: 'bold',
    color: colors.greyMPG,
  },
});
