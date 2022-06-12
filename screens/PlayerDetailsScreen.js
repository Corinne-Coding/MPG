import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

// Components
import InfoLine from '../components/InfoLine';
import Loading from '../components/Loading';
import MatchCard from '../components/MatchCard';

// Utils
import getPositionName from '../utils/functions/getPositionName';
import getRoundNumber from '../utils/functions/getRoundNumber';
import colors from '../utils/colors';

const PlayerDetailsScreen = ({route}) => {
  const [playerData, setPlayerData] = useState(null);
  const [clubsData, setClubsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const playerInfos = route.params.item;

  const fetchData = async () => {
    try {
      const requests = [
        `https://api.mpg.football/api/data/championship-player-stats/${playerInfos.id}/2021`,
        `https://api.mpg.football/api/data/championship-clubs`,
      ];

      const [responseRequest1, responseRequest2] = await Promise.all([
        axios.get(requests[0]),
        axios.get(requests[1]),
      ]);

      // Get player data details
      if (responseRequest1.data) {
        setPlayerData(
          Object.values(responseRequest1.data.championships['1'].clubs),
        );
      }
      // Get clubs data
      if (responseRequest2.data.championshipClubs) {
        setClubsData(responseRequest2.data.championshipClubs);
      }

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <Loading />
  ) : !playerData ? (
    <Error reloadScreen={fetchData} />
  ) : (
    <ScrollView style={styles.container}>
      <InfoLine
        text={`${playerInfos.lastName} ${playerInfos.firstName}`}
        title="Nom"
      />
      <InfoLine
        text={getPositionName(playerInfos.ultraPosition)}
        title="Position"
      />
      <InfoLine
        text={`${
          clubsData[playerInfos.clubId].name['fr-FR']
            ? clubsData[playerInfos.clubId].name['fr-FR']
            : '--'
        } - ${
          clubsData[playerInfos.clubId].shortName
            ? clubsData[playerInfos.clubId].shortName
            : '--'
        }`}
        title="Club"
      />
      <InfoLine
        text={getRoundNumber(playerInfos.stats?.averageRating)}
        title="Note"
      />
      <InfoLine
        text={
          playerInfos.stats?.totalGoals ? playerInfos.stats?.totalGoals : '--'
        }
        title="Nombre de buts"
      />
      <InfoLine
        text={
          playerInfos.stats?.totalMatches
            ? playerInfos.stats?.totalMatches
            : '--'
        }
        title="Nombre de matchs"
      />

      <Text style={styles.title}>Championnat</Text>

      {playerData[0].matches.map(match => {
        return (
          <MatchCard
            clubId={playerInfos.clubId}
            clubsData={clubsData}
            key={`${match.id}-${match.gameWeekNumber}`}
            match={match}
          />
        );
      })}
    </ScrollView>
  );
};

export default PlayerDetailsScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
    color: colors.blackMPG,
  },
});
