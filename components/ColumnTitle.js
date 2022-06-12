import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Utils
import colors from '../utils/colors';

const ColumnTitle = ({title, width}) => {
  return (
    <View style={width === 'large' ? {width: '40%'} : {width: '20%'}}>
      <Text
        style={[
          styles.text,
          width === 'large' ? {textAlign: 'left'} : {textAlign: 'center'},
        ]}>
        {title}
      </Text>
    </View>
  );
};

export default ColumnTitle;

const styles = StyleSheet.create({
  text: {
    color: colors.greyMPG,
  },
});
