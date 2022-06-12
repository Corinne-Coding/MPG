import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Utils
import colors from '../utils/colors';

const InfoLine = ({text, title}) => {
  return (
    <View style={styles.lineInfo}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default InfoLine;

const styles = StyleSheet.create({
  lineInfo: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  title: {
    color: colors.blackMPG,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5,
  },
  text: {
    color: colors.blueMPG,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
