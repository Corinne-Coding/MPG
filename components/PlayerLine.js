import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Utils
import colors from '../utils/colors';
import getPositionCode from '../utils/functions/getPositionCode';
import getRoundNumber from '../utils/functions/getRoundNumber';

const PlayerLine = ({item}) => {
  const navigation = useNavigation();

  const playerLineComponent = useMemo(() => {
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={() => navigation.navigate('Stats', {item: item})}>
        <>
          <View style={styles.nameView}>
            <Text style={styles.name} numberOfLines={1}>
              {item.lastName} {item.firstName}
            </Text>
          </View>

          <View style={styles.detailsView}>
            <Text style={styles.text}>
              {getRoundNumber(item.stats?.averageRating)}
            </Text>
          </View>

          <View style={styles.detailsView}>
            <Text style={styles.text}>
              {item.stats?.totalGoals === 0 || item.stats?.totalGoals
                ? item.stats.totalGoals
                : '--'}
            </Text>
          </View>

          <View style={styles.detailsView}>
            <Text style={styles.text}>
              {getPositionCode(item.ultraPosition)}
            </Text>
          </View>
        </>
      </TouchableHighlight>
    );
  }, [item]);

  return playerLineComponent;
};

export default PlayerLine;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.greyMPG,
    borderBottomWidth: 0.5,
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  nameView: {
    width: '40%',
  },
  detailsView: {
    width: '20%',
  },
  name: {
    fontSize: 14,
    color: colors.blueMPG,
  },
  text: {
    textAlign: 'center',
  },
});
