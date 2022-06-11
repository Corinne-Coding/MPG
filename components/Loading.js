import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

// Colors
import colors from '../utils/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.greenMPG} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreyMPG,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
