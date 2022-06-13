import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Utils
import colors from '../utils/colors';

const MatchCard = ({clubId, clubsData, match}) => {
  return clubsData[match.away.clubId].name['fr-FR'] &&
    clubsData[match.home.clubId].name['fr-FR'] ? (
    <View style={styles.container}>
      <View style={styles.line}>
        {/* away */}
        <View style={styles.column1}>
          <Text
            style={[
              styles.text,
              clubId === match.away.clubId && {color: colors.blueMPG},
            ]}>{`${clubsData[match.away.clubId].name['fr-FR']}`}</Text>
        </View>
        {/* vs */}
        <View style={styles.column2}>
          <Text style={[styles.text, styles.vs]}>{'VS'}</Text>
        </View>
        {/* home */}
        <View style={styles.column3}>
          <Text
            style={[
              styles.text,
              clubId === match.home.clubId && {color: colors.blueMPG},
            ]}>{`${clubsData[match.home.clubId].name['fr-FR']}`}</Text>
        </View>
      </View>

      <View style={styles.line}>
        {/* away */}
        <View style={styles.column1}>
          <Text
            style={[
              styles.text,
              clubId === match.away.clubId && {color: colors.blueMPG},
            ]}>{`${match.away.score ? match.away.score : '--'}`}</Text>
        </View>
        {/*  */}
        <View style={styles.column2}></View>
        {/* home */}
        <View style={styles.column3}>
          <Text
            style={[
              styles.text,
              clubId === match.home.clubId && {color: colors.blueMPG},
            ]}>{`${match.home.score ? match.home.score : '--'}`}</Text>
        </View>
      </View>
    </View>
  ) : (
    <Text style={styles.noMatchText}>Pas de match</Text>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.greyMPG,
    borderWidth: 1,
    marginHorizontal: 30,
    marginBottom: 30,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: colors.bgGrey,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  column1: {
    width: '45%',
    alignItems: 'flex-end',
  },
  column2: {
    width: '10%',
    alignItems: 'center',
  },
  column3: {
    width: '45%',
    alignItems: 'flex-start',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.blackMPG,
  },
  vs: {fontWeight: 'normal'},
  noMatchText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});
