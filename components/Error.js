import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Colors
import colors from '../utils/colors';

// Icon
import RefreshIcon from 'react-native-vector-icons/FontAwesome';

const Error = ({reloadScreen}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../utils/images/whoops.jpeg')}
        style={styles.img}
      />

      <View style={styles.texts}>
        <Text style={styles.text}>Sorry, an error occurred !</Text>
        <Text style={styles.text}>Please, try to refresh the app.</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={reloadScreen}>
        <RefreshIcon name="refresh" size={30} color={colors.greyMPG} />
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGreyMPG,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: '80%',
    height: '50%',
    resizeMode: 'cover',
  },
  texts: {
    paddingTop: 20,
    alignItems: 'center',
  },
  text: {
    lineHeight: 24,
    color: colors.blackMPG,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
  },
});
