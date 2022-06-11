import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// Colors
import colors from '../utils/colors';

const ClubCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {item.name['en-GB']} - {item.shortName}
      </Text>

      <Image
        source={
          item.defaultJerseyUrl
            ? {uri: item.defaultJerseyUrl}
            : require('../utils/images/image-not-available.jpeg')
        }
        style={styles.image}
      />
    </View>
  );
};

export default ClubCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 30,
    borderRadius: 10,
    backgroundColor: colors.bgGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.blueMPG,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    height: 150,
    width: 150,
  },
});
